import { useState } from "react";

import {
  HeadFontFamily,
  HeadTextColor,
  SubTextFontFamily,
} from "../CustomeComponents/Theme";
import { TbCertificate } from "react-icons/tb";
import { GiCargoShip, GiCow } from "react-icons/gi";
import { FaHandshake, FaMinus } from "react-icons/fa";
import { LuLaptopMinimalCheck } from "react-icons/lu";

import "./Home.css";

import { MdManageAccounts } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";

function SolutionsWeOffer() {
  const [openSection, setOpenSection] = useState("services"); // 'services' | 'products' | null

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? section : section);
  };

  return (
    <div className="">
      <main className="pt-2 px-4 sm:px-6 lg:px-0 pb-2 mt-[4rem]  mx-auto">
        <div className="text-center py-2 px-4">
          {/*#efefef*/}
          <h2
            className="sm:text-4xl text-3xl font-bold  sm:leading-none mb-3"
            style={{
              fontFamily: "Poppines, sans-serif",
              color: HeadTextColor,
            }}
          >
            SOLUTIONS WE OFFER
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#085d9e] to-[#00c1de] mx-auto mb-10 rounded-full"></div>
          <div className="flex justify-left px-4 gap-4 mb-2">
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
          <div className="relative mt-8 py-10 px-4 rounded-xl overflow-hidden">
            <div className="absolute inset-0 -z-10">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80"
                alt="Background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#085d9e] bg-opacity-70"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {openSection === "services" && (
                <>
                  <div className="relative w-[300px] rounded-xl  bg-white shadow-md p-5 pt-10 pb-6">
                    {/* Diagonal Banner */}
                    <div className="absolute top-0 left-0 w-0 h-0 border-t-[72px] border-r-[90px] rounded-tl-md border-t-blue-900 border-r-transparent">
                      <div className="absolute top-[-59px] left-[10px] text-white text-xl">
                        <FaHandshake size={30} />
                      </div>
                    </div>

                    {/* Card Body */}
                    <h2
                      className="text-[18px] font-bold mt-6 text-center"
                      style={{
                        fontFamily: HeadFontFamily,
                        lineHeight: 1.2,
                      }}
                    >
                      {/* IT STRATEGY <br />
                    CONSULTANCY */}
                      IT STRATEGY AND ARCHITECTURE CONSULTING
                    </h2>
                    <p
                      className="text-color text-[15px] mt-2 text-center"
                      style={{ fontFamily: SubTextFontFamily }}
                    >
                      Align your technology with business goals through expert
                      IT consulting. We craft strategies that drive innovation,
                      growth, and resilience.
                    </p>
                  </div>
                  <div className="relative w-[300px] rounded-xl   bg-white shadow-md p-5 pt-10 pb-6">
                    {/* Diagonal Banner */}
                    <div className="absolute top-0 left-0 w-0 h-0 border-t-[72px] border-r-[90px] rounded-tl-md border-t-rose-600 border-r-transparent">
                      <div className="absolute top-[-59px] left-[10px] text-white text-xl">
                        <LuLaptopMinimalCheck size={30} />
                      </div>
                    </div>

                    {/* Card Body */}
                    <h2
                      className="text-[18px] font-bold mt-6 text-center"
                      style={{
                        fontFamily: HeadFontFamily,
                        lineHeight: 1.2,
                      }}
                    >
                      {/* SOFTWARE AND <br />
                    STAFFING SOLUTIONS */}
                      IT SOFTWARE <br />
                      AND MAINTENANCE
                    </h2>
                    <p
                      className="text-color text-[15px] mt-2 text-center"
                      style={{ fontFamily: SubTextFontFamily }}
                    >
                      We deliver custom software solutions and provide skilled
                      staffing to help businesses scale efficiently and stay
                      competitive.
                    </p>
                  </div>
                  <div className="relative w-[300px] rounded-xl bg-white shadow-md p-5 pt-10 pb-6">
                    {/* Diagonal Banner */}
                    <div className="absolute top-0 left-0 w-0 h-0 border-t-[72px] border-r-[90px] rounded-tl-md border-t-yellow-600 border-r-transparent">
                      <div className="absolute top-[-59px] left-[10px] text-white text-xl">
                        <MdManageAccounts size={30} />
                      </div>
                    </div>

                    {/* Card Body */}
                    <h2
                      className="text-[18px] font-bold mt-6 text-center"
                      style={{
                        fontFamily: HeadFontFamily,
                        lineHeight: 1.2,
                      }}
                    >
                      {/* SOFTWARE AND <br />
                    STAFFING SOLUTIONS */}
                      MANPOWER SOLUTION
                    </h2>
                    <p
                      className="text-color text-[15px] mt-2 text-center"
                      style={{ fontFamily: SubTextFontFamily }}
                    >
                      We deliver custom software solutions and provide skilled
                      staffing to help businesses scale efficiently and stay
                      competitive.
                    </p>
                  </div>
                </>
              )}
              {openSection === "products" && (
                <>
                  <div className="relative w-[170px] rounded-xl h-[280px] bg-white shadow-md p-5 pt-10 pb-6">
                    {/* Diagonal Banner */}
                    <div className="absolute top-0 left-0 w-0 h-0 border-t-[72px] border-r-[90px] rounded-tl-md border-t-orange-500 border-r-transparent">
                      <div className="absolute top-[-59px] left-[10px] text-white text-xl">
                        <TbCertificate size={30} />
                      </div>
                    </div>

                    {/* Card Body */}
                    <h2
                      className="text-[18px] font-bold mt-6 text-center"
                      style={{ fontFamily: HeadFontFamily, lineHeight: 1.2 }}
                    >
                      DIGITAL <br /> CERTIFICATION
                    </h2>
                    <p
                      className="text-color text-[15px] mt-2 text-center"
                      style={{ fontFamily: SubTextFontFamily }}
                    >
                      Enhance your supply chain with intelligent demand
                      forecasting and logistics planning. Our 3PL solutions
                      optimize inventory
                    </p>
                  </div>
                  <div className="relative w-[170px] rounded-xl h-[280px] bg-white shadow-md p-5 pt-10 pb-6">
                    {/* Diagonal Banner */}
                    <div className="absolute top-0 left-0 w-0 h-0 border-t-[72px] border-r-[90px] rounded-tl-md border-t-blue-500 border-r-transparent">
                      <div className="absolute top-[-59px] left-[10px] text-white text-xl">
                        <GiCow size={36} />
                      </div>
                    </div>

                    {/* Card Body */}
                    <h2
                      className="text-[18px] font-bold mt-6 text-center"
                      style={{ fontFamily: HeadFontFamily, lineHeight: 1.2 }}
                    >
                      CATTLE <br /> AADHAR
                    </h2>
                    <p
                      className="text-color text-[15px] mt-2 text-center"
                      style={{ fontFamily: SubTextFontFamily }}
                    >
                      Enhance your supply chain with intelligent demand
                      forecasting and logistics planning. Our 3PL solutions
                      optimize inventory
                    </p>
                  </div>
                  <div className="relative w-[170px] rounded-xl h-[280px] bg-white shadow-md p-5 pt-10 pb-6">
                    {/* Diagonal Banner */}
                    <div className="absolute top-0 left-0 w-0 h-0 border-t-[72px] border-r-[90px] rounded-tl-md border-t-green-500 border-r-transparent">
                      <div className="absolute top-[-59px] left-[10px] text-white text-xl">
                        <GiCargoShip size={30} />
                      </div>
                    </div>

                    {/* Card Body */}
                    <h2
                      className="text-[18px] font-bold mt-6 text-center"
                      style={{
                        fontFamily: HeadFontFamily,

                        lineHeight: 1.2,
                      }}
                    >
                      3PL <br />
                      SOLUTION
                    </h2>
                    <p
                      className="text-color text-[15px] mt-2 text-center"
                      style={{ fontFamily: SubTextFontFamily }}
                    >
                      Enhance your supply chain with intelligent demand
                      forecasting and logistics planning. Our 3PL solutions
                      optimize inventory
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SolutionsWeOffer;
