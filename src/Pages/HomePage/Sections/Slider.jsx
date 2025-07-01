import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../CSS/slider.css";
import { Button } from "@material-tailwind/react";
import { HeadFontFamily } from "../../../CustomeComponents/Theme";
import { BsPause, BsPlay } from "react-icons/bs";

// Image Imports
import cattlebg from "../../../assets/Images/HomePage/CattleBg.png";
import DigiCertbg from "../../../assets/Images/HomePage/DigiCertBg.png";
import ItStrategyConsultancyBg from "../../../assets/Images/HomePage/ITStrategyConsultancyBg.png";
import ItSoftwareMaintBg from "../../../assets/Images/HomePage/IT_Software_Maintenance.png";
import bgimg from "../../../assets/Images/HomePage/slider-banner.png";
import svgImg from "../../../assets/Images/HomePage/svg_img.svg";

const slides = [
  {
    src: ItStrategyConsultancyBg,
    title: "IT STRATEGY AND ARCHITECTURE CONSULTING",
    description: "Unlock business growth with expert IT strategy consultancy.",
    buttonText: "Learn More",
  },
  {
    src: ItSoftwareMaintBg,
    title: "IT SOFTWARE AND MAINTENANCE",
    description:
      "Boost your business with custom software solutions tailored to your needs and efficient staffing services. From powerful applications to hiring skilled professionals, we help you streamline operations, improve productivity, and scale confidently with the right technology and talent",
    buttonText: "Learn More",
  },
  {
    src: svgImg,
    title: "MANPOWER SOLUTION",
    description:
      "Boost your business with custom software solutions tailored to your needs and efficient staffing services. From powerful applications to hiring skilled professionals, we help you streamline operations, improve productivity, and scale confidently with the right technology and talent",
    buttonText: "Learn More",
  },
  {
    src: DigiCertbg,
    title: "DIGITAL CERTIFICATE",
    description:
      "Go paperless with secure, tamper-proof digital credentials. Our digital certificate solutions are trusted by universities, institutions, and global organizations to issue, verify, and manage certificates efficiently—ensuring authenticity, reducing fraud, and enhancing credibility in a fully digital environment.",
    buttonText: "Schedule a demo",
    buttonText1: "Login",
  },
  {
    src: cattlebg,
    title: "CATTLE AADHAR",
    description:
      "Digitally tag, identify, and track livestock with precision using our Cattle Adhaar solution. We empower governments and rural bodies with smart, reliable animal identification systems—enhancing traceability, health monitoring, and livestock management through technology-driven agricultural innovation.",
    buttonText: "Learn More",
  },
  {
    src: bgimg,
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
    isPlaying
      ? swiperRef.current.autoplay.stop()
      : swiperRef.current.autoplay.start();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full h-[34rem]">
      {/* Swiper starts here */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".carousel-forward",
          prevEl: ".carousel-backward",
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        pagination={{ clickable: true }}
        className="w-full h-[34rem]"
      >
        {slides.map((item, i) => (
          <SwiperSlide key={i}>
            {/* Dynamic background image */}
            <img
              src={item.src}
              alt={item.title}
              className="absolute inset-0 w-[100%] h-[36rem] sm:h-[24rem] md:h-[34rem] lg:h-full sm:object-contain lg:object-cover -z-10"
              style={{ filter: "blur(0px)" }}
            />

            <div className="absolute inset-0 w-full h-[34rem] bg-black/30 -z-10"></div>

            <div className="flex flex-col md:flex-row items-start md:items-start justify-start md:justify-between px-6 md:px-16 pt-10 md:pt-20 mt-24">
              <div className="w-full space-y-4">
                <h2
                  className="text-2xl md:text-[50px]  w-[80%] font-bold text-white"
                  style={{ fontFamily: HeadFontFamily, lineHeight: "1.2" }}
                >
                  {item.title}
                </h2>
                <p className="text-white md:w-[70%] text-md md:text-[17.5px]">
                  {item.description}
                </p>
                <div className="flex gap-4 pt-[2rem]">
                  <Button
                    size="md"
                    className="rounded-full text-[14px] text-white bg-gradient-to-r from-[#085d9e] to-[#00c1de] font-semibold"
                    style={{
                      borderRadius: "30px",
                      fontFamily: HeadFontFamily,
                    }}
                  >
                    {item.buttonText}
                  </Button>
                  {item.buttonText1 && (
                    <Button
                      size="md"
                      className="rounded-full text-[14px] text-white bg-gradient-to-r from-[#085d9e] to-[#00c1de] font-semibold hover:bg-white hover:text-[#1273be]"
                      style={{
                        borderRadius: "30px",
                        fontFamily: HeadFontFamily,
                        width: "10rem",
                      }}
                    >
                      {item.buttonText1}
                    </Button>
                  )}
                </div>
              </div>

              {/* Right Section (optional) */}
              <div className="w-full md:w-1/2 flex justify-center md:mt-0">
                {/* Add image or illustration here if needed */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Play/Pause Button */}
      <div
        className="absolute bottom-5 right-6 z-20 flex gap-4"
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
    </div>
  );
};

export default CarouselSlider;
