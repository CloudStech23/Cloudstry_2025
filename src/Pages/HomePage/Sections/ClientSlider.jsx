import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { HeadTextColor } from "../../../CustomeComponents/Theme";
import "../../../CSS/slider.css";
import clientBg from "../../../assets/Images/HomePage/client_bg.png";

const logos = [
  {
    name: "Google",
    src: "https://t3.ftcdn.net/jpg/03/99/98/60/360_F_399986042_9iSLYUNyDv8npaKP31xsIpDVFjfqGLDF.jpg",
  },
  {
    name: "AWS",
    src: "https://images.seeklogo.com/logo-png/31/2/amazon-web-services-aws-logo-png_seeklogo-319188.png",
  },
  {
    name: "Microsoft",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAmTEJMOE6GWQywRs_97ULcKX22TYZPv765epac40QWIF0_jSxxG1IGiMCb7M4dJMo5g&usqp=CAU",
  },
  {
    name: "Adobe",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQduXJREqBe_A7tkWoD48jL35xRpT_WaxP_tQ&s",
  },
  {
    name: "Oracle",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnxm3DtAMJ9Ogzh-BBij9Mlv9YEnlFVJe-pIqxq_ybhg-QOM-rKgasyZBJRKdI0eIKR_w&usqp=CAU",
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
            slidesPerView={4}
            className="max-w-7xl mx-auto px-2"
          >
            {logos.map((logo, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col items-center">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="w-full sm:h-20   object-contain mb-2"
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
