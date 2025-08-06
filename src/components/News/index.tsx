import React from "react";
import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import newsSlide1 from "@/assets/news-slide-1.png";
import newsSlide2 from "@/assets/news-slide-2.jpeg";
import Image from "next/image";
import TabNews from "./TabNews";
import NewsItem from "./NewsItem";
import mMore from "@/assets/m_more.png";

export default function News() {
  const newsSlides = [newsSlide1, newsSlide2];
  const news = [
    { title: "SS3 Rewards & Optimizations Overview", postedDate: "07-14" },
    {
      title:
        "Soul Knight Prequel SS2 Season Carnival Coming Soon! New Skins & Insane Gear",
      postedDate: "06-16",
    },
    {
      title: "Soul Knight Prequel SS2 Season Transition Notice",
      postedDate: "04-22",
    },
    {
      title: "SS1 Season Carnival Incoming! New Gacha Skins & Eidolon",
      postedDate: "03-17",
    },
    {
      title: "Gifts of Spring Coming Soon - Open Peachblooms for Surprises!",
      postedDate: "02-16",
    },
    {
      title:
        "Notice: Forced Update for Soul Knight Prequel on Jan 21, 10:00 AM (UTC+8)",
      postedDate: "01-20",
    },
  ];

  return (
    <main className="relative news h-full flex flex-col items-center justify-center">
      <div className="relative z-[1] news-container mt-5 mb-[10px] w-[335px] h-[555px]">
        {/* swiper */}
        <Swiper
          pagination={{
            bulletClass: "news-slider-dot",
            bulletActiveClass: "news-slider-active-dot",
            horizontalClass: "news-slider-horizontal-wrap",
          }}
          modules={[Pagination, Autoplay]}
          className="mt-[60px] !mx-[28px] w-[280px] h-[190px]"
          loop
          autoplay
        >
          {newsSlides.map((item, index) => (
            <SwiperSlide key={index}>
              <Image
                src={item}
                height={item.height}
                width={item.width}
                alt="news-image"
                className="w-[280px] h-[158px] rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="px-6">
          <TabNews />
          <ul className="pt-2">
            {news.map((item) => (
              <NewsItem
                key={item.title}
                title={item.title}
                postedDate={item.postedDate}
              />
            ))}
          </ul>
        </div>
        <div className="flex justify-center mt-2">
          <Image
            src={mMore.src}
            height={mMore.height}
            width={mMore.width}
            alt="more button"
            className="w-[48px] h-[14px] cursor-pointer"
          />
        </div>
      </div>

      <span className="news-cloud-1 absolute z-0 top-[80px] right-[-30px] w-[131px] h-[76px]"></span>
      <span className="news-cloud-2 absolute z-10 bottom-[60px] right-[10px] w-[131px] h-[76px]"></span>
      <span className="news-cloud-3 absolute z-0 top-[330px] left-[-10px] w-[170px] h-[96px]"></span>
    </main>
  );
}
