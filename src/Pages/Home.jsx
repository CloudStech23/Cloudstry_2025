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
import {
  TbBackground,
  TbCertificate,
  TbTruckDelivery,
  TbWorld,
} from "react-icons/tb";
import { GiCargoShip, GiCow } from "react-icons/gi";
import { FaAngleDown, FaGoogle, FaHandshake, FaLinkedin } from "react-icons/fa";
import { LuLaptopMinimalCheck } from "react-icons/lu";
import Counter from "../CustomeComponents/Counter";
import "./Home.css";
import ClientSlider from "../CustomeComponents/ClientSlider";
import whychooseimg from "../assets/WebsiteImages/image.png";
import GlobalPresenseIMG from "../assets/WebsiteImages/map.png";
import { FaPhone, FaFacebookF, FaPeopleGroup } from "react-icons/fa6";
import { MdAutoGraph, MdEmail, MdWatchLater } from "react-icons/md";

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
    <div className="min-h-screen ">
      <section>
        <CarouselSlider />
      </section>

      {/* Introduction section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
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
                className="text-color text-[17.5px] mb-3 text-center"
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
                className="text-color mb-3 text-[17.5px] text-center"
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
                className="text-color mb-3 text-[17.5px] text-center"
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

      <div className="">
        <main className="pt-6 px-4 sm:px-6 lg:px-0 pb-2  mx-auto">
          <div className="text-center mt-[2rem] py-12 px-4 bg-[#efefef]  ">
            {" "}
            {/*#efefef*/}
            <h2
              className="sm:text-4xl text-3xl font-bold  sm:leading-none mb-6"
              style={{
                fontFamily: "Poppines, sans-serif",
                color: HeadTextColor,
              }}
            >
              SOLUTIONS WE OFFER
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#085d9e] to-[#00c1de] mx-auto mb-10 rounded-full"></div>
            {/* <h5
              className="sm:text-[18px] mt-2  text-sm sm:w-[60%] lg:w-[72%] font-medium text-color text-center mx-auto"
              style={{ fontFamily: SubTextFontFamily }}
              // as of now we consider the font as a medium
            >
              At Cloudstry Tech, we deliver smart, scalable solutions tailored
              to your unique business needs. We combine innovation with
              expertise to solve real-world challenges across industries.
            </h5> */}
            <div className="flex flex-wrap justify-center gap-6 mt-14">
              {/* CARD START */}
              <div className="relative w-[210px] rounded-xl bg-white shadow-md p-5 pt-10 pb-6">
                {/* Diagonal Banner */}
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[72px] border-r-[90px] rounded-tl-md border-t-orange-500 border-r-transparent">
                  <div className="absolute top-[-59px] left-[10px] text-white text-xl">
                    <TbCertificate size={30} />
                  </div>
                </div>

                {/* Card Body */}
                <h2
                  className="text-xl font-bold mt-6 text-center"
                  style={{ fontFamily: HeadFontFamily1 }}
                >
                  DIGITAL <br /> CERTIFICATION
                </h2>
                <p
                  className="text-color text-[15px] mt-2 text-center"
                  style={{ fontFamily: SubTextFontFamily }}
                >
                  Say goodbye to paper certificates! Join millions of achievers
                  who rely on our secure, verifiable digital certificate
                  solutions to recognize and showcase success anytime, anywhere.
                </p>
              </div>
              <div className="relative w-[210px] rounded-xl bg-white shadow-md p-5 pt-10 pb-6">
                {/* Diagonal Banner */}
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[72px] border-r-[90px] rounded-tl-md border-t-blue-500 border-r-transparent">
                  <div className="absolute top-[-59px] left-[10px] text-white text-xl">
                    <GiCow size={30} />
                  </div>
                </div>

                {/* Card Body */}
                <h2
                  className="text-xl font-bold mt-6 text-center"
                  style={{ fontFamily: HeadFontFamily1 }}
                >
                  CATTLE <br /> AADHAR
                </h2>
                <p
                  className="text-color text-[15px] mt-2 text-center"
                  style={{ fontFamily: SubTextFontFamily }}
                >
                  Empowering cattle owners with unique digital IDs for better
                  traceability and health tracking. Our solution ensures smarter
                  management and data-driven decision-making.
                </p>
              </div>
              <div className="relative w-[210px] rounded-xl bg-white shadow-md p-5 pt-10 pb-6">
                {/* Diagonal Banner */}
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[72px] border-r-[90px] rounded-tl-md border-t-green-500 border-r-transparent">
                  <div className="absolute top-[-59px] left-[10px] text-white text-xl">
                    <GiCargoShip size={30} />
                  </div>
                </div>

                {/* Card Body */}
                <h2
                  className="text-xl font-bold mt-6 text-center"
                  style={{
                    fontFamily: HeadFontFamily1,
                    // color: HeadTextColor,
                  }}
                >
                  3PL <br />
                  SOLUTION
                </h2>
                <p
                  className="text-color text-[15px] mt-2 text-center"
                  style={{ fontFamily: SubTextFontFamily }}
                >
                  Enhance your supply chain with intelligent demand forecasting
                  and logistics planning. Our 3PL solutions optimize inventory,
                  reduce costs, and improve delivery efficiency.
                </p>
              </div>
              <div className="relative w-[210px] rounded-xl bg-white shadow-md p-5 pt-10 pb-6">
                {/* Diagonal Banner */}
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[72px] border-r-[90px] rounded-tl-md border-t-slate-500 border-r-transparent">
                  <div className="absolute top-[-59px] left-[10px] text-white text-xl">
                    <FaHandshake size={30} />
                  </div>
                </div>

                {/* Card Body */}
                <h2
                  className="text-xl font-bold mt-6 text-center"
                  style={{
                    fontFamily: HeadFontFamily1,
                    // color: HeadTextColor,
                  }}
                >
                  IT STRATEGY <br />
                  CONSULTANCY
                </h2>
                <p
                  className="text-color text-[15px] mt-2 text-center"
                  style={{ fontFamily: SubTextFontFamily }}
                >
                  Align your technology with business goals through expert IT
                  consulting. We craft strategies that drive innovation, growth,
                  and resilience.
                </p>
              </div>
              <div className="relative w-[210px] rounded-xl bg-white shadow-md p-5 pt-10 pb-6">
                {/* Diagonal Banner */}
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[72px] border-r-[90px] rounded-tl-md border-t-rose-600 border-r-transparent">
                  <div className="absolute top-[-59px] left-[10px] text-white text-xl">
                    <LuLaptopMinimalCheck size={30} />
                  </div>
                </div>

                {/* Card Body */}
                <h2
                  className="text-xl font-bold mt-6 text-center"
                  style={{
                    fontFamily: HeadFontFamily1,
                    // color: HeadTextColor,
                  }}
                >
                  SOFTWARE AND <br />
                  STAFFING SOLUTIONS
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
            </div>
          </div>
        </main>
      </div>

      {/* solutions we offer section with blue bg  */}
      <div className="">
        <main className="pt-6 px-4 sm:px-6 lg:px-0 pb-2  mx-auto">
          <div className="text-center mt-[2rem] py-12 px-4">
            {/*#efefef*/}
            <h2
              className="sm:text-4xl text-3xl font-bold  sm:leading-none mb-6"
              style={{
                fontFamily: "Poppines, sans-serif",
                color: HeadTextColor,
              }}
            >
              SOLUTIONS WE OFFER
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#085d9e] to-[#00c1de] mx-auto mb-10 rounded-full"></div>
            <div className="relative mt-14 py-10 px-4 rounded-xl overflow-hidden">
              <div className="absolute inset-0 -z-10">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80"
                  alt="Background"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#085d9e] bg-opacity-70"></div>
              </div>
              <div className="flex flex-wrap justify-center gap-6 mt-14">
                {/* CARD START */}
                <div className="relative w-[210px] rounded-xl bg-white shadow-md p-5 pt-10 pb-6">
                  {/* Diagonal Banner */}
                  <div className="absolute top-0 left-0 w-0 h-0 border-t-[72px] border-r-[90px] rounded-tl-md border-t-orange-500 border-r-transparent">
                    <div className="absolute top-[-59px] left-[10px] text-white text-xl">
                      <TbCertificate size={30} />
                    </div>
                  </div>

                  {/* Card Body */}
                  <h2
                    className="text-xl font-bold mt-6 text-center"
                    style={{ fontFamily: HeadFontFamily1 }}
                  >
                    DIGITAL <br /> CERTIFICATION
                  </h2>
                  <p
                    className="text-color text-[15px] mt-2 text-center"
                    style={{ fontFamily: SubTextFontFamily }}
                  >
                    Say goodbye to paper certificates! Join millions of
                    achievers who rely on our secure, verifiable digital
                    certificate solutions to recognize and showcase success
                    anytime, anywhere.
                  </p>
                </div>
                <div className="relative w-[210px] rounded-xl bg-white shadow-md p-5 pt-10 pb-6">
                  {/* Diagonal Banner */}
                  <div className="absolute top-0 left-0 w-0 h-0 border-t-[72px] border-r-[90px] rounded-tl-md border-t-blue-500 border-r-transparent">
                    <div className="absolute top-[-59px] left-[10px] text-white text-xl">
                      <GiCow size={30} />
                    </div>
                  </div>

                  {/* Card Body */}
                  <h2
                    className="text-xl font-bold mt-6 text-center"
                    style={{ fontFamily: HeadFontFamily1 }}
                  >
                    CATTLE <br /> AADHAR
                  </h2>
                  <p
                    className="text-color text-[15px] mt-2 text-center"
                    style={{ fontFamily: SubTextFontFamily }}
                  >
                    Empowering cattle owners with unique digital IDs for better
                    traceability and health tracking. Our solution ensures
                    smarter management and data-driven decision-making.
                  </p>
                </div>
                <div className="relative w-[210px] rounded-xl bg-white shadow-md p-5 pt-10 pb-6">
                  {/* Diagonal Banner */}
                  <div className="absolute top-0 left-0 w-0 h-0 border-t-[72px] border-r-[90px] rounded-tl-md border-t-green-500 border-r-transparent">
                    <div className="absolute top-[-59px] left-[10px] text-white text-xl">
                      <GiCargoShip size={30} />
                    </div>
                  </div>

                  {/* Card Body */}
                  <h2
                    className="text-xl font-bold mt-6 text-center"
                    style={{
                      fontFamily: HeadFontFamily1,
                      // color: HeadTextColor,
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
                    optimize inventory, reduce costs, and improve delivery
                    efficiency.
                  </p>
                </div>
                <div className="relative w-[210px] rounded-xl bg-white shadow-md p-5 pt-10 pb-6">
                  {/* Diagonal Banner */}
                  <div className="absolute top-0 left-0 w-0 h-0 border-t-[72px] border-r-[90px] rounded-tl-md border-t-slate-500 border-r-transparent">
                    <div className="absolute top-[-59px] left-[10px] text-white text-xl">
                      <FaHandshake size={30} />
                    </div>
                  </div>

                  {/* Card Body */}
                  <h2
                    className="text-xl font-bold mt-6 text-center"
                    style={{
                      fontFamily: HeadFontFamily1,
                      // color: HeadTextColor,
                    }}
                  >
                    IT STRATEGY <br />
                    CONSULTANCY
                  </h2>
                  <p
                    className="text-color text-[15px] mt-2 text-center"
                    style={{ fontFamily: SubTextFontFamily }}
                  >
                    Align your technology with business goals through expert IT
                    consulting. We craft strategies that drive innovation,
                    growth, and resilience.
                  </p>
                </div>
                <div className="relative w-[210px] rounded-xl bg-white shadow-md p-5 pt-10 pb-6">
                  {/* Diagonal Banner */}
                  <div className="absolute top-0 left-0 w-0 h-0 border-t-[72px] border-r-[90px] rounded-tl-md border-t-rose-600 border-r-transparent">
                    <div className="absolute top-[-59px] left-[10px] text-white text-xl">
                      <LuLaptopMinimalCheck size={30} />
                    </div>
                  </div>

                  {/* Card Body */}
                  <h2
                    className="text-xl font-bold mt-6 text-center"
                    style={{
                      fontFamily: HeadFontFamily1,
                      // color: HeadTextColor,
                    }}
                  >
                    SOFTWARE AND <br />
                    STAFFING SOLUTIONS
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
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* counter section  */}
      <section>
        <Counter />
      </section>

      {/* client section */}
      <div>
        <ClientSlider />
      </div>

      <div>
        <main className="pt-6 px-4 sm:px-6 lg:px-0 pb-2  mx-auto">
          <div className="text-center mt-[2rem] py-12 px-4  ">
            {" "}
            {/*#efefef*/}
            <h2
              className="sm:text-4xl text-3xl font-bold  sm:leading-none mb-6"
              style={{
                fontFamily: "Poppines, sans-serif",
                color: HeadTextColor,
              }}
            >
              INDUSTRIES WE CATER TO
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#085d9e] to-[#00c1de] mx-auto mb-10 rounded-full"></div>
            <h5
              className="sm:text-[18px] mt-2  text-sm sm:w-[60%] lg:w-[72%] font-medium text-color text-center mx-auto"
              style={{ fontFamily: SubTextFontFamily }}
              // as of now we consider the font as a medium
            >
              At Cloudstry Tech, we customize our solutions to meet the unique
              challenges of a wide range of industries. Our expertise ensures
              that every sector benefits from digital transformation, enhanced
              efficiency, and seamless technology integration.
            </h5>
            <div className="flex flex-wrap justify-center gap-6 mt-14">
              <div className="relative w-[210px] hover-card rounded-xl bg-white p-5 pt-10 pb-6">
                <h2
                  className="text-xl font-bold  text-center"
                  style={{ fontFamily: HeadFontFamily1 }}
                >
                  UNIVERSITIES
                </h2>
                <p
                  className="text-color text-[15px] hover-card-text mt-2 text-center"
                  style={{ fontFamily: SubTextFontFamily }}
                >
                  We empower universities and higher education institutions with
                  reliable Digital Certification solutions that simplify
                  credential management and verification.
                </p>
              </div>
              <div className="relative w-[210px] hover-card rounded-xl bg-white p-5 pt-10 pb-6">
                <h2
                  className="text-xl font-bold  text-center"
                  style={{ fontFamily: HeadFontFamily1 }}
                >
                  ORGANIZATION
                </h2>
                <p
                  className="text-color text-[15px] hover-card-text mt-2 text-center"
                  style={{ fontFamily: SubTextFontFamily }}
                >
                  From startups to multinational corporations, we provide secure
                  and reliable Digital Certification services that validate
                  credentials and build trust.
                </p>
              </div>
              <div className="relative w-[210px] hover-card rounded-xl bg-white p-5 pt-10 pb-6">
                <h2
                  className="text-xl font-bold  text-center"
                  style={{ fontFamily: HeadFontFamily1 }}
                >
                  INSTITUTIONS
                </h2>
                <p
                  className="text-color text-[15px] hover-card-text mt-2 text-center"
                  style={{ fontFamily: SubTextFontFamily }}
                >
                  We support institutions with scalable technology and trusted
                  Digital Certification solutions to ensure compliance and
                  secure record-keeping.
                </p>
              </div>
              <div className="relative w-[210px] hover-card rounded-xl bg-white p-5 pt-10 pb-6">
                <h2
                  className="text-xl font-bold  text-center"
                  style={{ fontFamily: HeadFontFamily1 }}
                >
                  GOVERNMENT
                </h2>
                <p
                  className="text-color text-[15px] hover-card-text mt-2 text-center"
                  style={{ fontFamily: SubTextFontFamily }}
                >
                  We support governments with secure digital services, including
                  Cattle Aadhaar for efficient and reliable livestock and cattle
                  identification.
                </p>
              </div>
              <div className="relative w-[210px] hover-card rounded-xl bg-white p-5 pt-10 pb-6">
                <h2
                  className="text-xl font-bold  text-center"
                  style={{ fontFamily: HeadFontFamily1 }}
                >
                  LOGISTIC
                </h2>
                <p
                  className="text-color text-[15px] hover-card-text mt-2 text-center"
                  style={{ fontFamily: SubTextFontFamily }}
                >
                  We optimize logistics operations with intelligent demand
                  management, real-time tracking, and streamlined supply chain
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>

      <div>
        <main className="pt-6 px-4 sm:px-6 lg:px-0 pb-2  mx-auto bg-[#efefef]">
          <div className="text-center  py-12 px-4">
            <h2
              className="sm:text-4xl text-3xl font-bold  sm:leading-none mb-6"
              style={{
                fontFamily: "Poppines, sans-serif",
                color: HeadTextColor,
              }}
            >
              OUR HAPPY CUSTOMERS
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#085d9e] to-[#00c1de] mx-auto mb-10 rounded-full"></div>

            <div className="flex flex-wrap justify-center gap-4 mt-8 max-w-6xl mx-auto">
              {[
                {
                  person_name: "Joshua J.",
                  desc: "Impressive range of features sets it apart as the ultimate solution for certificate verification. Their enterprise plan, along with customizable options, caters to diverse company needs, making it an awesome choice.",
                  designation: "Chief Learning Officer",
                },
                {
                  person_name: "Joshua J.",
                  desc: "Impressive range of features sets it apart as the ultimate solution for certificate verification. Their enterprise plan, along with customizable options, caters to diverse company needs, making it an awesome choice.",
                  designation: "Chief Learning Officer ",
                },
                {
                  person_name: "Joshua J.",
                  desc: "Impressive range of features sets it apart as the ultimate solution for certificate verification. Their enterprise plan, along with customizable options, caters to diverse company needs, making it an awesome choice.",
                  designation: "Chief Learning Officer",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-xl py-4 px-2 max-w-[300px] mx-auto"
                >
                  <div className="text-gray-600 text-sm mb-4 italic relative ">
                    {item?.desc}
                  </div>

                  <div className="flex mt-6">
                    {/* Empty circular photo placeholder */}
                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>

                    <div className="">
                      <div className="font-semibold text-gray-800  text-left">
                        {item.person_name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {item.designation}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      <div>
        <main className="pt-6 px-4 sm:px-6 lg:px-0 pb-2  mx-auto">
          <div className="text-center mt-[2rem] py-12 px-4   ">
            {" "}
            {/*#efefef*/}
            <h2
              className="sm:text-4xl text-3xl font-bold  sm:leading-none mb-6"
              style={{
                fontFamily: "Poppines, sans-serif",
                color: HeadTextColor,
              }}
            >
              WHY CHOOSE US ?
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#085d9e] to-[#00c1de] mx-auto mb-10 rounded-full"></div>
            <h5
              className="sm:text-[18px] mt-2  text-sm sm:w-[60%] lg:w-[72%] font-medium text-color text-center mx-auto"
              style={{ fontFamily: SubTextFontFamily }}
              // as of now we consider the font as a medium
            >
              At Cloudstry Tech, we are committed to delivering innovative and
              reliable digital solutions that drive your business forward. Our
              client-centric approach, technical expertise, and dedication to
              quality set us apart in the IT services landscape.
            </h5>
            <div className="mt-12 flex flex-col items-center justify-center">
              {/* Desktop Layout */}
              <div className="hidden md:grid md:grid-cols-3 mt-5 gap-4 w-full max-w-6xl">
                {/* Left Text */}
                <div className="flex flex-col  justify-between text-sm sm:text-base text-left px-4">
                  <div>
                    <h2
                      className="text-center font-bold"
                      style={{ textTransform: "uppercase" }}
                    >
                      Tailored Solutions
                    </h2>
                    <p
                      className="text-center text-[15px] text-color"
                      style={{ fontFamily: SubTextFontFamily }}
                    >
                      We customize our services to perfectly fit your unique
                      business needs and challenges
                    </p>
                  </div>
                  <div>
                    <h2
                      className="text-center font-bold"
                      style={{ textTransform: "uppercase" }}
                    >
                      Experienced Team
                    </h2>
                    <p
                      className="text-center text-[15px] text-color"
                      style={{ fontFamily: SubTextFontFamily }}
                    >
                      We leverage the latest tools and innovations to ensure
                      future-ready solutions
                    </p>
                  </div>
                </div>

                {/* Center Image */}
                <div className="flex justify-center items-center">
                  <img
                    src={whychooseimg}
                    alt="Center"
                    className="w-full max-w-[300px] h-auto object-contain"
                  />
                </div>

                {/* Right Text */}
                <div className="flex flex-col  justify-between text-sm sm:text-base text-left px-4">
                  <div>
                    <h2
                      className="text-center font-bold"
                      style={{ textTransform: "uppercase" }}
                    >
                      Cutting-Edge Technology
                    </h2>
                    <p
                      className="text-center text-[15px] text-color"
                      style={{ fontFamily: SubTextFontFamily }}
                    >
                      Our skilled professionals bring years of industry
                      experience and deep technical knowledge
                    </p>
                  </div>
                  <div>
                    <h2
                      className="text-center font-bold"
                      style={{ textTransform: "uppercase" }}
                    >
                      Reliable Support
                    </h2>
                    <p
                      className="text-center text-[15px] text-color"
                      style={{ fontFamily: SubTextFontFamily }}
                    >
                      From implementation to ongoing assistance, we provide
                      dependable support to keep your operations smooth
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden flex flex-col items-center text-center space-y-6 mt-8 px-4">
                <div>
                  <p>jsdfnakdfasjdf</p>
                  <p>kfmasjdfajkd</p>
                  <p>akdjfjjakdfjksaf</p>
                </div>

                <div>
                  <p>jsdfnakdfasjdf</p>
                  <p>kfmasjdfajkd</p>
                  <p>akdjfjjakdfjksaf</p>
                </div>

                <img
                  src={whychooseimg}
                  alt="Center"
                  className="w-full max-w-[300px] h-auto object-contain"
                />

                <div>
                  <p>jsdfnakdfasjdf</p>
                  <p>kfmasjdfajkd</p>
                  <p>akdjfjjakdfjksaf</p>
                </div>

                <div>
                  <p>jsdfnakdfasjdf</p>
                  <p>kfmasjdfajkd</p>
                  <p>akdjfjjakdfjksaf</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* here commented code will come*/}
      {/*commented code will end here*/}

      <div>
        <main className="pt-6 px-4 sm:px-6 lg:px-0 pb-2  mx-auto ">
          <div className="text-center mb-[11rem]  py-12 px-4">
            <h2
              className="sm:text-4xl text-3xl font-bold  sm:leading-none mb-6"
              style={{
                fontFamily: "Poppines, sans-serif",
                color: HeadTextColor,
              }}
            >
              OUR GLOBAL PRESENCE
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#085d9e] to-[#00c1de] mx-auto mb-10 rounded-full"></div>
            <h5
              className="sm:text-[18px] mt-2  text-sm sm:w-[60%] lg:w-[72%] font-medium text-color text-center mx-auto"
              style={{ fontFamily: SubTextFontFamily }}
              // as of now we consider the font as a medium
            >
              Cloudstry Tech proudly serves clients across multiple regions,
              delivering consistent quality and innovation worldwide. Our global
              footprint enables us to understand diverse market needs and offer
              localized solutions with a global perspective.
            </h5>

            <div className="relative">
              {/* Hero area */}
              <div
                className="h-[25rem] max-w-7xl  mx-auto mt-[4rem] overflow-hidden "
                style={{ borderRadius: "20px" }}
              >
                {/* Replace with your image if you like */}
                <img
                  src={GlobalPresenseIMG}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* Cards wrapper */}
              <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-[60%] flex flex-wrap justify-center gap-[2.4rem] px-4 w-full max-w-6xl mx-auto">
                {/* Card 1 */}
                <div className="bg-white rounded-lg shadow-lg p-5 w-[250px] flex flex-col items-center text-center">
                  <div
                    className="w-12 h-12 rounded-full  flex items-center justify-center mb-3"
                    style={{ background: gradientBG }}
                  >
                    <TbWorld size={25} color="white" />
                  </div>
                  <h3
                    className="font-bold mb-1"
                    style={{ fontFamily: HeadFontFamily1 }}
                  >
                    Worldwide Clientele
                  </h3>
                  <p className="text-color text-center">
                    We collaborate with businesses across continents, spanning
                    various industries and sectors
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-lg shadow-lg p-5 w-[250px] flex flex-col items-center text-center">
                  <div
                    className="w-12 h-12 rounded-full  flex items-center justify-center mb-3"
                    style={{ background: gradientBG }}
                  >
                    <FaPeopleGroup size={25} color="white" />
                  </div>
                  <h3
                    className="font-bold mb-1"
                    style={{ fontFamily: HeadFontFamily1 }}
                  >
                    Multicultural Expertise
                  </h3>
                  <p className="text-color text-center">
                    Our team’s diverse background helps us tailor solutions that
                    respect local cultures and business practices
                  </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-lg shadow-lg p-5 w-[250px] flex flex-col items-center text-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                    style={{ background: gradientBG }}
                  >
                    <MdWatchLater size={25} color="white" />
                  </div>
                  <h3
                    className="font-bold mb-1"
                    style={{ fontFamily: HeadFontFamily1 }}
                  >
                    24/7 Support
                  </h3>
                  <p className="text-color text-center">
                    With offices and partners around the globe, we provide
                    round-the-clock assistance and seamless communication
                  </p>
                </div>

                {/* Card 4 */}
                <div className="bg-white rounded-lg shadow-lg p-5 w-[250px] flex flex-col items-center text-center">
                  <div
                    className="w-12 h-12 rounded-full  flex items-center justify-center mb-3"
                    style={{ background: gradientBG }}
                  >
                    <MdAutoGraph size={25} color="white" />
                  </div>
                  <h3
                    className="font-bold mb-1"
                    style={{ fontFamily: HeadFontFamily1 }}
                  >
                    Scalable Solutions
                  </h3>
                  <p className="text-color text-center">
                    Whether a startup or enterprise, our solutions adapt to your
                    needs regardless of location
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <main className="pt-10 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#085d9e] to-[#00c1de]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 ">
          {/* Left Text Content */}
          <div className="text-white text-center md:text-left">
            <h2
              className="font-medium mb-8"
              style={{
                fontFamily: HeadFontFamily1,
                lineHeight: "1.2em",
                fontSize: "50px",
              }}
            >
              Ready to get started? Contact us for IT Support, Staffing, Digital
              Certificate, Cattle Adhaar, and 3PL solutions.
            </h2>

            {/* Contact Icons and Details */}
            <div className="mt-20 space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-2">
                <FaPhone size={17} color="white" className="mt-1" />
                <div>073169-12309</div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2">
                <MdEmail size={22} color="white" className="mt-1" />
                <div>hr@cloudstrytech.com</div>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4 mt-4 ">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: gradientBG }}
                >
                  <FaLinkedin color="white" />
                </div>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: gradientBG }}
                >
                  <FaFacebookF color="white" />
                </div>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: gradientBG }}
                >
                  <FaGoogle color="white" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="w-full max-w-md mx-auto">
            <form className="bg-white shadow-md rounded-xl px-6 pt-4 pb-4">
              {/* Full Name Field 1 */}
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

              {/* Full Name Field 2 */}
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

              {/* Full Name Field 3 */}
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

              {/* Full Name Field 4 */}
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

              {/* Textarea Field */}
              <div className="mb-3">
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
