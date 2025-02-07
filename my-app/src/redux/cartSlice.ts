import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the type for the product that is nested in a cart item.
interface Product {
  _id: string;
  name: string;
  imagePath: string;
  price: number;
}

// Define the CartItem type to match your API response.
export interface CartItem {
  _key: string;         // Unique key (from Sanity or generated via nanoid)
  product: Product;     // Populated product details
  quantity: number;
  subtotal: number;     // Calculated as quantity * product.price
}

// Define the state shape.
interface CartState {
  items: CartItem[];
}

// Initialize state.
const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // addToCart: if item exists (by product._id) then update quantity and recalc subtotal.
    addToCart: (state, action: PayloadAction<any>) => {
      // Normalize the payload.
      // If action.payload.product is not defined, assume the payload is using the old flat structure.
      let newItem: CartItem;
      if (!action.payload.product) {
        newItem = {
          _key: action.payload.id, // using id as key; ideally you have a unique key
          product: {
            _id: action.payload.id,
            name: action.payload.name,
            imagePath: action.payload.imagePath,
            price: action.payload.price,
          },
          quantity: action.payload.quantity,
          subtotal: action.payload.quantity * action.payload.price,
        };
      } else {
        newItem = action.payload;
      }
      
      // Find an existing item with the same product._id.
      const existingItem = state.items.find(
        (item) => item.product._id === newItem.product._id
      );
      if (existingItem) {
        existingItem.quantity += newItem.quantity;
        existingItem.subtotal = existingItem.quantity * existingItem.product.price;
      } else {
        state.items.push(newItem);
      }
    },

    // removeFromCart: remove an item by the product's _id.
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => item.product._id !== action.payload
      );
    },

    // clearCart: clear the entire cart.
    clearCart: (state) => {
      state.items = [];
    },

    // setCartItems: replace the entire items array.
    setCartItems: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, setCartItems } = cartSlice.actions;
export default cartSlice.reducer;
