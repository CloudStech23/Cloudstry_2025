import React from "react";
import {
  HeadTextColor,
  SubTextFontFamily,
  gradientBG,
  HeadFontFamily,
} from "../../../CustomeComponents/Theme";

import GlobalPresenseIMG from "../../../assets/Images/HomePage/Map.svg";
import { TbWorld } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdAutoGraph, MdWatchLater } from "react-icons/md";

function GlobalPresene() {
  return (
    <div className="w-full bg-white">
      <main className="px-4 sm:px-6 lg:px-0 py-12 mx-auto">
        <div className="text-center px-4 mb-12">
          <h3
            className="text-2xl sm:text-4xl font-bold mb-6"
            style={{ fontFamily: "Poppines, sans-serif", color: HeadTextColor }}
          >
            OUR GLOBAL <span className="text-[#1f1446]">PRESENCE</span>
          </h3>

          <div className="w-24 h-1.5 bg-gradient-to-r from-[#085d9e] to-[#00c1de] mx-auto mb-10 rounded-full" />

          <h5
            className="text-[13.8px] sm:text-[16.5px] text-justify sm:text-center sm:w-[80%] lg:w-[77%] mx-auto font-medium text-color"
            style={{ fontFamily: SubTextFontFamily }}
          >
            With a growing footprint across continents, Cloudstry Tech delivers
            Digital Certification, Cattle Aadhaar, 3PL, Software, and IT
            Services to diverse industries worldwide. Our global presence
            enables us to tailor innovative, scalable solutions that meet local
            needs while driving universal digital transformation.
          </h5>

          {/* Image with overlay cards */}
          <div className="relative mt-10">
            <div
              className="overflow-hidden mx-auto rounded-xl"
              style={{ maxWidth: "1120px" }}
            >
              <img
                src={GlobalPresenseIMG}
                className="w-full h-[20rem] sm:h-[25rem] object-cover "
                alt="Our Global Presence"
                style={{ objectPosition: "center" }}
              />
            </div>

            {/* Cards Section */}
            <div className="absolute  bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[50%] w-full px-4 sm:px-6">
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 max-w-6xl mx-auto">
                {[
                  {
                    title: "Worldwide Clientele",
                    desc: "Serving diverse industries across continents with tailored IT solutions.",
                    icon: <TbWorld size={25} color="white" />,
                  },
                  {
                    title: "Multicultural Expertise",
                    desc: "Delivering culturally aligned strategies through a globally diverse team.",
                    icon: <FaPeopleGroup size={25} color="white" />,
                  },
                  {
                    title: "24/7 Support",
                    desc: "Round-the-clock assistance enabled by our international support network.",
                    icon: <MdWatchLater size={25} color="white" />,
                  },
                  {
                    title: "Scalable Solutions",
                    desc: "Flexible solutions that grow with your business—anywhere in the world.",
                    icon: <MdAutoGraph size={25} color="white" />,
                  },
                ].map((card, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-tr-[28px] rounded-bl-[28px] border-[6px] border-b-[#085d9e] border-t-0 border-r-0 border-l-[#00c1de] shadow-md p-3 sm:p-5 w-[10rem] sm:w-[15.62rem] flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2"
                  >
                    <div
                      className="sm:w-12 sm:h-12 w-9 h-9 rounded-full flex items-center justify-center mb-3"
                      style={{ background: gradientBG }}
                    >
                      {card.icon}
                    </div>
                    <h3
                      className="font-bold mb-1 text-[13px] sm:text-[16px]"
                      style={{ fontFamily: HeadFontFamily }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-color text-[12px] sm:text-[14px]">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default GlobalPresene;
