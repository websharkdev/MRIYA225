"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { usePlay } from "@/providers/MainProvider";
import { useProgress } from "@react-three/drei";
import { FC, useState, useEffect } from "react";
import { texts } from "./data";

export const Home: FC = () => {
  const { progress } = useProgress();
  const { play, setPlay, hasScroll, end } = usePlay();
  const { language }: any = useLanguage();

  const [text, setText] = useState({
    logo: "",
    button: "",
    text: "",
  });

  useEffect(() => {
    switch (language) {
      case "ua":
        setText({
          logo: texts[0].text_ua,
          button: texts[1].text_ua,
          text: texts[1].text_ua,
        });
        break;
      case "es":
        setText({
          logo: texts[0].text_es,
          button: texts[1].text_es,
          text: texts[1].text_es,
        });
        break;
      case "en":
        setText({
          logo: texts[0].text_en,
          button: texts[1].text_en,
          text: texts[1].text_en,
        });
        break;

      default:
        break;
    }
  }, [language]);

  return (
    <div
      className={`absolute top-0 left-0 right-0 bottom-0 ${
        play ? "pointer-events-none" : ""
      } ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-full h-screen transition-all ease-in-out ${
          progress === 100 ? "opacity-0" : "opacity-100"
        }`}
      />
      {progress === 100 ? (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
          <div className="flex flex-col	 justify-center items-center gap-y-5 width-full height-screen">
            <div className="flex justify-center items-center relative width-max transition-2">
              <h1 className="text-3xl sm:text-5xl xl:text-8xl w-max text-white">
                {text.logo}
              </h1>
              <div className="flex absolute right-0 top-0 -mr-5 -mt-5 xl:-mr-[42px] xl:-mt-[42px] opacity-1">
                <div className="aspect-square w-16  md:w-24 xl:w-[164px] bg-contain spinner_image" />
              </div>
            </div>
            <button className="explore-btn" onClick={() => setPlay(true)}>
              {text.button}
            </button>
          </div>
        </div>
      ) : null}
      {end && (
        <div className={`outro ${end ? "outro--appear" : ""}`}>
          <p className="outro__text">{text.text}</p>
        </div>
      )}
    </div>
  );
};
