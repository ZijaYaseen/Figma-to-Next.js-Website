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

const Header = () => {
  // State to manage the menu open or close status
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to close the menu when a link is clicked
  const handleLinkClick = () => {
    setMenuOpen(false); // Close the menu on link click
  };

  return (
    <nav className="z-50 fixed top-0 left-0 flex items-center w-full md:h-[90px] max-w-[1440vw] h-[60px] shadow-md bg-white">
      {/* Nav Links for Desktop and Large Screens */}
      <div className="hidden md:block flex-1">
        <ul className="flex space-x-14 justify-center text-base font-medium font-poppins md:ml-20">
          {Nav.map((item) => (
            <Link href={item.Link} key={item.name}>
              <li>{item.name}</li>
            </Link>
          ))}
        </ul>
      </div>

      {/* Icons for Desktop and Larger Screens */}
      <div className="hidden md:flex space-x-10 mr-10">
        <CiUser size={28} />
        <CiSearch size={28} />
        <CiHeart size={28} />
        <CiShoppingCart size={28} />
      </div>

      {/* Icons for Mobile Center Alignment */}
      <div className="absolute left-1/2 -translate-x-1/2 flex space-x-6 md:hidden">
        <CiUser size={24} />
        <CiSearch size={24} />
        <CiHeart size={24} />
        <CiShoppingCart size={24} />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="relative flex items-center md:hidden w-full">
  {/* Hamburger or Close icon */}
  <div
    className="text-2xl cursor-pointer absolute right-5"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    {menuOpen ? (
      <MdClose size={28} /> // Using MdClose for the close icon
    ) : (
      <RxHamburgerMenu size={25} /> // Hamburger icon when menu is closed
    )}
  </div>
</div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-12 left-0 w-full bg-white shadow-lg md:hidden">
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
