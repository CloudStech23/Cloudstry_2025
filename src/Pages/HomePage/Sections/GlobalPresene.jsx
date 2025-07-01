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
          <h2
            className="text-2xl sm:text-4xl font-bold mb-6"
            style={{ fontFamily: "Poppines, sans-serif", color: HeadTextColor }}
          >
            OUR GLOBAL <span className="text-[#1f1446]">PRESENCE</span>
          </h2>

          <div className="w-24 h-1.5 bg-gradient-to-r from-[#085d9e] to-[#00c1de] mx-auto mb-10 rounded-full" />

          <h5
            className="text-[13.8px] sm:text-[16.5px] text-justify sm:text-center sm:w-[80%] lg:w-[72%] mx-auto font-medium text-color"
            style={{ fontFamily: SubTextFontFamily }}
          >
            Cloudstry Tech proudly serves clients across multiple regions,
            delivering consistent quality and innovation worldwide. Our global
            footprint enables us to understand diverse market needs and offer
            localized solutions with a global perspective.
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
                alt="Global Presence Map"
                style={{ objectPosition: "center" }}
              />
            </div>

            {/* Cards Section */}
            <div className="absolute  bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[50%] w-full px-4 sm:px-6">
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 max-w-6xl mx-auto">
                {[
                  {
                    title: "Worldwide Clientele",
                    desc: "We collaborate with businesses across continents, spanning various industries and sectors",
                    icon: <TbWorld size={25} color="white" />,
                  },
                  {
                    title: "Multicultural Expertise",
                    desc: "Our team’s diverse background helps us tailor solutions that respect local cultures and business practices",
                    icon: <FaPeopleGroup size={25} color="white" />,
                  },
                  {
                    title: "24/7 Support",
                    desc: "With offices and partners around the globe, we provide round-the-clock assistance and seamless communication",
                    icon: <MdWatchLater size={25} color="white" />,
                  },
                  {
                    title: "Scalable Solutions",
                    desc: "Whether a startup or enterprise, our solutions adapt to your needs regardless of location",
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
