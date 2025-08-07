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
import downBtn from "@/assets/down-btn.png";
import Image from "next/image";
import "./styles.css";
import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";

export default function Home() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [reachTheEnd, setReachTheEnd] = useState(false);

  const handleClickDownBtn = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(activeIndex, 1000);
    }
  }, [activeIndex]);

  return (
    <>
      <Header activeIndex={activeIndex} onChangeActiveIndex={setActiveIndex} />
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        slidesPerView={"auto"}
        mousewheel={true}
        modules={[Mousewheel]}
        className="h-screen w-full"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onReachEnd={() => setReachTheEnd(true)}
        onSetTranslate={() => {
          if (reachTheEnd) {
            setReachTheEnd(false);
          }
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        speed={1000}
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
      {!reachTheEnd && (
        <button
          onClick={handleClickDownBtn}
          className={
            "down-btn absolute bottom-5 left-1/2 -translate-x-1/2 z-10"
          }
        >
          <Image
            src={downBtn}
            height={downBtn.blurHeight}
            width={downBtn.width}
            alt="down button"
            className="w-[20px] h-[10px] md:w-[27.5px] md:h-[14px] lg:w-[40px] lg:h-[21px] 2xl:w-[53px] 2xl:h-[27px]"
          />
        </button>
      )}
    </>
  );
}
