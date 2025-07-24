import React from "react";
import IntroBG from "../../../assets/Images/HomePage/why_choose_us.svg";
import {
  HeadTextColor,
  HeadFontFamily,
  gradientBG,
} from "../../../CustomeComponents/Theme";
import { SubTextFontFamily } from "../../../CustomeComponents/Theme";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";

const WhatsMakeDifferent = [
  {
    title: "Ready for the Future",
    description:
      "We help you grow and succeed in a digital-first world by building scalable, forward-thinking solutions that evolve with your needs.",
    icon: "",
  },
  {
    title: (
      <div>
        Creative <br /> Thinking
      </div>
    ),
    description:
      "We use fresh ideas and smart tools to solve everyday problems with innovative, practical approaches tailored to your business.",
    icon: "",
  },
  {
    title: "Deep Domain Expertise",
    description:
      "Our team brings years of industry-specific experience, enabling us to build solutions that align perfectly with your business goals.",
    icon: "",
  },
  {
    title: (
      <div>
        Agility & <br /> Speed
      </div>
    ),
    description:
      "We leverage automated tools and proven frameworks to accelerate product development and ensure faster time-to-market.",
    icon: "",
  },
  {
    title: "Trust & Transparency",
    description:
      "We believe in open communication, clear processes, and delivering what we promise - building relationships based on trust.",
    icon: "",
  },
];

function Introduction() {
  return (
    <div className="relative w-full py-12 px-4 sm:px-6 lg:px-8 z-10">
      {/* Background Image */}
      <img
        src={IntroBG}
        alt="Introduction Background"
        className="absolute inset-0 w-full h-[25rem] sm:h-[33rem] object-cover z-0 opacity-90"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto">
        <div className="text-center mb-6">
          <h1
            className="sm:text-4xl text-2xl font-bold mb-6"
            style={{
              fontFamily: "Poppines, sans-serif",
              color: HeadTextColor,
              lineHeight: 1.2,
              textTransform: "uppercase",
            }}
          >
            Bridging Gaps{" "}
            <span className="text-[#1f1446]">with Innovation,</span>
            <br />
            <span className="text-[#1f1446]">Technology & Expertise</span>
          </h1>

          <div className="w-24 h-1.5 bg-gradient-to-r from-[#085d9e] to-[#00c1de] mx-auto mb-10 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="p-4 rounded-xl">
            <p
              className="text-color mb-3 sm:text-[16.5px] text-[15px] text-justify  sm:text-center"
              style={{ fontFamily: SubTextFontFamily }}
            >
              At Cloudstry Technologies, we bring together creative ideas, smart
              technology, and strong industry knowledge to build digital
              solutions that are ready for the future. Our goal is to make
              complex processes easier, help systems and people work better
              together, and solve real problems in a practical way. Whether it’s
              improving how decisions are made, automating tasks, or helping
              businesses grow — we focus on using the right tools like AI,
              machine learning, and blockchain to meet modern needs. We support
              organizations in staying flexible, efficient, and ahead in today’s
              fast-changing digital world.
            </p>
          </div>
          <p
            className="text-[#1f1446]  sm:text-[25.5px] mt-[1.5rem] text-[15px] text-center  sm:text-center"
            style={{ fontFamily: HeadFontFamily }}
          >
            <strong>What Makes Us Different</strong>
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 mt-[2.5rem]">
            {WhatsMakeDifferent.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-tr-[28px] rounded-bl-[28px] border-[6px] border-b-[#085d9e] border-t-0 border-r-0 border-l-[#00c1de]   p-3 sm:p-5 w-[10rem] sm:w-[12.62rem] flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2"
                style={{ boxShadow: "#f4f4f4 0px 0px 6px 5px" }}
              >
                <div
                  className="sm:w-12 sm:h-12 w-9 h-9 rounded-full flex items-center justify-center mb-3"
                  style={{ background: gradientBG }}
                >
                  <IoMdCheckmark size={30} color="white" />
                </div>
                <h3
                  className="font-bold mb-1 text-[13px] sm:text-[16px]"
                  style={{ fontFamily: HeadFontFamily }}
                >
                  {item.title}
                </h3>
                <p className="text-color text-[12px] sm:text-[14px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
