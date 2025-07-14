import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { HeadTextColor } from "../../../CustomeComponents/Theme";
import "../../../CSS/slider.css";
import clientBg from "../../../assets/Images/HomePage/client_bg.png";

//Logo images
import agent511 from "../../../assets/Images/HomePage/Agent511_logo.png";
import cloud3tech from "../../../assets/Images/HomePage/cloud3tech_logo.png";
import msgbroadcast from "../../../assets/Images/HomePage/messageBroadcast_logo.png";
import rhc from "../../../assets/Images/HomePage/rhc_logo.png";
import invest54 from "../../../assets/Images/HomePage/54investment_logo.png";

const logos = [
  {
    name: "Agent511",
    src: agent511,
  },
  {
    name: "Cloud3Tech",
    src: cloud3tech,
  },
  {
    name: "Messsage Broadcast",
    src: msgbroadcast,
  },
  {
    name: "Rapidhealthconnect",
    src: rhc,
  },
  {
    name: "54Investment",
    src: invest54,
  },
];

function ClientSlider() {
  return (
    <main className="relative pt-2 px-4 sm:px-6 lg:px-0  mt-[1.5rem] mx-auto overflow-hidden rounded-tr-[80px]">
      {/* Background Image with low opacity */}
      <div className="absolute inset-0 -z-10">
        <img
          src={clientBg}
          alt="Client Background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Content */}
      <div className="text-center py-6 px-4 relative z-10">
        <h2
          className="sm:text-4xl text-2xl font-medium sm:leading-none mb-6"
          style={{
            fontFamily: "Poppins, sans-serif",
            color: HeadTextColor,
          }}
        >
          OUR <span className="text-[#1f1446]">CLIENTS</span>
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-[#085d9e] to-[#00c1de] mx-auto mb-10 rounded-full"></div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={40}
            className="sm:max-w-7xl w-full mx-auto px-2"
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              480: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {logos.map((logo, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col items-center">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="sm:w-full sm:h-[3.3rem] h-[5rem]  object-contain sm:object-contain mb-2"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </main>
  );
}

export default ClientSlider;
