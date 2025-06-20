import React, { useEffect } from "react";
import logo from "../assets/cloudstry-logo-2.png";
import { Link } from "react-router-dom";
import { BsFillCircleFill } from "react-icons/bs";
import { FooterFontFamily, HeadTextColor } from "../CustomeComponents/Theme";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const [maxDwidth, setMaxDwidth] = React.useState(window.innerWidth);
  const [showMobileView, setShowMobileView] = React.useState(false);
  useEffect(() => {
    const handleResize = () => {
      setMaxDwidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [maxDwidth]);
  console.log(maxDwidth);
  return (
    <div
      className=" mx-auto px-4 sm:px-6 lg:px-8 bg-gray-100"
      // style={{
      //   background: "linear-gradient(to right, #085d9e, #00c1de)",
      // }}
    >
      <footer
        className="flex flex-wrap py-8 gap-12 "
        style={{ fontFamily: FooterFontFamily }}
      >
        <div className="w-[60%] sm:w-1/5  md:w-1/5 ">
          <img src={logo} alt="" />
        </div>

        <div
          className={
            maxDwidth <= 768
              ? `flex flex-col md:flex-row md:justify-between w-full gap-8 mt-5`
              : `flex flex-row mx-auto gap-24 mt-2 md:mt-5`
          }
        >
          {/* This line is for responsiveness but not good looking for window 👇*/}
          {/* <div className="flex flex-col md:flex-row md:justify-between w-full gap-8 mt-5"> */}
          <div className="w-full sm:w-1/2 md:w-full px-3 mb-6">
            <h5
              className="text-xl font-medium mb-3"
              // style={{ color: HeadTextColor }}
            >
              SERVICES
            </h5>
            <ul className="flex flex-col space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-black transition"
                >
                  Digital Certificate
                </a>
                {/* <div className="ml-4">
                  <ul className="mx-4 list-disc ml-4 w-full">
                    <li className="text-gray-500 hover:text-black transition">
                      <a href="#" className=" transition">
                        Digital Certificate for universities
                      </a>
                    </li>
                    <li className="text-gray-500 hover:text-black transition">
                      <a href="#" className=" ">
                        Digital Certificate for Organizations
                      </a>
                    </li>
                    <li className="text-gray-500 hover:text-black transition">
                      <a href="#" className="">
                        Digital Certificate for Institutions
                      </a>
                    </li>
                  </ul>
                </div> */}
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-black transition"
                >
                  Cattle Aadhar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-black transition"
                >
                  3PL Solutions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-black transition"
                >
                  IT Strategy Consultancy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-black transition"
                >
                  Software Servies & Staffing Solution
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-full px-3 mb-6">
            <h5 className="text-xl font-medium mb-3">INDUSTRIES</h5>
            <ul className="flex flex-col space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-black transition"
                >
                  Universities
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-black transition"
                >
                  Organization
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-black transition"
                >
                  Institutions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-black transition"
                >
                  Government
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-black transition"
                >
                  Logistics
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-1/2 md:w-full px-3 mb-6">
            <h5 className="text-xl font-medium mb-3">PAGES</h5>
            <ul className="flex flex-col space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-black transition"
                >
                  Resources
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-black transition"
                >
                  Podcasts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-black transition"
                >
                  Demo Video
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-black transition"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-black transition"
                >
                  Articles
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 hover:text-black transition"
                >
                  {/* <BsFillCircleFill size={8} className="mt-1 text-[#085d9e]" /> */}
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-full px-3 mb-6">
            <h5 className="text-xl font-medium mb-3">CONTACT</h5>
            <ul className="flex flex-col space-y-2">
              {/* First li: Social Media Icons */}
              <li className="">
                <div className="flex space-x-1">
                  <div className="w-9 h-9 rounded-full border-2 border-gray-200  flex items-center justify-center">
                    <Link
                      href="https://www.facebook.com/CloudstryTech"
                      aria-label="Facebook"
                      className="text-gray-500 hover:text-[#085d9e] transition"
                    >
                      <FaFacebookF size={20} />
                    </Link>
                  </div>
                  <div className="w-9 h-9 rounded-full border-2 border-gray-200  flex items-center justify-center">
                    <Link
                      href="https://www.linkedin.com/company/cloudstrytech"
                      aria-label="LinkedIn"
                      className="text-gray-500 hover:text-[#085d9e] transition"
                    >
                      <FaLinkedinIn size={15} />
                    </Link>
                  </div>
                  <div className="w-9 h-9 rounded-full border-2 border-gray-200  flex items-center justify-center">
                    <Link
                      href="https://www.instagram.com/cloudstrytech"
                      aria-label="Instagram"
                      className="text-gray-500 hover:text-[#085d9e] transition"
                    >
                      <FaInstagram size={20} />
                    </Link>
                  </div>
                </div>
              </li>

              {/* Contact Details */}
              <li className="pt-2">
                <Link
                  href="mailto:hr@cloudstrytech.com"
                  className="text-gray-500 hover:text-black  transition"
                >
                  hr@cloudstrytech.com
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="tel:+917316912309"
                  className="text-gray-500 hover:text-black transition"
                >
                  073169-12309
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-500 hover:text-black transition"
                >
                  1st Floor, 33/C/S-3, Scheme No 78 - III, Near Shalimar
                  Township, Sector F, Slice No.3, Honda Big Wing Indore 452010
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div>
        <div
          className="   mx-auto  py-4 text-gray-500 hover:text-black"
          style={{ cursor: "pointer" }}
        >
          <p className="text-center">
            Copyright &copy; {new Date().getFullYear()} All Rights Reserved |
            Cloudstry Technologies Pvt Ltd
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
