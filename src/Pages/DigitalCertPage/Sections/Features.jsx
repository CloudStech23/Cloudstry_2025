import React, { useState, useRef, } from "react";
import { HeadFontFamily, HeadTextColor } from "../../../CustomeComponents/Theme";

const accordionData = [
  {
    title: "Privacy First",
    description:
      "Cloudstry follows strict data protection standards, leveraging Blockchain technology and inscription-based storage to ensure all personal and credential data remains private, tamper-proof, and accessible only to authorized users.",
  },
  {
    title: "Seamless Sharing & Branding",
    description:
      "Recipients can share their verified certificates and badges on LinkedIn or email with just a click. Plus, every credential can reflect your institution’s branding with logos and authorized signatures.",
  },
  {
    title: "Tamper-Proof & Secure",
    description:
      "Ensure the integrity of academic degrees, employee certifications, and training credentials with digitally signed, blockchain-backed documents that are impossible to forge.",
  },
  {
    title: "Smart Record-Keeping",
    description:
      "Keep a centralized digital log of all credentials—searchable, organized, and ready for quick access anytime you need to audit, reissue, or track learner and employee achievements.",
  },
  {
    title: "Easy to Issue & Manage",
    description:
      "Designed for admins, HR teams, and academic staff—our intuitive platform lets you issue, manage, and update thousands of credentials without needing technical expertise.",
  },
  {
    title: "Go Paperless ",
    description:
      "Streamline operations and reduce paperwork. From student diplomas to corporate training certificates, issue everything digitally—faster, greener, and more efficient.",
  },
  {
    title: "Instant Verification",
    description:
      "Make validation seamless for employers, partners, and students. Each credential has a unique verification link that proves authenticity instantly—no more phone calls or manual checks.",
  },
  {
    title: "Total Flexibility",
    description:
      "Whether you're a university, corporate, or training institute, Cloudstry adapts to your unique needs—supporting multiple formats, custom designs, and integration with your existing systems for a seamless experience..",
  },
];

function AccordionItem({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div
      className="border-2 border-[#085d9e] rounded px-4 py-3 cursor-pointer transition-all duration-200"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-[16px] sm:text-[18px] text-[#1f1446]" style={{fontFamily:HeadFontFamily}}>
          {title}
        </h3>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </div>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p className="mt-2 text-sm text-left text-[14px] sm:text-[15px] text-color">
          {description}
        </p>
      </div>
    </div>
  );
}

function Features() {
  return (
    <div className="relative w-full py-12 px-4 sm:px-6 lg:px-8 z-10">
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
            FEATURES OF OUR{" "}
            <span className="text-[#1f1446]">
              DIGITAL CREDENTIALING SOFTWARE
            </span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#085d9e] to-[#00c1de] mx-auto mb-10 rounded-full"></div>

          {/* Accordion Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col gap-4">
              {accordionData.slice(0, 4).map((item, index) => (
                <AccordionItem
                  key={index}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
            <div className="flex flex-col gap-4">
              {accordionData.slice(4).map((item, index) => (
                <AccordionItem
                  key={index + 4}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
