import React from "react";

import { LuComputer } from "react-icons/lu";

import {
  HeadFontFamily,
  SubTextFontFamily,
} from "../../../CustomeComponents/Theme";

import whychooseimg from "../../../assets/Images/HomePage/why_choose_us.jpg";
import { BsPeopleFill } from "react-icons/bs";
import { DiTerminal } from "react-icons/di";
import { BiSupport } from "react-icons/bi";
import bgimg from "../../../assets/Images/HomePage/whychoose_bg.svg";
function WhyChooseUs() {
  return (
    <div className="relative py-12 px-4 sm:px-6 lg:px-0 pb-6 mt-[0rem] mx-auto w-full">
      {/* ✅ Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={bgimg}
          alt="Background"
          className="w-full h-full object-contain"
          style={{ objectPosition: "top" }}
        />
        {/* Optional Overlay */}
        <div className="absolute inset-0  opacity-60"></div>
      </div>
      <div className=" mx-auto text-center  mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="sm:text-4xl text-3xl font-bold sm:leading-none mb-6 "
          style={{ fontFamily: "Poppines, sans-serif", color: "#085d9e" }}
        >
          WHY <span className="text-[#1f1446] ">CHOOSE US ?</span>
        </h2>

        <div className="w-24 h-1.5 bg-gradient-to-r from-[#085d9e] to-[#00c1de] mx-auto mb-10 rounded-full" />

        <h5
          className="sm:text-[16.5px] mt-2  text-sm sm:w-[60%] lg:w-[75%] font-medium text-color text-center mx-auto"
          style={{ fontFamily: SubTextFontFamily }}
          // as of now we consider the font as a medium
        >
          At Cloudstry Tech, we are committed to delivering innovative and
          reliable digital solutions that drive your business forward. Our
          client-centric approach, technical expertise, and dedication to
          quality set us apart in the IT services landscape.
        </h5>

        <div className="relative w-full h-full ">
          {/* Top-Left Border */}
          {/* Top-Right Border */}
          <div className="absolute top-[-7px] right-0 w-[70px] h-[70px] border-t-[8px] border-r-[8px] border-[#1f1446] rounded-tr-sm" />

          {/* Bottom-Left Border */}
          <div className="absolute bottom-[-7px] left-0 w-[70px] h-[70px] border-b-[8px] border-l-[8px] border-[#1f1446] rounded-bl-sm" />

          <div className="mt-16 relative flex flex-col lg:flex-row w-full p-2 px-4  overflow-hidden ">
            {/* Left Section */}
            <div
              className="w-full lg:w-1/2 bg-white flex flex-col rounded-tl-md rounded-bl-md justify-center  gap-8 z-10 p-4 sm:p-8"
              style={{ boxShadow: "#b3b3b3 0px 0px 6px 0px" }}
            >
              <div className="flex items-start gap-3">
                <div className="min-w-[48px] min-h-[48px] flex items-center justify-center rounded-full   text-sm font-semibold shadow-md ">
                  <LuComputer size={25} color="#085d9e" />
                </div>
                <div>
                  <h4
                    className="text-[18px] text-left font-semibold text-[#085d9e]"
                    style={{ fontFamily: HeadFontFamily }}
                  >
                    Tailored Solutions
                  </h4>
                  <p className="text-gray-600 text-left w-[70%] text-[14px]">
                    We customize our services to perfectly fit your unique
                    business needs and challenges
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="min-w-[48px] min-h-[48px] flex items-center justify-center rounded-full   text-sm font-semibold shadow-md ">
                  <BsPeopleFill size={25} color="#085d9e" />
                </div>
                <div>
                  <h4
                    className="text-[18px] text-left font-semibold text-[#085d9e]"
                    style={{ fontFamily: HeadFontFamily }}
                  >
                    Experienced Team
                  </h4>
                  <p className="text-gray-600 text-left w-[70%] text-[14px]">
                    Our skilled professionals bring years of industry experience
                    and deep technical knowledge
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="min-w-[48px] min-h-[48px] flex items-center justify-center rounded-full   text-sm font-semibold shadow-md ">
                  <DiTerminal size={25} color="#085d9e" />
                </div>
                <div>
                  <h4
                    className="text-[18px] text-left font-semibold text-[#085d9e]"
                    style={{ fontFamily: HeadFontFamily }}
                  >
                    Cutting-Edge Technology
                  </h4>
                  <p className="text-gray-600 text-left w-[70%] text-[14px]">
                    We leverage the latest tools and innovations to ensure
                    future-ready solutions
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="min-w-[48px] min-h-[48px] flex items-center justify-center rounded-full   text-sm font-semibold shadow-md ">
                  <BiSupport size={25} color="#085d9e" />
                </div>
                <div>
                  <h4
                    className="text-[18px] text-left font-semibold text-[#085d9e]"
                    style={{ fontFamily: HeadFontFamily }}
                  >
                    Reliable Support
                  </h4>
                  <p className="text-gray-600 text-left w-[70%] text-[14px]">
                    From implementation to ongoing assistance, we provide
                    dependable support to keep your operations smooth.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-1/2 bg-gradient-to-br from-[#085d9e] to-[#00c1de] relative flex items-center justify-center min-h-[450px] ">
              {/* Overlapping Image */}
              <div
                className="absolute top-1/2 transform -translate-y-1/2 w-[650px] max-w-full z-20"
                style={{ left: -25 }}
              >
                <img
                  src={whychooseimg}
                  alt="Why Choose Us"
                  className=" shadow-lg  object-cover w-full h-[22rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
