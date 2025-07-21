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
  FaUsers,
  FaTrophy,
  FaLaptopCode,
  FaCode,
  FaGraduationCap,
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

function Institute() {
  const [openIndexes, setOpenIndexes] = useState({});
  const toggleAccordion = (key) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const faqsLeft = [
    {
      question: "What is a digital certificate for students?",
      answer:
        "A digital certificate for students is a secure, verifiable credential issued by an institute to recognize academic or skill-based achievements. It replaces traditional paper certificates and is easy to share online.",
    },
    {
      question: "What are digital badges for students?",
      answer:
        "Digital badges for students represent micro-credentials that validate skills, participation, or accomplishments. They are visual, shareable, and contain embedded information for instant verification.",
    },
    {
      question: "How can students use these credentials?",
      answer:
        "Students can showcase their digital badges and certificates on LinkedIn, resumes, portfolios, and job applications—enhancing their academic and professional profiles.",
    },
  ];

  const faqsRight = [
    {
      question: "Are these digital credentials secure and tamper-proof?",
      answer:
        "Yes, our digital certificates and badges are encrypted and often backed by blockchain technology, ensuring they are 100% secure, verifiable, and tamper-resistant.",
    },
    {
      question: "Can institutes track how digital badges are used?",
      answer:
        "Absolutely. Institutes have access to analytics that show how, where, and when the credentials are viewed or shared, offering insights into student engagement and reach.",
    },
    {
      question: "How do digital certificates benefit institutes and students?",
      answer:
        "They streamline the credentialing process, reduce paperwork, enhance credibility, and provide students with a modern, portable way to prove their achievements.",
    },
  ];

  const usecases = [
    {
      title: "Academic Course Completions",
      description:
        "Issue digital certificates to students upon successful completion of degree programs, diplomas, or short-term courses.",
      icon: <FaGraduationCap size={24} />, // Represents academic achievement
    },
    {
      title: "Skill-Based Learning",
      description:
        "Recognize specific technical or soft skills with micro-credentials and digital badges for students that reflect their real-world capabilities.",
      icon: <FaCode size={24} />, // Represents technical skills
    },
    {
      title: "Workshops & Training Programs",
      description:
        "Provide digital certificates for students who attend seminars, workshops, internships, or skill enhancement sessions.",
      icon: <FaLaptopCode size={24} />, // Represents workshops/technical training
    },
    {
      title: "Co-curricular & Extra-Curricular Achievements",
      description:
        "Reward participation in debates, sports, arts, or volunteering with digital badges that students can showcase online.",
      icon: <FaTrophy size={24} />, // Represents achievements/competitions
    },
    {
      title: "Student Leadership & Contributions",
      description:
        "Acknowledge leadership roles, club positions, and project contributions with verifiable digital credentials.",
      icon: <FaUsers size={24} />, // Represents leadership/teamwork
    },
  ];

  const benefits = [
    {
      title: "Secure & Tamper-Proof Recognition",
      description:
        "Digital credentials are encrypted and verifiable, eliminating the risk of forgery or duplication.",
    },
    {
      title: "Reduced Operational Overhead",
      description:
        "Say goodbye to printing and logistics—issue certificates and badges with just a few clicks.",
    },
    {
      title: "Increased Brand Value & Credibility",
      description:
        "Position your institute as forward-thinking and student-focused by adopting modern recognition methods.",
    },
    {
      title: "Real-Time Analytics & Insights",
      description:
        "Track which credentials are being earned and shared, helping you measure engagement and reach.",
    },
    {
      title: "Blockchain & API Integration",
      description:
        "Cloudstry Tech’s platform offers blockchain-based verification and seamless integration with LMS/CRM systems.",
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
              Digital Certificate & <br /> Badges for Students
            </h2>
            <p className="text-white md:w-[70%] text-md md:text-[17.5px]">
              Empowering Institutes to Recognize Student Achievements with
              Secure, <br /> Shareable, and Verifiable Digital Credentials
            </p>
            <div className="flex gap-4 pt-[2rem]">
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
            Smarter, Safer Ways to Reward{" "}
            <span className="text-[#1f1446]">
              Student Success with Digital Certificates & Badges
            </span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#085d9e] to-[#00c1de] mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4 max-w-7xl mx-auto">
          <p className="text-color text-[16px] sm:text-[16.5px] text-justify lg:w-full">
            In today’s digital-first world, students expect more than
            traditional paper-based awards.{" "}
            <strong>Digital certificates and badges for students</strong> offer
            a smarter, more dynamic way for institutes to recognize academic
            performance, skill acquisition, co-curricular participation, and
            more. These digital credentials are tamper-proof, easy to verify,
            and can be proudly shared across professional networks, resumes, and
            social platforms—enhancing a student’s digital identity and
            employability.
          </p>
          <p className="text-color text-[16px] sm:text-[16.5px] text-justify lg:w-full">
            At Cloudstry Tech, we empower educational institutes to simplify and
            secure the credentialing process. Our platform enables you to issue,
            store, and manage digital badges for students with just a few
            clicks. Every badge or certificate is backed by strong encryption
            and blockchain verification, ensuring authenticity and protecting
            against forgery. Whether you're issuing course completions, training
            certifications, or merit-based recognitions, Cloudstry Tech ensures
            your credentials are trusted, trackable, and future-ready.
          </p>
          <p className="text-color text-[16px] sm:text-[16.5px] text-justify lg:w-full">
            By shifting to our{" "}
            <Link to="/digital-certificate" className="text-blue-600">
              digital credentials platform
            </Link>{" "}
            , institutes not only reduce paperwork and administrative overhead
            but also elevate their brand as innovators in student engagement and
            recognition. Equip your students with credentials they can carry
            confidently into their careers—verified, portable, and proudly
            earned.
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
              Use Cases and Benefits for Institutes
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
            Get in touch to implement secure, verifiable digital certificates
            and elevate your university’s recognition system
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
            <Link to="/digital-certificate/organizations">
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
            </Link>
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

export default Institute;
