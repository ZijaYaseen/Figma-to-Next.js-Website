"use client";

import React, { useState } from "react";
import { Nav } from "@/data";
import {
  CiSearch,
  CiHeart,
  CiUser,
  CiShoppingCart,
} from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx"; // Hamburger icon
import { MdClose } from "react-icons/md"; // Close icon from react-icons/md
import Link from "next/link";
import Image from "next/image";
import { UseAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/redux/cartSlice";

const Header = (props:{bgColor:string, shadow:string}) => {
  // State to manage the menu open or close status
  const [NavmenuOpen, NavsetMenuOpen] = useState(false);

  // Function to close the menu when a link is clicked
  const handleLinkClick = () => {
    NavsetMenuOpen(false); // Close the menu on link click
  };

  const [CartmenuOpen, CartsetMenuOpen] = useState(false);

  // Function to close the menu when a link is clicked
  const CarthandleLinkClick = () => {
    CartsetMenuOpen(false); // Close the menu on link click
  };
    
  //  add to cart functionality
   const cartItems = UseAppSelector((state:RootState) =>
      state.cart.items
  );

  const dispatch = useDispatch()

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  
  return (
    <nav className={`z-50 fixed top-0 left-0 flex items-center w-full md:h-[90px] max-w-[1440vw] h-[60px] ${props.shadow} ${props.bgColor}`}>

 {/* Logo */}
 <div className="text-black lg:px-14 font-serif px-2 hidden lg:block">
        <h1 className="font-semibold lg:text-2xl text-xl">EcoFurnish</h1>
      </div>

      {/* Nav Links for Desktop and Large Screens */}
      <div className="hidden md:block flex-1">
        <ul className="flex space-x-14 justify-center text-base font-medium font-poppins md:ml-12">
          {Nav.map((item) => (
            <Link href={item.Link} key={item.name}>
              <li>{item.name}</li>
            </Link>
          ))}
        </ul>
      </div>

     {/* Unified Icons for All Screens */}
<div className="absolute flex right-5 md:static space-x-3 md:space-x-10 md:mr-10">
  <Link href={"/Account"}>
    <CiUser size={28} className="w-6 h-6 lg:w-8 lg:h-8" />
  </Link>
  <CiSearch size={28} className="w-6 h-6 lg:w-8 lg:h-8"/>
  <CiHeart size={28} className="w-6 h-6 lg:w-8 lg:h-8"/>

{/* ShoppingCart icon... */}
<div className="block z-50 cursor-pointer">
  {CartmenuOpen ? (
    // Close Button
    <MdClose
      size={28}
      className="cursor-pointer w-6 h-6 lg:w-8 lg:h-8"
      onClick={() => {
        console.log("Cart Closed!");
        CartsetMenuOpen(false); // Close the cart
      }}
    />
  ) : (
    // Shopping Cart Icon
    <CiShoppingCart
  size={28}
  className="cursor-pointer w-6 h-6 lg:w-8 lg:h-8"
  onClick={() => {
    console.log("Cart Opened!");
    CartsetMenuOpen(true); // Open the cart
    handleLinkClick(); // Call handleLinkClick
  }}
/>
  )}
</div>

  
</div>
{CartmenuOpen && (
        <div className="absolute top-14 md:top-0 md:w-[30%] right-0 w-[75%] h-screen bg-white shadow-lg">
          <div className="flex flex-col space-y-5 text-start md:p-8 p-4">
          <div className="relative">
            <h1 className="p-3 border-b border-[#D9D9D9] font-semibold md:text-2xl text-lg">Shopping Cart</h1>
            
            </div>
            {cartItems.length === 0 ? (
      <div className='text-center items-center flex justify-center lg:text-2xl text-lg font-bold h-[400px]'>Your cart is empty.</div>
    ) : (
      <div className="flex flex-col gap-6">
  {cartItems.map((product, index) => (
    <Link href={`Shop/${product.id}`} onClick={()=> CarthandleLinkClick()}>
    <div key={index} className="flex flex-col gap-4 border-b pb-4">
      {/* Product Details */}
      <div className="flex items-center gap-4">
        <Image
          src={product.imagePath}
          alt="Cart"
          width={100}
          height={100}
          className="bg-[#FBEBB5] md:w-[76px] w-[50px] md:h-[80px] h-[50px] md:rounded-[10px] rounded-sm"
        />
        <div className="flex flex-col text-left gap-2">
          <p className="lg:text-lg text-sm font-semibold">{product.name}</p>
          <div className="flex items-center lg:gap-4 gap-1 text-xs">
            <p>Quantity: {product.quantity}</p>
            <MdClose size={12} />
            <span className="text-[#B88E2F] font-bold">${product.price}</span>
          </div>
        </div>
        <MdClose
          size={25}
          color="white"
          className="ml-auto bg-gray-400 w-6 h-[22px] border-4 border-gray-400 rounded-full cursor-pointer"
          onClick={() => handleRemove(product.id)}
        />
      </div>

      {/* Subtotal */}
      <div className="flex justify-between">
        <p className="text-sm font-medium">Subtotal</p>
        <p className="text-[#B88E2F] font-bold">
          ${product.price * product.quantity}
        </p>
      </div>
    </div>
    </Link>
  ))}
</div>

             )}

            <div className="absolute  bottom-14 right-2 md:left-10 left-2 flex gap-5 py-4 border-t border-[#D9D9D9]">
              <Link href={"/Cart"} className="w-36 h-10 flex justify-center items-center font-medium  text-base border border-black rounded-[18px] hover:text-white hover:bg-black" onClick={CarthandleLinkClick}>
              View Cart
              </Link>

              <Link href={"/Checkout"} className="w-36 h-10 justify-center items-center flex font-medium text-base border border-black rounded-[18px] hover:text-white hover:bg-black" onClick={CarthandleLinkClick}>
              Checkout
              </Link>
             </div>
          </div>
           
          </div>

      )}


      {/* Hamburger Menu for Mobile */}
      <div className="relative flex items-center md:hidden w-full">

  {/* Hamburger or Close icon */}
  <div
  className="text-2xl cursor-pointer mx-5"
  onClick={() => {
    NavsetMenuOpen(!NavmenuOpen);  // Toggle Nav menu state
    CarthandleLinkClick();         // Call the second function
  }}
>
    {NavmenuOpen ? (
      <MdClose size={28} className="w-6 h-6 lg:w-8 lg:h-8"/> // Using MdClose for the close icon
    ) : (
      <RxHamburgerMenu size={20} className="w-[22px] h-6 lg:w-8 lg:h-8"/> // Hamburger icon when menu is closed
    )}
  </div>
  {/* Logo */}
 <div className="text-black lg:px-14 font-serif ">
        <h1 className="font-semibold lg:text-2xl text-xl">EcoFurnish</h1>
      </div>
</div>

      {/* Mobile Menu */}
      {NavmenuOpen && (
        <div className={`absolute top-12 left-0 w-[75%] h-screen ${props.bgColor} shadow-lg md:hidden`}>
          <ul className="flex flex-col space-y-5 text-start p-8">
            {Nav.map((item) => (
              <Link href={item.Link} key={item.name}>
                <li onClick={handleLinkClick}>{item.name}</li>
                {/* Close menu on link click */}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
