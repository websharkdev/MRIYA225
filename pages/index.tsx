import type { NextPage } from "next";

import { ScrollControls, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Noise } from "@react-three/postprocessing";

import { Header } from "@/components/layout/header";
import { Home } from "@/components/screens";
import { End } from "@/components/screens/Home";
import Play from "@/components/screens/Play";
import { usePlay } from "@/providers/MainProvider";
import Meta from "@/utils/meta/Meta";
import { useMemo } from "react";

const HomePage: NextPage = () => {
  const { play, end } = usePlay();
  const { progress } = useProgress();

  const effects = useMemo(
    () => (
      <EffectComposer>
        <Noise opacity={0.05} />
      </EffectComposer>
    ),
    []
  );

  return (
    <Meta
      title="MRIYA"
      description="Welcome to the Bortnytskyi Oleksii MRIYA Presentation. It's home page"
    >
      <div className="relative h-[100dvh]">
        <div className="absolute top-0 md:top-5 w-full">
          <Header />
        </div>

        {play && (
          <Canvas>
            {effects}

            <ScrollControls
              pages={play && !end ? 30 : 0}
              damping={0.5}
              style={{
                top: "10px",
                left: "0px",
                bottom: "10px",
                right: "4px",
                width: "auto",
                height: "auto",
                animation: "fadeIn 2.4s ease-in-out 1.2s forwards",
                opacity: 0,
              }}
            >
              <Play />
            </ScrollControls>
          </Canvas>
        )}

        {!play && (
          <div className="absolute left-1/2 top-1/2 flex justify-center items-center h-full">
            <Home />
          </div>
        )}
        {end && (
          <div
            className={`absolute left-1/2 top-1/2 flex justify-center items-center h-full`}
          >
            <End />
          </div>
        )}
      </div>
    </Meta>
  );
};

export default HomePage;
