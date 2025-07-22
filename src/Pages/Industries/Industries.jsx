import React from "react";
import { HeadFontFamily } from "../../CustomeComponents/Theme";
import BgBanner from "../../assets/Images/Industries/Industries_page_banner.svg";

function Industries() {
  return (
    <div className="w-full">
        {/* Header Section */}
      <div className="relative w-full h-[26rem] sm:h-[21.5rem]">
        {/* Background Image */}
        <img
          src={BgBanner}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-[71%_center] -z-10"
          style={{ filter: "blur(0px)" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 -z-10"></div>

        {/* Centered Text */}
        <div className="flex items-center justify-center h-full px-6 text-center">
          <h2
            className="text-3xl sm:text-5xl md:text-[57px] font-bold text-white mt-[6.5rem] uppercase"
            style={{ fontFamily: HeadFontFamily, lineHeight: "1.2" }}
          >
            industries we serve
          </h2>
        </div>
      </div>


      
    </div>
  );
}

export default Industries;
