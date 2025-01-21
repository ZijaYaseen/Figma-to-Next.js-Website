'use client';

import { useState } from "react";
import { MdClose } from "react-icons/md"; // Close icon
import { CiSearch } from "react-icons/ci";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchOpen, setSearchOpen] = useState(false); // Toggle state for search overlay
  const [query, setQuery] = useState(""); // Search input state

  const handleSearch = () => {
    onSearch(query); // Pass query and filter to parent
  };

  return (
    <div className="max-w-[1440px]">
      {/* Search toggle icon */}
      <div className="relative flex items-center w-full">
        <div
          className="text-2xl cursor-pointer absolute"
          onClick={() => setSearchOpen(!searchOpen)}
        >
          {searchOpen ? (
            <MdClose size={28} /> // Close icon
          ) : (
            <CiSearch size={25} /> // Search icon
          )}
        </div>
      </div>

      {/* Search overlay */}
      {searchOpen && (
        <div className="absolute left-0 top-20 w-full h-screen">
          <div className="absolute w-full bg-white pt-10 pb-20">
            <div className="flex gap-2 w-[90%] mx-auto p-3 text-gray-600 border-b border-black">
              <CiSearch size={24} />
              {/* Input for search query */}
              <input
                type="text"
                name="search"
                placeholder="Search"
                className="focus:outline-none w-full"
                value={query}
                onChange={(e) => setQuery(e.target.value)} // Update query state
              />
              {/* Search button */}
              <button
                className="px-4 py-1 bg-white text-black rounded-lg border hover:text-white hover:bg-black border-black"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
