import React from "react";
import IntroBG from "../../../assets/Images/HomePage/Introduction_Bg-2.svg";
import { HeadTextColor } from "../../../CustomeComponents/Theme";
import { SubTextFontFamily } from "../../../CustomeComponents/Theme";

function Introduction() {
  return (
    <div className="relative w-full py-12 px-4 sm:px-6 lg:px-8 z-10">
      {/* Background Image */}
      <img
        src={IntroBG}
        alt="Introduction Background"
        className="absolute inset-0 w-full h-[25rem] sm:h-[30rem] object-cover z-0 opacity-90"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto">
        <div className="text-center mb-6">
          <h2
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
          </h2>

          <div className="w-24 h-1.5 bg-gradient-to-r from-[#085d9e] to-[#00c1de] mx-auto mb-10 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="p-4 rounded-xl">
            <p
              className="text-color mb-3 sm:text-[16.5px] text-[15px] text-justify  sm:text-center"
              style={{ fontFamily: SubTextFontFamily }}
            >
              At Cloudstry Technologies, we blend creative innovation,
              cutting-edge technology, and deep industry expertise to develop
              intelligent, future-ready solutions. Our mission is to build smart
              digital systems that not only connect people and processes but
              also simplify complex challenges, enhance operational efficiency,
              and drive meaningful digital transformation. By aligning modern
              tools with real-world needs, we empower organizations to solve
              problems, make informed decisions, and stay ahead in today’s
              dynamic digital landscape.
            </p>
            <p
              className="text-color mb-3 sm:text-[16.5px] text-[15px] text-justify  sm:text-center"
              style={{ fontFamily: SubTextFontFamily }}
            >
              Our diverse portfolio includes AI/ML-powered platforms such as
              Cattle Aadhaar for livestock traceability and 3PL Logistics
              Solutions that optimize supply chain forecasting and fulfillment.
              We also provide secure digital certification systems for
              verifiable badges and credentials, custom software development, IT
              strategy consulting, and on-demand staffing services. Every
              solution we offer is designed to scale with your business and
              deliver measurable impact — helping you grow, adapt, and lead with
              confidence in a fast-evolving world.
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
