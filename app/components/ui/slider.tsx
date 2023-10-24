// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { ArrowNEXTIcon, ArrowPREVIcon } from "@/assets/icons/ui";
import Image from "next/image";
import { useState } from "react";
import { EffectCards, Navigation } from "swiper/modules";

type Props = {
  slides: {
    title: string;
    text: string;
  }[];
};

export default function Slider({ slides }: Props) {
  const [active, setActive] = useState<number>(0);

  return (
    <div
      className={`slider w-full flex justify-between items-center flex-nowrap bg-primary h-72 rounded-[3.75rem] px-4 gap-8 `}
    >
      <div className="w-3/5 h-full ">
        {slides.length > 0 && (
          <Swiper
            effect={"cards"}
            grabCursor
            modules={[EffectCards, Navigation]}
            className={`bg-primary h-72 rounded-[3.75rem]`}
            onSlideChange={(swiper) => setActive(swiper.activeIndex)}
            navigation={{
              nextEl: "#next-btn",
              prevEl: "#prev-btn",
            }}
          >
            {slides.map((slide, index: number) => (
              <SwiperSlide key={index}>
                <div
                  className={`${
                    active === index ? "bg-[#5B5BFF]" : "bg-[#5B5BFF75]"
                  } gap-x-5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-60 aspect-square rounded-[60px] flex justify-center items-center flex-col`}
                >
                  <h3
                    className={`text-7xl text-center ${
                      active === index ? "text-white" : "text-[#5B5BFF55]"
                    } font-semibold transition`}
                  >
                    {slide.title}
                  </h3>
                  <span
                    className={`text-base text-center ${
                      active === index ? "text-white" : "text-[#5B5BFF55]"
                    } font-semibold transition`}
                  >
                    {slide.text}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      <div className="w-2/5  h-full flex flex-nowrap items-center gap-2 py-4">
        <button
          id="prev-btn"
          className="bg-[#9191FF] h-full pointer rounded-full w-1/2 flex justify-center items-center px-5"
        >
          <Image
            src={ArrowPREVIcon}
            alt="Arrow-PREV-icon"
            className="aspect-square object-contain w-full"
          />
        </button>
        <button
          id="next-btn"
          className="bg-[#2525DE] h-full pointer rounded-full w-1/2 flex justify-center items-center px-5"
        >
          <Image
            src={ArrowNEXTIcon}
            alt="Arrow-NEXT-icon"
            className="aspect-square object-contain w-full"
          />
        </button>
      </div>
    </div>
  );
}
