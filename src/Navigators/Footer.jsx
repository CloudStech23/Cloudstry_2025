import React, { useEffect } from "react";
import logo from "../assets/cloudstry-logo-2.png";
import { FooterFontFamily } from "../CustomeComponents/Theme";
import FooterBg from "../assets/CommonIMG/White_Background.jpg";

function Footer() {
  const [maxDwidth, setMaxDwidth] = React.useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setMaxDwidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full overflow-x-hidden mx-auto px-4 sm:px-6 lg:px-0 bg-gray-100">
      {/* Background Image */}
      <div className="absolute sm:top-0 sm:left-0  w-full h-full opacity-70 overflow-hidden -z-0">
        <img
          src={FooterBg}
          alt="Background"
          className="sm:w-full sm:h-full object-contain sm:object-cover  "
          style={{ objectPosition: "top" }}
        />
      </div>

      {/* Footer Content */}
      <footer
        className="relative z-10 py-8"
        style={{ fontFamily: FooterFontFamily }}
      >
        {/* Logo on Top */}
        <div className="w-full flex justify-left px-6 mb-8">
          <img
            src={logo}
            alt="Cloudstry Tech"
            className="w-40 sm:w-48 md:w-56"
          />
        </div>

        {/* Menus Below */}
        <div
          className={
            maxDwidth <= 768
              ? `flex flex-col gap-8 w-full`
              : `flex flex-wrap px-8 justify-between mx-auto gap-12`
          }
        >
          {/* SERVICES */}
          <div className="w-full sm:w-1/2 md:w-[20%] mb-6">
            <h5 className="text-xl font-medium mb-3">SERVICES</h5>
            <ul className="flex flex-col space-y-2">
              <li>
                <a href="#" className="text-gray-500 hover:text-black">
                  IT Strategy and Architecture Consulting
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-black">
                  IT Software and Maintenance
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-black">
                  Manpower Solution
                </a>
              </li>
            </ul>
          </div>

          {/* PRODUCTS */}
          <div className="w-full sm:w-1/2 md:w-[20%] mb-6">
            <h5 className="text-xl font-medium mb-3">PRODUCTS</h5>
            <ul className="flex flex-col space-y-2">
              <li>
                <a href="#" className="text-gray-500 hover:text-black">
                  Digital Certificate
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-black">
                  Cattle Aadhar
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-black">
                  3PL Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* INDUSTRIES */}
          <div className="w-full sm:w-1/2 md:w-[20%] mb-6">
            <h5 className="text-xl font-medium mb-3">INDUSTRIES</h5>
            <ul className="flex flex-col space-y-2">
              <li>
                <a href="#" className="text-gray-500 hover:text-black">
                  Education
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-black">
                  Utility
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-black">
                  Government
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-black">
                  Logistic
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-black">
                  Health Care
                </a>
              </li>
            </ul>
          </div>

          {/* PAGES */}
          <div className="w-full sm:w-1/2 md:w-[20%] mb-6">
            <h5 className="text-xl font-medium mb-3">PAGES</h5>
            <ul className="flex flex-col space-y-2">
              <li>
                <a href="#" className="text-gray-500 hover:text-black">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-black">
                  Podcasts
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-black">
                  Demo Video
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-black">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-black">
                  Articles
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-black">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Copyright Section */}
      <div className="relative z-10 mt-4">
        <p className="text-center text-gray-500 hover:text-black py-4 cursor-pointer">
          Copyright &copy; {new Date().getFullYear()} All Rights Reserved |
          Cloudstry Technologies Pvt Ltd
        </p>
      </div>
    </div>
  );
}

export default Footer;
