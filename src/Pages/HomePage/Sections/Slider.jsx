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
import { Link } from "react-router-dom";

const slides = [
  {
    src: ItStrategyConsultancyBg,
    title: "IT STRATEGY AND ARCHITECTURE CONSULTING",
    description:
      "Expert guidance to align your IT investments with business goals, driving smarter decisions and sustainable growth.",
    buttonText: "Learn More",
    linkURL1: "",
  },
  {
    src: ItSoftwareMaintBg,
    title: "IT SOFTWARE AND MAINTENANCE",
    description:
      "Custom-built software and ongoing support tailored to your unique business needs for seamless performance and growth.",
    buttonText: "Learn More",
    linkURL1: "",
  },
  {
    src: svgImg,
    title: "MANPOWER SOLUTION",
    description:
      "Delivering skilled IT talent on demand to power your projects with speed, expertise, and flexibility.",
    buttonText: "Learn More",
    linkURL1: "",
  },
  {
    src: DigiCertbg,
    title: "DIGITAL CERTIFICATE",
    description:
      "SaaS platform, record digital Badge, and Certificates  on blockchain.",
    buttonText: "Schedule a demo",
    buttonText1: "Login",
    linkURL1: "/demo",
    linkURL2: "https://badgecert.com/login/",
  },
  {
    src: cattlebg,
    title: "CATTLE AADHAR",
    description:
      "A digital identity platform for Cattle powered with AI/ML, supporting traceability, health records, and subsidy management.",
    buttonText: "Learn More",
    linkURL1: "",
  },
  {
    src: bgimg,
    title: "Logistic Solutions",
    description:
      "3PL Solutions powered with AI/ML to streamlining planning, forecasting, and fulfilment in supply chain.",
    buttonText: "Learn More",
    linkURL1: "",
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
    <div className="relative w-full h-[26rem] sm:h-[34rem]">
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
        className="w-full sm:h-[34rem] h-[26rem]"
      >
        {slides.map((item, i) => (
          <SwiperSlide key={i}>
            {/* Dynamic background image */}
            <div className="">
              <img
                src={item.src}
                alt={item.title}
                className="absolute inset-0 w-[100%] h-[26rem] sm:h-[24rem] md:h-[34rem] lg:h-full object-cover sm:object-cover lg:object-cover -z-10"
                style={{ filter: "blur(0px)", objectPosition: "81% center" }}
              />
            </div>

            <div className="absolute inset-0 w-full h-[34rem] sm:bg-transparent bg-black/40 -z-10"></div>

            <div className="flex flex-col md:flex-row items-start md:items-start justify-start md:justify-between px-6 md:px-16 pt-10 md:pt-20 mt-24">
              <div className="w-full space-y-4">
                <h2
                  className="text-2xl md:text-[50px]  w-[95%] font-bold text-white"
                  style={{ fontFamily: HeadFontFamily, lineHeight: "1.2" }}
                >
                  {item.title}
                </h2>
                <p className="text-white md:w-[70%] text-md md:text-[17.5px]">
                  {item.description}
                </p>
                <div className="flex gap-4 sm:pt-[2rem] pt-[0.5rem]">
                  <Link to={item.linkURL1}>
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
                  </Link>
                  {item.buttonText1 && (
                    <Link to={item.linkURL2} target="_blank">
                      <Button
                        size="md"
                        className="rounded-full text-[14px] sm:w-[10rem] text-white bg-gradient-to-r from-[#085d9e] to-[#00c1de] font-semibold "
                        style={{
                          borderRadius: "30px",
                          fontFamily: HeadFontFamily,
                        }}
                      >
                        {item.buttonText1}
                      </Button>
                    </Link>
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
