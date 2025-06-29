import React from "react";
import FooterBg from "../../../assets/WebsiteImages/Footer_bg.jpg";
import { HeadTextColor } from "../../../CustomeComponents/Theme";
import { SubTextFontFamily } from "../../../CustomeComponents/Theme";

function Introduction() {
  return (
    <div
      className="relative w-full py-12  px-4 sm:px-6 lg:px-8 z-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${FooterBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <h2
            className="sm:text-4xl text-3xl font-bold mb-6"
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
              className="text-color text-[16.5px] mb-3 text-center"
              style={{ fontFamily: SubTextFontFamily }}
            >
              At Cloudstry Technologies, we empower businesses with a diverse
              range of innovative IT products and services designed to meet
              modern challenges. From secure Digital Certification solutions for
              academic institutions and organizations, to smart Cattle Aadhaar
              systems for livestock identification, we help drive digital
              transformation across sectors.
            </p>
            <p
              className="text-color mb-3 text-[16.5px] text-center"
              style={{ fontFamily: SubTextFontFamily }}
            >
              Our expertise extends to 3PL (Third-Party Logistics) Solutions,
              offering intelligent demand planning and supply chain
              optimization, as well as IT consulting, software development, and
              staffing services that are tailored to fit your unique business
              needs. Whether you're looking to streamline operations, enhance
              data security, or scale efficiently, Cloudstry is your trusted
              technology partner.
            </p>
            <p
              className="text-color mb-3 text-[16.5px] text-center"
              style={{ fontFamily: SubTextFontFamily }}
            >
              At Cloudstry Technologies, we believe in building lasting
              partnerships by delivering reliable, future-ready solutions. Our
              commitment to quality, innovation, and customer success ensures
              that every product and service we offer not only meets industry
              standards but also exceeds expectations. Let us help you stay
              ahead in a fast-evolving digital world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
