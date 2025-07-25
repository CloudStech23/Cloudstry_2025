import React from "react";
import { gradientBG, HeadFontFamily } from "../../CustomeComponents/Theme";
import BgBanner from "../../assets/Images/Industries/Industries_page_banner.svg";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import ContactSection from "../HomePage/Sections/ContactSection";

import utility from "../../assets/Images/Industries/icons/utility-icon.svg";
import logistic from "../../assets/Images/Industries/icons/logistic-icon.svg";
import education from "../../assets/Images/Industries/icons/education-icon.svg";
import healthcare from "../../assets/Images/Industries/icons/healthcare-icon.svg";
import govt from "../../assets/Images/Industries/icons/government-icon.svg";

import utility1 from "../../assets/Images/Industries/utilities1.jpg";
import logistic1 from "../../assets/Images/Industries/logistic1.jpg";
import logistic2 from "../../assets/Images/Industries/logistic2.jpg";
import government2 from "../../assets/Images/Industries/government2.jpeg"

function Industries() {
  return (
    <div className="w-full  ">
      {/* Header Section */}
      <div className="relative w-full h-[26rem] sm:h-[21.5rem]">
        {/* Background Image */}
        <img
          src={BgBanner}
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
            industries we serve
          </h2>
        </div>
      </div>

      {/*section-1 -  */}
      <div
        className="container px-6 max-w-[80rem] py-12 scroll-mt-[70px]"
        id="utilities"
      >
        <div className="flex flex-wrap items-start gap-y-10 gap-x-[50px]">
          {/* LEFT TEXT SECTION */}
          <div className="w-full sm:w-[50.5%] ">
            <div
              className=" rounded-full p-[10.5px] text-center inline-block w-[55px] h-[55px] "
              style={{ background: gradientBG }}
            >
              <img src={healthcare} alt="" />
            </div>

            <div className="  mt-6">
              <h2
                className="font-bold leading-[1.1] mb-4  text-[37px] text-[#1f1446] uppercase "
                style={{ fontFamily: HeadFontFamily }}
              >
                utilities
              </h2>
              <p className="text-[#333] mb-4 leading-relaxed">
                Cloudstry Tech empowers utility providers—across power, water, gas, and waste management—with targeted IT strategy consulting, manpower solutions, and custom software services. Our consulting experts work closely with utility organizations to modernize legacy systems, align IT investments with business goals, and drive digital transformation. We offer access to skilled and reliable professionals through our staffing solutions, helping utilities address workforce shortages and enhance field operations. Our tailored software solutions support asset management, billing, monitoring, and compliance tracking—enabling smarter, more efficient utility services. With Cloudstry Tech, utility companies can innovate confidently while maintaining service continuity and regulatory compliance.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-[2rem]">
              <Link to="/contact-us">
                <Button
                  size="md"
                  className=" rounded-full  text-[14px] text-white bg-gradient-to-r from-[#085d9e] to-[#00c1de] font-semibold  hover:bg-to-r hover:from-white hover:shadow-md  hover:to-white hover:text-[#1273be] hover:border-[#085d9e] transition-all duration-300"
                  style={{
                    borderRadius: "30px",
                    fontFamily: HeadFontFamily,
                  }}
                >
                  software solutions
                </Button>
              </Link>
              <Link to="/contact-us">
                <Button
                  size="md"
                  className=" rounded-full  text-[14px] text-white bg-gradient-to-r from-[#085d9e] to-[#00c1de] font-semibold  hover:bg-to-r hover:from-white hover:shadow-md  hover:to-white hover:text-[#1273be] hover:border-[#085d9e] transition-all duration-300"
                  style={{
                    borderRadius: "30px",
                    fontFamily: HeadFontFamily,
                  }}
                >
                  It consulting
                </Button>
              </Link>

              <Link to="/contact-us">
                <Button
                  size="md"
                  className=" rounded-full  text-[14px] text-white bg-gradient-to-r from-[#085d9e] to-[#00c1de] font-semibold  hover:bg-to-r hover:from-white hover:shadow-md  hover:to-white hover:text-[#1273be] hover:border-[#085d9e] transition-all duration-300"
                  style={{
                    borderRadius: "30px",
                    fontFamily: HeadFontFamily,
                  }}
                >
                  manpower solution
                </Button>
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="w-full sm:w-[45%] px-[15px] mt-[6.2rem]">
            <div className="relative pb-[80%]">
              <img
                className="absolute top-[-14%] left-[-2.2rem] rounded-[10px] max-w-[390px] w-full h-auto object-cover shadow-xl"
                src={utility1}
                alt="Professional Services Finance"
              />

              <img
                className="absolute right-0 bottom-9 z-[2] rounded-[10px]   max-w-[390px] w-full h-auto object-cover shadow-xl"
                src="https://thumbs.dreamstime.com/b/electricians-laptop-computer-happy-using-electrical-substation-43815187.jpg"
                alt="Professional Services Finance"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Different background section - 2 and 3:  section comes into it */}
      <div
        className="w-full"
        style={{
          background:
            "linear-gradient(180deg,rgba(237,240,245,1) 0%,rgba(255,255,255,1) 100%)",
        }}
      >
        {/*section-2 -  */}
        <div
          className="container mx-auto max-w-[80rem] py-12 scroll-mt-[70px]"
          id="logistics"
        >
          <div className="flex flex-wrap items-start gap-y-10 gap-x-[50px]">
            {/* LEFT IMAGE SECTION */}
            <div className="w-full sm:w-[45%] px-[15px] mt-[6.2rem]">
              <div className="relative pb-[80%]">
                <img
                  className="absolute top-[-14%] left-0 rounded-[10px] max-w-[390px] w-full h-auto object-cover shadow-xl"
                  src={logistic1}
                  alt="Professional Services Finance"
                />

                <img
                  className="absolute right-0 bottom-9 z-[2] rounded-[10px]   max-w-[390px] w-full h-auto object-cover shadow-xl"
                  src={logistic2}
                  alt="Professional Services Finance"
                />
              </div>
            </div>

            {/* RIGHT TEXT SECTION */}
            <div className="w-full sm:w-[45%] px-[15px]">
              <div
                className=" rounded-full p-[8.5px] text-center inline-block w-[65px] h-[65px] "
                style={{ background: gradientBG }}
              >
                <img src={logistic} alt="" className=" " />
              </div>

              <div className="mt-6">
                <h2
                  className="font-bold leading-[1.1] mb-4 mt-5 text-[30px] text-[#1f1446] uppercase "
                  style={{ fontFamily: HeadFontFamily }}
                >
                  logistic
                </h2>
                <p className="text-[#333] mb-4 leading-relaxed">
                  Cloudstry Tech empowers the logistics industry with
                  intelligent 3PL (Third-Party Logistics) solutions designed to
                  optimize supply chains, improve visibility, and enhance
                  operational efficiency. Our technology-driven approach enables
                  seamless inventory management, route optimization, order
                  tracking, and real-time data analytics—helping logistics
                  providers meet increasing demands with speed and precision.
                  Whether you're managing warehouses, handling last-mile
                  delivery, or coordinating bulk transportation, our
                  customizable 3PL platforms support end-to-end logistics
                  operations. With secure integrations, smart automation, and
                  scalable infrastructure, Cloudstry Tech helps logistics
                  companies streamline processes, reduce costs, and deliver
                  exceptional service across every shipment.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-[2rem]  ">
                <Link to="/contact-us">
                  <Button
                    size="md"
                    className=" rounded-full  text-[14px] text-white bg-gradient-to-r from-[#085d9e] to-[#00c1de] font-semibold  hover:bg-to-r hover:from-white hover:shadow-md  hover:to-white hover:text-[#1273be] hover:border-[#085d9e] transition-all duration-300"
                    style={{
                      borderRadius: "30px",
                      fontFamily: HeadFontFamily,
                    }}
                  >
                    3pl solution
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* section-3 - */}
        <div
          className="container px-6 max-w-[80rem] py-12 scroll-mt-[70px]"
          id="healthcare"
        >
          <div className="flex flex-wrap items-start gap-y-10 gap-x-[50px]">
            {/* LEFT TEXT SECTION */}
            <div className="w-full sm:w-[50.5%] ">
              <div
                className=" rounded-full p-[10.5px] text-center inline-block w-[55px] h-[55px] "
                style={{ background: gradientBG }}
              >
                <img src={healthcare} alt="" />
              </div>

              <div className="  mt-6">
                <h2
                  className="font-bold leading-[1.1] mb-4  text-[37px] text-[#1f1446] uppercase "
                  style={{ fontFamily: HeadFontFamily }}
                >
                  Health care
                </h2>
                <p className="text-[#333] mb-4 leading-relaxed">
                  Cloudstry Tech helps healthcare providers transform patient
                  care and streamline operations with smart, secure{" "}
                  <strong>IT solutions</strong>. From hospital management
                  systems to patient record digitization, our custom software
                  services are designed to improve efficiency, accuracy, and
                  compliance. We offer strategic IT consulting to align
                  technology investments with healthcare goals, ensuring better
                  data security, interoperability, and scalability. Our IT
                  solutions support appointment scheduling, inventory tracking,
                  telehealth integration, and more—empowering hospitals,
                  clinics, and labs to deliver faster, more reliable services.
                  With Cloudstry Tech, healthcare organizations can embrace
                  digital innovation while maintaining patient trust and
                  regulatory standards.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-[2rem]">
                <Link to="/contact-us">
                  <Button
                    size="md"
                    className=" rounded-full  text-[14px] text-white bg-gradient-to-r from-[#085d9e] to-[#00c1de] font-semibold  hover:bg-to-r hover:from-white hover:shadow-md  hover:to-white hover:text-[#1273be] hover:border-[#085d9e] transition-all duration-300"
                    style={{
                      borderRadius: "30px",
                      fontFamily: HeadFontFamily,
                    }}
                  >
                    software solutions
                  </Button>
                </Link>
                <Link to="/contact-us">
                  <Button
                    size="md"
                    className=" rounded-full  text-[14px] text-white bg-gradient-to-r from-[#085d9e] to-[#00c1de] font-semibold  hover:bg-to-r hover:from-white hover:shadow-md  hover:to-white hover:text-[#1273be] hover:border-[#085d9e] transition-all duration-300"
                    style={{
                      borderRadius: "30px",
                      fontFamily: HeadFontFamily,
                    }}
                  >
                    It consulting
                  </Button>
                </Link>

                <Link to="/contact-us">
                  <Button
                    size="md"
                    className=" rounded-full  text-[14px] text-white bg-gradient-to-r from-[#085d9e] to-[#00c1de] font-semibold  hover:bg-to-r hover:from-white hover:shadow-md  hover:to-white hover:text-[#1273be] hover:border-[#085d9e] transition-all duration-300"
                    style={{
                      borderRadius: "30px",
                      fontFamily: HeadFontFamily,
                    }}
                  >
                    manpower solution
                  </Button>
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE SECTION */}
            <div className="w-full sm:w-[45%] px-[15px] mt-[6.2rem]">
              <div className="relative pb-[80%]">
                <img
                  className="absolute top-[-14%] left-[-2.2rem] rounded-[10px] max-w-[390px] w-full h-auto object-cover shadow-xl"
                  src="https://images.pexels.com/photos/5327916/pexels-photo-5327916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Professional Services Finance"
                />

                <img
                  className="absolute right-0 bottom-9 z-[2] rounded-[10px]   max-w-[390px] w-full h-auto object-cover shadow-xl"
                  src="https://st.depositphotos.com/1011643/1956/i/450/depositphotos_19562845-stock-photo-friendly-young-nurse-talking-to.jpg"
                  alt="Professional Services Finance"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Different background section - 4 and 5:  section comes into it */}
      <div
        className="w-full"
        style={{
          background:
            "linear-gradient(rgb(235 241 249) 0%, rgb(255 255 255) 100%)",
        }}
      >
        {/*section-4 -  */}

        <div
          className="container mx-auto max-w-[80rem] py-12 scroll-mt-[70px] "
          id="education"
        >
          <div className="flex flex-wrap items-start gap-y-10 gap-x-[50px]">
            {/* LEFT IMAGE SECTION */}
            <div className="w-full sm:w-[50%] px-[15px] mt-6 sm:mt-[4rem]">
              <div className="relative pb-[80%]">
                <img
                  className="absolute top-0 left-0 rounded-[10px] max-w-[390px] w-full h-auto object-cover shadow-xl"
                  src="https://www.maxburst.com/wp-content/uploads/2021/11/Professional-Services-Finance-687687166.jpg"
                  alt="Professional Services Finance"
                />
                <img
                  className="absolute right-0 bottom-12 z-[2] rounded-[10px]  max-w-[390px] w-full h-auto object-cover shadow-xl"
                  src="https://www.maxburst.com/wp-content/uploads/2021/11/Professional-Services-Finance-1299055072.jpg"
                  alt="Professional Services Finance"
                />
              </div>
            </div>

            {/* RIGHT TEXT SECTION */}
            <div className="w-full sm:w-[45%] px-[15px]">
              <div
                className=" rounded-full p-[5.5px] text-center inline-block w-[55px] h-[55px] "
                style={{ background: gradientBG }}
              >
                <img src={education} alt="" className="w-[55px] h-[50px] " />
              </div>

              <div className="mt-6">
                <h2
                  className="font-bold leading-[1.1] mb-4  text-[37px] text-[#1f1446] uppercase "
                  style={{ fontFamily: HeadFontFamily }}
                >
                  education
                </h2>
                <p className="text-[#333] mb-4 leading-relaxed">
                  Educational institutions and training organizations face
                  increasing pressure to issue, manage, and verify credentials
                  efficiently and securely. Traditional paper certificates are
                  outdated, difficult to track, and vulnerable to fraud.
                  Cloudstry Tech’s <strong>Digital Certificate Platform</strong>{" "}
                  empowers schools, universities, and educational organizations
                  to issue verifiable digital badges and certificates to
                  students, faculty, and staff. Whether it's for academic
                  achievements, skill development, or employee training, our
                  platform ensures secure, shareable, and tamper-proof
                  credentials. It supports micro-credentials, simplifies
                  credential management, and boosts institutional
                  credibility—delivering a seamless digital experience for
                  learners and professionals alike.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-[2rem]">
                <Link to="/contact-us">
                  <Button
                    size="md"
                    className=" rounded-full  text-[14px] text-white bg-gradient-to-r from-[#085d9e] to-[#00c1de] font-semibold  hover:bg-to-r hover:from-white hover:shadow-md  hover:to-white hover:text-[#1273be] hover:border-[#085d9e] transition-all duration-300"
                    style={{
                      borderRadius: "30px",
                      fontFamily: HeadFontFamily,
                    }}
                  >
                    Digital Certificate
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* section-5 - */}
        <div
          className="container mx-auto  max-w-[80rem] py-12 scroll-mt-[70px] "
          id="government"
        >
          <div className="flex flex-wrap items-center gap-y-10 gap-x-[50px]">
            {/* LEFT TEXT SECTION */}
            <div className="w-full sm:w-[45%] px-[15px]">
              <div
                className=" rounded-full p-[10.5px] text-center inline-block w-[55px] h-[55px] "
                style={{ background: gradientBG }}
              >
                <img src={govt} alt="" />
              </div>

              <div className="  mt-6">
                <h2
                  className="font-bold leading-[1.1] mb-4  text-[37px] text-[#1f1446] uppercase "
                  style={{ fontFamily: HeadFontFamily }}
                >
                  Government
                </h2>
                <p className="text-[#333] mb-4 leading-relaxed">
                  Cloudstry Tech partners with government bodies to drive
                  efficiency and transparency through advanced digital
                  solutions. Our 3PL (Third-Party Logistics) services support
                  seamless distribution and supply chain management for
                  government programs, ensuring timely delivery and real-time
                  tracking of resources. With our Cattle Aadhar solution,
                  authorities can implement secure, centralized livestock
                  identification systems to improve traceability, health
                  monitoring, and subsidy management. Additionally, our Digital
                  Certificate Platform enables government departments to issue
                  tamper-proof, verifiable certificates—streamlining processes
                  like training completion, licensing, and citizen services.
                  Cloudstry Tech empowers governance through innovation,
                  accountability, and secure digital infrastructure.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-[2rem]">
                <Link to="/contact-us">
                  <Button
                    size="md"
                    className=" rounded-full  text-[14px] text-white bg-gradient-to-r from-[#085d9e] to-[#00c1de] font-semibold  hover:bg-to-r hover:from-white hover:shadow-md  hover:to-white hover:text-[#1273be] hover:border-[#085d9e] transition-all duration-300"
                    style={{
                      borderRadius: "30px",
                      fontFamily: HeadFontFamily,
                    }}
                  >
                    cattle aadhar
                  </Button>
                </Link>
                <Link to="/contact-us">
                  <Button
                    size="md"
                    className=" rounded-full  text-[14px] text-white bg-gradient-to-r from-[#085d9e] to-[#00c1de] font-semibold  hover:bg-to-r hover:from-white hover:shadow-md  hover:to-white hover:text-[#1273be] hover:border-[#085d9e] transition-all duration-300"
                    style={{
                      borderRadius: "30px",
                      fontFamily: HeadFontFamily,
                    }}
                  >
                    3pl solution
                  </Button>
                </Link>
                <Link to="/contact-us">
                  <Button
                    size="md"
                    className=" rounded-full  text-[14px] text-white bg-gradient-to-r from-[#085d9e] to-[#00c1de] font-semibold  hover:bg-to-r hover:from-white hover:shadow-md  hover:to-white hover:text-[#1273be] hover:border-[#085d9e] transition-all duration-300"
                    style={{
                      borderRadius: "30px",
                      fontFamily: HeadFontFamily,
                    }}
                  >
                    digital certificate
                  </Button>
                </Link>
              </div>
            </div>

            {/* RIGHT IMAGE SECTION */}
            <div className="w-full sm:w-[50%] px-[15px] mt-[6.2rem]">
              <div className="relative pb-[80%]">
                <img
                  className="absolute top-0 left-0 rounded-[10px] max-w-[390px] w-full h-auto object-cover shadow-xl"
                  src="https://www.openaccessgovernment.org/wp-content/uploads/2018/04/dreamstime_s_38213697.jpg"
                  alt="Professional Services Finance"
                />

                <img
                  className="absolute right-0 bottom-12 z-[2] rounded-[10px]   max-w-[390px] w-full h-auto object-cover shadow-xl"
                  src={government2}
                  alt="Professional Services Finance"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section: contact-from */}

      <section>
        <ContactSection />
      </section>
    </div>
  );
}

export default Industries;
