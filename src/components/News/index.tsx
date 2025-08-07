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
import { cn } from "@/lib/utils";

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
      <div
        className={cn(
          "relative z-[1] news-container mt-5 mb-[10px] w-[335px] h-[555px] md:w-[460px] md:h-[763px]",
          "lg:mt-[67px] lg:w-[1000px] lg:h-[554px] lg:flex lg:flex-row",
          "2xl:w-[1333px] 2xl:h-[725px] 2xl:mt-[89px]"
        )}
      >
        {/* swiper */}
        <div
          className={cn(
            "mt-[60px] md:mt-[82.5px] mx-[28px] md:mx-[38.5px]",
            "lg:ml-[62.5px] lg:mr-0 lg:mt-[122px]",
            "2xl:ml-[83px] 2xl:mt-[162px]"
          )}
        >
          <Swiper
            pagination={{
              bulletClass: "news-slider-dot",
              bulletActiveClass: "news-slider-active-dot",
              horizontalClass: "news-slider-horizontal-wrap",
            }}
            modules={[Pagination, Autoplay]}
            className={cn(
              "w-[280px] h-[190px] md:w-[385px] md:h-[251px]",
              "lg:shrink-0 lg:w-[458px] lg:h-[316px] 2xl:w-[611px] 2xl:h-[422px]"
            )}
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
                  className="w-[280px] h-[158px] md:w-[385px] md:h-[217px] rounded-xl lg:w-[458px] lg:h-[275px] 2xl:w-[611px] 2xl:h-[366px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="px-6 md:px-[33px] lg:w-[396px] 2xl:w-[527px] lg:shrink-0 lg:pl-5 lg:pr-0 lg:pt-[54px] 2xl:pl-[26px] 2xl:pt-[71px]">
          <TabNews />
          <ul className="pt-2 md:pt-[11px]">
            {news.map((item) => (
              <NewsItem
                key={item.title}
                title={item.title}
                postedDate={item.postedDate}
              />
            ))}
            <p className="hidden lg:block pt-[7px] text-end text-[14px] text-[#895b2f]">
              MORE+
            </p>
          </ul>
        </div>
        <div className="flex justify-center mt-2 md:mt-[11px] lg:hidden">
          <Image
            src={mMore.src}
            height={mMore.height}
            width={mMore.width}
            alt="more button"
            className="w-[48px] h-[14px] md:w-[66px] md:h-[19px] cursor-pointer"
          />
        </div>
      </div>

      <span
        className={cn(
          "news-cloud-1 absolute z-0 top-[80px] right-[-30px] w-[131px] h-[76px]",
          "md:top-[110px] md:right-[-42px] md:w-[180px] md:h-[104px]",
          "lg:top-[144px] lg:right-[-25px] lg:w-[218px] lg:h-[126px]",
          "2xl:top-[192px] 2xl:right-[-33px] 2xl:w-[291px] 2xl:h-[168px]"
        )}
      ></span>
      <span
        className={cn(
          "news-cloud-2 absolute z-10 bottom-[60px] right-[10px] w-[131px] h-[76px]",
          "md:bottom-[82.5px] md:right-[14px] md:w-[180px] md:h-[104px]",
          "lg:top-[623] lg:right-[300px] lg:w-[220px] lg:h-[127px]",
          "2xl:top-[844px] 2xl:right-[400px] 2xl:w-[292px] 2xl:h-[168px]"
        )}
      ></span>
      <span
        className={cn(
          "news-cloud-3 absolute z-0 top-[330px] left-[-10px] w-[170px] h-[96px]",
          "md:top-[454px] md:left-[-14px] md:w-[234px] md:h-[132px]"
        )}
      ></span>
    </main>
  );
}
