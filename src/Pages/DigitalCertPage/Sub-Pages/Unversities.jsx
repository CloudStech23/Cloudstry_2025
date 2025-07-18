import React, { useState } from "react";
import DigCertHeaderBg from "../../../assets/Images/DigCertPage/university_header_bg3.svg";
import {
  HeadFontFamily,
  HeadTextColor,
  gradientBG,
} from "../../../CustomeComponents/Theme";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import {
  FaGraduationCap,
  FaAws,
  FaMedal,
  FaUserTie,
  FaLightbulb,
} from "react-icons/fa";

import ContactSection from "../Sections/ContactSection";

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="mb-3 border-b border-gray-200">
      <button
        onClick={onClick}
        className="flex justify-between gap-4 items-center w-full py-4 text-left font-semibold text-[#1f1446] transition-all duration-300"
        style={{ fontFamily: HeadFontFamily }}
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
      question: "What is a digital certificate for higher education?",
      answer:
        "A digital certificate for higher education is a secure, verifiable credential issued electronically by universities to recognize student achievements, degrees, or course completions. It replaces traditional paper certificates with a modern, tamper-proof digital format.",
    },
    {
      question: "How are digital badges used in universities?",
      answer:
        "Digital badges in higher education are used to recognize specific skills, competencies, or accomplishments. They can be awarded for completing a course, project, workshop, or internship, offering a more detailed and flexible way to showcase academic and co-curricular achievements.",
    },
    {
      question: "What are micro-credentials and how do they help students?",
      answer:
        "Micro-credentials are short, targeted learning outcomes that demonstrate specific skills or knowledge. When combined with digital badges, they help students build a comprehensive, portable portfolio that enhances their employability and showcases continuous learning.",
    },
  ];

  const faqsRight = [
    {
      question: "Are digital credentials secure and verifiable?",
      answer:
        "Yes, digital credentials issued through platforms like Cloudstry Tech are tamper-proof, blockchain-secured, and 100% verifiable. This ensures authenticity and trust, making them ideal for both academic and professional validation.",
    },
    {
      question:
        "Why should universities adopt digital badging and certification?",
      answer:
        "Adopting digital badging in higher education helps universities modernize their credentialing systems, reduce administrative costs, support eco-friendly practices, and offer students a globally recognized, easily shareable proof of achievement.",
    },
    {
      question:
        "Can digital certificates and badges be shared on social media or job platforms?",
      answer:
        "Absolutely! Digital badges and certificates can be easily shared on platforms like LinkedIn, online resumes, email signatures, and job portals. This boosts visibility for students and helps employers quickly verify qualifications through trusted, digital credentialing systems.",
    },
  ];

  const usecases = [
    {
      title: "Issuance of Digital Certificates for degree",
      description: "“MBA, BSc. Etc” certificate issues after completing degree",
      icon: <FaGraduationCap size={24} />, // Classic graduation cap for degrees
    },
    {
      title: "Skill Certification & Micro Credentials",
      description:
        "“AWS Cloud Practitioner” badge after a cloud computing workshop",
      icon: <FaAws size={24} />, // AWS logo since you mentioned AWS specifically
    },
    {
      title: "Academic Achievement Recognition",
      description:
        "“Advanced Machine Learning – Level 2” badge after completing a deep learning elective",
      icon: <FaMedal size={24} />, // Academic hat for achievements
    },
    {
      title: "Career Readiness & Employability",
      description:
        "“Industry-Ready: Java Developer” badge endorsed by a tech partner",
      icon: <FaUserTie size={24} />, // Professional/business icon for career readiness
    },
    {
      title: "Research, Innovation & Entrepreneurship",
      description:
        "Acknowledge participation in hackathons, patent filings, startups, or research publications",
      icon: <FaLightbulb size={24} />, // Lightbulb for innovation ideas
    },
  ];

  const benefits = [
    {
      title: "Enhance Brand Value",
      description:
        "Strengthen the brand’s reputation and credibility through verified digital badges, increasing visibility on social media and other platforms.",
    },
    {
      title: "Prevent Misuse & Fraud",
      description:
        "Ensure authenticity by issuing digitally verified badges, reducing the risk of forgery and unauthorized use.",
    },
    {
      title: "Reduce Operational Costs",
      description:
        "Minimize administrative overhead by promoting paperless digital certificates, eliminating printing and distribution expenses.",
    },
    {
      title: "Improve Engagement & Reach",
      description:
        "Encourage recipients to share their achievements online, increasing brand exposure and engagement.",
    },
    {
      title: "Support Sustainability Initiatives",
      description:
        "Contribute to eco-friendly practices by eliminating the need for physical certificates and manual verification processes.",
    },
  ];

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
              DIGITAL CERTIFICATE <br /> for higher Education
            </h2>
            <p className="text-white md:w-[70%] text-md md:text-[17.5px]">
              Empowering Universities with Secure, Verifiable Digital Badges and
              Micro-Credentials
            </p>
            <div className="flex gap-4 pt-[2rem]">
              <Button
                size="md"
                className="rounded-full  text-[14px] text-white bg-gradient-to-r from-[#085d9e] to-[#00c1de] font-semibold  hover:bg-to-r hover:from-white hover:shadow-md  hover:to-white hover:text-[#1273be] hover:border-[#085d9e] transition-all duration-300 "
                style={{
                  borderRadius: "30px",
                  fontFamily: HeadFontFamily,
                }}
              >
                Contact us
              </Button>
            </div>
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
            Digital Badges - A Smarter Way for {" "}
            <span className="text-[#1f1446]">
              Universities to Recognize Achievements in Higher Education
            </span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#085d9e] to-[#00c1de] mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4 max-w-7xl mx-auto">
          <p className="text-color text-[16px] sm:text-[16.5px] text-justify lg:w-full">
            In today’s fast-evolving academic landscape, traditional paper
            certificates are no longer enough. Universities are now adopting
            <strong> digital badges for higher education</strong> to offer
            students a modern, verifiable, and flexible way to showcase their
            accomplishments. These badges are secure, tamper-proof, and easy to
            share across digital platforms - giving learners greater visibility
            in academic and professional spaces. Whether it’s for course
            completions, special achievements, or co-curricular milestones,
            digital badging helps universities provide real-time, skill-based
            recognition that goes beyond transcripts. More than just a digital
            symbol, each badge contains rich metadata, including the issuing
            university, criteria met, and evidence of learning.
          </p>
          <p className="text-color text-[16px] sm:text-[16.5px] text-justify lg:w-full">
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

      <div className="w-full bg-white py-14 px-4 sm:px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1
            className="text-2xl sm:text-4xl font-bold uppercase mb-4 leading-tight"
            style={{
              fontFamily: "Poppines, sans-serif",
              color: HeadTextColor,
            }}
          >
            Digital Certificates –{" "}
            <span className="text-[#1f1446] font-semibold">
              Use Cases and Benefits for Universities
              
            </span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#085d9e] to-[#00c1de] mx-auto rounded-full"></div>
        </div>

        {/* Content */}
        <div className="py-8">
          {/* Pill Element */}
          <div className="flex justify-start ml-[4.5rem]">
            <div
              className="rounded-full px-4 py-2 text-sm font-medium text-white shadow-md uppercase"
              style={{
                background: gradientBG,
                fontFamily: HeadFontFamily,
              }}
            >
              {/* Your Pill Text */}
              {/* Digital Certificate Use Cases */}
              use cases for universities
            </div>
          </div>

          {/* Usecases & Benefits Section */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">
            {/* Left: Use Cases */}
            <div className="space-y-9 mt-[1.7rem]">
              {usecases.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div
                    className="rounded-full p-2.5 flex-shrink-0 text-white"
                    style={{ background: gradientBG }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p
                      className="text-[18px] font-semibold text-gray-900"
                      style={{ fontFamily: HeadFontFamily }}
                    >
                      {item.title}
                    </p>
                    <p className="text-[15px] text-gray-700">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Benefits */}
            <div
              className="border border-gray-200 max-w-[570px] rounded-xl shadow-lg p-6 md:py-8 md:px-6 space-y-3"
              style={{ background: gradientBG }}
            >
              {benefits.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <span>
                    <i className="fa fa-check-circle text-white mt-2 text-[18px]" />
                  </span>
                  <div>
                    <h4
                      className="text-[18px] font-semibold text-white"
                      style={{ fontFamily: HeadFontFamily }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-[15px] text-gray-100 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
              className="rounded-full  text-[14px] text-white bg-gradient-to-r from-[#085d9e] to-[#00c1de] font-semibold  hover:bg-to-r hover:from-white hover:shadow-md  hover:to-white hover:text-[#1273be] hover:border-[#085d9e] transition-all duration-300"
              style={{
                borderRadius: "30px",
                fontFamily: HeadFontFamily,
              }}
            >
              DIGITAL CERTIFICATE <br /> FOR INSTITUTIONS
            </Button>
            <Button
              size="md"
              className="rounded-full  text-[14px] text-white bg-gradient-to-r from-[#085d9e] to-[#00c1de] font-semibold  hover:bg-to-r hover:from-white hover:shadow-md  hover:to-white hover:text-[#1273be] hover:border-[#085d9e] transition-all duration-300"
              style={{
                borderRadius: "30px",
                fontFamily: HeadFontFamily,
              }}
            >
              DIGITAL CERTIFICATE FOR ORGANIZATIONS
            </Button>
            <Button
              size="md"
              className="rounded-full  text-[14px] text-white bg-gradient-to-r from-[#085d9e] to-[#00c1de] font-semibold  hover:bg-to-r hover:from-white hover:shadow-md  hover:to-white hover:text-[#1273be] hover:border-[#085d9e] transition-all duration-300"
              style={{
                borderRadius: "30px",
                fontFamily: HeadFontFamily,
              }}
            >
              Contact Us
            </Button>
            <Button
              size="md"
              className=" rounded-full  text-[14px] text-white bg-gradient-to-r from-[#085d9e] to-[#00c1de] font-semibold  hover:bg-to-r hover:from-white hover:shadow-md  hover:to-white hover:text-[#1273be] hover:border-[#085d9e] transition-all duration-300"
              style={{
                borderRadius: "30px",
                fontFamily: HeadFontFamily,
              }}
            >
              get in touch with us
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

      <section>
        <ContactSection />
      </section>

      {/* <main className="pt-10 pb-16 px-4 mt-[2rem] sm:px-6 lg:px-8 bg-gradient-to-r from-[#085d9e] to-[#00c1de] rounded-tr-[80px] ">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 ">
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

            <div className="sm:mt-20 mt-10 space-y-2">
              <div className="flex items-center gap-2">
                <FaPhone size={22} color="white" className="mt-0" />
                <div className="sm:text-[20px] text-[15px]">073169-12309</div>
              </div>

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

          <div className="w-full max-w-md mx-auto">
            <form className="bg-white shadow-md rounded-xl px-6 pt-4 pb-4">
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

              <div className="mb-3">
                <label className="block text-gray-500 text-md font-semibold mb-1">
                  Write Something
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-color leading-tight focus:outline-none focus:shadow-outline h-24"
                  placeholder="Write your message here..."
                />
              </div>

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
      </main> */}
    </div>
  );
}

export default Unversities;
