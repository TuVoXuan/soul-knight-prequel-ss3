import React from "react";
import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function GameFeatures() {
  return (
    <main className="game-features h-full flex items-center">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="mySwiper"
        slidesPerView={3}
      >
        <SwiperSlide>
          <div className="h-[200px] bg-red-100">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[200px] bg-yellow-100">Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[200px] bg-blue-100">Slide 3</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[200px] bg-orange-100">Slide 4</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[200px] bg-amber-100">Slide 5</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[200px] bg-pink-100">Slide 6</div>
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
