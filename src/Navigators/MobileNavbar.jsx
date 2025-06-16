import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { NavbarItemColor } from "../CustomeComponents/Theme";
import { HeadFontFamily1 } from "../CustomeComponents/Theme";

function MobileNavbar() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const accordionItems = [
    {
      id: "what-we-do",
      title: "What we do",
      dropdown: true,
      content: (
        <div className="pl-4 py-2">
          <div className="flex flex-row justify-between items-center">
            <p className="text-gray-600 mb-2">Products</p>
            <BiChevronRight className="text-lg opacity-70 mr-10 transition-transform" />
          </div>
          <div className="flex flex-row justify-between items-center">
            <p className="text-gray-600 mb-2">Services</p>
            <BiChevronRight className="text-lg opacity-70 mr-10 transition-transform" />
          </div>

          {/* <p className="text-gray-600 mb-2">3PL Solutions</p>
          <p className="text-gray-600">IT Strategy Consultancy</p> */}
        </div>
      ),
    },
    {
      id: "industries",
      title: "Industries",
      content: (
        <div className="pl-4 py-2">
          <p className="text-gray-600 mb-2">Education</p>
          <p className="text-gray-600 mb-2">Government</p>
          <p className="text-gray-600 mb-2">Logistic</p>
          {/* <p className="text-gray-600">Government</p> */}
        </div>
      ),
    },
    {
      id: "resources",
      title: "Resources",
      content: (
        <div className="pl-4 py-2">
          <p className="text-gray-600 mb-2">Podcasts</p>
          <p className="text-gray-600 mb-2">Demo Videos</p>
          <p className="text-gray-600">Testimonials</p>
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
            <a
              href={item.href}
              className="block w-full p-3 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              style={{ color: NavbarItemColor, fontFamily: HeadFontFamily1 }}
            >
              {item.title}
            </a>
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
