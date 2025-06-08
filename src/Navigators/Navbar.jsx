import React, { useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { FaChevronDown } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import logo from "../assets/Cloudstry2-removebg-preview.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-8 py-3 flex items-center justify-between">
        {/* Logo with hover effect */}
        <div className="flex items-center">
          <img
            className="h-[40px] sm:h-20 w-auto transition-transform hover:scale-[1.02]"
            src={logo}
            alt="Logo"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          <div className="flex flex-col">
            <div className="flex flex-row items-center mb-3 gap-2">
              <div className="flex items-center gap-4  ">
                <Button
                  size="sm"
                  className="rounded-full bg-gradient-to-r text-sm from-blue-500 to-indigo-400 text-white font-semibold hover:shadow-md transition-all"
                >
                  Schedule a demo
                </Button>
                <Button
                  size="sm"
                  variant="outlined"
                  className="rounded-full text-sm border-gray-300 text-gray-700 hover:bg-gray-50 font-medium"
                >
                  Login
                </Button>
                <div className="text-sm text-gray-700 mx-2 font-medium ">
                  +91-1234567890
                </div>
                <div className="text-sm text-gray-700 mx-2 font-medium ">
                  hrsupport@Cloudstry.com
                </div>
              </div>
            </div>
            <div className="flex-row flex items-center gap-4">
              <Menu allowHover>
                <MenuHandler>
                  <Button
                    size="sm"
                    variant="text"
                    className="text-gray-700 hover:text-black text-sm font-medium flex items-center gap-1 py-2 rounded-full border border-zinc-800 bg-white hover:bg-slate-50 transition-colors px-3"
                  >
                    What we do{" "}
                    <FaChevronDown className="text-xs opacity-70 mt-1 mx-1 transition-transform" />
                  </Button>
                </MenuHandler>
                <MenuList className="p-2 rounded-xl shadow-lg z-50 w-40 mt-2 border border-gray-100 bg-white">
                  {/* <MenuItem className="rounded-lg hover:bg-gray-50 px-3 py-2 text-gray-700 flex items-center justify-between">
                
              </MenuItem>
              <MenuItem className="rounded-lg hover:bg-gray-50 px-3 py-2 text-gray-700 flex items-center justify-between">
                Service 2
              </MenuItem> */}

                  {/* Products dropdown - fixed alignment */}
                  <Menu allowHover placement="right-start" offset={10}>
                    <MenuHandler>
                      <MenuItem className="rounded-lg hover:bg-gray-50 gap-1 px-3 py-2 text-gray-700 flex items-center justify-between w-full">
                        <span>Products</span>
                        <BiChevronRight className="text-lg opacity-70 mr-2 transition-transform" />
                      </MenuItem>
                    </MenuHandler>
                    <MenuList className="p-2 rounded-xl shadow-lg z-50 w-48 border border-gray-100 bg-white ml-1">
                      <MenuItem className="rounded-lg hover:bg-gray-50 px-3 py-2 text-gray-700">
                        Digital Certificate
                      </MenuItem>
                      <MenuItem className="rounded-lg hover:bg-gray-50 px-3 py-2 text-gray-700">
                        Cattle Aadhar
                      </MenuItem>
                      <MenuItem className="rounded-lg hover:bg-gray-50 px-3 py-2 text-gray-700">
                        3PL Solut
                      </MenuItem>
                    </MenuList>
                  </Menu>
                  <Menu allowHover placement="right-start" offset={10}>
                    <MenuHandler>
                      <MenuItem className="rounded-lg hover:bg-gray-50 gap-1 px-3 py-2 text-gray-700 flex items-center justify-between w-full">
                        <span>Services</span>
                        <BiChevronRight className="text-lg opacity-70 mr-2 transition-transform" />
                      </MenuItem>
                    </MenuHandler>
                    <MenuList className="p-2 rounded-xl shadow-lg z-50 w-[250px]  border border-gray-100 bg-white ml-1">
                      <MenuItem className="rounded-lg hover:bg-gray-50 px-3 py-2 text-gray-700">
                        IT Strategy Consultancy
                      </MenuItem>
                      <MenuItem className="rounded-lg hover:bg-gray-50 px-3 py-2 text-gray-700">
                        Software Services/Staffing Solution
                      </MenuItem>
                    </MenuList>
                  </Menu>

                  {/* <MenuItem className="rounded-lg hover:bg-gray-50 px-3 py-2 text-gray-700 flex items-center justify-between">
                Service 3
              </MenuItem> */}
                </MenuList>
              </Menu>
              <Menu allowHover>
                <MenuHandler>
                  <Button
                    size="sm"
                    variant="text"
                    className="text-gray-700 hover:text-black text-md font-medium flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Industries
                    <FaChevronDown className="text-xs opacity-70 transition-transform" />
                  </Button>
                </MenuHandler>
                <MenuList className="p-2 rounded-xl shadow-lg z-50 w-40 mt-2 border border-gray-100 bg-white">
                  <MenuItem className="rounded-lg hover:bg-gray-50 px-3 py-2 text-gray-700 flex items-center justify-between">
                    Education
                  </MenuItem>
                  <MenuItem className="rounded-lg hover:bg-gray-50 px-3 py-2 text-gray-700 flex items-center justify-between">
                    Government
                  </MenuItem>
                  <MenuItem className="rounded-lg hover:bg-gray-50 px-3 py-2 text-gray-700 flex items-center justify-between">
                    Logistic
                  </MenuItem>
                </MenuList>
              </Menu>
              <Menu allowHover>
                <MenuHandler>
                  <Button
                    size="sm"
                    variant="text"
                    className="text-gray-700 hover:text-black text-md font-medium flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Resource
                    <FaChevronDown className="text-xs opacity-70 transition-transform" />
                  </Button>
                </MenuHandler>
                <MenuList className="p-2 rounded-xl shadow-lg z-50 w-40 mt-2 border border-gray-100 bg-white">
                  <MenuItem className="rounded-lg hover:bg-gray-50 px-3 py-2 text-gray-700 flex items-center justify-between">
                    Podcasts
                  </MenuItem>
                  <MenuItem className="rounded-lg hover:bg-gray-50 px-3 py-2 text-gray-700 flex items-center justify-between">
                    Demo Videos
                  </MenuItem>

                  <MenuItem className="rounded-lg hover:bg-gray-50 px-3 py-2 text-gray-700 flex items-center justify-between">
                    Testimonials
                  </MenuItem>
                </MenuList>
              </Menu>
              <Menu>
                <Button
                  // key={label}
                  size="sm"
                  variant="text"
                  className="text-gray-700 hover:text-black text-md font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Articles
                </Button>
              </Menu>
              <Menu>
                <Button
                  // key={label}
                  size="sm"
                  variant="text"
                  className="text-gray-700 hover:text-black text-md font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Pricing
                </Button>
              </Menu>
              <Menu>
                <Button
                  // key={label}
                  size="sm"
                  variant="text"
                  className="text-gray-700 hover:text-black text-md font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Contact Us
                </Button>
              </Menu>
            </div>
          </div>
          {/* Dropdown: What we do */}

          {/* Other navigation items */}
          {/* {["Industries", "Resources", "Articles", "Pricing", "Contact Us"].map(
            (label) => (
              <Button
                key={label}
                size="sm"
                variant="text"
                className="text-gray-700 hover:text-black font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {label}
              </Button>
            )
          )} */}

          {/* CTA Buttons */}
        </div>

        {/* Mobile Menu Button - Modernized */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 pb-4 pt-2">
          {[
            "What we do",
            "Industries",
            "Resources",
            "Articles",
            "Pricing",
            "Contact Us",
          ].map((label) => (
            <Button
              key={label}
              fullWidth
              size="sm"
              variant="text"
              className="mb-2 text-gray-700 hover:bg-gray-50 rounded-lg text-left justify-start"
            >
              {label}
            </Button>
          ))}
          <Button
            fullWidth
            size="sm"
            className="mb-2 bg-gradient-to-r from-pink-500 to-red-400 text-white rounded-full"
          >
            Schedule a demo
          </Button>
          <Button
            fullWidth
            size="sm"
            variant="outlined"
            className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full"
          >
            Login
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
