import React from "react";
import {
  HeadTextColor,
  HeadFontFamily,
} from "../../../CustomeComponents/Theme";
import IntroIMG from "../../../assets/Images/DigCertPage/Introduction_img.svg";
import { Button } from "@material-tailwind/react";

function Introduction() {
  return (
    <div className="relative w-full py-12 px-4 sm:px-6 lg:px-8 z-10">
      {/* Heading */}
      <div className="text-center mb-10 px-6">
        <h1
          className="sm:text-4xl text-2xl font-bold mb-6 uppercase"
          style={{
            fontFamily: "Poppines, sans-serif",
            color: HeadTextColor,
            lineHeight: 1.2,
          }}
        >
          NEXT-GEN CREDENTIAL MANAGEMENT{" "}
          <span className="text-[#1f1446]">
            SOFTWARE TO ISSUE, MANAGE & SHARE DIGITAL BADGES & CERTIFICATES
          </span>
        </h1>
        <div className="w-24 h-1.5 bg-gradient-to-r from-[#085d9e] to-[#00c1de] mx-auto rounded-full"></div>
      </div>

      <div className="space-y-4 max-w-6xl mx-auto">
        <p className="text-color text-[15px] sm:text-[16.5px] text-center lg:w-full">
          At Cloudstry Technologies, we offer a powerful, next-gen digital
          credential management software designed specifically for universities,
          institutions, and organizations. Our innovative solution helps you go
          paperless, streamline the credentialing process, and ensure your
          badges and certificates are secure, verifiable, and easy to manage.
        </p>
        <p className="text-color text-[15px] sm:text-[16.5px] text-center lg:w-full">
          Whether you're awarding academic degrees, professional certifications,
          or skill-based training completions, Cloudstry provides a verifiable
          digital credentials platform backed by Blockchain technology and
          inscription-based storage, adding an extra layer of transparency and
          trust.
        </p>
        <p className="text-color text-[15px] sm:text-[16.5px] text-center  lg:w-full">
          Say goodbye to paper clutter and embrace a secure, eco-friendly, and
          future-ready way of handling credentials with Cloudstry’s digital
          certification platform.
        </p>
      </div>

      {/* Full Width Image */}
      <div className="w-full mb-[-4rem] mt-6">
        <img
          src={IntroIMG}
          alt="Descriptive Alt"
          className="w-full max-h-[30rem] object-cover "
        />
      </div>

      {/* Paragraphs in Row */}

      {/* Button */}
      {/* <div className="text-center mt-6">
        <Button
          size="md"
          className="rounded-full text-[14px] text-white bg-gradient-to-r from-[#085d9e] to-[#00c1de] font-semibold"
          style={{
            borderRadius: "30px",
            fontFamily: HeadFontFamily,
          }}
        >
          TALK TO OUR EXPERTS
        </Button>
      </div> */}
    </div>
  );
}

export default Introduction;
