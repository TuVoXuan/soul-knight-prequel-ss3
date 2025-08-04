"use client";
import NPCCharacter from "@/assets/npc-character.gif";
import NPCShadow from "@/assets/npc-shadow.png";
import overviewTitle from "@/assets/overview-title-mobile.png";
import playVideoBtn from "@/assets/play-video-btn.png";
import downloadBtn from "@/assets/download-btn.png";
import overviewTitleDesktop from "@/assets/overview-title.png";
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
    <main className="relative h-full pt-[95px] md:pt-[130.625px] lg:pt-[107.5px] 2xl:pt-[144px] overview-section flex flex-col justify-between items-center">
      <div>
        <Image
          src={overviewTitle.src}
          height={overviewTitle.height}
          width={overviewTitle.width}
          className="w-[283px] h-[168px] md:w-[389.125px] md:h-[231px] lg:hidden"
          alt="Overview Title"
        />
        <Image
          src={overviewTitleDesktop.src}
          height={overviewTitleDesktop.height}
          width={overviewTitleDesktop.width}
          className="w-[915.828px] 2xl:w-[1220px] h-[190.828px] 2xl:h-[254px] hidden lg:block"
          alt="Overview Title"
        />
      </div>
      <div className="w-fit mt-[10px] z-10 play-video-animation">
        <Image
          src={playVideoBtn.src}
          height={playVideoBtn.height}
          width={playVideoBtn.width}
          className="w-[78px] h-[78px] md:w-[107.25px] md:h-[107.25px] lg:w-[65px] lg:h-[65px] 2xl:w-[87px] 2xl:h-[87px] cursor-pointer"
          alt="Play Video Button"
        />
      </div>
      <div className="h-[450px] md:h-[618.75px] 2xl:h-[584px] w-[912px] md:w-[1254px] 2xl:w-[1804px] relative z-10 overflow-hidden">
        <span className="absolute earth-bg-animation background-earth block top-10 md:top-[55px] 2xl:top-[89px] h-[912px] md:h-[1254px] 2xl:h-[1804px] w-full"></span>
        <div>
          <Image
            src={NPCCharacter.src}
            height={NPCCharacter.height}
            width={NPCCharacter.width}
            className="absolute top-[60px] md:top-[82.5px] lg:top-[83.33px] 2xl:top-[111.111px] left-1/2 -translate-x-[90px] md:-translate-x-[123.75px] lg:-translate-x-[133.33px] 2xl:-translate-x-[177px] w-[200px] md:w-[275px] lg:w-[300px] 2xl:w-[400px] h-auto z-30"
            alt="NPC Character"
          />
          <Image
            src={NPCShadow.src}
            height={NPCShadow.height}
            width={NPCShadow.width}
            className="absolute top-[200px] md:top-[275px] lg:top-[300px] 2xl:top-[400px] left-1/2 -translate-x-[45px] md:-translate-x-[61.875px] lg:-translate-x-[50px] 2xl:-translate-x-[67px] w-[90px] md:w-[123.75px] lg:w-[108.33px] 2xl:w-[144px] h-auto z-20"
            alt="NPC Shadow"
          />
          <div className="z-20 absolute top-[55px] md:top-[75.625px] 2xl:top-[111px] left-1/2 w-[50px] md:w-[68.75px] 2xl:w-[91px] h-[50px] md:h-[68.75px] 2xl:h-[91px] translate-x-[36px] md:translate-x-[49.5px] 2xl:translate-x-[77.75px]">
            <span className={talkIconClass}></span>
          </div>
          <div className="absolute top-[250px] md:top-[343.75px] flex z-30 justify-center w-full lg:hidden">
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
      <span className="cloud-top-left-1 absolute top-[70px] md:top-[96.25px] lg:top-[508px] 2xl:top-[677px] w-[175px] md:w-[240.625px] lg:w-[293px] 2xl:w-[391px] h-[100px] md:h-[137.5px] lg:h-[170px] 2xl:h-[226px] left-[-120px] md:left-[-165px] lg:left-[50px] 2xl:left-[67px]"></span>
      <span className="cloud-top-left-2 absolute w-[78px] md:w-[107.25px] lg:w-[113.328px] 2xl:w-[151px] h-[54px] md:h-[74.25px] lg:h-[90px] 2xl:h-[120px] top-[130px] md:top-[178.75px] lg:top-[208.28125px] 2xl:top-[278px] -right-8 md:-right-[44px] lg:right-[124.96875px] 2xl:right-[167px]"></span>
      <span className="cloud-middle-left-1 absolute w-[114px] md:w-[156.75px] lg:w-[190px] 2xl:w-[253px] h-[64px] md:h-[88px] lg:h-[106.64px] 2xl:h-[142px] top-[300px] md:top-[412.5px] lg:top-[305.833px] 2xl:top-[407px] left-[18px] md:left-[24.75px] lg:left-[486px] 2xl:left-[729px]"></span>
      <span className="cloud-right-1 absolute w-[218px] md:w-[299.75px] lg:w-[363px] 2xl:w-[484px] h-[116px] md:h-[159.5px] lg:h-[193px] 2xl:h-[257px] top-[235px] md:top-[323.125px] lg:top-[416px] 2xl:top-[555px] right-[-120px] md:right-[-165px] lg:right-0"></span>
      <span className="hidden lg:block cloud-middle-left-2 absolute w-[83.328px] 2xl:w-[111px] h-[53.328px] 2xl:h-[71px] top-[383.33px] 2xl:top-[511px] left-[66.67px] 2xl:left-[89px]"></span>
      <span className="hidden lg:block cloud-middle-left-3 absolute w-[50px] 2xl:w-[66px] h-[50px] 2xl:h-[66px] top-[500px] 2xl:top-[667px] left-[-25px] 2xl:left-[-34px]"></span>
    </main>
  );
}
