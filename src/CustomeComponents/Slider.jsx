// CarouselSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";
import { CarouselTextColor } from "./Theme";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80",
    title: "IT STRATEGY CONSULTANCY",
    description:
      "Unlock growth with expert IT roadmaps tailored to your business. We align technology with your goals for smarter outcomes",
  },
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80",
    title: "SOFTWARE & STAFFING SERVICES",
    description:
      "Get custom software that powers your operations. Hire skilled professionals through our reliable staffing solutions",
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80",
    title: "DIGITAL CERTIFICATION",
    description:
      "Go paperless with secure, verifiable digital credentials. Trusted by universities, institutions, and organizations globally",
  },
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80",
    title: "CATTLE AADHAAR",
    description:
      "Digitally tag and track livestock with ease and accuracy. Empowering government and rural bodies with smart identification",
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80",
    title: "3PL SOLUTION",
    description:
      "Plan smarter with demand-driven logistics solutions. Optimize inventory, reduce costs, and boost supply chain efficiency",
  },
];

const CarouselSlider = () => {
  return (
    <div
      className="relative w-full h-screen"
      style={{ height: "39.7rem", background: "#1d1a87" }}
    >
      <div className="absolute inset-0 z-0 bg-black bg-opacity-40"></div>
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        effect="cards"
        speed={1000} // smoother transition speed
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true, // Pause autoplay on mouse enter
          pauseOnMouseLeave: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="w-full"
        style={{ height: "39.7rem" }}
      >
        {slides.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-screen">
              {/* Image */}
              <img
                src={item.src}
                alt={`Slide ${i + 1}`}
                className="w-full h-full object-cover opacity-60 transition-opacity duration-1000"
                loading="lazy"
              />

              {/* Overlay Text */}
              <div
                className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4  text-center"
                style={{
                  color: CarouselTextColor,
                }}
              >
                <h2
                  className="text-3xl md:text-6xl font-bold mb-4 drop-shadow-lg"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                  // style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {item.title}
                </h2>
                <p
                  className="text-lg md:text-2xl font-medium max-w-2xl drop-shadow-md" //we can do 3xl to 2xl and vise versa
                  // style={{ fontFamily: "Inter Tight, sans-serif" }}
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                  // style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselSlider;
