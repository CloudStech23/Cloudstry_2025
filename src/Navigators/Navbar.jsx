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
import {
  ButtonColor,
  HeadFontFamily1,
  HeadTextColor,
  NavbarItemColor,
  NavbarSubItemColor,
} from "../CustomeComponents/Theme";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img
              className="w-auto transition-transform hover:scale-[1.02]"
              src={logo}
              alt="Logo"
              style={{ height: "70px", objectFit: "cover" }}
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-2 lg:gap-2">
          {/* What we do */}
          <Menu allowHover>
            <MenuHandler>
              <Button
                size="sm"
                variant="text"
                style={{
                  color: NavbarItemColor,
                  fontFamily: HeadFontFamily1,
                }}
                className="text-md font-medium hover:text-black focus:outline-none focus:ring-0 font flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                What we do{" "}
                <FaChevronDown className="text-xs opacity-70 mt-1 h-5 transition-transform" />
              </Button>
            </MenuHandler>
            <MenuList className="px-2 rounded-xl shadow-lg z-50 w-40 mt-2 border border-gray-100 bg-white">
              <Menu allowHover placement="right-start" offset={10}>
                <MenuHandler>
                  <MenuItem
                    className="rounded-lg focus:outline-none focus:ring-0 hover:bg-gray-50 gap-1 px-3 py-2 flex items-center justify-between w-full"
                    style={{ color: NavbarItemColor }}
                  >
                    <span
                      style={{
                        color: NavbarSubItemColor,
                      }}
                    >
                      Products
                    </span>
                    <BiChevronRight className="text-lg opacity-70 mr-2 transition-transform" />
                  </MenuItem>
                </MenuHandler>
                <MenuList className="p-2 rounded-xl shadow-lg z-50 w-48 border border-gray-100 bg-white ml-1">
                  <MenuItem
                    className="rounded-lg focus:outline-none focus:ring-0 hover:bg-gray-50 px-3 py-2"
                    style={{ color: NavbarSubItemColor }}
                  >
                    Digital Certificate
                  </MenuItem>
                  <MenuItem
                    className="rounded-lg focus:outline-none focus:ring-0 hover:bg-gray-50 px-3 py-2"
                    style={{ color: NavbarSubItemColor }}
                  >
                    Cattle Aadhar
                  </MenuItem>
                  <MenuItem
                    className="rounded-lg focus:outline-none focus:ring-0 hover:bg-gray-50 px-3 py-2"
                    style={{ color: NavbarSubItemColor }}
                  >
                    3PL Solutions
                  </MenuItem>
                </MenuList>
              </Menu>
              <Menu allowHover placement="right-start" offset={10}>
                <MenuHandler>
                  <MenuItem
                    className="rounded-lg hover:bg-gray-50 gap-1 focus:outline-none focus:ring-0 px-3 py-2 flex items-center justify-between w-full"
                    style={{ color: NavbarItemColor }}
                  >
                    <span style={{ color: NavbarSubItemColor }}>Services</span>
                    <BiChevronRight className="text-lg opacity-70 mr-2 transition-transform" />
                  </MenuItem>
                </MenuHandler>
                <MenuList className="p-2 rounded-xl shadow-lg z-50 w-[250px] border border-gray-100 bg-white ml-1">
                  <MenuItem
                    className="rounded-lg hover:bg-gray-50 px-3 py-2 focus:outline-none focus:ring-0"
                    style={{ color: NavbarSubItemColor }}
                  >
                    IT Strategy Consultancy
                  </MenuItem>
                  <MenuItem
                    className="rounded-lg hover:bg-gray-50 px-3 py-2 focus:outline-none focus:ring-0"
                    style={{ color: NavbarSubItemColor }}
                  >
                    Software Services/Staffing Solution
                  </MenuItem>
                </MenuList>
              </Menu>
            </MenuList>
          </Menu>

          {/* Industries */}
          <Menu allowHover>
            <MenuHandler>
              <Button
                size="sm"
                variant="text"
                style={{
                  color: NavbarItemColor,
                  fontFamily: HeadFontFamily1,
                }}
                className="text-md font-medium flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-0"
              >
                Industries
                <FaChevronDown className="text-xs opacity-70 transition-transform" />
              </Button>
            </MenuHandler>
            <MenuList className="p-2 rounded-xl shadow-lg z-50 w-40 mt-2 border border-gray-100 bg-white">
              <MenuItem
                className="rounded-lg hover:bg-gray-50 px-3 py-2 focus:outline-none focus:ring-0"
                style={{ color: NavbarSubItemColor }}
              >
                Education
              </MenuItem>
              <MenuItem
                className="rounded-lg hover:bg-gray-50 px-3 py-2 focus:outline-none focus:ring-0"
                style={{ color: NavbarSubItemColor }}
              >
                Government
              </MenuItem>
              <MenuItem
                className="rounded-lg hover:bg-gray-50 px-3 py-2 focus:outline-none focus:ring-0"
                style={{ color: NavbarSubItemColor }}
              >
                Logistic
              </MenuItem>
            </MenuList>
          </Menu>

          {/* Resources */}
          <Menu allowHover>
            <MenuHandler>
              <Button
                size="sm"
                variant="text"
                style={{ color: NavbarItemColor, fontFamily: HeadFontFamily1 }}
                className="text-md font-medium flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-0"
              >
                Resource
                <FaChevronDown className="text-xs opacity-70 transition-transform" />
              </Button>
            </MenuHandler>
            <MenuList className="p-2 rounded-xl shadow-lg z-50 w-40 mt-2 border border-gray-100 bg-white">
              <MenuItem
                className="rounded-lg hover:bg-gray-50 px-3 py-2 focus:outline-none focus:ring-0"
                style={{ color: NavbarSubItemColor }}
              >
                Podcasts
              </MenuItem>
              <MenuItem
                className="rounded-lg hover:bg-gray-50 px-3 py-2 focus:outline-none focus:ring-0"
                style={{ color: NavbarSubItemColor }}
              >
                Demo Videos
              </MenuItem>
              <MenuItem
                className="rounded-lg hover:bg-gray-50 px-3 py-2 focus:outline-none focus:ring-0"
                style={{ color: NavbarSubItemColor }}
              >
                Testimonials
              </MenuItem>
            </MenuList>
          </Menu>

          {/* Articles, Pricing, Contact */}

          <Menu>
            <Link to="/article">
              <Button
                size="sm"
                variant="text"
                style={{ color: NavbarItemColor, fontFamily: HeadFontFamily1 }}
                className="text-md font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-0"
              >
                Articles
              </Button>
            </Link>
          </Menu>
          <Menu>
            <Button
              size="sm"
              variant="text"
              style={{ color: NavbarItemColor, fontFamily: HeadFontFamily1 }}
              className="text-md font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-0"
            >
              Pricing
            </Button>
          </Menu>
          <Menu>
            <Button
              size="sm"
              variant="text"
              style={{ color: NavbarItemColor, fontFamily: HeadFontFamily1 }}
              className="text-md font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-0"
            >
              Contact Us
            </Button>
          </Menu>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2 ml-2">
            <Button
              size="md"
              className="rounded-full text-sm text-white bg-[#2b3d8a] font-semibold  hover:bg-transparent hover:text-[#2b3d8a] hover:border-[#2b3d8a] transition-all focus:outline-none focus:ring-0"
              style={{ borderRadius: "30px", fontFamily: HeadFontFamily1 }}
            >
              Schedule a demo
            </Button>

            <Button
              size="sm"
              variant="outlined"
              className="rounded-full px-4 py-2 text-md border-gray-300 hover:bg-gray-50 font-medium focus:outline-none focus:ring-0"
              style={{ color: NavbarItemColor, fontFamily: HeadFontFamily1 }}
            >
              Login
            </Button>
          </div>
        </div>

        {/* Mobile Hamburger */}
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
              style={{ color: NavbarItemColor }}
              className="mb-2 hover:bg-gray-50 rounded-lg text-left justify-start"
            >
              {label}{" "}
              <span>
                <BiChevronRight className="ml-2 text-gray-600" />
              </span>
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
