import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import downloadButton from "@/assets/download-btn-header.png";
import facebook from "@/assets/facebook.png";
import twitter from "@/assets/twitter.webp";
import tiktok from "@/assets/tiktok.webp";
import youtube from "@/assets/youtube.webp";
import discord from "@/assets/discord.webp";
import closeIcon from "@/assets/close-icon.png";

const NavMenuItems = [
  { label: "Overview", href: "#overview" },
  { label: "Game Features", href: "#game-features" },
  { label: "Classes", href: "#classes" },
  { label: "News", href: "#news" },
];

const SocialMediaIcons = [
  { src: facebook, alt: "Facebook" },
  { src: twitter, alt: "Twitter" },
  { src: tiktok, alt: "TikTok" },
  { src: youtube, alt: "YouTube" },
  { src: discord, alt: "Discord" },
];

export default function Header() {
  const handleClickMenuIcon = () => {
    const navMenu = document.getElementById("navMenu");
    if (navMenu) {
      navMenu.classList.toggle("-translate-y-[calc(100%+55px)]");
      navMenu.classList.toggle("md:-translate-y-[calc(100%+76px)]");
    }
  };

  return (
    <header className="absolute top-0 inset-x-0 z-50">
      <div className="relative">
        <div className="relative h-[55px] md:h-[76px] bg-black/60 pl-[76px] md:pl-[104.5px] pr-[10px] md:pr-[13.75px] flex justify-between items-center z-10">
          <Image
            src={logo.src}
            height={logo.height}
            width={logo.width}
            className="absolute top-[5px] md:top-[6.875px] left-[10px] md:left-[13.75px] h-[59px] w-[59px] md:h-[81.25px] md:w-[81.25px] z-10"
            alt="Soul Knight Prequel Logo"
          />
          <div>
            <h1 className="text-[16px] md:text-[22px] text-white">
              Soul Knight Prequel
            </h1>
            <h2 className="text-[10px] md:text-[13.75px] text-white/60">
              Diablo-like ARPG
            </h2>
          </div>

          <button>
            <Image
              src={downloadButton.src}
              height={downloadButton.height}
              width={downloadButton.width}
              className="h-[28px] w-[100px] md:w-[137.5px] md:h-[38.5px]"
              alt="Download Button"
            />
          </button>

          <ul onClick={handleClickMenuIcon}>
            <li className="w-5 md:w-[27.5px] h-[2px] md:h-[2.75px] bg-[#00a2e3] rounded-[2px] md:rounded-[2.75px] my-[5px] md:my-[6.875px]"></li>
            <li className="w-5 md:w-[27.5px] h-[2px] md:h-[2.75px] bg-[#00a2e3] rounded-[2px] md:rounded-[2.75px] my-[5px] md:my-[6.875px]"></li>
            <li className="w-5 md:w-[27.5px] h-[2px] md:h-[2.75px] bg-[#00a2e3] rounded-[2px] md:rounded-[2.75px] my-[5px] md:my-[6.875px]"></li>
          </ul>
        </div>
        <div
          id="navMenu"
          className="bg-nav-menu-mobile absolute top-full -translate-y-[calc(100%+55px)] md:-translate-y-[calc(100%+76px)] left-0 w-screen px-[90px] md:px-[123.75px] pt-[10px] md:pt-[13.75px] pb-[20px] md:pb-[27.5px] transition-transform duration-500 ease-in-out"
        >
          <ul>
            {NavMenuItems.map((item) => (
              <li
                key={item.href}
                className="py-[10px] md:py-[13.75px] text-[#757575] text-[18px] md:text-[24.75px] font-medium border-b-[1px] border-b-solid border-b-[#cecece]/60 flex justify-center items-center"
              >
                {item.label}
              </li>
            ))}
            <li className="py-[10px] md:py-[13.75px] flex items-center flex-wrap border-b-[1px] border-b-solid border-b-[#cecece]/60">
              {SocialMediaIcons.map((item) => (
                <span key={item.alt} className="px-[10px] md:px-[13.75px]">
                  {
                    <Image
                      className="w-[40px] md:w-[55px] h-[30px] md:h-[41.25px] shrink-0 my-[5px] md:my-[6.875px] mx-[2px] md:mx-[2.75px]"
                      src={item.src}
                      height={80}
                      width={80}
                      alt={item.alt}
                    />
                  }
                </span>
              ))}
            </li>
            <li className="pt-[15px] md:pt-[20.625px] flex justify-center">
              <button>
                <Image
                  className="w-[20px] h-auto"
                  src={closeIcon.src}
                  height={20}
                  width={20}
                  alt="Close Menu"
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
