import React from "react";
import RequestDemoBanner from "../../../assets/Images/DigCertPage/Request_demo_banner.svg";
import { gradientBG, HeadFontFamily } from "../../../CustomeComponents/Theme";

function RequestDemo() {
  return (
    <div className="w-full overflow-hidden">
      {/* Header section remains unchanged */}
      <div className="relative w-full h-[26rem] sm:h-[21.5rem]">
        {/* Background Image */}
        <img
          src={RequestDemoBanner}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-[71%_center] -z-10"
          style={{ filter: "blur(0px)" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 -z-10"></div>

        {/* Centered Text */}
        <div className="flex items-center justify-center h-full px-6 text-center">
          <h2
            className="text-3xl sm:text-5xl md:text-[57px] font-bold text-white mt-[6.5rem] uppercase"
            style={{ fontFamily: HeadFontFamily, lineHeight: "1.2" }}
          >
            Request a demo
          </h2>
        </div>
      </div>

      {/* Main content section - improved layout */}
      <div className="w-full flex justify-center">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center">
            {/* Left Column - Content */}
            <div className="w-full lg:w-1/2 px-4 pb-8 lg:pb-0 lg:pr-8">
              <h1
                className="text-3xl md:text-4xl font-bold text-[#085d9e] pb-6 font-montserrat-bold text-center lg:text-left"
                style={{ fontFamily: HeadFontFamily }}
              >
                Discover what Cloudstry Tech{" "}
                <span className="text-[#1f1446]">
                  can do for you and your organization
                </span>
              </h1>

              <div className="space-y-6">
                <p className="text-lg md:text-xl text-gray-600 font-montserrat-medium text-center lg:text-left">
                  We’re glad you’re here and interested in exploring how our
                  secure, verifiable{" "}
                  <a
                    href="/digital-certificate"
                    
                    rel="noopener noreferrer"
                    className="text-blue-500 underline font-semibold hover:text-blue-600"
                  >
                    digital certificate solutions
                  </a>{" "}
                  can streamline your credentialing process.
                </p>

                <p className="text-lg md:text-xl text-gray-600 font-montserrat-medium text-center lg:text-left">
                  Whether you're an educational institution, corporate
                  organization, or training provider, our platform is designed
                  to simplify certificate management, enhance recognition, and
                  build trust with tamper-proof digital credentials.
                </p>
                <p className="italic text-[15px] sm:text-[17px] text-[#1f1446] font-montserrat-medium text-center lg:text-left " style={{fontFamily:HeadFontFamily}}>
                  To get started, Kindly fill out the form.
                </p>

                <p
                  className="text-[16px] md:text-[35px] text-[#1f1446] font-montserrat-medium text-center lg:text-left"
                  style={{ fontFamily: "Abril Fatface, serif",letterSpacing:"1.6px" }}
                >
                  Experience the future of digital credentialing — one demo away!
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="w-full lg:w-1/2 px-4">
              <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden max-w-2xl mx-auto lg:mx-0">
                <div className="bg-[#085d9e] py-3 px-4 text-center">
                  <h2
                    className="text-white text-xl font-bold font-montserrat-bold uppercase"
                    style={{ fontFamily: HeadFontFamily }}
                  >
                    Contact us
                  </h2>
                </div>
                <form className="p-5">
                  <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    <div className="w-full sm:w-1/2">
                      <input
                        type="text"
                        placeholder="First name*"
                        required
                        className="w-full px-4 py-3 rounded bg-gray-100 border border-gray-200 text-base md:text-lg text-gray-700 font-montserrat-medium"
                      />
                    </div>
                    <div className="w-full sm:w-1/2">
                      <input
                        type="text"
                        placeholder="Last name*"
                        required
                        className="w-full px-4 py-3 rounded bg-gray-100 border border-gray-200 text-base md:text-lg text-gray-700 font-montserrat-medium"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    <div className="w-full sm:w-1/2">
                      <input
                        type="text"
                        placeholder="Organization*"
                        required
                        className="w-full px-4 py-3 rounded bg-gray-100 border border-gray-200 text-base md:text-lg text-gray-700 font-montserrat-medium"
                      />
                    </div>
                    <div className="w-full sm:w-1/2">
                      <input
                        type="text"
                        placeholder="Job Title*"
                        required
                        className="w-full px-4 py-3 rounded bg-gray-100 border border-gray-200 text-base md:text-lg text-gray-700 font-montserrat-medium"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <input
                      type="email"
                      placeholder="Work Email*"
                      required
                      className="w-full px-4 py-3 rounded bg-gray-100 border border-gray-200 text-base md:text-lg text-gray-700 font-montserrat-medium"
                    />
                  </div>

                  <div className="mb-4">
                    <input
                      type="tel"
                      placeholder="Phone number*"
                      required
                      className="w-full px-4 py-3 rounded bg-gray-100 border border-gray-200 text-base md:text-lg text-gray-700 font-montserrat-medium"
                    />
                  </div>

                  <div className="mb-4">
                    <select
                      required
                      className="w-full px-4 py-3 rounded bg-gray-100 border border-gray-200 text-base md:text-lg text-gray-700 font-montserrat-medium appearance-none"
                    >
                      <option value="" disabled selected>
                        Where are you on your digital badging journey?*
                      </option>
                      <option>Starting to explore digital badging</option>
                      <option>
                        Discussing internally about programs for digital badging
                      </option>
                      <option>Searching for vendors</option>
                      <option>Ready to implement</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <select
                      required
                      className="w-full px-4 py-3 rounded bg-gray-100 border border-gray-200 text-base md:text-lg text-gray-700 font-montserrat-medium appearance-none"
                    >
                      <option value="" disabled selected>
                        How many earners will you be issuing badges to?*
                      </option>
                      <option>Less than 200 earners</option>
                      <option>200 - 500 earners</option>
                      <option>500 - 1000 earners</option>
                      <option>1000 - 2000 earners</option>
                      <option>More than 2000 earners</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <textarea
                      placeholder="Message*"
                      required
                      className="w-full px-4 py-3 rounded bg-gray-100 border border-gray-200 text-base md:text-lg text-gray-700 font-montserrat-medium h-32"
                    ></textarea>
                  </div>

                  <div className="flex justify-center ">
                    <button
                      className=" px-4 py-2 rounded-full  text-lg text-white bg-gradient-to-r from-[#085d9e] to-[#00c1de] font-semibold  hover:bg-to-r hover:from-white hover:shadow-md  hover:to-white hover:text-[#1273be] hover:border-[#085d9e] transition-all duration-300"
                      type="submit"
                      style={{ width: "10rem" }}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestDemo;
