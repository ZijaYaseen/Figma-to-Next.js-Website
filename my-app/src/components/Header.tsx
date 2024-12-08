'use client';

import React, { useState } from 'react';
import { Nav } from '@/data/data';
import { CiSearch, CiHeart, CiUser, CiShoppingCart } from 'react-icons/ci';
import { FaBars } from 'react-icons/fa'; // Hamburger icon
import { MdClose } from 'react-icons/md'; // Close icon from react-icons/md
import Link from 'next/link';

const Header = () => {
  // State to manage the menu open or close status
  const [menuOpen, setMenuOpen] = useState(false);

    // Function to close the menu when a link is clicked
    const handleLinkClick = () => {
      setMenuOpen(false); // Close the menu on link click
    };

  return (
    <nav className="z-50 fixed top-0 left-0 flex items-center w-full md:h-[90px] h-[50px] shadow-lg bg-white">
      {/* Logo or Brand Name */}
      <div className="flex-1 pl-5">
        {/* logo */} 
      </div>

      {/* Nav Links for Desktop and Large Screens */}
      <div className="relative hidden md:block">
        <ul className="flex space-x-14 justify-center text-base font-medium font-poppins">
          {Nav.map((item) => (
            <Link href={item.Link} key={item.name}>
              <li>{item.name}</li>
            </Link>
          ))}
        </ul>
      </div>

      {/* Icons for Desktop and Larger Screens */}
      <div className="ml-[270px] hidden md:flex space-x-10 mr-10">
        <CiUser size={28} />
        <CiSearch size={28} />
        <CiHeart size={28} />
        <CiShoppingCart size={28} />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="relative md:hidden flex items-center pr-5">
        {/* Hamburger or Close icon */}
        <div className="text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <MdClose size={28} /> // Using MdClose for the close icon
          ) : (
            <FaBars size={28} /> // Hamburger icon when menu is closed
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-12 left-0 w-full bg-white shadow-lg md:hidden">
          <ul className="flex flex-col space-y-5 text-start p-8">
            {Nav.map((item) => (
              <Link href={item.Link} key={item.name}>
                <li onClick={handleLinkClick}>{item.name}</li> {/* Close menu on link click */}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
