import React, { useState } from "react";
import "./styles.css";
import { cn } from "@/lib/utils";

export default function TabNews() {
  const newsCates = ["Newest", "Information", "Patch Notes", "Events"];
  const [activeCate, setActiveCate] = useState<string>("Newest");

  const hanldeClickNavBtn = (type: string) => {
    const listNewsCate = document.getElementById("list-news-cate");
    const listNewsCateVisible = document.getElementById(
      "list-news-cate-visible"
    );

    if (listNewsCate && listNewsCateVisible) {
      if (type === "next") {
        const translateX = Math.max(
          listNewsCate.scrollWidth - listNewsCateVisible.clientWidth,
          0
        );

        listNewsCate.style.transform = `translateX(-${translateX}px)`;
      } else if (type === "prev") {
        listNewsCate.style.transform = "translateX(0)";
      }
    }
  };

  return (
    <div
      id="cate-container"
      className="relative py-[5px] px-5 h-8 w-full md:py-[8px] md:px-[27.5px] md:h-[44px]"
    >
      <span
        className="prev-btn-news cursor-pointer"
        onClick={() => hanldeClickNavBtn("prev")}
      ></span>
      <span
        className="next-btn-news cursor-pointer"
        onClick={() => hanldeClickNavBtn("next")}
      ></span>
      <div
        id="list-news-cate-visible"
        className="relative h-full w-full overflow-hidden"
      >
        <ul
          id="list-news-cate"
          className="list-news-cate absolute h-full flex transition-all duration-500 ease-in-out"
        >
          {newsCates.map((item) => (
            <li
              key={item}
              className={cn(
                "cursor-default shrink-0 px-[10px] mx-[15px] text-[#ba926b] text-[15px] md:text-[20px] md:px-[14px] md:mx-[21px] lg:text-[16px] lg:mx-[12.5px] lg:px-2 2xl:text-[22px] 2xl:px-[12px] 2xl:mx-[17px]",
                activeCate === item && "cate-active text-white font-medium"
              )}
              onClick={() => setActiveCate(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
