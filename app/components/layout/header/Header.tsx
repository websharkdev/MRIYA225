"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/hooks/useLanguage";
import { useSwitchTheme } from "@/hooks/useSwitchTheme";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import { languages, texts } from "./data";
import { usePlay } from "@/providers/MainProvider";

export const Header: FC = () => {
  const { play, end } = usePlay();

  const theme = useSwitchTheme();
  const { language, setLanguage }: any = useLanguage();
  const [text, setText] = useState({
    logo: "",
    link: "",
  });

  useEffect(() => {
    switch (language) {
      case "ua":
        setText({
          logo: texts[1].text_ua,
          link: texts[0].text_ua,
        });
        break;
      case "es":
        setText({
          logo: texts[1].text_es,
          link: texts[0].text_es,
        });
        break;
      case "en":
        setText({
          logo: texts[1].text_en,
          link: texts[0].text_en,
        });
        break;
    }
  }, [language]);
  return (
    <div
      className={`container flex justify-between items-center sticky top-5 z-20`}
    >
      <div className={`p-4 flex justify-between items-center gap-x-6`}>
        <Select
          onValueChange={(value: "es" | "ua" | "en") => {
            setLanguage(value);
          }}
        >
          <SelectTrigger className="uppercase bg-transparent border-none text-semibold text-white outline-none active:ring-0 focus:ring-0 active:shadow-none focus:shadow-none">
            <SelectValue placeholder={language} />
          </SelectTrigger>
          <SelectContent>
            {languages.map((languageItem: string, id: number) => (
              <SelectItem
                value={languageItem}
                key={id}
                disabled={languageItem === language}
              >
                {languageItem}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {play && (
        <div className={`p-4 flex justify-between items-center gap-x-6`}>
          <h2 className="uppercase font-semibold text-white">{text.logo}</h2>
        </div>
      )}

      <div className={`p-4 rounded-full flex justify-between items-center`}>
        {texts[0].id === "link" ? (
          <Link
            href={`./about`}
            className={`menu-item py-2.5 px-3 rounded-full ${
              end
                ? "hover:bg-white hover:text-black"
                : "hover:bg-primary hover:text-white"
            }  flex justify-between items-center duration-300 transition ${
              !theme.isLight && "text-white"
            } ease-in-out font-semibold text-lg text-white`}
          >
            {text.link}
          </Link>
        ) : null}
      </div>
    </div>
  );
};
