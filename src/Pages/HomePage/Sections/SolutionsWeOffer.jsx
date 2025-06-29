import { useState } from "react";
import { motion } from "framer-motion";
import "../../../CSS/Home.css";
import { FaBackward, FaForward, FaHandshake, FaMinus } from "react-icons/fa";
import { LuLaptopMinimalCheck } from "react-icons/lu";
import { MdManageAccounts } from "react-icons/md";

import {
  HeadFontFamily,
  SubTextFontFamily,
} from "../../../CustomeComponents/Theme";

import { FaPlus } from "react-icons/fa6";

const ServicesData = [
  {
    title: "IT STRATEGY AND ARCHITECTURE CONSULTING",
    icon: <FaHandshake size={30} />,
    color: "blue-900",
    text: `We develop custom software solutions designed to fit your specific requirements and business processes. From development to deployment and ongoing maintenance, our services ensure smooth performance, enhanced productivity, and long-term reliability—keeping your systems secure, scalable, and aligned with evolving goals.`,
  },
  {
    title: "IT SOFTWARE AND MAINTENANCE",
    icon: <LuLaptopMinimalCheck size={30} />,
    color: "rose-600",
    text: `We develop custom software solutions designed to fit your specific requirements and business processes. From development to deployment and ongoing maintenance, our services ensure smooth performance, enhanced productivity, and long-term reliability—keeping your systems secure, scalable, and aligned with evolving goals.`,
  },
  {
    title: "MANPOWER SOLUTION",
    icon: <MdManageAccounts size={30} />,
    color: "yellow-600",
    text: `We develop custom software solutions designed to fit your specific requirements and business processes. From development to deployment and ongoing maintenance, our services ensure smooth performance, enhanced productivity, and long-term reliability—keeping your systems secure, scalable, and aligned with evolving goals.`,
  },
];
const ProductData = [
  {
    title: "DIGITAL CERTIFICATE",
    icon: <FaHandshake size={30} />,
    color: "blue-900",
    text: `We develop custom software solutions designed to fit your specific requirements and business processes. From development to deployment and ongoing maintenance, our services ensure smooth performance, enhanced productivity, and long-term reliability—keeping your systems secure, scalable, and aligned with evolving goals.`,
  },
  {
    title: "CATTLE AADHAR",
    icon: <LuLaptopMinimalCheck size={30} />,
    color: "rose-600",
    text: `We develop custom software solutions designed to fit your specific requirements and business processes. From development to deployment and ongoing maintenance, our services ensure smooth performance, enhanced productivity, and long-term reliability—keeping your systems secure, scalable, and aligned with evolving goals.`,
  },
  {
    title: "3PL SOLUTION",
    icon: <MdManageAccounts size={30} />,
    color: "yellow-600",
    text: `We develop custom software solutions designed to fit your specific requirements and business processes. From development to deployment and ongoing maintenance, our services ensure smooth performance, enhanced productivity, and long-term reliability—keeping your systems secure, scalable, and aligned with evolving goals.`,
  },
];

const positions = ["center", "left", "right"];
const variants = {
  center: { x: "0%", scale: 1, zIndex: 5, opacity: 1 },
  left: { x: "-100%", scale: 0.8, zIndex: 3, opacity: 0.5 },
  right: { x: "100%", scale: 0.8, zIndex: 3, opacity: 0.5 },
};

const SolutionsWeOffer = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2]);
  const [openSection, setOpenSection] = useState("services"); // 'services' | 'products' | null

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? section : section);
  };

  const handleNext = () => {
    setPositionIndexes((prev) => prev.map((i) => (i + 1) % 3));
  };

  const handleBack = () => {
    setPositionIndexes((prev) => prev.map((i) => (i - 1 + 3) % 3));
  };

  return (
    <div className="">
      <main className="pt-2 px-4 sm:px-6 lg:px-0 pb-2   mx-auto ">
        <div className="text-center py-2">
          {/* <h2
            className="sm:text-4xl text-3xl font-bold sm:leading-none mb-3"
            style={{
              fontFamily: "Poppines, sans-serif",
              color: HeadTextColor,
            }}
          >
            SOLUTIONS WE OFFER
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#085d9e] to-[#00c1de] mx-auto mb-10 rounded-full"></div> */}

          <div className="flex justify-left  gap-4 mb-2">
            <button
              onClick={() => toggleSection("services")}
              className="bg-white text-[#085d9e] border-b border-[#085d9e] px-6 py-2  font-semibold flex items-center gap-2 transition hover:bg-[#085d9e] hover:text-white"
              style={{ fontFamily: HeadFontFamily }}
            >
              OUR SERVICES{" "}
              {openSection === "services" ? <FaMinus /> : <FaPlus />}
            </button>
            <button
              onClick={() => toggleSection("products")}
              className="bg-white text-[#085d9e] border-b border-[#085d9e] px-6 py-2  font-semibold flex items-center gap-2 transition hover:bg-[#085d9e] hover:text-white"
              style={{ fontFamily: HeadFontFamily }}
            >
              OUR PRODUCTS
              {openSection === "products" ? <FaMinus /> : <FaPlus />}
            </button>
          </div>

          <div className="relative mt-4 py-16 px-4  overflow-hidden rounded-tr-[80px]">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80"
                alt="Background"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 bg-opacity-70"
                style={{ backgroundColor: "#1f1446" }}
              ></div>
            </div>

            {/* Carousel Cards */}
            {openSection === "services" && (
              <div className="relative flex items-center justify-center h-[300px]">
                {ServicesData.map((item, i) => {
                  const pos = positions[positionIndexes.indexOf(i)];
                  return (
                    <motion.div
                      key={i}
                      className="absolute w-[400px] h-[300px] bg-white rounded-xl shadow-md p-5 pt-10 pb-6"
                      variants={variants}
                      initial="center"
                      animate={pos}
                      transition={{ duration: 0.6 }}
                    >
                      {/* Diagonal Banner */}
                      <div
                        className={`absolute top-0 left-0 w-0 h-0 border-t-[72px] border-r-[90px] rounded-tl-md border-t-${item.color} border-r-transparent`}
                      >
                        <div className="absolute top-[-59px] left-[10px] text-white text-xl">
                          {item.icon}
                        </div>
                      </div>

                      {/* Card Body */}
                      <h2
                        className="text-[18px] font-bold mt-6 text-center"
                        style={{ fontFamily: HeadFontFamily, lineHeight: 1.2 }}
                      >
                        {item.title}
                      </h2>
                      <p
                        className="text-color text-[15px] mt-2 text-center"
                        style={{ fontFamily: SubTextFontFamily }}
                      >
                        {item.text}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            )}

            {openSection === "products" && (
              <div className="relative flex items-center justify-center h-[300px]">
                {ProductData.map((item, i) => {
                  const pos = positions[positionIndexes.indexOf(i)];
                  return (
                    <motion.div
                      key={i}
                      className="absolute w-[400px] h-[300px] bg-white rounded-xl shadow-md p-5 pt-10 pb-6"
                      variants={variants}
                      initial="center"
                      animate={pos}
                      transition={{ duration: 0.6 }}
                    >
                      {/* Diagonal Banner */}
                      <div
                        className={`absolute top-0 left-0 w-0 h-0 border-t-[72px] border-r-[90px] rounded-tl-md border-t-${item.color} border-r-transparent`}
                      >
                        <div className="absolute top-[-59px] left-[10px] text-white text-xl">
                          {item.icon}
                        </div>
                      </div>

                      {/* Card Body */}
                      <h2
                        className="text-[18px] font-bold mt-6 text-center"
                        style={{ fontFamily: HeadFontFamily, lineHeight: 1.2 }}
                      >
                        {item.title}
                      </h2>
                      <p
                        className="text-color text-[15px] mt-2 text-center"
                        style={{ fontFamily: SubTextFontFamily }}
                      >
                        {item.text}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            )}

            {/* Controls */}
            <div className="flex justify-center gap-6 mt-8">
              <button
                className="text-white bg-transparent border border-white h-10 w-10 text-center rounded-full py-2  px-[10px]"
                onClick={handleNext}
              >
                <FaBackward />
              </button>
              <button
                className="text-white bg-transparent border border-white h-10 w-10 text-center rounded-full py-2  px-[12px]"
                onClick={handleBack}
              >
                <FaForward />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SolutionsWeOffer;
