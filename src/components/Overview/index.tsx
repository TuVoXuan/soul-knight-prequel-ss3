"use client";
import NPCCharacter from "@/assets/npc-character.gif";
import NPCShadow from "@/assets/npc-shadow.png";
import overviewTitle from "@/assets/overview-title-mobile.png";
import playVideoBtn from "@/assets/play-video-btn.png";
import downloadBtn from "@/assets/download-btn.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./styles.css";

export default function Overview() {
  const [talkIconClass, setTalkIconClass] = useState<string>("");

  useEffect(() => {
    let currIndex = 0;
    const classes = ["talk-icon-coin", "", "talk-icon-flame", ""];
    const interval = setInterval(() => {
      setTalkIconClass(classes[currIndex]);
      setTimeout(() => {
        currIndex++;
        if (currIndex === classes.length) {
          currIndex = 0;
        }
      }, 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative h-full pt-[95px] md:pt-[130.625px] overview-section flex flex-col justify-center items-center">
      <div>
        <Image
          src={overviewTitle.src}
          height={overviewTitle.height}
          width={overviewTitle.width}
          className="w-[283px] h-[168px] md:w-[389.125px] md:h-[231px]"
          alt="Overview Title"
        />
      </div>
      <div className="w-fit mt-[10px] z-10 play-video-animation">
        <Image
          src={playVideoBtn.src}
          height={playVideoBtn.height}
          width={playVideoBtn.width}
          className="w-[78px] h-[78px] md:w-[107.25px] md:h-[107.25px] cursor-pointer"
          alt="Play Video Button"
        />
      </div>
      <div className="h-[450px] md:h-[618.75px] w-[912px] md:w-[1254px] relative z-10 overflow-hidden">
        <span className="absolute earth-bg-animation background-earth block top-10 md:top-[55px] h-[912px] md:h-[1254px] w-full"></span>
        <div>
          <Image
            src={NPCCharacter.src}
            height={NPCCharacter.height}
            width={NPCCharacter.width}
            className="absolute top-[60px] md:top-[82.5px] left-1/2 -translate-x-[90px] md:-translate-x-[123.75px] w-[200px] md:w-[275px] h-auto z-30"
            alt="NPC Character"
          />
          <Image
            src={NPCShadow.src}
            height={NPCShadow.height}
            width={NPCShadow.width}
            className="absolute top-[200px] md:top-[275px] left-1/2 -translate-x-[45px] md:-translate-x-[61.875px] w-[90px] md:w-[123.75px] h-auto z-20"
            alt="NPC Shadow"
          />
          <div className="z-20 absolute top-[55px] md:top-[75.625px] left-1/2 w-[50px] md:w-[68.75px] h-[50px] md:h-[68.75px] translate-x-[36px] md:translate-x-[49.5px]">
            <span className={talkIconClass}></span>
          </div>
          <div className="absolute top-[250px] md:top-[343.75px] flex z-30 justify-center w-full">
            <div className="w-[156px] md:w-[214.5px] cursor-pointer">
              <Image
                src={downloadBtn.src}
                height={downloadBtn.height}
                width={downloadBtn.width}
                className="w-[156px] md:w-[214.5px] h-[57px] md:h-[78.375px] cursor-pointer"
                alt="Download Button"
              />
            </div>
          </div>
        </div>
      </div>
      <span className="cloud-top-left-1 absolute top-[70px] md:top-[96.25px] w-[175px] md:w-[240.625px] h-[100px] md:h-[137.5px] left-[-120px] md:left-[-165px]"></span>
      <span className="cloud-top-left-2 absolute w-[78px] md:w-[107.25px] h-[54px] md:h-[74.25px] top-[130px] md:top-[178.75px] -right-8 md:-right-[44px]"></span>
      <span className="cloud-middle-left-1 absolute w-[114px] md:w-[156.75px] h-[64px] md:h-[88px] top-[300px] md:top-[412.5px] left-[18px] md:left-[24.75px]"></span>
      <span className="cloud-right-1 absolute w-[218px] md:w-[299.75px] h-[116px] md:h-[159.5px] top-[235px] md:top-[323.125px] right-[-120px] md:right-[-165px]"></span>
    </main>
  );
}
