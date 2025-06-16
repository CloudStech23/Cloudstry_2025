import Navbar from "../Navigators/Navbar";
import { useState, useEffect } from "react";
import CarouselSlider from "../CustomeComponents/Slider";
import {
  gradientBG,
  HeadFontFamily1,
  HeadTextColor,
  SubTextColor,
  SubTextFontFamily,
} from "../CustomeComponents/Theme";
import { TbBackground, TbCertificate, TbTruckDelivery } from "react-icons/tb";
import { GiCow } from "react-icons/gi";
import { FaAngleDown, FaHandshake } from "react-icons/fa";
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
    <div className="min-h-screen mt-[95px]">
      <section>
        <CarouselSlider />
      </section>

      {/* Introduction section */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="sm:text-4xl text-3xl font-bold mb-6"
              style={{
                fontFamily: "Poppines, sans-serif",
                color: HeadTextColor,
                lineHeight: 1.2,
                textTransform: "uppercase",
              }}
            >
              Bridging Gaps with Innovation,
              <br />
              Technology & Expertise
            </h2>

            <div className="w-24 h-1.5 bg-gradient-to-r from-[#085d9e] to-[#00c1de] mx-auto mb-10 rounded-full"></div>
          </div>

          <div className=" max-w-6xl mx-auto">
            <div className=" p-4 rounded-xl">
              <p
                className="text-gray-600 text-lg mb-3 text-center"
                style={{ fontFamily: SubTextFontFamily }}
              >
                At Cloudstry Technologies, we empower businesses with a diverse
                range of innovative IT products and services designed to meet
                modern challenges. From secure Digital Certification solutions
                for academic institutions and organizations, to smart Cattle
                Aadhaar systems for livestock identification, we help drive
                digital transformation across sectors.
              </p>
              <p
                className="text-gray-600 mb-3 text-lg text-center"
                style={{ fontFamily: SubTextFontFamily }}
              >
                Our expertise extends to 3PL (Third-Party Logistics) Solutions,
                offering intelligent demand planning and supply chain
                optimization, as well as IT consulting, software development,
                and staffing services that are tailored to fit your unique
                business needs. Whether you're looking to streamline operations,
                enhance data security, or scale efficiently, Cloudstry is your
                trusted technology partner.
              </p>
              <p
                className="text-gray-600 mb-3 text-lg text-center"
                style={{ fontFamily: SubTextFontFamily }}
              >
                At Cloudstry Technologies, we believe in building lasting
                partnerships by delivering reliable, future-ready solutions. Our
                commitment to quality, innovation, and customer success ensures
                that every product and service we offer not only meets industry
                standards but also exceeds expectations. Let us help you stay
                ahead in a fast-evolving digital world.
              </p>
            </div>
          </div>

          {/* <div className="mt-16 text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
              Learn More About Our Services
            </button>
          </div> */}
        </div>
      </div>

      {/* Proudcts and services section  */}
      <div className="bg-gray-100">
        <main className="pt-16 px-4 sm:px-6 lg:px-8 pb-12 max-w-7xl mx-auto">
          <div className="text-center mt-[2rem]">
            <h2
              className="sm:text-4xl text-3xl font-bold  sm:leading-none"
              style={{
                fontFamily: "Poppines, sans-serif",
                color: HeadTextColor,
              }}
            >
              PRODUCTS WE OFFER
            </h2>

            <h5
              className="sm:text-[18px] mt-2  text-sm sm:w-[60%] lg:w-[72%] font-medium text-color text-center mx-auto"
              style={{ fontFamily: SubTextFontFamily }}
              // as of now we consider the font as a medium
            >
              At Cloudstry Tech, we deliver smart, scalable solutions tailored
              to your unique business needs. We combine innovation with
              expertise to solve real-world challenges across industries.
            </h5>

            <div className="flex flex-row flex-wrap justify-center mt-14 gap-8">
              <div className="shadow-md rounded-lg px-5 py-4 bg-white w-[300px] ">
                <div
                  className="rounded-full flex items-center justify-center mb-3 w-[55px] h-[55px] mx-auto text-xs font-bold text-white  "
                  style={{ background: gradientBG }}
                >
                  <TbCertificate size={40} />
                </div>
                <div
                  className="text-2xl text-center font-bold"
                  style={{
                    fontFamily: SubTextFontFamily,
                    color: HeadTextColor,
                  }}
                >
                  DIGITAL CERTIFICATION
                </div>
                <p className="text-center mt-2 text-color text-[16px] font-medium">
                  Say goodbye to paper certificates! Join millions of achievers
                  who rely on our secure, verifiable digital certificate
                  solutions to recognize and showcase success—anytime, anywhere.
                </p>
              </div>
              <div className="shadow-md rounded-lg px-5 py-4 bg-white w-[300px]">
                <div
                  className="rounded-full   flex items-center justify-center mb-3 w-[55px] h-[55px] mx-auto text-xs font-bold text-white"
                  style={{ background: gradientBG }}
                >
                  <GiCow size={40} />
                </div>
                <div
                  className="text-2xl text-center font-bold"
                  style={{
                    fontFamily: SubTextFontFamily,
                    color: HeadTextColor,
                  }}
                >
                  CATTLE <br /> AADHAR
                </div>
                {/* <div className="text-2xl text-center font-bold">AADHAR</div> */}
                <p className="text-center mt-2 text-color text-[16px] font-medium">
                  Empowering cattle owners with unique digital IDs for better
                  traceability and health tracking. Our solution ensures smarter
                  management and data-driven decision-making.
                </p>
              </div>
              <div className="shadow-md rounded-lg px-5 py-4 bg-white w-[300px]">
                <div
                  className="rounded-full flex items-center justify-center mb-3 w-[55px] h-[55px] mx-auto text-xs font-bold text-white  "
                  style={{ background: gradientBG }}
                >
                  <TbTruckDelivery size={40} />
                </div>
                <div
                  className="text-2xl text-center font-bold"
                  style={{
                    fontFamily: SubTextFontFamily,
                    color: HeadTextColor,
                  }}
                >
                  3PL <br />
                  SOLUTION
                </div>
                {/* <div className="text-2xl text-center font-bold"> SOLUTION</div> */}
                <p className="text-center mt-2 text-color text-[16px] font-medium">
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
              className="sm:text-4xl text-3xl font-bold   sm:leading-none"
              style={{
                fontFamily: "Poppines, sans-serif",
                color: HeadTextColor,
              }}
            >
              SERVICES WE OFFER
            </h2>

            {/* <h5
            className="sm:text-[18px] mt-2  text-sm sm:w-[60%] lg:w-[72%] font-medium text-color-900 text-center mx-auto"
            style={{ fontFamily: SubTextFontFamily, color: SubTextColor }}
            // as of now we consider the font as a medium
          >
            At Cloudstry Tech, we deliver smart, scalable solutions tailored to
            your unique business needs. We combine innovation with expertise to
            solve real-world challenges across industries.
          </h5> */}

            <div className="flex flex-row flex-wrap justify-center mt-12 gap-8">
              <div className="shadow-md rounded-lg px-5 py-4 bg-white w-[300px]">
                <div className="rounded-full flex items-center justify-center mb-3 w-[55px] h-[55px] mx-auto text-xs font-bold text-white bg-[#085d9e]">
                  <FaHandshake size={40} />
                </div>
                <div
                  className="text-2xl text-center font-bold"
                  style={{
                    fontFamily: SubTextFontFamily,
                    color: HeadTextColor,
                  }}
                >
                  IT STRATEGY CONSULTANCY
                </div>
                <p className="text-center mt-2 text-color text-[16px] font-medium">
                  Align your technology with business goals through expert IT
                  consulting. We craft strategies that drive innovation, growth,
                  and resilience.
                </p>
              </div>
              <div className="shadow-md rounded-lg px-5 py-4 bg-white w-[300px]">
                <div className="rounded-full   flex items-center justify-center mb-3 w-[55px] h-[55px] mx-auto text-xs font-bold text-white bg-[#085d9e]">
                  <LuLaptopMinimalCheck size={40} />
                </div>
                <div
                  className="text-2xl text-center font-bold"
                  style={{
                    fontFamily: SubTextFontFamily,
                    color: HeadTextColor,
                  }}
                >
                  SOFTWARE AND STAFFING SOLUTIONS
                </div>
                {/* <div className="text-2xl text-center font-bold">AADHAR</div> */}
                <p className="text-center mt-2 text-color text-[16px] font-medium">
                  We deliver custom software solutions and provide skilled
                  staffing to help businesses scale efficiently and stay
                  competitive.
                </p>
              </div>
              <div
                className="shadow-md rounded-lg px-5 py-4 w-[300px]"
                style={{ background: gradientBG }}
              >
                <div
                  className="rounded-full   flex items-center justify-center mb-3 w-[55px] h-[55px] mx-auto text-xs font-bold text-white "
                  style={{ background: gradientBG }}
                >
                  <LuLaptopMinimalCheck size={40} />
                </div>
                <div
                  className="text-2xl text-center font-bold"
                  style={{ fontFamily: SubTextFontFamily, color: "white" }}
                >
                  SOFTWARE AND STAFFING SOLUTIONS
                </div>
                {/* <div className="text-2xl text-center font-bold">AADHAR</div> */}
                <p className="text-center mt-2 text-white text-[16px] font-medium">
                  We deliver custom software solutions and provide skilled
                  staffing to help businesses scale efficiently and stay
                  competitive.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Counter section  */}
      <section>
        <Counter />
      </section>

      <main className="pt-10 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#085d9e] to-[#00c1de]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 ">
          {/* Left Text Content */}
          <div className="text-white text-center md:text-left">
            <h2
              className=" font-medium  mb-4 " //text-4xl md:text-6xl
              style={{
                fontFamily: HeadFontFamily1,
                lineHeight: "1.2em",
                fontSize: "4rem",
              }}
            >
              Ready to get started? Contact us for IT Support, Staffing, Digital
              Certificate, Cattle Adhaar, and 3PL solutions.
            </h2>
            {/* <p className="text-lg md:text-xl text-color-200">
              Contact us for IT Support, Staffing, Digital Certificates, Cattle
              Aadhaar, and 3PL Solutions.
            </p>
            <p className="text-lg md:text-xl text-color-200">
              Contact us for IT Support, Staffing, Digital Certificates, Cattle
              Aadhaar, and 3PL Solutions.
            </p> */}
          </div>

          {/* Right Contact Form */}
          <div className="w-full max-w-md mx-auto">
            <form className="bg-white shadow-md rounded-xl px-6 pt-4 pb-4">
              {/* Full Name Field 1 */}
              <div className="mb-4">
                <label className="blocktfext-md font-semibold mb-1 text-color">
                  Full Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-color leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Ex: John Doe"
                />
              </div>

              {/* Full Name Field 2 */}
              <div className="mb-4">
                <label className="block text-color text-md font-semibold mb-1">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-color leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Ex: john@example.com"
                />
              </div>

              {/* Full Name Field 3 */}
              <div className="mb-4">
                <label className="block text-color text-md font-semibold mb-1">
                  Phone
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-color leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Ex: 123-456-7890"
                />
              </div>

              {/* Full Name Field 4 */}
              <div className="mb-4 relative">
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

              {/* Textarea Field */}
              <div className="mb-6">
                <label className="block text-gray-500 text-md font-semibold mb-1">
                  Write Something
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-color leading-tight focus:outline-none focus:shadow-outline h-24"
                  placeholder="Write your message here..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-center">
                <button
                  className=" px-4 py-2 rounded-full text-lg text-white bg-gradient-to-r from-[#085d9e] to-[#00c1de] font-semibold  hover:bg-gradient-to-r hover:from-white  hover:to-white hover:text-[#1273be] hover:border-[#2b3d8a] transition-all focus:outline-none focus:ring-0"
                  type="submit"
                  style={{ width: "10rem" }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
