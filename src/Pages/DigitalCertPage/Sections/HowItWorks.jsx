import React from "react";
import {
  HeadTextColor,
  HeadFontFamily,
} from "../../../CustomeComponents/Theme";
import { Button } from "@material-tailwind/react";
import BgImage from "../../../assets/Images/DigCertPage/how_it_work_bg.png";
import DesktopMob from "../../../assets//Images/DigCertPage/desktop-mob.png"
import Laptop from "../../../assets/Images/DigCertPage/Macbook.png"
import { Link } from "react-router-dom";

function HowItWorks() {
  return (
    <div className="relative w-full py-12 px-4 sm:px-6 lg:px-8 z-10 bg-white">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12 px-6">
          <h1
            className="sm:text-4xl text-2xl font-bold mb-6"
            style={{
              fontFamily: "Poppines, sans-serif",
              color: HeadTextColor,
              lineHeight: 1.2,
              textTransform: "uppercase",
            }}
          >
            <span className="text-[#1f1446]"> HOW IT</span> WORKS
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#085d9e] to-[#00c1de] mx-auto mb-10 rounded-full"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 px-4">
          {/* Left Image */}
          {/* Left Image with BG Effect */}
          <div
            className="md:w-1/2 w-full flex justify-center relative bg-no-repeat bg-center bg-contain"
            style={{
              backgroundImage: `url(${BgImage})`, 
              backgroundSize: "500px", // or "cover" or "contain"
              minHeight: "450px",
            }}
          >
            <img
              src={Laptop}
              alt="Dashboard preview"
              className="w-full max-w-[450px] object-contain h-auto z-10 relative"
            />
          </div>

          {/* Right Text Block */}
          <div className="md:w-1/2 w-full ">
            <h2 className="text-3xl text-[#085d9e] font-semibold mb-4">
              FOR ISSUERS
            </h2>
            <p className="text-color text-[15px] sm:text-[16.5px] mb-4">
              Leave behind outdated paper certificates and move to smart,
              digital badge management. Cloudstry’s platform lets you easily
              create, issue, store, and share verified digital badges that
              highlight skills, credentials, achievements, and real-world
              experiences.
            </p>

            <ul className="space-y-2 mb-6 text-gray-700">
              <li className="text-color text-[15px] sm:text-[16.5px]">
                <span>
                  <i className="fa fa-check-circle text-[#085d9e] "></i>
                  <i className="bi bi-check-circle-fill   me-2"></i>
                </span>{" "}
                100% secure and instantly verifiable
              </li>
              <li className="text-color text-[15px] sm:text-[16.5px]">
                <span>
                  <i className="fa fa-check-circle text-[#085d9e] "></i>
                  <i className="bi bi-check-circle-fill   me-2"></i>
                </span>{" "}
                Full control over badge validity, expiration, and skill-building
                pathways
              </li>
              <li className="text-color text-[15px] sm:text-[16.5px]">
                <span>
                  <i className="fa fa-check-circle text-[#085d9e] "></i>
                  <i className="bi bi-check-circle-fill   me-2"></i>
                </span>{" "}
                Blockchain-enabled for added trust and tamper-proof validation
              </li>
              <li className="text-color text-[15px] sm:text-[16.5px]">
                <span>
                  <i className="fa fa-check-circle text-[#085d9e] "></i>
                  <i className="bi bi-check-circle-fill   me-2"></i>
                </span>{" "}
                Real-time analytics and 24/7 performance tracking
              </li>
              <li className="text-color text-[15px] sm:text-[16.5px]">
                <span>
                  <i className="fa fa-check-circle text-[#085d9e] "></i>
                  <i className="bi bi-check-circle-fill   me-2"></i>
                </span>{" "}
                Multi-language support for global audiences
              </li>
              <li className="text-color text-[15px] sm:text-[16.5px]">
                <span>
                  <i className="fa fa-check-circle text-[#085d9e] "></i>
                  <i className="bi bi-check-circle-fill   me-2"></i>
                </span>{" "}
                Seamless LMS and CRM integration with powerful APIs
              </li>
            </ul>
            <Link to="/contact-us">
            <Button
              size="md"
              className="rounded-full text-[14px] text-white bg-gradient-to-r from-[#085d9e] to-[#00c1de] font-semibold flex flex-start"
              style={{
                borderRadius: "30px",
                fontFamily: HeadFontFamily,
              }}
            >
              TALK TO OUR EXPERTS
            </Button>
            </Link>
          </div>
        </div>
        {/* Image + Content Section */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 px-4 pt-[3rem]">
          {/* Left Text Block */}
          <div className="md:w-1/2 w-full">
            <h2 className="text-3xl text-[#085d9e] font-semibold mb-4">
              FOR EARNERS
            </h2>
            <p className="text-color text-[15px] sm:text-[16.5px] mb-4">
              Join a global network of professionals leveraging digital
              credentials to showcase their learning, skills, and growth.
            </p>

            <ul className="space-y-2 mb-6 text-gray-700">
              <li className="text-color text-[15px] sm:text-[16.5px]">
                <span>
                  <i className="fa fa-check-circle text-[#085d9e] "></i>
                  <i className="bi bi-check-circle-fill   me-2"></i>
                </span>{" "}
                Keep a detailed, verified record of your achievements and
                certifications
              </li>
              <li className="text-color text-[15px] sm:text-[16.5px]">
                <span>
                  <i className="fa fa-check-circle text-[#085d9e] "></i>
                  <i className="bi bi-check-circle-fill   me-2"></i>
                </span>{" "}
                Access your secure, cloud-based portfolio anytime, anywhere
              </li>
              <li className="text-color text-[15px] sm:text-[16.5px]">
                <span>
                  <i className="fa fa-check-circle text-[#085d9e] "></i>
                  <i className="bi bi-check-circle-fill   me-2"></i>
                </span>{" "}
                Use your own badge designs to create personalized, on-brand
                credentials
              </li>
              <li className="text-color text-[15px] sm:text-[16.5px]">
                <span>
                  <i className="fa fa-check-circle text-[#085d9e] "></i>
                  <i className="bi bi-check-circle-fill   me-2"></i>
                </span>{" "}
                Share instantly on LinkedIn, job portals, resumes, and email
                signatures
              </li>
            </ul>
            
            <Link to="/contact-us">
            <Button
              size="md"
              className="rounded-full text-[14px] text-white bg-gradient-to-r from-[#085d9e] to-[#00c1de] font-semibold flex flex-start"
              style={{
                borderRadius: "30px",
                fontFamily: HeadFontFamily,
              }}
            >
              TALK TO OUR EXPERTS
            </Button>
            </Link>
          </div>

          {/* Right Image */}
          <div
            className="md:w-1/2 w-full flex justify-center relative bg-no-repeat bg-center bg-contain"
            style={{
              backgroundImage: `url(${BgImage})`, // 👈 Replace with your real path
              backgroundSize: "500px", // or "cover" or "contain"
              minHeight: "450px",
            }}
          >
            <img
              src={DesktopMob}
              alt="Dashboard preview"
              className="w-full max-w-[450px] object-contain h-auto z-10 relative"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
