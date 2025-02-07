"use client";

import React, { useEffect, useState } from "react";
import { Nav, NavMbl } from "@/data";
import {
  CiHeart,
  CiUser,
  CiShoppingCart,
} from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx"; // Hamburger icon
import { MdClose } from "react-icons/md"; // Close icon from react-icons/md
import Link from "next/link";
import SearchBar from "./SearchBar";
import { useRouter } from "next/navigation";
import { UseAppSelector } from "@/redux/hooks";

const Header = (props: { bgColor: string, shadow: string }) => {
  // State to manage the menu open or close status
  const [NavmenuOpen, NavsetMenuOpen] = useState(false);

  // Function to close the menu when a link is clicked
  const handleLinkClick = () => {
    NavsetMenuOpen(false); // Close the menu on link click
  };

  const [token, setToken] = useState<string | null>(null)
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      setToken(storedToken)
    }
  }, [])

  const handleLoginClick = () => {
    handleLinkClick()
    if (token) {
      router.push("/Dashboard");
    }

    else {
      router.push("/Account/Login")
    }
  };

  const cartItems = UseAppSelector((state) => state.cart.items);

  return (
    <nav className={`fixed z-10 top-0 left-0 flex items-center w-full md:h-[90px] max-w-[1920px] h-[60px] ${props.shadow} ${props.bgColor}`}>

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
      <div className="absolute flex right-5 md:static space-x-3 md:space-x-10 md:mr-10 z-50 ">
        <div onClick={handleLoginClick} className="cursor-pointer">
          <CiUser size={28} className="w-7 h-7 lg:w-8 lg:h-8 hidden md:block" />
        </div>
        <SearchBar />
        <Link href={"/Wishlist"}>
        <CiHeart size={28} className="w-7 h-7 lg:w-8 lg:h-8" />
        </Link>

        {/* Shopping Cart Icon */}
        <Link href={"/Cart"}>
          <div className="relative">
            <CiShoppingCart
              size={28}
              className="cursor-pointer w-7 h-7 lg:w-8 lg:h-8"
            />
            { cartItems.length > 0 && <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {cartItems.length}
            </div>}
          </div>
        </Link>
      </div>



      {/* Hamburger Menu for Mobile */}
      <div className="relative flex items-center md:hidden w-full z-40">

        {/* Hamburger or Close icon */}
        <div
          className="text-2xl cursor-pointer mx-4"
          onClick={() => {
            NavsetMenuOpen(!NavmenuOpen);  // Toggle Nav menu state
          }}
        >
          <RxHamburgerMenu size={20} className="w-[22px] h-6 lg:w-8 lg:h-8" />

        </div>

        {/* Logo */}
        <div className="text-black lg:px-14">
          <h1 className="font-semibold lg:text-2xl text-xl">EcoFurnish</h1>
        </div>

      </div>

      {/* Mobile Menu */}
      {NavmenuOpen && (
        <div className={`absolute top-0 left-0 w-[75%] h-screen ${props.bgColor} shadow-lg md:hidden z-[100]`}>

          {/* Logo */}
          <div className="text-black lg:px-14 font-serif flex justify-between p-4 " onClick={() => {
            NavsetMenuOpen(!NavmenuOpen);  // Toggle Nav menu state

          }}>
            <h1 className="font-semibold lg:text-2xl text-xl m-2">EcoFurnish</h1>
            <MdClose size={20} className="w-[22px] h-6 lg:w-8 lg:h-8 cursor-pointer m-2 border border-gray-400 rounded-md" />
          </div>


          <ul className="flex flex-col space-y-7 text-start p-8 ">
            {NavMbl.map((item) => (
              <Link href={item.Link} key={item.name}>
                <li className="border-b-2 border-black" onClick={handleLinkClick}>{item.name}</li>
                {/* Close menu on link click */}
              </Link>
            ))}
          </ul>

          <div className="absolute bottom-0 bg-black w-full ">
            <div onClick={handleLoginClick} className="cursor-pointer flex p-6 gap-1 pb-14">
              <CiUser size={28} className="w-6 h-6" color="white" />
              <p className="text-white">Account</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
