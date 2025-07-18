import React, { useState } from "react";
import { HeadTextColor,HeadFontFamily } from "../../../CustomeComponents/Theme";
import { FiPlus, FiMinus } from "react-icons/fi";

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

function FAQ() {
  const [openIndexes, setOpenIndexes] = useState({});

  const toggleAccordion = (key) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="relative w-full py-12 mt-[4rem] px-4 sm:px-6 lg:px-8 z-10 bg-white">
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
            <span className="text-[#1f1446]"> FREQUENTLY </span> ASKED QUESTIONS
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
