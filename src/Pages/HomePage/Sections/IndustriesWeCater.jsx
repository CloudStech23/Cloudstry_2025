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
          <h2
            className="sm:text-4xl text-2xl font-bold  sm:leading-none mb-6"
            style={{
              fontFamily: "Poppines, sans-serif",
              color: HeadTextColor,
            }}
          >
            INDUSTRIES <span className="text-[#1f1446]">WE CATER TO</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#085d9e] to-[#00c1de] mx-auto mb-10 rounded-full"></div>
          <h5
            className="sm:text-[16.5px] text-[14px] mt-2 text-justify  sm:w-[60%] lg:w-[72%] font-medium text-color sm:text-center mx-auto"
            style={{ fontFamily: SubTextFontFamily }}
            // as of now we consider the font as a medium
          >
            At Cloudstry Tech, we customize our solutions to meet the unique
            challenges of a wide range of industries. Our expertise ensures that
            every sector benefits from digital transformation, enhanced
            efficiency, and seamless integration.
          </h5>
          <div className="flex flex-wrap justify-center gap-6 mt-14">
            {/* <img src={educationimg} alt="" className="object-contain " /> */}
            <div className="relative sm:w-[210px] w-[230px] hover-card rounded-xl bg-white p-5 pt-10 pb-6">
              <h2
                className="text-xl font-bold  text-center"
                style={{ fontFamily: HeadFontFamily }}
              >
                EDUCATION
              </h2>
              <p
                className="text-color text-[15px] hover-card-text mt-2 text-center"
                style={{ fontFamily: SubTextFontFamily }}
              >
                We empower universities and higher education institutions with
                reliable Digital Certification solutions that simplify
                credential management and verification.
              </p>
            </div>
            <div className="relative sm:w-[210px] w-[230px] hover-card rounded-xl bg-white p-5 pt-10 pb-6">
              <h2
                className="text-xl font-bold  text-center"
                style={{ fontFamily: HeadFontFamily }}
              >
                UTILITIES
              </h2>
              <p
                className="text-color text-[15px] hover-card-text mt-2 text-center"
                style={{ fontFamily: SubTextFontFamily }}
              >
                From startups to multinational corporations, we provide secure
                and reliable Digital Certification services that validate
                credentials and build trust.
              </p>
            </div>
            <div className="relative sm:w-[210px] w-[230px] hover-card rounded-xl bg-white p-5 pt-10 pb-6">
              <h2
                className="text-xl font-bold  text-center"
                style={{ fontFamily: HeadFontFamily }}
              >
                GOVERNMENT
              </h2>
              <p
                className="text-color text-[15px] hover-card-text mt-2 text-center"
                style={{ fontFamily: SubTextFontFamily }}
              >
                We support institutions with scalable technology and trusted
                Digital Certification solutions to ensure compliance and secure
                record-keeping.
              </p>
            </div>
            <div className="relative sm:w-[210px] w-[230px] hover-card rounded-xl bg-white p-5 pt-10 pb-6">
              <h2
                className="text-xl font-bold  text-center"
                style={{ fontFamily: HeadFontFamily }}
              >
                LOGISTIC
              </h2>
              <p
                className="text-color text-[15px] hover-card-text mt-2 text-center"
                style={{ fontFamily: SubTextFontFamily }}
              >
                We support governments with secure digital services, including
                Cattle Aadhaar for efficient and reliable livestock and cattle
                identification.
              </p>
            </div>
            <div className="relative sm:w-[210px] w-[230px] hover-card rounded-xl bg-white p-5 pt-10 pb-6">
              <h2
                className="text-xl font-bold  text-center"
                style={{ fontFamily: HeadFontFamily }}
              >
                HEALTH CARE
              </h2>
              <p
                className="text-color text-[15px] hover-card-text mt-2 text-center"
                style={{ fontFamily: SubTextFontFamily }}
              >
                We optimize logistics operations with intelligent demand
                management, real-time tracking, and streamlined supply chain
                solutions.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default IndustriesWeCater;
