"use client";

import React, { useState } from "react";
import { UseAppDispatch } from "@/redux/hooks";
import { performSearch } from "@/redux/Search/searchActions";
import { useRouter } from "next/navigation";
import { MdClose } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const SearchBar: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = UseAppDispatch();
  const router = useRouter(); 
  console.log(router);
  

  const handleSearch = () => {
    if (searchTerm.trim() === "") {
      alert("Please enter a search term!");
      return;
    }
    dispatch(performSearch(searchTerm));
    router.push("/Shop"); // Redirect user to the Shop page
  };

  return (
    <div>
      <div className="block z-50 cursor-pointer">
        {searchOpen ? (
          <MdClose
            size={28}
            className="cursor-pointer w-6 h-6 lg:w-8 lg:h-8"
            onClick={() => setSearchOpen(false)}
          />
        ) : (
          <CiSearch
            size={28}
            className="cursor-pointer w-7 h-7 lg:w-8 lg:h-8"
            onClick={() => setSearchOpen(true)}
          />
        )}
      </div>
      {searchOpen && (
        <div className="fixed z-10 md:top-24 top-16 left-4 right-4 md:right-8 md:left-8  max-w-[1440vw]">
          <div className="flex items-center gap-2 w-full">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products..."
            className="border px-4 py-2 md:py-5 rounded w-full focus:outline-none"
          />
          <button onClick={handleSearch} className="px-4 md:px-8 py-2 md:py-5 bg-[#7e6b2f] hover:bg-[#b1a067] text-white rounded">
            Search
          </button>
        </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
