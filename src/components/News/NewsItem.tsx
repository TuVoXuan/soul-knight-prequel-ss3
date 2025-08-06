import React from "react";

interface NewsItemProps {
  title: string;
  postedDate: string;
}

export default function NewsItem({ title, postedDate }: NewsItemProps) {
  return (
    <li className="flex py-[7px] px-[8px] text-[#895b2f] text-[14px] border-b-[1px] border-b-[#895b2f]/30 border-dashed">
      <span className="text-ellipsis truncate flex-1">{title}</span>
      <span className="text-right shrink-0 w-[50px]">{postedDate}</span>
    </li>
  );
}
