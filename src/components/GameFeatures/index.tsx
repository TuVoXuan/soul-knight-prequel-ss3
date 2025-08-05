import "./styles.css";
// Import Swiper styles
import { useState } from "react";
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

  return (
    <main className="game-features h-full flex items-center justify-center">
      <ul className="relative h-[390px] w-[230px] game-features-slider">
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
          className="prev-btn w-[23px] h-[43px] z-10 absolute top-1/2 -left-[20%] -translate-y-1/2"
          onClick={handlePrev}
        ></button>
        <button
          className="next-btn w-[23px] h-[43px] z-10 absolute top-1/2 -right-[20%] -translate-y-1/2"
          onClick={handleNext}
        ></button>
      </ul>
    </main>
  );
}
