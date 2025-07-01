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
    <div>
      <main className=" px-4 sm:px-6 lg:px-0 pb-2  py-12   mx-auto ">
        <div className="text-center mb-[11rem] px-4">
          <h2
            className="sm:text-4xl text-3xl font-bold  sm:leading-none mb-6"
            style={{
              fontFamily: "Poppines, sans-serif",
              color: HeadTextColor,
            }}
          >
            OUR GLOBAL <span className="text-[#1f1446]">PRESENCE</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#085d9e] to-[#00c1de] mx-auto mb-10 rounded-full"></div>
          <h5
            className="sm:text-[16.5px] mt-2  text-sm sm:w-[60%] lg:w-[72%] font-medium text-color text-center mx-auto"
            style={{ fontFamily: SubTextFontFamily }}
            // as of now we consider the font as a medium
          >
            Cloudstry Tech proudly serves clients across multiple regions,
            delivering consistent quality and innovation worldwide. Our global
            footprint enables us to understand diverse market needs and offer
            localized solutions with a global perspective.
          </h5>

          <div className="relative">
            {/* Hero area */}
            <div
              className="h-[25rem] max-w-7xl  mx-auto  overflow-hidden "
              style={{ borderRadius: "20px" }}
            >
              {/* Replace with your image if you like */}
              {/* <img
                      src={GlobalPresenseIMG}
                      className="object-contain w-full h-full"
                    /> */}

              <div
                className="h-[] max-w-7xl  mx-auto mt-[4rem] overflow-hidden "
                style={{ borderRadius: "20px" }}
              >
                {/* Replace with your image if you like */}
                <img
                  src={GlobalPresenseIMG}
                  className="object-contain w-full h-full"
                />
                {/* 
                      <iframe
                        src="https://www.google.com/maps/d/u/0/embed?mid=1aIkH6T142_qS7gPQLRMCVWFOZLQjDCQ&ehbc=2E312F&noprof=1"
                        width="100%"
                        height="400"
                        allowFullScreen="false"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe> */}
              </div>
            </div>

            {/* Cards wrapper */}
            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-[75%] flex flex-wrap justify-center gap-[2.4rem] px-4 w-full max-w-6xl mx-auto">
              {/* Card 1 */}
              <div className="bg-white rounded-tr-[28px] rounded-bl-[28px] border-[6px] border-b-[#085d9e] border-t-0 border-r-0  border-l-[#085d9e] border-l-[#00c1de]-500 shadow-lg p-5 w-[250px] flex flex-col items-center text-center transition-transform duration-300 hover:translate-y-[-10px]  ">
                <div
                  className="w-12 h-12 rounded-full  flex items-center justify-center mb-3"
                  style={{ background: gradientBG }}
                >
                  <TbWorld size={25} color="white" />
                </div>
                <h3
                  className="font-bold mb-1"
                  style={{ fontFamily: HeadFontFamily }}
                >
                  Worldwide Clientele
                </h3>
                <p className="text-color text-center">
                  We collaborate with businesses across continents, spanning
                  various industries and sectors
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-tr-[28px] rounded-bl-[28px] border-[6px] border-b-[#085d9e] border-t-0 border-r-0  border-l-[#085d9e] border-l-[#00c1de]-500 shadow-lg p-5 w-[250px] flex flex-col items-center text-center transition-transform duration-250 hover:translate-y-[-10px]    ">
                <div
                  className="w-12 h-12 rounded-full  flex items-center justify-center mb-3"
                  style={{ background: gradientBG }}
                >
                  <FaPeopleGroup size={25} color="white" />
                </div>
                <h3
                  className="font-bold mb-1"
                  style={{ fontFamily: HeadFontFamily }}
                >
                  Multicultural Expertise
                </h3>
                <p className="text-color text-center">
                  Our team’s diverse background helps us tailor solutions that
                  respect local cultures and business practices
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-tr-[28px] rounded-bl-[28px] border-[6px] border-b-[#085d9e] border-t-0 border-r-0  border-l-[#085d9e] border-l-[#00c1de]-500 shadow-lg p-5 w-[250px] flex flex-col items-center text-center transition-transform duration-250 hover:translate-y-[-10px]   ">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                  style={{ background: gradientBG }}
                >
                  <MdWatchLater size={25} color="white" />
                </div>
                <h3
                  className="font-bold mb-1"
                  style={{ fontFamily: HeadFontFamily }}
                >
                  24/7 Support
                </h3>
                <p className="text-color text-center">
                  With offices and partners around the globe, we provide
                  round-the-clock assistance and seamless communication
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-tr-[28px] rounded-bl-[28px] border-[6px] border-b-[#085d9e] border-t-0 border-r-0  border-l-[#085d9e] border-l-[#00c1de]-500 shadow-lg p-5 w-[250px] flex flex-col items-center text-center transition-transform duration-250 hover:translate-y-[-10px]   ">
                <div
                  className="w-12 h-12 rounded-full  flex items-center justify-center mb-3"
                  style={{ background: gradientBG }}
                >
                  <MdAutoGraph size={25} color="white" />
                </div>
                <h3
                  className="font-bold mb-1"
                  style={{ fontFamily: HeadFontFamily }}
                >
                  Scalable Solutions
                </h3>
                <p className="text-color text-center">
                  Whether a startup or enterprise, our solutions adapt to your
                  needs regardless of location
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default GlobalPresene;
