import React from "react";
import { HeadTextColor } from "../../../CustomeComponents/Theme";

function OurCustomers() {
  return (
    <div className="mt-5">
      <main className=" px-4 sm:px-6 lg:px-0 pb-2  mx-auto bg-[#efefef] rounded-tr-[80px]">
        <div className="text-center  py-12 px-4">
          <h3
            className="sm:text-4xl text-2xl font-bold  sm:leading-none mb-6"
            style={{
              fontFamily: "Poppines, sans-serif",
              color: HeadTextColor,
            }}
          >
            <span className="text-[#1f1446]">OUR HAPPY</span> CUSTOMERS
          </h3>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#085d9e] to-[#00c1de] mx-auto mb-10 rounded-full"></div>

          <div className="flex flex-wrap justify-center gap-4 mt-8 max-w-6xl mx-auto">
            {[
              {
                person_name: "Joshua J.",
                desc: "Impressive range of features sets it apart as the ultimate solution for certificate verification. Their enterprise plan, along with customizable options, caters to diverse company needs, making it an awesome choice.",
                designation: "Chief Learning Officer",
                img: "https://www.kindpng.com/picc/m/719-7191738_round-png-image-man-transparent-png.png",
              },
              {
                person_name: "Joshua J.",
                desc: "Impressive range of features sets it apart as the ultimate solution for certificate verification. Their enterprise plan, along with customizable options, caters to diverse company needs, making it an awesome choice.",
                designation: "Chief Learning Officer ",
                img: "https://www.seekpng.com/png/detail/812-8125927_meg-circle-girl.png",
              },
              {
                person_name: "Joshua J.",
                desc: "Impressive range of features sets it apart as the ultimate solution for certificate verification. Their enterprise plan, along with customizable options, caters to diverse company needs, making it an awesome choice.",
                designation: "Chief Learning Officer",
                img: "https://www.kindpng.com/picc/m/719-7191738_round-png-image-man-transparent-png.png",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative bg-white shadow-md rounded-xl py-6 px-4 max-w-[300px] mx-auto overflow-hidden"
              >
                {/* Top-left quote */}
                <div className="absolute top-2 left-3 text-3xl text-gray-400 leading-none select-none">
                  &ldquo;
                </div>

                {/* Bottom-right quote */}
                <div className="absolute bottom-2 right-3 text-3xl text-gray-400 leading-none select-none">
                  &rdquo;
                </div>

                {/* Top horizontal line */}
                <div className="absolute top-4 left-10 right-10 h-[2px] bg-gray-300 opacity-50" />

                {/* Card content */}
                <div className="text-gray-600 text-sm mb-4 italic relative z-10">
                  {item?.desc}
                </div>

                <div className="flex mt-6 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
                    <img
                      src={item.img}
                      alt=""
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-left">
                      {item.person_name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {item.designation}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default OurCustomers;
