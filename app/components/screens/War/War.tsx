import { Button } from "@/components/ui/button";
import { Float } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { useMemo } from "react";
import { Vector3 } from "three";
import { Balloon, Cloud } from "./components";

type Props = {};

const War = (props: Props) => {
  const effects = useMemo(
    () => (
      <EffectComposer>
        <Noise opacity={0.05} />
      </EffectComposer>
    ),
    []
  );

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

  const fonds = useMemo(() => {
    return [
      {
        name: "Come Back Alive",
        type: ["military", "civilians"],
        link: "https://savelife.in.ua/en/",
      },
      {
        name: "Razom for Ukraine",
        type: ["military", "evacuaation"],
        link: "https://www.razomforukraine.org/",
      },
      {
        name: "UNITED 24",
        type: ["defense", "demining"],
        link: "https://u24.gov.ua/en",
      },
      {
        name: "KSE Foundation",
        type: ["protection", "tactic. med"],
        link: "https://kse.ua/we-save-lives/",
      },
      {
        name: "KOLO",
        type: ["protection", "military"],
        link: "https://www.koloua.com/en/",
      },
    ];
  }, []);
  return (
    <>
      <div className="flex flex-wrap md:flex-nowrap gap-5 relative lg:w-11/12 mx-auto">
        <div className="w-11/12 mx-auto md:w-1/2 lg:w-3/5 bg-white h-max rounded-2xl md:rounded-3xl lg:rounded-[45px] flex gap-y-5 flex-nowrap flex-col p-4 md:p-6 lg:px-8 lg:py-12">
          {fonds.map((fond, index) => (
            <div
              key={`${index}_${fond.name}`}
              className="flex justify-between bg-[#F8F9FA] outline-none items-center max-h-20  whitespace-nowrap rounded-[1.25rem] p-3 md:p-5 lg:px-8 lg:py-7 text-xl font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              <div className="flex items-center gap-x-9">
                <h2 className="text-lg font-semibold md:text-xl lg:text-2xl">
                  {fond.name}
                </h2>
                <div className="flex-nowrap items-center gap-x-3 hidden xl:flex ">
                  {fond.type.map((type: string, id) => (
                    <span
                      key={id}
                      className="rounded-sm px-4 py-1 text-primary bg-white font-semibold hover:bg-primary hover:text-white"
                    >
                      #{type}
                    </span>
                  ))}
                </div>
              </div>
              <div className="period flex flex-nowrap items-center gap-x-9">
                <Button
                  size="icon"
                  variant="ghost"
                  href={fond.link}
                  className="bg-primary w-8 h-8 md:w-14 md:h-14 p-2 md:p-5 aspect-square rounded-full text-white hover:text-primary"
                >
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L33 33M33 33V2.28M33 33H2.28"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="w-11/12 mx-auto md:w-1/2 lg:w-2/5 bg-white h-max rounded-2xl md:rounded-3xl lg:rounded-[45px] flex gap-y-5 flex-nowrap flex-col">
          <div className="flex flex-col gap-y-5 px-8 pt-12">
            <h2 className="font-semibold text-xl lg:text-2xl">Hey threre 👋</h2>
            <p className="font-semibold text-sm md:text-lg text-[#2E2E2E]">
              My name is Oleksii, and my country is currently at war. To be
              honest and call things by their true names, it's not just a war
              but a genocide of my people.
            </p>
            <p className="font-semibold text-sm md:text-lg text-[#2E2E2E]">
              We need your help. I've compiled a list of popular Ukrainian
              foundations that provide support to both military personnel and
              civilians. Winter is approaching, and it will be a harsh one
              without electricity and heat. The enemy is shelling critical
              infrastructure that has no military purpose.
            </p>
          </div>
          <div className="bg-primary p-6 md:px-8 md:py-12 h-max rounded-2xl md:rounded-3xl lg:rounded-[45px]">
            <p className="font-semibold text-sm md:text-lg text-[#EDEDFC]">
              I also want to mention that I am a volunteer. I may not have
              papers to prove it, but I am honest with you. I share aspects of
              my life on social media almost every day, including my work
              processes and volunteer efforts. I understand that this might not
              inspire a strong desire to trust me. That's why I've attached
              links to other well-established and reputable foundations.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute left-1/2 top-0 -translate-x-1/2  w-screen h-screen -z-10">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 30,
          }}
        >
          <pointLight position={[3, 3, 3]} intensity={1.5} />
          {effects}
          {clouds.map((cloud: any, index: number) => (
            <Float
              key={index}
              floatIntensity={0.5}
              speed={0.3}
              rotationIntensity={0.5}
            >
              <Cloud
                {...cloud}
                variant={Math.floor(Math.random() * (2 - 1 + 1) + 1)}
                key={index}
              />
            </Float>
          ))}

          <Float floatIntensity={0.31} speed={0.6} rotationIntensity={0.1}>
            <Balloon position={[-6, -0, -7.6]} scale={0.25} />
          </Float>
        </Canvas>
      </div>
    </>
  );
};

export default War;
