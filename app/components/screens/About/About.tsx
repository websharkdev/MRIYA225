import { ArrowNEXTIcon } from "@/assets/icons/ui";
import { HeaderPhoto } from "@/assets/photos";
import CanvasLayout from "@/components/layout/CanvasLayout";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { Vector3 } from "three";

type Props = {};

const About = (props: Props) => {
  const clouds = useMemo(() => {
    return [
      {
        position: new Vector3(3, -2.4, -7.6),
        scale: 0.5,
      },
      {
        position: new Vector3(1, -0.4, -7.6),
        scale: 0.5,
      },
      {
        position: new Vector3(-5, -2.5, -7.6),
        scale: 0.5,
      },
    ];
  }, []);

  const projects = useMemo(() => {
    return [
      {
        name: "Freelance",
        type: ["part-time"],
      },
      {
        name: "Investables",
        type: ["fintech", "b2b"],
      },
      {
        name: "NeonPilots",
        type: ["startups", "b2b"],
        link: "https://u24.gov.ua/en",
      },
      {
        name: "Changeblock ",
        type: ["fintech", "blockchain"],
      },
      {
        name: "Freelance",
        type: ["fintech"],
      },
    ];
  }, []);

  const Links = useMemo(() => {
    return [
      {
        link: "mainto:alexey.bortnytskyi@gmail.com",
        title: "alexey.bortnytskyi@gmail.com",
      },
      {
        link: "tel:34680522262",
        title: "34 680 522 262",
      },
      {
        link: "https://github.com/websharkdev",
        title: "github",
      },
      {
        link: "https://webshark.notion.site/CV-bc75484ca7b1458eb7f0cab21e7e74ef",
        title: "CV",
      },
    ];
  }, []);

  return (
    <CanvasLayout clouds={clouds}>
      <div className="flex flex-wrap lg:flex-nowrap gap-5 relative">
        <div className="mx-auto w-11/12 lg:w-1/2 bg-[#F8F9FA] h-max rounded-2xl md:rounded-3xl lg:rounded-[45px] flex gap-y-10 flex-nowrap flex-col  p-4 md:p-6 lg:p-9">
          <div className="bg-primary p-4 md:p-6 lg:px-8 lg:py-12 h-max rounded-2xl md:rounded-3xl lg:rounded-[45px] flex justify-between flex-nowrap gap-x-4">
            <div className="flex flex-col gap-2 md:gap-5">
              <h1 className="text-white font-semibold text-2xl sm:text-3xl lg:text-4xl xl:text-6xl">
                Bortnytskyi <br /> Oleksii
              </h1>
              <h6 className="text-white font-semibold text-md sm:text-xl xl:text-2xl">
                Front-end React Dev.
              </h6>
            </div>
            <div className="hidden sm:flex items-center justify-center">
              <Image
                src={HeaderPhoto}
                alt="Bortnytskyi Oleksii photo \ face"
                className="w-28 lg:w-[190px] aspect-square object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-5 items-end">
            <div className="w-10/12 md:w-2/3 flex gap-5 flex-col">
              <p className="font-semibold sm:text-sm md:text-md md:text-lg text-[#6C757D]">
                I specialize in
                <span className="text-black"> front-end development</span>, with
                a particular focus on creating engaging animations and
                micro-interactions. Using technologies like{" "}
                <span className="text-black">
                  React, TypeScript, CSS, and WebGL
                </span>
                , I bring websites to life with captivating visual experiences.
              </p>
              <p className="font-semibold sm:text-sm md:text-md md:text-lg text-[#6C757D]">
                My goal is to craft <span className="text-black">unique</span>{" "}
                and interactive interfaces that leave a lasting impression on
                users, ensuring a memorable and enjoyable browsing journey.
              </p>
            </div>
            <div className="w-full md:w-2/3 flex gap-5 flex-col bg-white p-6 rounded-xl">
              <p className="font-semibold sm:text-sm md:text-md md:text-lg text-[#6C757D]">
                I was born in Irpin, Ukraine, and started learning front-end
                development at the age of 14. Over the years, I have
                successfully completed multiple projects, which you can explore
                below. Currently based in Pamplona, Spain, I am focused on
                remote work opportunities.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto w-11/12 lg:w-1/2 flex flex-col gap-9">
          <div className="bg-white h-max rounded-2xl md:rounded-3xl lg:rounded-[45px] flex gap-y-5 flex-nowrap flex-col p-4 md:p-6 lg:px-8 lg:py-12">
            {projects.slice(0, 5).map((project, index) => (
              <div
                key={`${index}_${project.name}`}
                className="flex justify-between bg-[#F8F9FA] outline-none items-center max-h-20  whitespace-nowrap rounded-[1.25rem] p-3 md:p-5 lg:px-8 lg:py-7 text-xl font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                <div className="flex items-center gap-x-9">
                  <h2 className="text-lg font-semibold md:text-xl lg:text-2xl">
                    {project.name}
                  </h2>
                  <div className="flex-nowrap items-center gap-x-3 hidden xl:flex ">
                    {project.type.map((type: string, id) => (
                      <span
                        key={id}
                        className="rounded-sm px-4 py-1 text-primary bg-white font-semibold hover:bg-primary hover:text-white"
                      >
                        #{type}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full xl:w-3/4 bg-white h-max rounded-2xl md:rounded-3xl lg:rounded-[45px] flex gap-y-5 flex-nowrap flex-col p-0 md:p-6 lg:px-8 lg:py-12">
            <div className="flex flex-col flex-nowrap gap-7 bg-primary rounded-2xl md:rounded-3xl lg:rounded-[45px] p-4 md:p-6 lg:p-8">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white">
                Contacts
              </h3>
              <div className="flex flex-nowrap items-center gap-4">
                <div className="flex flex-wrap w-full md:w-4/5 gap-2 max-w-none md:max-w-[360px]">
                  {Links.map((item: any, index: number) => (
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={index}
                      className="text-[10px] sm:text-sm md:text-md lg:text-lg font-semibold text-primary py-2 px-5 bg-[#EDEDFC] hover:text-white hover:bg-[#5B5BFF] transition rounded-md lowercase"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
                <div className="hidden xl:flex w-1/5 max-w-[92px] aspect-square">
                  <Button
                    size="icon"
                    variant="ghost"
                    href="https://webshark.design/"
                    className="bg-white p-5 w-full h-full rounded-[2rem]"
                  >
                    <Image
                      src={ArrowNEXTIcon}
                      alt={"arrow-next-icon"}
                      className="w-full aspect-square object-contain"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CanvasLayout>
  );
};

export default About;
