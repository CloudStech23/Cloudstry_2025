import { useState, useEffect, useRef } from "react";
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
    color: "blue-600",
    text: `Align your technology with business goals through expert IT consulting. We design strategic architectures and roadmaps that enable innovation, operational agility, and long-term growth - helping your organization stay competitive, scalable, and ready for the evolving demands of the digital world.`,
  },
  {
    title: "IT SOFTWARE AND MAINTENANCE",
    icon: <LuLaptopMinimalCheck size={30} />,
    color: "rose-600",
    text: `We develop custom software solutions designed to fit your specific requirements and business processes. From development to deployment and ongoing maintenance, our services ensure smooth performance, enhanced productivity, and long-term reliability - keeping your systems secure, scalable, and aligned with evolving goals`,
  },
  {
    title: "MANPOWER SOLUTION",
    icon: <MdManageAccounts size={30} />,
    color: "yellow-600",
    text: `We provide qualified IT professionals tailored to your project requirements - whether for short-term tasks or long-term roles. Our flexible staffing solutions ensure you have the right talent at the right time, accelerating delivery, reducing hiring costs, and enhancing overall productivity.`,
  },
];
const ProductData = [
  {
    title: "DIGITAL CERTIFICATE",
    icon: <FaHandshake size={30} />,
    color: "green-600",
    text: `Say goodbye to paper certificates! Join leading institutions and millions of professionals embracing Cloudtry Tech - your trusted partner in secure digital badging and credentialing. Enhance credibility, simplify verification, and empower earners to showcase achievements with confidence in today’s fast-paced digital world`,
  },
  {
    title: "CATTLE AADHAR",
    icon: <LuLaptopMinimalCheck size={30} />,
    color: "purple-600",
    text: `Enhance the welfare and sustainability of indigenous cattle through a digital platform that ensures unique identification, end-to-end lifecycle tracking, healthcare monitoring, effective policy enforcement, and transparent subsidy utilization—maximizing benefits for rural farmers and strengthening the agricultural ecosystem.`,
  },
  {
    title: "3PL (Logistics)",
    icon: <MdManageAccounts size={30} />,
    color: "red-600",
    text: `Our demand management solutions optimize supply chain efficiency through accurate forecasting, smart resource planning, and real-time inventory visibility. We help logistics providers meet customer demands with precision—reducing waste, improving fulfilment rates, and driving operational excellence across the entire value chain.`,
  },
];

const colorMap = {
  "blue-600": "border-t-blue-900",
  "rose-600": "border-t-rose-600",
  "yellow-600": "border-t-yellow-600",
  "green-600": "border-t-green-600",
  "purple-600": "border-t-purple-600",
  "red-600": "border-t-red-600",
};

const positions = ["center", "left", "right"];
const variants = {
  center: { x: "0%", scale: 1, zIndex: 5, opacity: 1 },
  left: { x: "-100%", scale: 0.8, zIndex: 3, opacity: 0.5 },
  right: { x: "100%", scale: 0.8, zIndex: 3, opacity: 0.5 },
};

const SolutionsWeOffer = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2]);
  const [openSection, setOpenSection] = useState("services"); // 'services' | 'products' | null
  const autoPlayRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // AutoPlay Effect
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      if (!isPaused) {
        handleBack();
      }
    }, 2500); // every 3 seconds

    return () => clearInterval(autoPlayRef.current);
  }, [isPaused]);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? section : section);
  };

  const handleNext = () => {
    setPositionIndexes((prev) => prev.map((i) => (i + 1) % 3));
  };

  const handleBack = () => {
    setPositionIndexes((prev) => prev.map((i) => (i - 1 + 3) % 3));
  };

  const bringToCenter = (index) => {
    const current = [...positionIndexes];
    const clickedPos = current.indexOf(index);
    if (clickedPos === 0) return; // Already center

    // Rotate array so clicked index becomes first (center)
    const rotated = [
      ...current.slice(clickedPos),
      ...current.slice(0, clickedPos),
    ];
    setPositionIndexes(rotated);
  };

  return (
    <div className="">
      <main className="pt-4 px-4 sm:px-6 lg:px-0   mx-auto ">
        <div className="text-center">
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

          <div className="relative mt-6 py-16 px-4 overflow-hidden rounded-tr-[80px] sm:min-h-[400px] min-h-[400px]">
            {/* Background */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80"
                alt="Background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#1f1446] opacity-70"></div>
            </div>

            {/* Carousel Cards */}
            {openSection === "services" && (
              <div className="relative flex items-center justify-center h-[300px]">
                {ServicesData.map((item, i) => {
                  const pos = positions[positionIndexes.indexOf(i)];
                  return (
                    <motion.div
                      key={i}
                      className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[300px] bg-white rounded-xl shadow-md p-5 pt-10 pb-6 cursor-pointer"
                      variants={variants}
                      initial="center"
                      animate={pos}
                      transition={{ duration: 0.6 }}
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                      onClick={() => bringToCenter(i)}
                    >
                      {/* Diagonal Banner */}
                      <div
                        className={`absolute top-0 left-0 w-0 h-0 border-t-[72px] border-r-[90px] rounded-tl-md ${
                          colorMap[item.color]
                        } border-r-transparent`}
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
                        className="text-color text-[13px] sm:text-[15px] mt-2 text-center"
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
                      className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[300px] bg-white rounded-xl shadow-md p-5 pt-10 pb-6 cursor-pointer"
                      variants={variants}
                      initial="center"
                      animate={pos}
                      transition={{ duration: 0.6 }}
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                      onClick={() => bringToCenter(i)}
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
                        className="text-color text-[13px] sm:text-[15px] mt-2 text-center"
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
            {/* <div className="flex justify-center gap-6 mt-8">
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
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SolutionsWeOffer;
