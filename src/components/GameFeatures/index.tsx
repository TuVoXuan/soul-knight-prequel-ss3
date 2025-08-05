import "./styles.css";
// Import Swiper styles
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import m_gameFeature1 from "@/assets/m_game-features-1.webp";
import m_gameFeature2 from "@/assets/m_game-features-2.webp";
import m_gameFeature3 from "@/assets/m_game-features-3.webp";
import m_gameFeature4 from "@/assets/m_game-features-4.webp";
import m_gameFeature5 from "@/assets/m_game-features-5.webp";
import m_gameFeature6 from "@/assets/m_game-features-6.webp";
import Image, { StaticImageData } from "next/image";

export default function GameFeatures() {
  const slides: StaticImageData[] = [
    m_gameFeature1,
    m_gameFeature2,
    m_gameFeature3,
    m_gameFeature4,
    m_gameFeature5,
    m_gameFeature6,
  ];

  const getSlideClass = (index: number, curr: number) => {
    if (curr === 0) {
      if (index === slides.length - 1)
        return "z-[1] translate-x-[-30%] slide-prev";
      if (index === 0)
        return "scale-100 z-[2] top-0 translate-x-0 translate-y-0 before:opacity-0 slide-active";
      if (index === 1) return "z-[1] translate-x-[30%] slide-next";
      return "";
    }

    if (curr === slides.length - 1) {
      if (index === curr - 1) return "z-[1] translate-x-[-30%] slide-prev";
      if (index === curr)
        return "scale-100 z-[2] top-0 translate-x-0 translate-y-0 before:opacity-0 slide-active";
      if (index === 0) return "z-[1] translate-x-[30%] slide-next";
      return "";
    }

    if (index === curr - 1) return "z-[1] translate-x-[-30%] slide-prev";
    if (index === curr)
      return "scale-100 z-[2] top-0 translate-x-0 translate-y-0 before:opacity-0  slide-active";
    if (index === curr + 1) return "z-[1] translate-x-[30%] slide-next";
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

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     handleNext();
  //   }, 2000);

  //   return () => clearTimeout(timer);
  // }, [current]);

  return (
    <main className="relative game-features h-full flex flex-col items-center justify-center">
      <ul className="relative h-[390px] w-[230px] md:h-[585px] md:w-[345] game-features-slider">
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
          className="prev-btn w-[23px] h-[43px] md:w-[30px] md:h-[56px] z-10 absolute top-1/2 -left-[50%] -translate-y-1/2"
          onClick={handlePrev}
        ></button>
        <button
          className="next-btn w-[23px] h-[43px] md:w-[30px] md:h-[56px] z-10 absolute top-1/2 -right-[50%] -translate-y-1/2"
          onClick={handleNext}
        ></button>
      </ul>
      <ul className="flex w-fit items-center mt-5 md:mt-7 z-10">
        {slides.map((_, index) => (
          <li
            key={index}
            className={cn(
              "w-[10px] h-[10px] md:w-[13px] md:h-[13px] rounded-full bg-white mx-2",
              current === index ? "game-features-slider-dot" : ""
            )}
          ></li>
        ))}
      </ul>

      {/* Clouds */}
      <span
        className={cn(
          "cloud-1 absolute top-[35px] right-[-30px] w-[131px] h-[76px]",
          "md:top-[48px] md:right-[-42px] md:w-[180px] md:h-[105px]"
        )}
      ></span>
      <span
        className={cn(
          "cloud-5 absolute top-[70px] left-[-10px] w-[100px] h-[55px]",
          "md:top-[96px] md:left-[-14px] md:w-[137.5px] md:h-[75.625px]"
        )}
      ></span>
      <span
        className={cn(
          "cloud-3 absolute bottom-[11px] right-[5px] w-[170px] h-[96px]",
          "md:bottom-[112px] md:right-[260px] md:w-[233px] md:h-[132px]"
        )}
      ></span>
    </main>
  );
}
