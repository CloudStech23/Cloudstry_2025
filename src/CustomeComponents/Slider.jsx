// CarouselSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
    title: "Explore Nature",
    description: "Discover the beauty of nature in its rawest form.",
  },
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1920&q=80",
    title: "Embrace Technology",
    description: "The future is built with modern tech innovations.",
  },
  {
    src: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?auto=format&fit=crop&w=1920&q=80",
    title: "Mountains of Wisdom",
    description: "Climb towards your dreams, one peak at a time.",
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80",
    title: "Sky High Thoughts",
    description: "Let your imagination fly among the clouds.",
  },
  {
    src: "https://images.unsplash.com/photo-1604079628048-94303b8d19d9?auto=format&fit=crop&w=1920&q=80",
    title: "Urban Dreams",
    description: "Where architecture and dreams meet innovation.",
  },
];

const CarouselSlider = () => {
  return (
    <div className="relative w-full h-screen bg-black">
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
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="w-full h-full"
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
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-white text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                  {item.title}
                </h2>
                <p className="text-lg md:text-2xl max-w-2xl drop-shadow-md">
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
