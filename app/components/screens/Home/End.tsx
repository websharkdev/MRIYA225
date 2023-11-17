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
    <div className={`flex items-center justify-center w-full h-screen`}>
      <div
        className={`flex flex-col	justify-center items-center gap-y-5 w-full h-screen transition-all duration-700 ${
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
