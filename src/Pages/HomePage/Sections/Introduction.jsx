import React from "react";
import IntroBG from "../../../assets/Images/HomePage/why_choose_us.svg";
import { HeadTextColor } from "../../../CustomeComponents/Theme";
import { SubTextFontFamily } from "../../../CustomeComponents/Theme";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

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
            <p className="text-color mb-3 sm:text-[16.5px] text-[15px] text-justify  sm:text-center">
              <strong>What Makes Us Different:</strong>
            </p>

            <p
              className="text-color mb-1 sm:text-[16.5px]  text-[15px] text-justify  sm:text-center cursor-pointer"
              style={{ fontFamily: SubTextFontFamily }}
            >
              <li>
                <strong>Ready for the Future:</strong> We help you grow and
                succeed in a digital-first world.
              </li>
            </p>

            <p
              className="text-color mb-1 sm:text-[16.5px]  text-[15px] text-justify  sm:text-center cursor-pointer"
              style={{ fontFamily: SubTextFontFamily }}
            >
              <li>
                <strong>Real Results: </strong>Everything we build is designed
                to give clear, useful outcomes.
              </li>
            </p>

            <p
              className="text-color mb-1 sm:text-[16.5px]  text-[15px] text-justify  sm:text-center cursor-pointer"
              style={{ fontFamily: SubTextFontFamily }}
            >
              <li>
                <strong>Creative Thinking:</strong> We use fresh ideas and smart
                tools to solve everyday problems.
              </li>
            </p>

            <p
              className="text-color mb-1 sm:text-[16.5px]  text-[15px] text-justify  sm:text-center cursor-pointer"
              style={{ fontFamily: SubTextFontFamily }}
            >
              <li>
                <strong>Smarter Workflows:</strong> Our solutions help you save
                time, reduce effort, and work more smoothly.
              </li>
            </p>
            {/* <p
              className="text-color mb-3 sm:text-[16.5px] text-[15px] text-justify  sm:text-center"
              style={{ fontFamily: SubTextFontFamily }}
            >
              At Cloudstry Technologies, we believe in building lasting
              partnerships by delivering reliable, future-ready solutions. Our
              commitment to quality, innovation, and customer success ensures
              that every product and service we offer not only meets industry
              standards but also exceeds expectations. Let us help you stay
              ahead in a fast-evolving digital world.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
