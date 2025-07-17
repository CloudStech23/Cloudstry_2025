import React, { useState } from "react";
import { HeadTextColor } from "../../../CustomeComponents/Theme";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqsLeft = [
  {
    question: "What are digital credentials and how do they work?",
    answer:
      "Digital credentials are secure, verifiable records of a person's achievements, such as degrees, certifications, or skills. Delivered through a digital credentials platform, these records can be easily shared and validated online, offering a more efficient alternative to traditional paper-based certificates.",
  },
  {
    question: "How do digital badges differ from traditional certificates?",
    answer:
      "Digital badges are a form of digital credentials that include metadata about the achievement, issuer, and verification method. Unlike traditional certificates, digital badge credentials are interactive, tamper-proof, and can be instantly verified and shared on platforms like LinkedIn, resumes, and email signatures.",
  },
  {
    question: "Is your digital credential management software secure?",
    answer:
      "Yes, our digital credential management software uses advanced encryption and blockchain-backed technology to ensure all issued badges and certificates are tamper-proof and 100% verifiable. Your digital certificate solutions remain safe and accessible only to authorized users.",
  },
];

const faqsRight = [
  {
    question: "Who can use Cloudstry’s digital certificate solutions?",
    answer:
      "Our platform is ideal for universities, training institutions, corporates, and certification bodies looking to issue verified digital credentials efficiently. Whether you're offering digital badge certification for academic, professional, or skill-based training, Cloudstry is designed for your needs.",
  },
  {
    question: "Can recipients share their digital badges and credentials?",
    answer:
      "Absolutely. Recipients can easily share their digital badges and verified digital credentials on social media, email, online portfolios, and employer databases. This boosts visibility and enhances credibility in both academic and professional networks.",
  },
  {
    question: "What are the benefits of using a digital credentials platform?",
    answer:
      "A digital credentials platform streamlines the entire credentialing process—helping you issue, manage, and track digital certificate solutions with ease. It reduces administrative workload, ensures data security, enables real-time analytics, and enhances the reach and authenticity of your credentials.",
  },
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="mb-3 border-b border-gray-200">
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full py-4 text-left font-semibold text-[#1f1446] transition-all duration-300"
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

function FAQ() {
  const [openIndexes, setOpenIndexes] = useState({});

  const toggleAccordion = (key) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
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
            <span className="text-[#1f1446]"> FREQUENTLY ASKED </span> QUESTIONS
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
  );
}

export default FAQ;
