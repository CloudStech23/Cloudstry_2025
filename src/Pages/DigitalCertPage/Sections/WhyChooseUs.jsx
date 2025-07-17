import React from "react";
import {
  HeadTextColor,
  HeadFontFamily,
} from "../../../CustomeComponents/Theme";
import whychooseimg from "../../../assets/Images/DigCertPage/whychoose_bg-3.svg";
import { LuComputer } from "react-icons/lu";
import { BsShieldLock } from "react-icons/bs";
import { CgScreen } from "react-icons/cg";
import { IoEarth } from "react-icons/io5";
import { GoGraph } from "react-icons/go";

function WhyChooseUs() {
  return (
    <div className="relative w-full z-10">
      {/* Section Title */}
      <div className="text-center mb-6 px-6 pt-12">
        <h1
          className="sm:text-4xl text-2xl font-bold mb-6"
          style={{
            fontFamily: "Poppines, sans-serif",
            color: HeadTextColor,
            lineHeight: 1.2,
            textTransform: "uppercase",
          }}
        >
          WHY <span className="text-[#1f1446]">CHOOSE US</span>
        </h1>
        <div className="w-24 h-1.5 bg-gradient-to-r from-[#085d9e] to-[#00c1de] mx-auto mb-10 rounded-full"></div>
      </div>

      {/* Background Image Section */}
      <div
        className="w-[95.5%] sm:w-full  h-[500px] bg-no-repeat bg-cover bg-right relative flex items-center"
        style={{
          backgroundImage: `url(${whychooseimg})`, // 🔁 Replace with your actual image path
        }}
      >
        {/* Overlapping Text Box */}
        <div className="w-full lg:w-full flex flex-col items-end pr-6">
          <div className=" w-full sm:w-[40%] pt-4 pl-6 sm:p-4">
            <div className="flex flex-row-reverse items-start gap-3">
              <div className="min-w-[48px] min-h-[48px] flex items-center justify-center rounded-full shadow-md">
                <BsShieldLock size={25} color="#fff" />
              </div>
              <div className="text-right">
                <h4
                  className="text-[20px] font-semibold text-white"
                  style={{ fontFamily: HeadFontFamily }}
                >
                  Trusted Security
                </h4>
                <p className="text-white text-[14px] sm:text-[16.5px]">
                  People choose us for our tamper-proof, verifiable digital
                  credentials that ensure complete data integrity and trust.
                </p>
              </div>
            </div>
          </div>
          <div className=" w-full sm:w-[40%] pt-4 pl-6 sm:p-4">
            <div className="flex flex-row-reverse items-start gap-3">
              <div className="min-w-[48px] min-h-[48px] flex items-center justify-center rounded-full shadow-md">
                <CgScreen size={25} color="#fff" />
              </div>
              <div className="text-right">
                <h4
                  className="text-[20px] font-semibold text-white"
                  style={{ fontFamily: HeadFontFamily }}
                >
                  Hassle-Free Experience
                </h4>
                <p className="text-white text-[14px] sm:text-[16.5px]">
                  Our platform is simple to use—no technical skills needed to
                  issue, manage, or track credentials
                </p>
              </div>
            </div>
          </div>
          <div className=" w-full sm:w-[40%] pt-4 pl-6 sm:p-4">
            <div className="flex flex-row-reverse items-start gap-3">
              <div className="min-w-[48px] min-h-[48px] flex items-center justify-center rounded-full shadow-md">
                <IoEarth size={25} color="#fff" />
              </div>
              <div className="text-right">
                <h4
                  className="text-[20px] font-semibold text-white"
                  style={{ fontFamily: HeadFontFamily }}
                >
                  Global Compatibility
                </h4>
                <p className="text-white text-[14px] sm:text-[16.5px]">
                  Designed for a global audience, our digital credentials can be
                  shared and verified anywhere, anytime.
                </p>
              </div>
            </div>
          </div>
          <div className=" w-full sm:w-[40%] pt-4 pl-6 sm:p-4">
            <div className="flex flex-row-reverse items-start gap-3">
              <div className="min-w-[48px] min-h-[48px] flex items-center justify-center rounded-full shadow-md">
                <GoGraph size={25} color="#fff" />
              </div>
              <div className="text-right">
                <h4
                  className="text-[20px] font-semibold text-white"
                  style={{ fontFamily: HeadFontFamily }}
                >
                  Insightful Analytics
                </h4>
                <p className="text-white text-[14px] sm:text-[16.5px]">
                  Real-time data helps issuers understand engagement, track
                  performance, and improve credential strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
