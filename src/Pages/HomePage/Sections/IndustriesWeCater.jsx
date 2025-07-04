import React from "react";
import {
  HeadFontFamily,
  HeadTextColor,
  SubTextFontFamily,
} from "../../../CustomeComponents/Theme";
import bgimg from "../../../assets/Images/HomePage/industries_bg.svg";

function IndustriesWeCater() {
  return (
    <div>
      <main className="relative px-4 sm:px-6 lg:px-0 py-12 pb-2 mx-auto">
        <div className="absolute inset-0 -z-10">
          <img
            src={bgimg}
            alt="Background"
            className="w-full h-full object-cover"
            style={{ objectPosition: "top" }}
          />
          {/* Optional Overlay */}
          <div className="absolute inset-0  opacity-60"></div>
        </div>
        <div className="text-center  px-4  ">
          {" "}
          {/*#efefef*/}
          <h3
            className="sm:text-4xl text-2xl font-bold  sm:leading-none mb-6"
            style={{
              fontFamily: "Poppines, sans-serif",
              color: HeadTextColor,
            }}
          >
            INDUSTRIES <span className="text-[#1f1446]">WE CATER TO</span>
          </h3>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#085d9e] to-[#00c1de] mx-auto mb-10 rounded-full"></div>
          <h5
            className="sm:text-[16.5px] text-[14px] mt-2 text-justify  sm:w-[60%] lg:w-[72%] font-medium text-color sm:text-center mx-auto"
            style={{ fontFamily: SubTextFontFamily }}
            // as of now we consider the font as a medium
          >
            At Cloudstry Tech, we tailor our solutions to meet the distinct
            challenges of each industry. With deep expertise, we drive smarter
            decisions, faster processes, and more efficient operations -
            enabling true digital transformation and seamless technology
            integration across every sector.
          </h5>
          <div className="flex flex-wrap justify-center gap-6 mt-14">
            {/* <img src={educationimg} alt="" className="object-contain " /> */}
            <div className="relative sm:w-[210px] w-[230px] hover-card rounded-xl bg-white p-5 pt-10 pb-6">
              <h4
                className="text-xl font-bold  text-center"
                style={{ fontFamily: HeadFontFamily }}
              >
                EDUCATION
              </h4>
              <p
                className="text-color text-[15px] hover-card-text mt-2 text-center"
                style={{ fontFamily: SubTextFontFamily }}
              >
                We empower educational institutions with secure digital
                certification platforms that simplify credential issuance,
                improve verification, and support lifelong learning.
              </p>
            </div>
            <div className="relative sm:w-[210px] w-[230px] hover-card rounded-xl bg-white p-5 pt-10 pb-6">
              <h4
                className="text-xl font-bold  text-center"
                style={{ fontFamily: HeadFontFamily }}
              >
                UTILITIES
              </h4>
              <p
                className="text-color text-[15px] hover-card-text mt-2 text-center"
                style={{ fontFamily: SubTextFontFamily }}
              >
                Our IT solutions enhance operational visibility, automate
                workflows, and enable smarter resource planning for reliable and
                cost-effective utility services.
              </p>
            </div>
            <div className="relative sm:w-[210px] w-[230px] hover-card rounded-xl bg-white p-5 pt-10 pb-6">
              <h4
                className="text-xl font-bold  text-center"
                style={{ fontFamily: HeadFontFamily }}
              >
                GOVERNMENT
              </h4>
              <p
                className="text-color text-[15px] hover-card-text mt-2 text-center"
                style={{ fontFamily: SubTextFontFamily }}
              >
                We support governance with platforms like Cattle Aadhaar,
                driving transparency, traceability, and efficient delivery of
                subsidies and welfare schemes.
              </p>
            </div>
            <div className="relative sm:w-[210px] w-[230px] hover-card rounded-xl bg-white p-5 pt-10 pb-6">
              <h4
                className="text-xl font-bold  text-center"
                style={{ fontFamily: HeadFontFamily }}
              >
                LOGISTIC
              </h4>
              <p
                className="text-color text-[15px] hover-card-text mt-2 text-center"
                style={{ fontFamily: SubTextFontFamily }}
              >
                Our demand management and 3PL solutions optimize inventory,
                forecasting, and fulfilment -boosting agility and reducing
                operational costs in supply chains
              </p>
            </div>
            <div className="relative sm:w-[210px] w-[230px] hover-card rounded-xl bg-white p-5 pt-10 pb-6">
              <h4
                className="text-xl font-bold  text-center"
                style={{ fontFamily: HeadFontFamily }}
              >
                HEALTH CARE
              </h4>
              <p
                className="text-color text-[15px] hover-card-text mt-2 text-center"
                style={{ fontFamily: SubTextFontFamily }}
              >
                We streamline healthcare IT with customized software, data
                integration, and secure infrastructure to improve patient care
                and administrative efficiency.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default IndustriesWeCater;
