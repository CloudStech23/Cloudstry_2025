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
import logo from "../assets/cloudstry-logo-2.png";
import {
  ButtonColor,
  HeadFontFamily,
  HeadTextColor,
  NavbarItemColor,
  NavbarSubItemColor,
} from "../CustomeComponents/Theme";
import { Link } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";

const DefaultNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // <nav
    //   className="bg-white  fixed top-10 left-10 right-10 z-50 rounded-[20px]"
    //   style={{ boxShadow: "rgb(0 81 143) 0px -5px 19px 0px" }}
    // >
    <nav
      className="bg-white  fixed top-0 left-0 right-0 z-50 "
      style={{ boxShadow: "rgb(0 81 143) 0px -5px 19px 0px" }}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img
              className="md:w-auto h-14 sm:h-[3.4rem] w-auto transition-transform hover:scale-[1.02]"
              src={logo}
              style={{ objectFit: "cover" }}
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
                  fontFamily: HeadFontFamily,
                }}
                className="text-[14px] font-medium hover:text-black focus:outline-none focus:ring-0 font flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                What we do{" "}
                <FaChevronDown className="text-[13px] mx-1 opacity-70  h-5 transition-transform" />
              </Button>
            </MenuHandler>
            <MenuList className="px-2 rounded-xl shadow-lg z-50 w-40 mt-2 border border-gray-100 bg-white">
              <Menu allowHover placement="right-start" offset={10}>
                <MenuHandler>
                  <MenuItem
                    className="rounded-lg text-[16px] focus:outline-none focus:ring-0 hover:bg-gray-50 gap-1 px-3 py-2 flex items-center justify-between w-full"
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
                    className="rounded-lg text-[16px] focus:outline-none focus:ring-0 hover:bg-gray-50 px-3 py-2"
                    style={{ color: NavbarSubItemColor }}
                  >
                    Digital Certificate
                  </MenuItem>
                  <MenuItem
                    className="rounded-lg text-[16px] focus:outline-none focus:ring-0 hover:bg-gray-50 px-3 py-2"
                    style={{ color: NavbarSubItemColor }}
                  >
                    Cattle Aadhar
                  </MenuItem>
                  <MenuItem
                    className="rounded-lg text-[16px] focus:outline-none focus:ring-0 hover:bg-gray-50 px-3 py-2"
                    style={{ color: NavbarSubItemColor }}
                  >
                    3PL Solutions
                  </MenuItem>
                </MenuList>
              </Menu>
              <Menu allowHover placement="right-start" offset={10}>
                <MenuHandler>
                  <MenuItem
                    className="rounded-lg hover:bg-gray-50 text-[16px] gap-1 focus:outline-none focus:ring-0 px-3 py-2 flex items-center justify-between w-full"
                    style={{ color: NavbarItemColor }}
                  >
                    <span style={{ color: NavbarSubItemColor }}>Services</span>
                    <BiChevronRight className=" text-[16px] opacity-70 mr-2 transition-transform" />
                  </MenuItem>
                </MenuHandler>
                <MenuList className="p-2 rounded-xl shadow-lg z-50 w-[250px] border border-gray-100 bg-white ml-1">
                  <MenuItem
                    className="rounded-lg text-[16px] hover:bg-gray-50 px-3 py-2 focus:outline-none focus:ring-0"
                    style={{ color: NavbarSubItemColor }}
                  >
                    IT Strategy Consultancy
                  </MenuItem>
                  <MenuItem
                    className="rounded-lg text-[16px] hover:bg-gray-50 px-3 py-2 focus:outline-none focus:ring-0"
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
                  fontFamily: HeadFontFamily,
                }}
                className="text-[14px] font-medium flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-0"
              >
                Industries
                <FaChevronDown className="text-[13px] mx-1 opacity-70  h-5 transition-transform" />{" "}
              </Button>
            </MenuHandler>
            <MenuList className="p-2 rounded-xl shadow-lg z-50 w-40 mt-2 border border-gray-100 bg-white">
              <MenuItem
                className="rounded-lg hover:bg-gray-50 text-[16px] px-3 py-2 focus:outline-none focus:ring-0"
                style={{ color: NavbarSubItemColor }}
              >
                Education
              </MenuItem>
              <MenuItem
                className="rounded-lg text-[16px] hover:bg-gray-50 px-3 py-2 focus:outline-none focus:ring-0"
                style={{ color: NavbarSubItemColor }}
              >
                Government
              </MenuItem>
              <MenuItem
                className="rounded-lg text-[16px] hover:bg-gray-50 px-3 py-2 focus:outline-none focus:ring-0"
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
                style={{ color: NavbarItemColor, fontFamily: HeadFontFamily }}
                className="text-[14px] font-medium  flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-0"
              >
                Resource
                <FaChevronDown className="text-[13px] mx-1 opacity-70  h-5 transition-transform" />
              </Button>
            </MenuHandler>
            <MenuList className="p-2 rounded-xl shadow-lg z-50 w-40 mt-2 border border-gray-100 bg-white">
              <MenuItem
                className="rounded-lg text-[16px] hover:bg-gray-50 px-3 py-2 focus:outline-none focus:ring-0"
                style={{ color: NavbarSubItemColor }}
              >
                Podcasts
              </MenuItem>
              <MenuItem
                className="rounded-lg text-[16px] hover:bg-gray-50 px-3 py-2 focus:outline-none focus:ring-0"
                style={{ color: NavbarSubItemColor }}
              >
                Demo Videos
              </MenuItem>
              <MenuItem
                className="rounded-lg text-[16px] hover:bg-gray-50 px-3 py-2 focus:outline-none focus:ring-0"
                style={{ color: NavbarSubItemColor }}
              >
                Testimonials
              </MenuItem>
            </MenuList>
          </Menu>

          {/* Articles, Pricing, Contact */}

          <Menu>
            <Link to="">
              <Button
                size="sm"
                variant="text"
                style={{ color: NavbarItemColor, fontFamily: HeadFontFamily }}
                className="text-[14px] font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-0"
              >
                Articles
              </Button>
            </Link>
          </Menu>
          {/* <Menu>
            <Button
              size="sm"
              variant="text"
              style={{ color: NavbarItemColor, fontFamily: HeadFontFamily }}
              className="text-lg font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-0"
            >
              Pricing
            </Button>
          </Menu> */}
          {/* <Menu>
            <Button
              size="sm"
              variant="text"
              style={{ color: NavbarItemColor, fontFamily: HeadFontFamily }}
              className="text-lg font-medium px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-0"
            >
              Contact Us
            </Button>
          </Menu> */}

          {/* CTA Buttons */}
          <div className="flex items-center gap-2 ml-2">
            <Button
              size="md"
              className="rounded-full text-[14px] text-white bg-gradient-to-r from-[#085d9e] to-[#00c1de] font-semibold  hover:bg-gradient-to-r hover:from-white  hover:to-white hover:text-[#1273be] hover:border-[#2b3d8a] transition-all focus:outline-none focus:ring-0"
              style={{
                borderRadius: "30px",
                fontFamily: HeadFontFamily,
              }}
            >
              Contact Us
            </Button>

            {/* <Button
              size="sm"
              variant="outlined"
              className="rounded-full px-4 py-2 text-lg border-gray-300 hover:bg-gray-50 font-medium focus:outline-none focus:ring-0"
              style={{ color: NavbarItemColor, fontFamily: HeadFontFamily }}
            >
              Login
            </Button> */}
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
      {menuOpen && <MobileNavbar />}
    </nav>
  );
};

export default DefaultNav;
