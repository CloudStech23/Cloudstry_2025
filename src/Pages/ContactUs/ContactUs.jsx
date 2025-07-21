import React from "react";
import ContactUsBanner from "../../assets/CommonIMG/contact_us_banner.svg";
import { gradientBG, HeadFontFamily } from "../../CustomeComponents/Theme";
import map from "../../assets/CommonIMG/Contact_us_map.webp"
import {
  FaEnvelopeOpenText,
  FaMapMarkerAlt,
  FaMobileAlt,
} from "react-icons/fa";

function ContactUs() {
  return (
    <div>
      <div className="relative w-full h-[26rem] sm:h-[21.5rem]  ">
        {/* Background Image */}
        <img
          src={ContactUsBanner}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-[71%_center] -z-10"
          style={{ filter: "blur(0px)" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 -z-10"></div>

        {/* Centered Text */}
        <div className="flex items-center justify-center h-full px-6 text-center ">
          <h2
            className="text-3xl sm:text-5xl md:text-[57px] font-bold text-white mt-[6.5rem] uppercase"
            style={{ fontFamily: HeadFontFamily, lineHeight: "1.2" }}
          >
            Contact Us
          </h2>
        </div>
      </div>
      <div
        className="relative flex flex-wrap w-full max-w-full py-16 bg-cover bg-center bg-no-repeat bg-opacity-50"
        style={{
          backgroundImage: `url(${map})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
            
        }}
      >
        <div className="absolute inset-0 bg-contain bg-gray-50  opacity-50"></div>

        <div className="relative w-full py-12 ">
          {/* Background with opacity */}

          <div className="relative max-w-7xl  mx-auto">
            <div className="flex flex-wrap ">
              {/* Contact Info Column */}
              <div className="w-full md:w-1/2 sm:w-1/2    ">
                <div className="bg-gray-300 bg-opacity-60 p-[2.6rem] rounded-tl-xl rounded-bl-xl">
                  {/* Email Box */}
                  <div
                    className="p-4 text-center rounded-[7px] mb-4"
                    style={{ background: gradientBG }}
                  >
                    <div className="text-5xl pb-2 text-white">
                      <FaEnvelopeOpenText className="mx-auto" />
                    </div>
                    <div
                      className="text-white"
                      style={{ fontFamily: HeadFontFamily }}
                    >
                      <h3 className="font-montserrat text-xl font-semibold pb-2">
                        Email Us
                      </h3>
                      <div className="space-y-1">
                        <a
                          href="mailto:hr@cloudstrytech.com"
                          className="block font-montserrat text-lg font-medium text-white hover:text-gray-200"
                        >
                          hr@cloudstrytech.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Phone Box */}
                  <div
                    className="p-4 text-center rounded-[7px] mb-4"
                    style={{ background: gradientBG }}
                  >
                    <div className="text-5xl pb-2 text-white">
                      <FaMobileAlt className="mx-auto" />
                    </div>
                    <div
                      className="text-white"
                      style={{ fontFamily: HeadFontFamily }}
                    >
                      <h3 className="font-montserrat text-xl font-semibold pb-2">
                        Call Us
                      </h3>
                      <div className="flex justify-center space-x-2">
                        <a
                          href="tel:+917313683823"
                          className="font-montserrat text-lg font-medium text-white hover:text-gray-200"
                        >
                          +91-7313683823
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Address Box */}
                  <div
                    className="p-4 text-center rounded-[7px]"
                    style={{ background: gradientBG }}
                  >
                    <div className="text-5xl pb-2 text-white">
                      <FaMapMarkerAlt className="mx-auto" />
                    </div>
                    <div
                      className="text-white"
                      style={{ fontFamily: HeadFontFamily }}
                    >
                      <h3 className="font-montserrat text-xl font-semibold pb-2 ">
                        Address
                      </h3>
                      <p className="font-montserrat text-[17px] font-medium">
                        1st F, 33/C/S-3, Scheme 78-III, Sec F, Slice 3, Indore – 452010
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form Column */}
              <div className="w-full md:w-1/2 ">
                <div className="bg-white shadow-lg p-6 rounded-tr-xl rounded-br-xl">
                  <form className="max-w-full">
                    {/* Name Field */}
                    <div className="mb-4">
                      <label
                        className="block text-gray-500 text-md font-semibold mb-1  "
                        style={{ fontFamily: HeadFontFamily }}
                      >
                        Name
                      </label>
                      <div className="flex flex-wrap -mx-2">
                        <div className="w-full md:w-1/2 px-2 mb-2">
                          <input
                            type="text"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded"
                            placeholder="First Name"
                          />
                        </div>
                        <div className="w-full md:w-1/2 px-2 mb-2">
                          <input
                            type="text"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="mb-4">
                      <label
                        className="block text-gray-500 text-md font-semibold mb-1  "
                        style={{ fontFamily: HeadFontFamily }}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                      />
                    </div>

                    {/* Phone Field */}
                    <div className="mb-4">
                      <label
                        className="block text-gray-500 text-md font-semibold mb-1  "
                        style={{ fontFamily: HeadFontFamily }}
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="w-full px-3 py-2 border border-gray-300 rounded"
                      />
                    </div>

                    {/* Message Field */}
                    <div className="mb-4">
                      <label
                        className="block text-gray-500 text-md font-semibold mb-1  "
                        style={{ fontFamily: HeadFontFamily }}
                      >
                        Message
                      </label>
                      <textarea
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded "
                        rows="6"
                        placeholder="Your Message..."

                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      className=" px-4 py-2 rounded-full  text-lg text-white bg-gradient-to-r from-[#085d9e] to-[#00c1de] font-semibold  hover:bg-to-r hover:from-white hover:shadow-md  hover:to-white hover:text-[#1273be] hover:border-[#085d9e] transition-all duration-300"
                      type="submit"
                      style={{ width: "10rem" }}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
