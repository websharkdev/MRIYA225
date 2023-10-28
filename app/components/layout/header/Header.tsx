"use client";

import { BurgerOpenedIcon } from "@/assets/icons/ui";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/hooks/useLanguage";
import { useSwitchTheme } from "@/hooks/useSwitchTheme";
import { usePlay } from "@/providers/MainProvider";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { languages, texts } from "./data";

export const Header: FC = () => {
  const { end } = usePlay();
  const theme = useSwitchTheme();
  const { language, setLanguage }: any = useLanguage();

  const currentURL = useRouter();
  const [text, setText] = useState({
    logo: "",
    war: "",
    about: "",
  });

  useEffect(() => {
    switch (language) {
      case "ua":
        setText({
          logo: texts.text.text_ua,
          war: texts.links[1].text_ua,
          about: texts.links[0].text_ua,
        });
        break;
      case "es":
        setText({
          logo: texts.text.text_es,
          war: texts.links[1].text_es,
          about: texts.links[0].text_es,
        });
        break;
      case "en":
        setText({
          about: texts.links[0].text_en,
          war: texts.links[1].text_en,
          logo: texts.text.text_en,
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

      {currentURL.pathname !== "/" ? (
        <Link href="/">
          <div className={`p-4 flex justify-between items-center gap-x-6`}>
            <h2 className="uppercase font-semibold text-white">{text.logo}</h2>
          </div>
        </Link>
      ) : null}

      <div className={`p-4 rounded-full flex justify-between items-center`}>
        <Link
          href={`./war`}
          className={`menu-item py-2.5 px-3 rounded-full ${
            end
              ? "hover:bg-white hover:text-black"
              : "hover:bg-primary hover:text-white"
          }  justify-between items-center duration-300 transition ${
            !theme.isLight && "text-white"
          } ease-in-out font-semibold text-sm lg:text-lg hidden md:flex text-white`}
        >
          {text.war}
        </Link>

        <Link
          href={`./about`}
          className={`menu-item py-2.5 px-3 rounded-full ${
            end
              ? "hover:bg-white hover:text-black"
              : "hover:bg-primary hover:text-white"
          }  justify-between items-center duration-300 transition ${
            !theme.isLight && "text-white"
          } ease-in-out font-semibold text-sm lg:text-lg hidden md:flex text-white`}
        >
          {text.about}
        </Link>

        <div className="menu-burger  flex md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Image
                src={BurgerOpenedIcon}
                alt="burger menu / closed / opened"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href={`./war`}>{text.war}</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={`./about`}>{text.about}</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};
