"use client";
import NPCCharacter from "@/assets/npc-character.gif";
import NPCShadow from "@/assets/npc-shadow.png";
import overviewTitle from "@/assets/overview-title-mobile.png";
import playVideoBtn from "@/assets/play-video-btn.png";
import Image from "next/image";
import { useEffect, useRef } from "react";
import "./styles.css";

export default function Overview() {
  const talkIconRef = useRef<HTMLSpanElement>(null);

  // useEffect(() => {
  //   let currClass = '';
  //   const classes = ["talk-icon-coin", "talk-icon-flame"];
  //   const interval = setInterval(() => {
  //     if (!talkIconRef.current) return;

  //     talkIconRef.current.classList.add(currClass);
  //     setTimeout(() => {
  //       talkIconRef.current?.classList.remove(currClass);
  //       lastTalkIconClass = currClass;
  //       currClass =
  //     }, 3000);
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <main className="relative h-full pt-[95px] overview-section flex flex-col justify-center items-center">
      <div>
        <Image
          src={overviewTitle.src}
          height={overviewTitle.height}
          width={overviewTitle.width}
          className="w-[283px] h-[168px]"
          alt="Overview Title"
        />
      </div>
      <div className="w-fit mt-[10px] z-10 play-video-animation">
        <Image
          src={playVideoBtn.src}
          height={playVideoBtn.height}
          width={playVideoBtn.width}
          className="w-[78px] h-[78px] cursor-pointer"
          alt="Play Video Button"
        />
      </div>
      <div className="h-[450px] w-[912px] relative z-10 overflow-hidden">
        <span className="absolute earth-bg-animation background-earth block top-10 h-[912px] w-full"></span>
        <div>
          <Image
            src={NPCCharacter.src}
            height={NPCCharacter.height}
            width={NPCCharacter.width}
            className="absolute top-[60px] left-1/2 -translate-x-[90px] w-[200px] h-auto z-30"
            alt="NPC Character"
          />
          <Image
            src={NPCShadow.src}
            height={NPCShadow.height}
            width={NPCShadow.width}
            className="absolute top-[200px] left-1/2 -translate-x-[45px] w-[90px] h-auto z-20"
            alt="NPC Shadow"
          />
          <div className="z-20 absolute top-[55px] left-1/2 w-[55px] h-[50px] translate-x-[36px]">
            <span ref={talkIconRef}></span>
          </div>
        </div>
      </div>
    </main>
  );
}
