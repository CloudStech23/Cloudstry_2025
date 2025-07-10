import React from "react";
import {
  HeadTextColor,
  HeadFontFamily,
} from "../../../CustomeComponents/Theme";
import IntroIMG from "../../../assets/Images/DigCertPage/Introduction_Image.png";
import { Button } from "@material-tailwind/react";

function Introduction() {
  return (
    <div className="relative w-full py-12 px-4 sm:px-6 lg:px-8 z-10">
      {/* Background Image */}

      {/* Content */}
      <div className="relative z-10 mx-auto">
        <div className="text-center mb-6 px-6">
          <h1
            className="sm:text-4xl text-2xl font-bold mb-6"
            style={{
              fontFamily: "Poppines, sans-serif",
              color: HeadTextColor,
              lineHeight: 1.2,
              textTransform: "uppercase",
            }}
          >
            NEXT-GEN CREDENTIAL MANAGEMENT{" "}
            <span className="text-[#1f1446]">
              SOFTWARE TO ISSUE, MANAGE & SHARE DIGITAL BADGES & CERTFICATES
            </span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#085d9e] to-[#00c1de] mx-auto mb-10 rounded-full"></div>

          <div className="flex flex-col md:flex-row items-start justify-start px-4 md:px-16 pt-10 md:pt-10 space-y-6 md:space-y-0 md:space-x-10">
            {/* Left Image */}
            <div className="w-full md:w-1/2 mt-[0.5rem]">
              <img
                src={IntroIMG}
                alt="Descriptive Alt"
                className="w-[32rem] h-[25rem] "
              />
            </div>

            {/* Right Paragraphs */}
            <div className="w-full md:w-1/2 space-y-4  ">
              <p className="text-color text-[15px] sm:text-[16.5px] text-justify">
                At Cloudstry Technologies, we offer a powerful, next-gen digital
                credential management software designed specifically for
                universities, institutions, and organizations. Our innovative
                solution helps you go paperless, streamline the credentialing
                process, and ensure your badges and certificates are secure,
                verifiable, and easy to manage.
              </p>
              <p className="text-color text-[15px] sm:text-[16.5px] text-justify">
                Whether you're awarding academic degrees, professional
                certifications, or skill-based training completions, Cloudstry
                provides a verifiable digital credentials platform backed by
                Blockchain technology and inscription-based storage, adding an
                extra layer of transparency and trust.
              </p>
              <p className="text-color text-[15px] sm:text-[16.5px] text-justify">
                Say goodbye to paper clutter and embrace a secure, eco-friendly,
                and future-ready way of handling credentials with Cloudstry’s
                digital certification platform.
              </p>

              <div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
