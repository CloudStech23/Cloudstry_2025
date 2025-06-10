import Navbar from "../Navigators/Navbar";
import { useState, useEffect } from "react";
import CarouselSlider from "../CustomeComponents/Slider";
import {
  HeadFontFamily1,
  HeadTextColor,
  SubTextColor,
  SubTextFontFamily,
} from "../CustomeComponents/Theme";
import { TbCertificate, TbTruckDelivery } from "react-icons/tb";
import { GiCow } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa";
import { LuLaptopMinimalCheck } from "react-icons/lu";
import Counter from "../CustomeComponents/Counter";
function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]); // Only re-run if scrolled state changes
  return (
    //margin or padding from top {90px}
    <div className="min-h-screen mt-[95px] bg-gray-50">
      <section>
        <CarouselSlider />
      </section>
      <main className="pt-16 px-4 sm:px-6 lg:px-8 pb-12 max-w-7xl mx-auto">
        {/* Proudcts section  */}
        <div className="text-center mt-[2rem]">
          <h2
            className="sm:text-4xl text-3xl font-bold text-gray-900 sm:leading-none"
            style={{ fontFamily: "Poppines, sans-serif", color: HeadTextColor }}
          >
            PRODUCTS WE OFFER
          </h2>

          <h5
            className="sm:text-[18px] mt-2  text-sm sm:w-[60%] lg:w-[72%] font-medium text-gray-900 text-center mx-auto"
            style={{ fontFamily: SubTextFontFamily, color: SubTextColor }}
            // as of now we consider the font as a medium
          >
            At Cloudstry Tech, we deliver smart, scalable solutions tailored to
            your unique business needs. We combine innovation with expertise to
            solve real-world challenges across industries.
          </h5>

          <div className="flex flex-row flex-wrap justify-center mt-14 gap-8">
            <div className="shadow-md rounded-lg px-5 py-4 bg-white w-[300px]">
              <div className="rounded-full flex items-center justify-center mb-3 w-[55px] h-[55px] mx-auto text-xs font-bold text-white bg-[#2b3d8a]">
                <TbCertificate size={40} />
              </div>
              <div
                className="text-2xl text-center font-bold"
                style={{ fontFamily: SubTextFontFamily, color: HeadTextColor }}
              >
                DIGITAL CERTIFICATION
              </div>
              <p className="text-center mt-2 text-gray text-[16px] font-medium">
                Say goodbye to paper certificates! Join millions of achievers
                who rely on our secure, verifiable digital certificate solutions
                to recognize and showcase success—anytime, anywhere.
              </p>
            </div>
            <div className="shadow-md rounded-lg px-5 py-4 bg-white w-[300px]">
              <div className="rounded-full   flex items-center justify-center mb-3 w-[55px] h-[55px] mx-auto text-xs font-bold text-white bg-[#2b3d8a]">
                <GiCow size={40} />
              </div>
              <div
                className="text-2xl text-center font-bold"
                style={{ fontFamily: SubTextFontFamily, color: HeadTextColor }}
              >
                CATTLE <br /> AADHAR
              </div>
              {/* <div className="text-2xl text-center font-bold">AADHAR</div> */}
              <p className="text-center mt-2 text-gray text-[16px] font-medium">
                Empowering cattle owners with unique digital IDs for better
                traceability and health tracking. Our solution ensures smarter
                management and data-driven decision-making.
              </p>
            </div>
            <div className="shadow-md rounded-lg px-5 py-4 bg-white w-[300px]">
              <div className="rounded-full flex items-center justify-center mb-3 w-[55px] h-[55px] mx-auto text-xs font-bold text-white bg-[#2b3d8a]">
                <TbTruckDelivery size={40} />
              </div>
              <div
                className="text-2xl text-center font-bold"
                style={{ fontFamily: SubTextFontFamily, color: HeadTextColor }}
              >
                3PL <br />
                SOLUTION
              </div>
              {/* <div className="text-2xl text-center font-bold"> SOLUTION</div> */}
              <p className="text-center mt-2 text-gray text-[16px] font-medium">
                Enhance your supply chain with intelligent demand forecasting
                and logistics planning. Our 3PL solutions optimize inventory,
                reduce costs, and improve delivery efficiency.
              </p>
            </div>
          </div>
        </div>

        {/* Services section  */}
        <div className="text-center mt-[8rem]">
          <h2
            className="sm:text-4xl text-3xl font-bold text-gray-900 sm:leading-none"
            style={{ fontFamily: "Poppines, sans-serif", color: HeadTextColor }}
          >
            SERVICES WE OFFER
          </h2>

          {/* <h5
            className="sm:text-[18px] mt-2  text-sm sm:w-[60%] lg:w-[72%] font-medium text-gray-900 text-center mx-auto"
            style={{ fontFamily: SubTextFontFamily, color: SubTextColor }}
            // as of now we consider the font as a medium
          >
            At Cloudstry Tech, we deliver smart, scalable solutions tailored to
            your unique business needs. We combine innovation with expertise to
            solve real-world challenges across industries.
          </h5> */}

          <div className="flex flex-row flex-wrap justify-center mt-12 gap-8">
            <div className="shadow-md rounded-lg px-5 py-4 bg-white w-[300px]">
              <div className="rounded-full flex items-center justify-center mb-3 w-[55px] h-[55px] mx-auto text-xs font-bold text-white bg-[#2b3d8a]">
                <FaHandshake size={40} />
              </div>
              <div
                className="text-2xl text-center font-bold"
                style={{ fontFamily: SubTextFontFamily, color: HeadTextColor }}
              >
                IT STRATEGY CONSULTANCY
              </div>
              <p className="text-center mt-2 text-gray text-[16px] font-medium">
                Align your technology with business goals through expert IT
                consulting. We craft strategies that drive innovation, growth,
                and resilience.
              </p>
            </div>
            <div className="shadow-md rounded-lg px-5 py-4 bg-white w-[300px]">
              <div className="rounded-full   flex items-center justify-center mb-3 w-[55px] h-[55px] mx-auto text-xs font-bold text-white bg-[#2b3d8a]">
                <LuLaptopMinimalCheck size={40} />
              </div>
              <div
                className="text-2xl text-center font-bold"
                style={{ fontFamily: SubTextFontFamily, color: HeadTextColor }}
              >
                SOFTWARE AND STAFFING SOLUTIONS
              </div>
              {/* <div className="text-2xl text-center font-bold">AADHAR</div> */}
              <p className="text-center mt-2 text-gray text-[16px] font-medium">
                We deliver custom software solutions and provide skilled
                staffing to help businesses scale efficiently and stay
                competitive.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Counter section  */}
      <section>
        <Counter />
      </section>
    </div>
  );
}

export default Home;
