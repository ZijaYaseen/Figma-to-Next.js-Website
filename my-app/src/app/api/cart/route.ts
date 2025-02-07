import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { client } from "@/sanity/lib/client";
import { nanoid } from "nanoid";

// Convert the secret key from your environment variable
const SECRET_KEY = new TextEncoder().encode(process.env.JWT_SECRET as string);

export async function POST(req: NextRequest) {
  try {
    const { productId, quantity } = await req.json();

    // 1. Check if the request comes from a logged-in user by verifying the token.
    const token = req.cookies.get("token")?.value;
    let userId: string | null = null;
    let guestId = req.cookies.get("guestId")?.value; // Retrieve guestId from cookies

    if (token) {
      try {
        const { payload } = await jwtVerify(token, SECRET_KEY);
        userId = (payload as { _id: string })._id;
      } catch (err) {
        console.warn("Invalid Token, proceeding as guest user.");
      }
    }

    // If not logged in and no guestId exists, generate one.
    if (!userId && !guestId) {
      guestId = nanoid();
    }

    // 2. Fetch the product's price from Sanity using the product reference.
    const productQuery = `*[_type == "product" && _id == $productId][0]{ price }`;
    const product = await client.fetch(productQuery, { productId });
    if (!product) {
      return NextResponse.json(
        { success: false, error: "Product not found" },
        { status: 404 }
      );
    }
    const productPrice = product.price;

    // 3. Determine which cart to update/fetch.
    let query = "";
    let queryParams: { userId?: string; guestId?: string } = {};

    if (userId) {
      // For logged-in users, query by user reference.
      query = `*[_type == "cart" && user._ref == $userId][0]`;
      queryParams = { userId };
    } else if (guestId) {
      // For guest users, query by guestId.
      query = `*[_type == "cart" && guestId == $guestId][0]`;
      queryParams = { guestId: guestId! };
    }

    const existingCart = await client.fetch(query, queryParams);

    if (existingCart) {
      // 4. Check if the product is already in the cart's items array.
      const productIndex = existingCart.items.findIndex(
        (item: any) => item.product._ref === productId
      );

      let updatedItems = [...existingCart.items];

      if (productIndex > -1) {
        // If the product is already there, update the quantity.
        updatedItems[productIndex].quantity += quantity;
        // Update subtotal based on new quantity and product price.
        updatedItems[productIndex].subtotal =
          updatedItems[productIndex].quantity * productPrice;
      } else {
        // Otherwise, add a new cartItem (with a unique _key) including the calculated subtotal.
        updatedItems.push({
          _key: nanoid(),
          product: { _type: "reference", _ref: productId },
          quantity,
          subtotal: quantity * productPrice,
        });
      }

      // 5. Update the existing cart document in Sanity.
      await client.patch(existingCart._id).set({ items: updatedItems }).commit();

      const res = NextResponse.json({
        success: true,
        message: "Cart updated successfully!",
      });
      // For guest users, ensure the guestId cookie is set.
      if (!userId && guestId) {
        res.cookies.set("guestId", guestId, { path: "/" });
      }
      return res;
    } else {
      // 6. No cart exists—create a new cart document.
      const newCart: any = {
        _type: "cart",
        items: [
          {
            _key: nanoid(),
            product: { _type: "reference", _ref: productId },
            quantity,
            subtotal: quantity * productPrice,
          },
        ],
      };

      if (userId) {
        newCart.user = { _type: "reference", _ref: userId };
      } else {
        newCart.guestId = guestId;
      }

      const createdCart = await client.create(newCart);

      const res = NextResponse.json({
        success: true,
        message: "Cart created successfully!",
        cart: createdCart,
      });
      if (!userId && guestId) {
        res.cookies.set("guestId", guestId, { path: "/" });
      }
      return res;
    }
  } catch (error) {
    console.error("Cart Error:", error);
    return NextResponse.json({ success: false, error: "Failed to update cart" });
  }
}

//  GET request --------------------------------------------------------------------------------------------------------

export async function GET(req: NextRequest) {
  try {
    // 1. Get the token from cookies.
    const token = req.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json(
        { success: false, error: "User not logged in" },
        { status: 401 }
      );
    }

    // 2. Verify token and extract the user ID.
    let userId: string | null = null;
    try {
      const { payload } = await jwtVerify(token, SECRET_KEY);
      userId = (payload as { _id: string })._id;
    } catch (err) {
      console.warn("Invalid token");
      return NextResponse.json(
        { success: false, error: "Invalid token" },
        { status: 401 }
      );
    }

    // 3. Query Sanity for the cart document that belongs to this user,
    //    including a projection that populates product details.
    const query = `*[_type == "cart" && user._ref == $userId][0]{
      ...,
      items[]{
        ...,
        product->{
          _id,
          name,
          imagePath,
          price
        }
      }
    }`;
    const cart = await client.fetch(query, { userId });

    // 4. Return the cart data (if no cart is found, return an empty cart).
    return NextResponse.json({
      success: true,
      cart: cart || { items: [] },
    });
  } catch (error: any) {
    console.error("Cart Fetch Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch cart" },
      { status: 500 }
    );
  }
}

// DELETE request --------------------------------------------------------------------------------------------------------

export async function DELETE(req: NextRequest) {
  try {
    // Expect the DELETE request to have a JSON body containing the productId to remove.
    const { productId } = await req.json();

    if (!productId) {
      return NextResponse.json(
        { success: false, error: "Missing productId" },
        { status: 400 }
      );
    }

    // 1. Token check: determine if user is logged in or is a guest.
    const token = req.cookies.get("token")?.value;
    let userId: string | null = null;
    let guestId = req.cookies.get("guestId")?.value;

    if (token) {
      try {
        const { payload } = await jwtVerify(token, SECRET_KEY);
        userId = (payload as { _id: string })._id;
      } catch (err) {
        console.warn("Invalid Token, proceeding as guest user.");
      }
    }

    // 2. Build query based on user or guest status.
    let query = "";
    let queryParams: { userId?: string; guestId?: string } = {};
    if (userId) {
      query = `*[_type == "cart" && user._ref == $userId][0]`;
      queryParams = { userId };
    } else if (guestId) {
      query = `*[_type == "cart" && guestId == $guestId][0]`;
      queryParams = { guestId };
    } else {
      // If no identifier is found, we return a 401 response.
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    // 3. Fetch the existing cart from Sanity.
    const existingCart = await client.fetch(query, queryParams);

    if (!existingCart) {
      return NextResponse.json(
        { success: false, error: "Cart not found" },
        { status: 404 }
      );
    }

    // 4. Remove the product from the items array.
    const filteredItems = existingCart.items.filter(
      (item: any) => item.product._ref !== productId
    );

    // Update the items array in the cart document.
    await client.patch(existingCart._id).set({ items: filteredItems }).commit();

    return NextResponse.json({
      success: true,
      message: "Product removed from cart successfully!",
    });
  } catch (error) {
    console.error("Cart DELETE Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to remove product from cart" },
      { status: 500 }
    );
  }
}
