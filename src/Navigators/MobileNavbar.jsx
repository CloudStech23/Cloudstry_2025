import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { NavbarItemColor } from "../CustomeComponents/Theme";
import { HeadFontFamily1 } from "../CustomeComponents/Theme";
import { Link } from "react-router-dom";

function MobileNavbar({ closeNavbar }) {
  const [openAccordion, setOpenAccordion] = useState(null);
  const [openSubAccordion, setOpenSubAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const toggleSubAccordion = (id) => {
    setOpenSubAccordion(openSubAccordion === id ? null : id);
  };

  const accordionItems = [
    {
      id: "what-we-do",
      title: "What we do",
      dropdown: true,
      content: (
        <div className="pl-2">
          {/* Products Accordion */}
          <div className="mb-2">
            <button
              onClick={() => toggleSubAccordion("products")}
              className={`flex items-center justify-between w-full p-3 font-medium text-left rounded-lg hover:bg-gray-50 transition-colors ${
                openAccordion === "products" ? "bg-gray-50" : ""
              }`}
              style={{ color: NavbarItemColor, fontFamily: HeadFontFamily1 }}
            >
              <span>Products</span>
              {openSubAccordion === "products" ? (
                <BiChevronDown size={20} className="text-gray-600" />
              ) : (
                <BiChevronRight size={20} className="text-gray-600" />
              )}
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openSubAccordion === "products" ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="pl-4 py-2">
                <p className="text-gray-600 mb-2">
                  <Link to="/article" onClick={closeNavbar}>
                    Digital Certificate
                  </Link>
                </p>
                <p className="text-gray-600 mb-2">
                  <Link to="/article" onClick={closeNavbar}>
                    Cattle Aadhar
                  </Link>
                </p>
                <p className="text-gray-600 mb-2">
                  <Link to="/article" onClick={closeNavbar}>
                    3PL Solution
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Services Accordion */}
          <div>
            <button
              onClick={() => toggleSubAccordion("services")}
              className={`flex items-center justify-between w-full p-3 font-medium text-left rounded-lg hover:bg-gray-50 transition-colors ${
                openAccordion === "services" ? "bg-gray-50" : ""
              }`}
              style={{ color: NavbarItemColor, fontFamily: HeadFontFamily1 }}
            >
              <span>Services</span>
              {openSubAccordion === "services" ? (
                <BiChevronDown size={20} className="text-gray-600" />
              ) : (
                <BiChevronRight size={20} className="text-gray-600" />
              )}
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openSubAccordion === "services" ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="pl-4 py-2">
                <p className="text-gray-600 mb-2">
                  <Link to="/article" onClick={closeNavbar}>
                    IT Strategy Consultancy
                  </Link>
                </p>
                <p className="text-gray-600 mb-2">
                  <Link to="/article" onClick={closeNavbar}>
                    Software Services/Staffing Solution
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    {
      id: "industries",
      title: "Industries",
      content: (
        <div className="pl-4 py-2">
          <p className="text-gray-600 mb-2">
            <Link to="/article" onClick={closeNavbar}>
              Education
            </Link>
          </p>
          <p className="text-gray-600 mb-2">
            <Link to="/article" onClick={closeNavbar}>
              Government
            </Link>
          </p>
          <p className="text-gray-600 mb-2">
            <Link to="/article" onClick={closeNavbar}>
              Logistics
            </Link>
          </p>
        </div>
      ),
    },
    {
      id: "resources",
      title: "Resources",
      content: (
        <div className="pl-4 py-2">
          <p className="text-gray-600 mb-2">
            <Link to="/article" onClick={closeNavbar}>
              Podcasts
            </Link>
          </p>
          <p className="text-gray-600 mb-2">
            <Link to="/article" onClick={closeNavbar}>
              Demo Videos
            </Link>
          </p>
          <p className="text-gray-600 mb-2">
            <Link to="/article" onClick={closeNavbar}>
              Testimonials
            </Link>
          </p>
        </div>
      ),
    },
    {
      id: "article",
      title: "Articles",
      linkOnly: true,
      href: "/article", // or your actual article path
    },
  ];

  return (
    <div className="md:hidden bg-white shadow-lg px-4 pb-4 pt-2">
      {accordionItems.map((item) => (
        <div key={item.id} className="mb-1">
          {item.linkOnly ? (
            <Link
              to={item.href}
              onClick={closeNavbar}
              className="block w-full p-3 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              style={{ color: NavbarItemColor, fontFamily: HeadFontFamily1 }}
            >
              {item.title}
            </Link>
          ) : (
            <>
              <button
                onClick={() => toggleAccordion(item.id)}
                className={`flex items-center justify-between w-full p-3 font-medium text-left rounded-lg hover:bg-gray-50 transition-colors ${
                  openAccordion === item.id ? "bg-gray-50" : ""
                }`}
                style={{ color: NavbarItemColor, fontFamily: HeadFontFamily1 }}
              >
                <span>{item.title}</span>
                {openAccordion === item.id ? (
                  <BiChevronDown size={20} className="text-gray-600" />
                ) : (
                  <BiChevronRight size={20} className="text-gray-600" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openAccordion === item.id ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="pl-4 py-2">{item.content}</div>
              </div>
            </>
          )}
        </div>
      ))}

      {/* <Button
        fullWidth
        size="sm"
        variant="text"
        style={{ color: NavbarItemColor, fontFamily: HeadFontFamily1 }}
        className="mb-1 hover:bg-gray-50 text-md font-medium rounded-lg text-left justify-start"
      >
        Articles
      </Button> */}

      <Button
        size="md"
        className="rounded-full w-full text-xs text-white bg-gradient-to-r from-[#085d9e] to-[#00c1de] font-semibold hover:bg-gradient-to-r hover:from-white hover:to-white hover:text-[#1273be] hover:border-[#2b3d8a] transition-all focus:outline-none focus:ring-0"
        style={{
          borderRadius: "30px",
          fontFamily: HeadFontFamily1,
        }}
      >
        Contact Us
      </Button>

      <Button
        size="md"
        className="rounded-full mt-2 w-full text-xs text-white bg-gradient-to-r from-[#085d9e] to-[#00c1de] font-semibold hover:bg-gradient-to-r hover:from-white hover:to-white hover:text-[#1273be] hover:border-[#2b3d8a] transition-all focus:outline-none focus:ring-0"
        style={{
          borderRadius: "30px",
          fontFamily: HeadFontFamily1,
        }}
      >
        Schedule a demo
      </Button>
    </div>
  );
}

export default MobileNavbar;
