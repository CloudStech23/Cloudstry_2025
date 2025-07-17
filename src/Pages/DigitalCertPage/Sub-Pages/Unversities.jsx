import React, { useState } from "react";
import DigCertHeaderBg from "../../../assets/Images/DigCertPage/header_bg-2.svg";
import {
  HeadFontFamily,
  HeadTextColor,
  gradientBG,
} from "../../../CustomeComponents/Theme";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import {
  FaAngleDown,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function Unversities() {
  const [openIndexes, setOpenIndexes] = useState({});
  const toggleAccordion = (key) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const faqsLeft = [
    {
      question: "What does Cloudstry Tech do?",
      answer:
        "Cloudstry Tech empowers your business with IT Products including Digital Certification, Cattle Aadhaar, 3PL Solutions, and expert IT services and staffing solutions.",
    },
    {
      question: "How can your manpower solutions help my business?",
      answer:
        "We provide skilled professionals across various domains to help you scale your workforce quickly and efficiently—saving time, cost, and effort in hiring.",
    },
    {
      question: "Do you offer custom software and IT maintenance services?",
      answer:
        "Yes. From application development to ongoing software support, we offer tailor-made IT solutions that are scalable, secure, and aligned with your business goals.",
    },
  ];

  const faqsRight = [
    {
      question: "What is your IT Strategy and Architecture Consulting service?",
      answer:
        "We help businesses align their technology roadmap with their long-term vision by designing robust IT architectures, optimizing digital infrastructure, and improving tech-driven decision-making.",
    },
    {
      question: "What is the Digital Certificate Platform and who can use it?",
      answer:
        "Our digital certification platform allows institutions, universities, and organizations to issue tamper-proof digital badges and certificates that are easily shareable and verifiable.",
    },
    {
      question: "What are Cattle Aadhaar and Logistic Solutions?",
      answer:
        "Cattle Aadhaar is an AI/ML-powered traceability platform for livestock, while our Logistics Solution optimizes 3PL operations using intelligent forecasting and real-time supply chain tracking.",
    },
  ];

  const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    return (
      <div className="mb-3 border-b border-gray-200">
        <button
          onClick={onClick}
          className="flex justify-between items-center w-full py-4 text-left font-semibold text-[#1f1446] transform transition-all duration-300"
        >
          {question}
          <span className="text-xl">{isOpen ? <FiMinus /> : <FiPlus />}</span>
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-gray-600 pb-4 pr-4">{answer}</p>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="relative w-full h-[26rem] sm:h-[34rem]">
        {/* Swiper starts here */}

        <img
          src={DigCertHeaderBg}
          alt="Background"
          className="absolute inset-0 w-[100%] h-[26rem] sm:h-[24rem] md:h-[34rem] object-cover lg:h-full sm:object-cover lg:object-cover -z-10"
          style={{ filter: "blur(0px)", objectPosition: "91% center" }}
        />

        <div className="absolute inset-0 w-full h-[26rem] sm:h-[34rem] bg-black/40 sm:bg-transparent -z-10"></div>

        <div className="flex flex-col md:flex-row items-start md:items-start justify-start md:justify-between px-6 md:px-16 pt-10 md:pt-20 ">
          <div className="w-full space-y-4 mt-24 ">
            <h2
              className="text-2xl md:text-[57px]  w-[95%] font-bold text-white"
              style={{
                fontFamily: HeadFontFamily,
                lineHeight: "1.2",
                textTransform: "uppercase",
              }}
            >
              DIGITAL CERTIFICATE for <br /> higher Education
            </h2>
            <p className="text-white md:w-[70%] text-md md:text-[17.5px]">
              Empowering Universities with Secure, Verifiable Digital Badges and
              Micro-Credentials
            </p>
          </div>
        </div>
      </div>

      {/* Intro Section */}

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
            Digital Badges -{" "}
            <span className="text-[#1f1446]">
              SOFTWARE TO ISSUE, MANAGE & SHARE DIGITAL BADGES & CERTIFICATES
            </span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#085d9e] to-[#00c1de] mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4 max-w-6xl mx-auto">
          <p className="text-color text-[15px] sm:text-[16.5px] text-center lg:w-full">
            In today’s fast-evolving academic landscape, traditional paper
            certificates are no longer enough. Universities are now{" "}
            <strong>adopting digital badges for higher education</strong> to
            offer students a modern, verifiable, and flexible way to showcase
            their accomplishments. These badges are secure, tamper-proof, and
            easy to share across digital platforms - giving learners greater
            visibility in academic and professional spaces. Whether it’s for
            course completions, special achievements, or co-curricular
            milestones, digital badging helps universities provide real-time,
            skill-based recognition that goes beyond transcripts. More than just
            a digital symbol, each badge contains rich metadata, including the
            issuing university, criteria met, and evidence of learning.
          </p>
          <p className="text-color text-[15px] sm:text-[16.5px] text-center lg:w-full">
            Cloudstry Tech empowers universities with an end-to-end{" "}
            <Link to="/digital-certificate" className="text-blue-600">
              digital credentials platform
            </Link>{" "}
            to issue, manage, and verify digital badges and digital certificates
            for higher education—all from a single, user-friendly dashboard. Our
            credentialing system is built to support micro-credentials and
            digital badges in higher education, offering secure, tamper-proof,
            and instantly verifiable recognition of student accomplishments.
            With Cloudstry Tech, universities can go paperless, streamline their
            processes, and align with global standards in digital badging -
            enabling smarter recognition and better student outcomes.
          </p>
        </div>
      </div>

      {/* usecase and benifits section */}

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
            Digital Certificates –{" "}
            <span className="text-[#1f1446]">
              Use Cases and Benefits for University
            </span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#085d9e] to-[#00c1de] mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4 max-w-6xl mx-auto">
          <p className="text-color text-[15px] sm:text-[16.5px] text-center lg:w-full">
            In today’s fast-evolving academic landscape, traditional paper
            certificates are no longer enough. Universities are now{" "}
            <strong>adopting digital badges for higher education</strong> to
            offer students a modern, verifiable, and flexible way to showcase
            their accomplishments. These badges are secure, tamper-proof, and
            easy to share across digital platforms - giving learners greater
            visibility in academic and professional spaces. Whether it’s for
            course completions, special achievements, or co-curricular
            milestones, digital badging helps universities provide real-time,
            skill-based recognition that goes beyond transcripts. More than just
            a digital symbol, each badge contains rich metadata, including the
            issuing university, criteria met, and evidence of learning.
          </p>
          <p className="text-color text-[15px] sm:text-[16.5px] text-center lg:w-full">
            Cloudstry Tech empowers universities with an end-to-end{" "}
            <Link to="/digital-certificate" className="text-blue-600">
              digital credentials platform
            </Link>{" "}
            to issue, manage, and verify digital badges and digital certificates
            for higher education—all from a single, user-friendly dashboard. Our
            credentialing system is built to support micro-credentials and
            digital badges in higher education, offering secure, tamper-proof,
            and instantly verifiable recognition of student accomplishments.
            With Cloudstry Tech, universities can go paperless, streamline their
            processes, and align with global standards in digital badging -
            enabling smarter recognition and better student outcomes.
          </p>
        </div>
      </div>

      {/* Call to action section */}

      <div className="w-full md:h-[240px] py-16 flex justify-center items-center relative overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://www.31west.net/wp-content/uploads/2022/08/what-are-the-benefits-of-a-help-desk.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#085d9e] bg-opacity-70"></div>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 max-w-7xl w-full px-4 text-left">
          <h2
            className="text-white text-xl md:text-3xl font-semibold mb-6"
            style={{ fontFamily: HeadFontFamily }}
          >
            Get in touch with us today to implement secure, verifiable digital
            certificates for universities and enhance your institution’s
            recognition system.
          </h2>

          <div className="gap-4 flex flex-row items-center ">
            <Button
              size="md"
              className="rounded-full text-[14px] text-white bg-gradient-to-r from-[#085d9e] to-[#00c1de] font-semibold hover:bg-white hover:text-[#1273be] hover:border-[#2b3d8a] transition-all focus:outline-none focus:ring-0"
              style={{
                borderRadius: "30px",
                fontFamily: HeadFontFamily,
              }}
            >
              Contact Us
            </Button>
            <Button
              size="md"
              className="rounded-full text-[14px] text-white bg-gradient-to-r from-[#085d9e] to-[#00c1de] font-semibold hover:bg-white hover:text-[#1273be] hover:border-[#2b3d8a] transition-all focus:outline-none focus:ring-0"
              style={{
                borderRadius: "30px",
                fontFamily: HeadFontFamily,
              }}
            >
              DIGITAL CERTIFICATE FOR INSTITUTIONS
            </Button>
            <Button
              size="md"
              className="rounded-full text-[14px] text-white bg-gradient-to-r from-[#085d9e] to-[#00c1de] font-semibold hover:bg-white hover:text-[#1273be] hover:border-[#2b3d8a] transition-all focus:outline-none focus:ring-0"
              style={{
                borderRadius: "30px",
                fontFamily: HeadFontFamily,
              }}
            >
              DIGITAL CERTIFICATE FOR ORGANIZATIONS
            </Button>
          </div>
        </div>
      </div>

      {/* FAQ section */}

      <div className="relative w-full py-12 mt-[1rem] px-4 sm:px-6 lg:px-8 z-10 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16 px-6">
            <h1
              className="sm:text-4xl text-2xl font-bold mb-6"
              style={{
                fontFamily: "Poppines, sans-serif",
                color: HeadTextColor,
                lineHeight: 1.2,
                textTransform: "uppercase",
              }}
            >
              FREQUENTLY ASKED
              <span className="text-[#1f1446]"> QUESTIONS </span>{" "}
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#085d9e] to-[#00c1de] mx-auto rounded-full"></div>
          </div>

          {/* FAQ Grid */}
          <div className="grid md:grid-cols-2 gap-12 px-4 md:px-10">
            {/* Left Column */}
            <div>
              {faqsLeft.map((faq, index) => (
                <AccordionItem
                  key={`left-${index}`}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndexes[`left-${index}`]}
                  onClick={() => toggleAccordion(`left-${index}`)}
                />
              ))}
            </div>

            {/* Right Column */}
            <div>
              {faqsRight.map((faq, index) => (
                <AccordionItem
                  key={`right-${index}`}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndexes[`right-${index}`]}
                  onClick={() => toggleAccordion(`right-${index}`)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form section */}

      <main className="pt-10 pb-16 px-4 mt-[2rem] sm:px-6 lg:px-8 bg-gradient-to-r from-[#085d9e] to-[#00c1de] rounded-tr-[80px] ">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 ">
          {/* Left Text Content */}
          <div className="text-white text-center md:text-left">
            <h2
              className="font-medium mb-8 sm:text-[45px] text-left text-[22px] "
              style={{
                fontFamily: HeadFontFamily,
                lineHeight: "1.2em",

                letterSpacing: "-1px",
              }}
            >
              Ready to get started? Contact us for IT Support, Staffing, Digital
              Certificate, Cattle Adhaar, and 3PL solutions.
            </h2>

            {/* Contact Icons and Details */}
            <div className="sm:mt-20 mt-10 space-y-2">
              {/* Phone */}
              <div className="flex items-center gap-2">
                <FaPhone size={22} color="white" className="mt-0" />
                <div className="sm:text-[20px] text-[15px]">073169-12309</div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2">
                <MdEmail size={27} color="white" className="mt-1" />
                <div className="sm:text-[20px] text-[15px]">
                  hr@cloudstrytech.com
                </div>
              </div>
              <div className="flex items-center gap-2 ">
                <FaMapLocationDot size={42} color="white" className="" />
                <div className="sm:text-[20px] text-[13px] text-left">
                  1st Floor, 33/C/S-3, Scheme No 78 - III, Near Shalimar
                  Township, Sector F, Slice No.3, Honda Big Wing Indore 452010
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 pt-2 ">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ background: gradientBG }}
                >
                  <FaLinkedin size={22} color="white" />
                </div>
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ background: gradientBG }}
                >
                  <FaFacebookF size={22} color="white" />
                </div>
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ background: gradientBG }}
                >
                  <FaInstagram size={22} color="white" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="w-full max-w-md mx-auto">
            <form className="bg-white shadow-md rounded-xl px-6 pt-4 pb-4">
              {/* Full Name Field 1 */}
              <div className="mb-2">
                <label className="blocktfext-md font-semibold mb-1 text-color">
                  Full Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-color leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Ex: John Doe"
                />
              </div>

              {/* Full Name Field 2 */}
              <div className="mb-2">
                <label className="block text-color text-md font-semibold mb-1">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-color leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Ex: john@example.com"
                />
              </div>

              {/* Full Name Field 3 */}
              <div className="mb-2">
                <label className="block text-color text-md font-semibold mb-1">
                  Phone
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-color leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Ex: 123-456-7890"
                />
              </div>

              {/* Full Name Field 4 */}
              <div className="mb-2 relative">
                <label
                  className="block text-color text-md font-semibold mb-1"
                  htmlFor="select-field"
                >
                  Informational Query
                </label>
                <div className="relative">
                  <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-10 rounded shadow leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500">
                    <option className="text-color">Option 1</option>
                    <option className="text-color">Option 2</option>
                    <option>Option 3</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
                    <FaAngleDown size={20} />
                  </div>
                </div>
              </div>

              {/* Textarea Field */}
              <div className="mb-3">
                <label className="block text-gray-500 text-md font-semibold mb-1">
                  Write Something
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-color leading-tight focus:outline-none focus:shadow-outline h-24"
                  placeholder="Write your message here..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-center">
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
      </main>
    </div>
  );
}

export default Unversities;
