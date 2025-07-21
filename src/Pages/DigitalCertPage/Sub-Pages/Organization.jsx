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
  FaChalkboardTeacher,
  FaClipboardCheck,
  FaUserPlus,
  FaHandsHelping,
  FaCalendarAlt,
} from "react-icons/fa";

import ContactSection from "../Sections/ContactSection";
import callToActionBg from "../../../assets/CommonIMG/call_to_action_bg.jpg"

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

function Organization() {
  const [openIndexes, setOpenIndexes] = useState({});
  const toggleAccordion = (key) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const faqsLeft = [
    {
      question:
        "What are digital certificates for employees and how do they work?",
      answer:
        "Digital certificates are secure, verifiable credentials awarded to employees for completing training, achieving milestones, or earning recognition. These are issued via a digital credentialing platform like Cloudstry Tech, making them easy to share and validate.",
    },
    {
      question:
        "How can organizations benefit from using digital badges for employees?",
      answer:
        "Digital badges help organizations boost employee recognition, improve engagement, and promote learning achievements while simplifying credential management and enhancing brand visibility.",
    },
    {
      question:
        "Are digital badges for professionals verifiable by employers or clients?",
      answer:
        "Yes. Each digital badge issued through Cloudstry Tech includes a unique verification link, allowing employers, clients, or third parties to instantly verify the badge's authenticity and issuer.",
    },
  ];

  const faqsRight = [
    {
      question:
        "Can we customize digital certificates and badges with our organization's branding?",
      answer:
        "Absolutely. Cloudstry Tech allows full customization of digital badges and certificates—including your logo, colours, badge design, and achievement details—to align with your brand identity.",
    },
    {
      question:
        "What types of employee achievements can be recognized using digital badge credentials?",
      answer:
        "You can award digital badges for skill development, project completion, leadership roles, compliance training, certifications, or any other accomplishment worth recognizing within your organization.",
    },
    {
      question:
        "Is it possible to integrate Cloudstry Tech's digital credential management software with our HR or LMS systems?",
      answer:
        "Yes. Cloudstry Tech offers seamless integration with popular HR, LMS, and CRM platforms to automate the issuance, tracking, and management of digital certificates and badges.",
    },
  ];

  const usecases = [
    {
      title: "Employee Training & Development",
      description:
        "Award digital badges upon completion of internal training programs, workshops, or skill development sessions",
      icon: <FaChalkboardTeacher size={24} />, // Represents training/teaching
    },
    {
      title: "Compliance & Certification",
      description:
        "Ensure staff meet regulatory or industry-specific training requirements with verifiable digital credentials",
      icon: <FaClipboardCheck size={24} />, // Represents compliance/checklists
    },
    {
      title: "Onboarding & Orientation",
      description:
        "Recognize successful onboarding completion with digital badges to engage and motivate new hires",
      icon: <FaUserPlus size={24} />, // Represents new users/onboarding
    },
    {
      title: "Leadership & Soft Skills Recognition",
      description:
        "Reward participation in leadership programs, communication workshops, or team-building activities",
      icon: <FaHandsHelping size={24} />, // Represents teamwork/leadership
    },
    {
      title: "Event Participation & Contributions",
      description:
        "Acknowledge speakers, volunteers, or contributors in corporate events, webinars, or CSR programs",
      icon: <FaCalendarAlt size={24} />, // Represents events/calendar
    },
  ];

  const benefits = [
    {
      title: "Boost Employee Engagement",
      description:
        "Recognize and reward achievements in real time, increasing motivation and retention.",
    },
    {
      title: "Streamline Credentialing Process",
      description:
        "Easily issue, manage, and track badges using Cloudstry’s user-friendly digital badge platform.",
    },
    {
      title: "Enhance Employer Branding",
      description:
        "Showcase a culture of recognition and growth by encouraging employees to share badges publicly.",
    },
    {
      title: "Ensure Verification & Trust",
      description:
        "All digital badges are tamper-proof, shareable, and come with secure verification links.",
    },
    {
      title: "Gain Insights with Analytics",
      description:
        "Monitor badge issuance and employee progress with built-in real-time reporting and analytics tools.",
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
              Digital Badges for <br /> Employees, Professionals,<br />  and Organizations 
            </h2>
            <p className="text-white md:w-[70%] text-md md:text-[17.5px]">
              A Smart Way for Organizations to Issue, Manage, and <br /> Track Employee Achievements Digitally 
            </p>
            <div className="flex gap-4 pt-[1rem]">
              <Link to="/contact-us">
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
              </Link>
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
            Boost Employee Recognition and Build {" "}
            <span className="text-[#1f1446]">
              tOrganizational Credibility with Verifiable Digital Badges 
            </span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#085d9e] to-[#00c1de] mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4 max-w-7xl mx-auto">
          <p className="text-color text-[16px] sm:text-[16.5px] text-justify lg:w-full">
            In today’s fast-evolving professional landscape, organizations are
            seeking smarter, more efficient ways to recognize and reward
            employee achievements. Digital badges for employees offer a modern,
            secure, and verifiable way to acknowledge skills, training, and
            accomplishments—making recognition more meaningful, trackable, and
            shareable. These digital badges for professionals not only enhance
            motivation but also help build a culture of continuous learning and
            career growth.
          </p>
          <p className="text-color text-[16px] sm:text-[16.5px] text-justify lg:w-full">
            At Cloudstry Tech, we provide a robust{" "}
            <Link to="/digital-certificate" className="text-blue-600">
              digital credentials platform
            </Link>{" "}
            tailored for organizations, employees, and professionals. Whether
            you're recognizing internal training completions, leadership
            programs, compliance certifications, or skill development, our
            solution helps you issue tamper-proof, verifiable digital badges
            with ease. Backed by AI/ML capabilities and optional Blockchain
            inscription, our platform ensures every badge issued is secure,
            authentic, and aligned with your brand. From seamless badge creation
            and issuing to real-time tracking and analytics, Cloudstry Tech
            simplifies the entire credentialing process—empowering your
            workforce and enhancing your organizational credibility
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
              Use Cases and Benefits for Organizations
            </span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#085d9e] to-[#00c1de] mx-auto rounded-full"></div>
        </div>

        {/* Content */}
        <div className="py-8">
          {/* Pill Element */}
          <div className="flex justify-start ml-[0.3rem]">
            <div
              className="rounded-full px-4 py-2 text-sm font-medium text-white shadow-md uppercase"
              style={{
                background: gradientBG,
                fontFamily: HeadFontFamily,
              }}
            >
              {/* Your Pill Text */}
              Digital Certificate Use Cases
            </div>
          </div>

          {/* Usecases & Benefits Section */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">
            {/* Left: Use Cases */}
            <div className="space-y-8 mt-[1.7rem]">
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
                      className="text-[16px] font-semibold text-gray-900"
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
              className="border border-gray-200 max-w-[570px] rounded-xl shadow-lg p-6 md:py-8 md:px-6 space-y-3 rounded-tr-[80px]"
              style={{ background: gradientBG }}
            >
              {benefits.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <span>
                    <i className="fa fa-check-circle text-white mt-2 text-[18px]" />
                  </span>
                  <div>
                    <h4
                      className="text-[16px] font-semibold text-white"
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

      <div className="w-full md:h-[250px] py-16 flex justify-center items-center relative overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0">
          <img
            src={callToActionBg}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#085d9e] bg-opacity-70"></div>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 max-w-8xl w-full px-4 text-left">
          <h2
            className="text-white text-xl md:text-[34px] text-center font-semibold mb-6 uppercase"
            style={{ fontFamily: HeadFontFamily, lineHeight: "1.2" }}
          >
            Get in touch with us today to implement secure, verifiable digital certificates for organizations and boost employee recognition with trusted digital credentials
          </h2>

          <div className="gap-4 flex flex-row items-center justify-center mt-10 ">
            <Link to="/digital-certificate/universities">
            <Button
              size="md"
              className="rounded-full  text-[14px] text-white bg-gradient-to-r from-[#085d9e] to-[#00c1de] font-semibold  hover:bg-to-r hover:from-white hover:shadow-md  hover:to-white hover:text-[#1273be] hover:border-[#085d9e] transition-all duration-300"
              style={{
                borderRadius: "30px",
                fontFamily: HeadFontFamily,
              }}
            >
              DIGITAL CERTIFICATE FOR UNIVERSITIES
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
              get in touch with us
            </Button>
             </Link>
             <Link to="/digital-certificate/institutes"></Link>
            <Button
              size="md"
              className="rounded-full  text-[14px] text-white bg-gradient-to-r from-[#085d9e] to-[#00c1de] font-semibold  hover:bg-to-r hover:from-white hover:shadow-md  hover:to-white hover:text-[#1273be] hover:border-[#085d9e] transition-all duration-300"
              style={{
                borderRadius: "30px",
                fontFamily: HeadFontFamily,
              }}
            >
              DIGITAL CERTIFICATE FOR INSTITUTIONS
            </Button>
          </div>
        </div>
      </div>

      {/* FAQ section */}

      <div className="relative w-full py-12 mt-[1rem] px-4 sm:px-6 lg:px-8 z-10 bg-white">
        <div className="max-w-7xl mx-auto">
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

      
    </div>
  );
}

export default Organization;
