import React from "react";
import { HeadFontFamily, gradientBG } from "../../../CustomeComponents/Theme";
import {
  FaAngleDown,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function ContactSection() {
  return (
    <main className="pt-10 pb-16 px-4 mt-[2rem] sm:px-6 lg:px-8 bg-gradient-to-r from-[#085d9e] to-[#00c1de] rounded-tr-[80px] ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 ">
        {/* Left Text Content */}
        <div className="text-white text-center md:text-left">
          <h2
            className="font-medium mb-8 sm:text-[45px] text-left text-[22px] "
            style={{
              fontFamily: HeadFontFamily,
              lineHeight: "1.2em",

              letterSpacing: "-1px",
            }}
          >
            Ready to get started? Contact us for IT Support, Staffing, Digital
            Certificate, Cattle Adhaar, and 3PL solutions.
          </h2>

          {/* Contact Icons and Details */}
          <div className="sm:mt-20 mt-10 space-y-2">
            {/* Phone */}
            <div className="flex items-center gap-2">
              <FaPhone size={22} color="white" className="mt-0" />
              <div className="sm:text-[20px] text-[15px]">073169-12309</div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2">
              <MdEmail size={27} color="white" className="mt-1" />
              <div className="sm:text-[20px] text-[15px]">
                hr@cloudstrytech.com
              </div>
            </div>
            <div className="flex items-center gap-2 ">
              <FaMapLocationDot size={42} color="white" className="" />
              <div className="sm:text-[20px] text-[13px] text-left">
                1st Floor, 33/C/S-3, Scheme No 78 - III, Near Shalimar Township,
                Sector F, Slice No.3, Honda Big Wing Indore 452010
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-2 ">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center"
                style={{ background: gradientBG }}
              >
                <FaLinkedin size={22} color="white" />
              </div>
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center"
                style={{ background: gradientBG }}
              >
                <FaFacebookF size={22} color="white" />
              </div>
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center"
                style={{ background: gradientBG }}
              >
                <FaInstagram size={22} color="white" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="w-full max-w-md mx-auto">
          <form className="bg-white shadow-md rounded-xl px-6 pt-4 pb-4">
            {/* Full Name Field 1 */}
            <div className="mb-2">
              <label className="blocktfext-md font-semibold mb-1 text-color">
                Full Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-color leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Ex: John Doe"
              />
            </div>

            {/* Full Name Field 2 */}
            <div className="mb-2">
              <label className="block text-color text-md font-semibold mb-1">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-color leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Ex: john@example.com"
              />
            </div>

            {/* Full Name Field 3 */}
            <div className="mb-2">
              <label className="block text-color text-md font-semibold mb-1">
                Phone
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-color leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Ex: 123-456-7890"
              />
            </div>

            {/* Full Name Field 4 */}
            <div className="mb-2 relative">
              <label
                className="block text-color text-md font-semibold mb-1"
                htmlFor="select-field"
              >
                Informational Query
              </label>
              <div className="relative">
                <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-10 rounded shadow leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500">
                  <option className="text-color">Option 1</option>
                  <option className="text-color">Option 2</option>
                  <option>Option 3</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
                  <FaAngleDown size={20} />
                </div>
              </div>
            </div>

            {/* Textarea Field */}
            <div className="mb-3">
              <label className="block text-gray-500 text-md font-semibold mb-1">
                Write Something
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-color leading-tight focus:outline-none focus:shadow-outline h-24"
                placeholder="Write your message here..."
              />
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-center">
              <button
                className=" px-4 py-2 rounded-full  text-lg text-white bg-gradient-to-r from-[#085d9e] to-[#00c1de] font-semibold  hover:bg-to-r hover:from-white hover:shadow-md  hover:to-white hover:text-[#1273be] hover:border-[#085d9e] transition-all duration-300"
                type="submit"
                style={{ width: "10rem" }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default ContactSection;
