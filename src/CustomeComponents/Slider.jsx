import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";
import { Button } from "@material-tailwind/react";
import { HeadFontFamily1, HeadTextColor, NavbarItemColor } from "./Theme";
import buttonText from "@material-tailwind/react/theme/components/button/buttonText";
import { FaPause, FaPlay } from "react-icons/fa";
import { BiPlay } from "react-icons/bi";
import { useState, useRef } from "react";
import { BsArrowLeft, BsPause, BsPlay } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import img1 from "../assets/WebsiteImages/handsome-businessman-with-laptop-isolated-white-background.jpg";
// import bgimg from "../assets/WebsiteImages/bgimg-4.png";
import bgimg from "../assets/WebsiteImages/slider-banner.png";

const slides = [
  {
    src: "https://dummyimage.com/600x400/343a40/6c757d",
    title: "IT STRATEGY CONSULTANCY",
    description:
      "Unlock business growth with expert IT strategy consultancy. We design tailored technology roadmaps that align with your goals, streamline operations, and drive smarter outcomes—helping your organization adapt, innovate, and stay ahead in an ever-evolving digital landscape.",
    buttonText: "Learn More",
  },
  {
    src: "https://dummyimage.com/600x400/343a40/6c757d",
    title: "SOFTWARE & STAFFING SERVICES",
    description:
      "Boost your business with custom software solutions tailored to your needs and efficient staffing services. From powerful applications to hiring skilled professionals, we help you streamline operations, improve productivity, and scale confidently with the right technology and talent",
    buttonText: "Learn More",
  },
  {
    src: "https://badgecert.com/wp-content/uploads/2021/03/badgecert-woman.png",
    title: "DIGITAL CERTIFICATE",
    description:
      "Go paperless with secure, tamper-proof digital credentials. Our digital certificate solutions are trusted by universities, institutions, and global organizations to issue, verify, and manage certificates efficiently—ensuring authenticity, reducing fraud, and enhancing credibility in a fully digital environment.",
    buttonText: "Schedule a demo",
    buttonText1: "Login",
  },
  {
    src: "https://dummyimage.com/600x400/343a40/6c757d",
    title: "CATTLE AADHAR",
    description:
      "Digitally tag, identify, and track livestock with precision using our Cattle Adhaar solution. We empower governments and rural bodies with smart, reliable animal identification systems—enhancing traceability, health monitoring, and livestock management through technology-driven agricultural innovation.",
    buttonText: "Learn More",
  },
  {
    src: "https://dummyimage.com/600x400/343a40/6c757d",
    title: "3PL SOLUTION",
    description:
      "Plan smarter with our demand-driven 3PL solutions designed to optimize inventory, cut logistics costs, and enhance supply chain efficiency. We empower businesses with real-time visibility, streamlined operations, and scalable logistics support tailored to today’s fast-paced market demands.",
    buttonText: "Learn More",
  },
];

const CarouselSlider = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const swiperRef = useRef(null);

  const toggleAutoplay = () => {
    if (!swiperRef.current) return;
    if (isPlaying) {
      swiperRef.current.autoplay.stop();
    } else {
      swiperRef.current.autoplay.start();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className="relative w-full h-[42rem]"
      // onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
      // onMouseLeave={() => swiperRef.current?.autoplay?.start()}
    >
      <img
        src={bgimg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
        style={{
          filter: "blur(0px)",
          transform: "scaleX(-1)",
          opacity: 0.5,
        }}
      />
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false, // <- very important
        }}
        navigation={{
          nextEl: ".carousel-forward",
          prevEl: ".carousel-backward",
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        pagination={{ clickable: true }}
        className="w-full h-[42rem]"
      >
        {slides.map((item, i) => (
          <>
            <SwiperSlide key={i}>
              {/* <img
                src={bgimg}
                alt="background"
                className="absolute inset-0 -z-10 w-full object-cover"
                style={{
                  filter: "blur(0px)",
                  transform: "scaleX(-1)",
                  opacity: 0.5,
                }}
              /> */}
              <div className="h-screen flex flex-col md:flex-row items-start md:items-start justify-start md:justify-between px-6 md:px-16 pt-10 md:pt-20 mt-24">
                {/* margin di he 20 top se new navbar ke liye */}
                {/* Left Text Section */}
                <div className="w-full md:w-1/2 space-y-4">
                  <h2
                    className="text-2xl md:text-[35px] font-bold"
                    style={{
                      color: NavbarItemColor,
                      fontFamily: HeadFontFamily1,
                    }}
                  >
                    {item.title}
                  </h2>
                  <p className="text-color text-md md:text-[17.5px]">
                    {item.description}
                  </p>
                  {/* <p className="text-gray-700 text-1xl">{item.description}</p> */}
                  <div className="flex gap-4 pt-[2.8rem]">
                    <Button
                      size="md"
                      className="rounded-full text-[14px] text-white bg-gradient-to-r from-[#085d9e] to-[#00c1de] font-semibold    transition-all focus:outline-none focus:ring-0"
                      style={{
                        borderRadius: "30px",
                        fontFamily: HeadFontFamily1,
                      }}
                    >
                      {item.buttonText}
                    </Button>
                    {item.buttonText1 && (
                      <Button
                        size="md"
                        className="rounded-full text-[14px] text-white bg-gradient-to-r from-[#085d9e] to-[#00c1de] font-semibold  hover:bg-gradient-to-r hover:from-white  hover:to-white hover:text-[#1273be] hover:border-[#2b3d8a] transition-all focus:outline-none focus:ring-0"
                        style={{
                          borderRadius: "30px",
                          fontFamily: HeadFontFamily1,
                          width: "10rem",
                        }}
                      >
                        {item.buttonText1}
                      </Button>
                    )}
                  </div>
                </div>

                {/* Right Image Section */}
                <div className="w-full md:w-1/2 flex justify-center  md:mt-0">
                  <div className="  rounded-md ">
                    <img
                      src={item.src}
                      alt={`Slide ${i + 1}`}
                      className="w-full  h-[400px] object-cover rounded-sm"
                      style={{
                        zIndex: 0,
                      }}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </>
        ))}
        {/* <div
          className="absolute bottom-10  left-6 z-20 flex gap-4"
          style={{ zIndex: 1 }}
        >
          <div className="bg-white p-2 rounded-md shadow hover:bg-gray-200 transition-all carousel-backward">
            <IoIosArrowBack size={25} />
          </div>
          <div className="bg-white p-2 rounded-md shadow hover:bg-gray-200 transition-all carousel-forward">
          <IoIosArrowForward size={25} />
          </div>
          </div> */}
        <div
          className="absolute bottom-10  left-6 z-20 flex gap-4"
          style={{ zIndex: 1 }}
        >
          <button
            onClick={toggleAutoplay}
            className="bg-white p-2 rounded-md shadow hover:bg-gray-200 transition-all"
          >
            {isPlaying ? (
              <BsPause size={25} color="black" />
            ) : (
              <BsPlay size={25} />
            )}
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default CarouselSlider;
