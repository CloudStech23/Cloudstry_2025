// components/DropdownMenu.jsx
import React from "react";
import { FaChevronRight } from "react-icons/fa";

const DropdownMenu = () => {
  return (
    <div className="absolute top-full left-0 mt-2 w-54 bg-white border border-gray-200 rounded shadow-md z-50">
      <div className="group relative px-4 py-2 hover:bg-gray-100 cursor-pointer">
        Products
        <FaChevronRight className="inline-block ml-2 text-xs" />
        {/* Nested Dropdown */}
        {/* <div className="absolute top-0 left-full mt-0 ml-1 w-48 bg-white border border-gray-200 rounded shadow-md opacity-0 group-hover:opacity-100 group-hover:block hidden group-hover:flex-col z-50">
          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Zys</div>
          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Abc</div>
        </div> */}
      </div>
      <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
        Solutions
      </div>
    </div>
  );
};

export default DropdownMenu;
