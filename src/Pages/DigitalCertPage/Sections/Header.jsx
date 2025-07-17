import React from "react";
import DigCertHeaderBg from "../../../assets/Images/DigCertPage/header_bg-2.svg";
import { Button } from "@material-tailwind/react";
import { HeadFontFamily } from "../../../CustomeComponents/Theme";

import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="relative w-full h-[26rem] sm:h-[34rem]">
      {/* Swiper starts here */}

      <img
        src={DigCertHeaderBg}
        alt="Background"
        className="absolute inset-0 w-[100%] h-[26rem] sm:h-[24rem] md:h-[34rem] object-cover lg:h-full sm:object-cover lg:object-cover -z-10"
        style={{ filter: "blur(0px)", objectPosition: "91% center" }}
      />

      <div className="absolute inset-0 w-full h-[26rem] sm:h-[34rem] bg-black/40 sm:bg-transparent -z-10"></div>

      <div className="flex flex-col md:flex-row items-start md:items-start justify-start md:justify-between px-6 md:px-16 pt-10 md:pt-20 ">
        <div className="w-full space-y-4 mt-24 ">
          <h2
            className="text-2xl md:text-[57px]  w-[95%] font-bold text-white"
            style={{ fontFamily: HeadFontFamily, lineHeight: "1.2" }}
          >
            DIGITAL CERTIFICATE <br /> SOLUTIONS
          </h2>
          <p className="text-white md:w-[70%] text-md md:text-[17.5px]">
            From Paper to Digital — The Smarter Way to Recognize Achievement
          </p>
          <div className="flex gap-4 pt-[2rem]">
            <Button
              size="md"
              className="rounded-full text-[14px] text-white bg-gradient-to-r from-[#085d9e] to-[#00c1de] font-semibold  "
              style={{
                borderRadius: "30px",
                fontFamily: HeadFontFamily,
              }}
            >
              Request a Demo
            </Button>
            <Button
              size="md"
              className="rounded-full text-[14px] sm:w-[10rem] text-white bg-gradient-to-r from-[#085d9e] to-[#00c1de] font-semibold "
              style={{
                borderRadius: "30px",
                fontFamily: HeadFontFamily,
              }}
            >
              Contact us  
            </Button>
          </div>
        </div>
      </div>

      {/* Play/Pause Button */}
    </div>
  );
}

export default Header;
