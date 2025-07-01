import React from "react";
import { HeadFontFamily } from "../../../CustomeComponents/Theme";
import { Button } from "@material-tailwind/react";

function CallToAction() {
  return (
    <div className="w-full md:h-[240px] py-16   flex justify-center items-center relative overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://www.31west.net/wp-content/uploads/2022/08/what-are-the-benefits-of-a-help-desk.jpg"
          alt="Background"
          className="w-full h-full object-cover"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#085d9e] bg-opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="container mx-auto px-4">
          <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between ">
            {/* Text */}
            <h2
              className="text-white text-3xl md:text-5xl font-semibold  text-left"
              style={{ fontFamily: HeadFontFamily }}
            >
              LET’S DISCUSS YOUR PROJECT TODAY
            </h2>

            {/* Button */}
            <Button
              size="md"
              className="sm:absolute relative rounded-full text-[14px] top-[2rem] md:top-0 md:right-[8rem] text-white bg-gradient-to-r from-[#085d9e] to-[#00c1de] font-semibold  hover:bg-gradient-to-r hover:from-white  hover:to-white hover:text-[#1273be] hover:border-[#2b3d8a] transition-all focus:outline-none focus:ring-0"
              style={{
                borderRadius: "30px",
                fontFamily: HeadFontFamily,
              }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
