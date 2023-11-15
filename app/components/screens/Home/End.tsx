"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { usePlay } from "@/providers/MainProvider";
import { FC, useEffect, useState } from "react";
import { texts } from "./data";

export const End: FC = () => {
  const { end } = usePlay();
  const { language }: any = useLanguage();

  const [text, setText] = useState({
    text: "",
  });

  useEffect(() => {
    switch (language) {
      case "ua":
        setText({
          text: texts[2].text_ua,
        });
        break;
      case "es":
        setText({
          text: texts[2].text_es,
        });
        break;
      case "en":
        setText({
          text: texts[2].text_en,
        });
        break;
    }
  }, [language]);

  return (
    <div
      className={`absolute top-0 left-0 right-0 bottom-0 pointer-events-none`}
    >
      <div
        className={`flex flex-col	 justify-center items-center gap-y-5 width-full height-screen transition-all duration-700 ${
          end ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="sm:text-sm xl:text-xl font-semibold w-max max-w-[320px] md:max-w-3xl text-center text-white">
          {text.text}
        </p>
      </div>
    </div>
  );
};
