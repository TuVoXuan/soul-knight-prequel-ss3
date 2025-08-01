import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import downloadButton from "@/assets/download-btn-header.png";

export default function Header() {
  return (
    <header className="absolute top-0 inset-x-0 z-50">
      <div className="relative h-[55px] bg-black/60 pl-[76px] pr-[10px] flex justify-between items-center">
        <Image
          src={logo.src}
          height={logo.height}
          width={logo.width}
          className="absolute top-[5px] left-[10px] h-[59px] w-[59px]"
          alt="Soul Knight Prequel Logo"
        />
        <div>
          <h1 className="text-[16px] text-white">Soul Knight Prequel</h1>
          <h2 className="text-[10px] text-white/60">Diablo-like ARPG</h2>
        </div>

        <button>
          <Image
            src={downloadButton.src}
            height={downloadButton.height}
            width={downloadButton.width}
            className="h-[28px] w-[100px]"
            alt="Download Button"
          />
        </button>

        <ul>
          <li className="w-5 h-[2px] bg-[#00a2e3] rounded-[2px] my-[5px]"></li>
          <li className="w-5 h-[2px] bg-[#00a2e3] rounded-[2px] my-[5px]"></li>
          <li className="w-5 h-[2px] bg-[#00a2e3] rounded-[2px] my-[5px]"></li>
        </ul>
      </div>
    </header>
  );
}
