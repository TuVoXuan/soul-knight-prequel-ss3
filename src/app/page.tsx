"use client";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";

export default function Home() {
  return (
    <Swiper
      direction={"vertical"}
      pagination={{
        clickable: true,
      }}
      slidesPerView={"auto"}
      grabCursor={true}
      mousewheel={true}
      modules={[Mousewheel]}
      className="h-screen w-full"
    >
      <SwiperSlide className="bg-red-200">
        <div className="h-full text-black">slide 1</div>
      </SwiperSlide>
      <SwiperSlide className="bg-green-200">
        <div className="h-full text-black">slide 2</div>
      </SwiperSlide>
      <SwiperSlide className="bg-blue-200">
        <div className="h-full text-black">slide 3</div>
      </SwiperSlide>
      <SwiperSlide className="!h-auto">
        <div className="bg-amber-200 text-black h-auto py-4 flex flex-col items-center justify-center">
          <p>
            This is a clone web page of official Soul Knight Prequel in SS3
            session
          </p>
          <p>Just for practicing code purpose</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
