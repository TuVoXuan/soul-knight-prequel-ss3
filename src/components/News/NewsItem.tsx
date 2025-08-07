import React from "react";

interface NewsItemProps {
  title: string;
  postedDate: string;
}

export default function NewsItem({ title, postedDate }: NewsItemProps) {
  return (
    <li className="flex py-[7px] md:px-[11px] px-[8px] md:py-[10px] lg:p-[6px] text-[#895b2f] text-[14px] md:text-[19.25px] lg:text-[14px] border-b-[1px] border-b-[#895b2f]/30 border-dashed 2xl:p-[9px] 2xl:text-[18px]">
      <span className="text-ellipsis truncate flex-1">{title}</span>
      <span className="text-right shrink-0 w-[50px]">{postedDate}</span>
    </li>
  );
}
