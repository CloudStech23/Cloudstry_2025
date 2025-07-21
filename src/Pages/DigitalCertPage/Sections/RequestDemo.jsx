import React from "react";
import RequestDemoBanner from "../../../assets/Images/DigCertPage/Request_demo_banner.svg";
import { gradientBG, HeadFontFamily } from "../../../CustomeComponents/Theme";

function RequestDemo() {
  return (
    <div>
      <div className="relative w-full h-[26rem] sm:h-[21.5rem]  ">
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
        <div className="flex items-center justify-center h-full px-6 text-center ">
          <h2
            className="text-3xl sm:text-5xl md:text-[57px] font-bold text-white mt-[6.5rem] uppercase"
            style={{ fontFamily: HeadFontFamily, lineHeight: "1.2" }}
          >
            Request a demo
          </h2>
        </div>
      </div>
      <div className="container mx-auto py-16 max-w-7xl">
        <div className="flex flex-wrap -mx-4 items-center">
          {/* Left Column - Content */}
          <div className="w-full lg:w-1/2 px-4 pb-4">
            <h1
              className="text-4xl font-bold text-[#085d9e] pb-8 font-montserrat-bold"
              style={{ fontFamily: HeadFontFamily }}
            >
              Discover what BadgeCert{" "}
              <span className="text-[#1f1446]">
                can do for you and your organization
              </span>
            </h1>

            <p className="text-xl text-gray-600 pb-6 font-montserrat-medium">
              Hello! We are glad you are here and look forward to speaking with
              you.
            </p>

            <p className="text-xl text-gray-600 pb-6 font-montserrat-medium">
              <a
                href="https://us06web.zoom.us/webinar/register/8517234566342/WN_VcgUh35fRh6g0jd_DEP7YQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline font-semibold hover:text-blue-600"
              >
                To participate in BadgeCert's next live demo on July 24, please
                register here.
              </a>{" "}
              It's the best way to quickly learn what BadgeCert does, how it
              differs from other platforms, how it will benefit your
              organization, and ask your questions.
            </p>

            <p className="text-xl text-gray-600 pb-6 font-montserrat-medium">
              Alternatively, you can request a 1:1 demo with one of our advisors
              or inquire about enterprise pricing by filling out the form on
              this page or by contacting us at:
            </p>

            <p className="text-xl text-gray-600 pb-6 font-montserrat-medium">
              <img
                src="https://badgecert.com/wp-content/uploads/2020/07/mail2.png"
                alt="Email icon"
                className="inline-block align-middle mr-2"
                width="14"
                height="11"
              />
              <a
                href="mailto:info@badgecert.com"
                className="text-blue-500 underline font-semibold hover:text-blue-600"
              >
                info@badgecert.com
              </a>
            </p>

            <p className="text-xl text-gray-600 pb-6 font-montserrat-medium">
              We'll get back to you asap.
            </p>
          </div>

          {/* Right Column - Form */}
          <div className="w-full lg:w-[47%] px-4 py-4 pb-4">
            <div className=" bg-gray-50 rounded-lg shadow-lg overflow-hidden"
            //  style={{background:gradientBG}}
             >
              <form className="p-5">
                <div className="flex flex-wrap -mx-2 mb-4">
                  <div className="w-full md:w-1/2 px-2 mb-4">
                    <input
                      type="text"
                      placeholder="First name*"
                      required
                      className="w-full px-4 py-3 rounded bg-gray-100 border border-gray-200 text-lg text-gray-700 font-montserrat-medium"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-2 mb-4">
                    <input
                      type="text"
                      placeholder="Last name*"
                      required
                      className="w-full px-4 py-3 rounded bg-gray-100 border border-gray-200 text-lg text-gray-700 font-montserrat-medium"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap -mx-2 mb-4">
                  <div className="w-full md:w-1/2 px-2 mb-4">
                    <input
                      type="text"
                      placeholder="Organization*"
                      required
                      className="w-full px-4 py-3 rounded bg-gray-100 border border-gray-200 text-lg text-gray-700 font-montserrat-medium"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-2 mb-4">
                    <input
                      type="text"
                      placeholder="Job Title*"
                      required
                      className="w-full px-4 py-3 rounded bg-gray-100 border border-gray-200 text-lg text-gray-700 font-montserrat-medium"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Work Email*"
                    required
                    className="w-full px-4 py-3 rounded bg-gray-100 border border-gray-200 text-lg text-gray-700 font-montserrat-medium"
                  />
                </div>

                <div className="flex flex-wrap -mx-2 mb-4">
                  <div className="w-full md:w-full px-2 ">
                    <input
                      type="tel"
                      placeholder="Phone number*"
                      required
                      className="w-full px-4 py-3 rounded bg-gray-100 border border-gray-200 text-lg text-gray-700 font-montserrat-medium"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <select
                    required
                    className="w-full px-4 py-3 rounded bg-gray-100 border border-gray-200 text-lg text-gray-700 font-montserrat-medium appearance-none"
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
                    className="w-full px-4 py-3 rounded bg-gray-100 border border-gray-200 text-lg text-gray-700 font-montserrat-medium appearance-none"
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
                    className="w-full px-4 py-3 rounded bg-gray-100 border border-gray-200 text-lg text-gray-700 font-montserrat-medium h-32"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300 w-full md:w-auto"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestDemo;
