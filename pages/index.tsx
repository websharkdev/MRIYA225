import type { NextPage } from "next";

import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Noise } from "@react-three/postprocessing";

import { usePlay } from "@/providers/MainProvider";
import Meta from "@/utils/meta/Meta";
import { useMemo } from "react";
import Play from "@/components/screens/Play";
import { Header } from "@/components/layout/header";
import { Home } from "@/components/screens";
import { End } from "@/components/screens/Home";

const HomePage: NextPage = () => {
  const { play, end } = usePlay();

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
      <div className="h-screen relative">
        <div className="absolute top-5 w-full">
          <Header />
        </div>
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
        {!play && (
          <div className="absolute left-1/2 top-1/2 flex justify-center items-center">
            <Home />
          </div>
        )}
        {end && (
          <div
            className={`absolute left-1/2 top-1/2 flex justify-center items-center`}
          >
            <End />
          </div>
        )}
      </div>
    </Meta>
  );
};

export default HomePage;
