"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { usePlay } from "@/providers/MainProvider";
import { useProgress } from "@react-three/drei";
import { FC, useEffect, useMemo, useState } from "react";
import { texts } from "./data";
import CanvasLayout from "@/components/layout/CanvasLayout";
import { Vector3 } from "three";

export const Home: FC = () => {
  const { progress } = useProgress();
  const { play, setPlay, end } = usePlay();
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

  const clouds = useMemo(() => {
    return [
      {
        position: new Vector3(3, -2.4, -7.6),
        scale: 0.5,
      },
      {
        position: new Vector3(3, 2.4, -7.6),
        scale: 0.5,
      },
      {
        position: new Vector3(1, -0.4, -7.6),
        scale: 0.5,
      },
      {
        position: new Vector3(-5, -3, -7.6),
        scale: 0.8,
      },
      {
        position: new Vector3(-5, 2, -10),
        scale: 0.6,
      },
    ];
  }, []);

  return (
    <CanvasLayout clouds={clouds} balloonPosition={[-6, -0, -7.6]}>
      <div className={`absolute top-0 left-0 right-0 bottom-0`}>
        {progress === 100 ? (
          <div className={`intro ${play ? "intro--disappear" : ""}`}>
            <div className="flex flex-col	 justify-center items-center gap-y-5 width-full height-screen">
              <div className="flex justify-center items-center relative width-max transition-2">
                <h1 className="text-4xl sm:text-5xl md:text-8xl w-max text-white">
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
    </CanvasLayout>
  );
};
