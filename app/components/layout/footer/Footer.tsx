"use client";

import { useSwitchTheme } from "@/hooks/useSwitchTheme";
import Link from "next/link";
import { FC, useState } from "react";
type Props = {};

const menu = ["home", "about", "works", "blog", "contacts"];

export const Footer: FC<Props> = () => {
  const [current, setCurrent] = useState({
    link: "home",
    theme: "light",
    language: "en",
  });

  const theme = useSwitchTheme();
  return (
    <div
      className={`container flex justify-between items-center sticky top-5 z-20`}
    >
      <div
        className={`py-6 px-[34px] rounded-full  ${
          theme.isLight ? "bg-[#F8F9FA]" : "bg-[#2E2E2E]"
        } flex justify-between items-center`}
      >
        {menu.map((item: string, index: number) => (
          <Link
            key={`${item}_${index}`}
            href={`#${item}`}
            className={`menu-item py-2.5 px-3 rounded-full hover:bg-primary hover:text-white flex justify-between items-center duration-300 transition ${
              !theme.isLight && "text-white"
            } ${
              current.link === item ? "bg-primary text-white" : "bg-silver"
            } ease-in-out font-semibold text-lg`}
          >
            {item}.
          </Link>
        ))}
      </div>
    </div>
  );
};
