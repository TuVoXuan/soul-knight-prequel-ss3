import "./styles.css";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import m_gameFeature1 from "@/assets/m_game-features-1.webp";
import m_gameFeature2 from "@/assets/m_game-features-2.webp";
import m_gameFeature3 from "@/assets/m_game-features-3.webp";
import m_gameFeature4 from "@/assets/m_game-features-4.webp";
import m_gameFeature5 from "@/assets/m_game-features-5.webp";
import m_gameFeature6 from "@/assets/m_game-features-6.webp";
import gameFeature1 from "@/assets/game-features-1.webp";
import gameFeature2 from "@/assets/game-features-2.webp";
import gameFeature3 from "@/assets/game-features-3.webp";
import gameFeature4 from "@/assets/game-features-4.webp";
import gameFeature5 from "@/assets/game-features-5.webp";
import gameFeature6 from "@/assets/game-features-6.webp";

import Image, { StaticImageData } from "next/image";
import { useScreenSize } from "@/lib/useScreenSize";

export default function GameFeatures() {
  const screenSize = useScreenSize();
  const isMobile =
    screenSize === "xs" || screenSize === "sm" || screenSize === "md";
  const slides: StaticImageData[] = useMemo(() => {
    if (isMobile) {
      return [
        m_gameFeature1,
        m_gameFeature2,
        m_gameFeature3,
        m_gameFeature4,
        m_gameFeature5,
        m_gameFeature6,
      ];
    }
    return [
      gameFeature1,
      gameFeature2,
      gameFeature3,
      gameFeature4,
      gameFeature5,
      gameFeature6,
    ];
  }, [isMobile]);

  const getSlideClass = (index: number, curr: number) => {
    if (curr === 0) {
      if (index === slides.length - 1)
        return "z-[1] translate-x-[-30%] lg:translate-x-[-25%] slide-prev";
      if (index === 0)
        return "scale-100 z-[2] top-0 translate-x-0 translate-y-0 before:opacity-0 slide-active";
      if (index === 1)
        return "z-[1] translate-x-[30%] lg:translate-x-[25%] slide-next";
      return "";
    }

    if (curr === slides.length - 1) {
      if (index === curr - 1)
        return "z-[1] translate-x-[-30%] lg:translate-x-[-25%] slide-prev";
      if (index === curr)
        return "scale-100 z-[2] top-0 translate-x-0 translate-y-0 before:opacity-0 slide-active";
      if (index === 0)
        return "z-[1] translate-x-[30%] lg:translate-x-[25%] slide-next";
      return "";
    }

    if (index === curr - 1)
      return "z-[1] translate-x-[-30%] lg:translate-x-[-25%] slide-prev";
    if (index === curr)
      return "scale-100 z-[2] top-0 translate-x-0 translate-y-0 before:opacity-0  slide-active";
    if (index === curr + 1)
      return "z-[1] translate-x-[30%] lg:translate-x-[25%] slide-next";
    return "";
  };

  const [current, setCurrent] = useState(1);

  const handleNext = () => {
    setCurrent((prev) => {
      const newIndex = prev + 1;
      return newIndex >= slides.length ? 0 : newIndex;
    });
  };

  const handlePrev = () => {
    setCurrent((prev) => {
      const newIndex = prev - 1;
      return newIndex < 0 ? slides.length - 1 : newIndex;
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 2000);

    return () => clearTimeout(timer);
  }, [current]);

  return (
    <main className="relative game-features h-full flex flex-col items-center justify-center">
      <ul className="relative h-[390px] w-[230px] md:h-[585px] md:w-[345] lg:w-[693px] lg:h-[422px] 2xl:w-[922px] 2xl:h-[562px] game-features-slider">
        {slides.map((slide, index) => (
          <li
            key={index}
            className={cn(
              "absolute rounded-xl overflow-hidden h-full w-full border scale-[0.8] top-1/2 -translate-y-1/2 transition-all duration-[300ms] z-0 ease-in-out before:absolute before:top-0 before:left-0 before:content-[''] before:w-full before:h-full before:bg-black/70",
              getSlideClass(index, current)
            )}
          >
            <Image
              src={slide.src}
              alt={`Game Feature ${index + 1}`}
              className="w-full h-auto object-cover z-0"
              height={slide.height}
              width={slide.width}
            />
          </li>
        ))}
        <button
          className="prev-btn w-[23px] h-[43px] md:w-[30px] md:h-[56px] lg:w-[46px] lg:h-[84px] 2xl:w-[61px] 2xl:h-[111px] z-10 absolute top-1/2 -left-1/5 lg:-left-1/4 -translate-y-1/2"
          onClick={handlePrev}
        ></button>
        <button
          className="next-btn w-[23px] h-[43px] md:w-[30px] md:h-[56px] lg:w-[46px] lg:h-[84px] 2xl:w-[61px] 2xl:h-[111px] z-10 absolute top-1/2 -right-1/5 lg:-right-1/4 -translate-y-1/2"
          onClick={handleNext}
        ></button>
      </ul>
      <ul className="flex w-fit items-center mt-5 md:mt-7 z-10">
        {slides.map((_, index) => (
          <li
            key={index}
            className={cn(
              "w-[10px] h-[10px] md:w-[13px] md:h-[13px] 2xl:h-[18px] 2xl:w-[18px] rounded-full bg-white mx-2",
              current === index ? "game-features-slider-dot" : ""
            )}
          ></li>
        ))}
      </ul>

      {/* Clouds */}
      <span
        className={cn(
          "cloud-1 absolute top-[35px] right-[-30px] w-[131px] h-[76px]",
          "md:top-[48px] md:right-[-42px] md:w-[180px] md:h-[105px]",
          "lg:w-[218px] lg:h-[126px] lg:top-[144px] lg:right-[-25px]",
          "2xl:top-[192px] 2xl:right-[-33px] 2xl:w-[291px] 2xl:h-[168px]"
        )}
      ></span>
      <span
        className={cn(
          "cloud-5 absolute top-[70px] left-[-10px] w-[100px] h-[55px]",
          "md:top-[96px] md:left-[-14px] md:w-[137.5px] md:h-[75.625px]",
          "lg:w-[174px] lg:h-[98px] lg:top-[142px] lg:left-[-75px]",
          "2xl:top-[188px] 2xl:left-[-100px] 2xl:w-[232px] 2xl:h-[130px]"
        )}
      ></span>
      <span
        className={cn(
          "cloud-3 absolute bottom-[11px] right-[5px] w-[170px] h-[96px]",
          "md:bottom-[112px] md:right-[260px] md:w-[233px] md:h-[132px]",
          "lg:top-[590px] lg:right-[100px] lg:w-[219px] lg:h-[126px]",
          "2xl:top-[800px] 2xl:right-[133px] 2xl:w-[292px] 2xl:h-[168px]"
        )}
      ></span>
      <span
        className={cn(
          "cloud-3 absolute 2xl:top-[555px] 2xl:left-[222px] 2xl:w-[188px] 2xl:h-[106px]"
        )}
      ></span>
    </main>
  );
}
