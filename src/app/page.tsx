"use client";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import Link from "next/link";
import Header from "@/components/Header";
import Overview from "@/components/Overview";
import GameFeatures from "@/components/GameFeatures";
import News from "@/components/News";

export default function Home() {
  return (
    <>
      <Header />
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
        <SwiperSlide>
          <Overview />
        </SwiperSlide>
        <SwiperSlide>
          <GameFeatures />
        </SwiperSlide>
        <SwiperSlide>
          <News />
        </SwiperSlide>
        <SwiperSlide className="!h-auto">
          <footer className="bg-[#232525] text-white/80 h-auto py-4 flex flex-col items-center justify-center">
            <p className="text-xs text-center">
              This is a clone web page of official{" "}
              <Link
                href={"https://prequel.chillyroom.com/et"}
                className="font-bold italic underline underline-offset-4"
              >
                Soul Knight Prequel
              </Link>{" "}
              in SS3 session
            </p>
            <p className="text-xs text-center font-semibold">
              Just for practicing code purpose
            </p>
          </footer>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
