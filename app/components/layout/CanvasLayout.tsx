import { Float, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Noise } from "@react-three/postprocessing";
import { useMemo } from "react";
import { Balloon } from "./Balloon";
import { Cloud } from "./Clouds";

type Props = {
  children: React.ReactNode;
  clouds?: any[];
  balloonPosition?: number[];
};

const CanvasLayout = ({
  children,
  clouds = [],
  balloonPosition = [],
}: Props) => {
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
    <>
      <div
        className={`fixed top-0 left-0  bg-white z-100 w-full h-screen transition-all ease-in-out ${
          progress === 100 ? "opacity-0" : "opacity-100"
        }`}
      />
      {children}
      <div className="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen -z-10">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 30,
          }}
        >
          <pointLight position={[3, 3, 3]} intensity={1.5} />
          {effects}
          {clouds.length > 0 &&
            clouds.map((cloud: any, index: number) => (
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

          {balloonPosition.length > 0 && (
            <Float floatIntensity={0.31} speed={0.6} rotationIntensity={0.1}>
              <Balloon position={balloonPosition} scale={0.25} />
            </Float>
          )}
        </Canvas>
      </div>
    </>
  );
};

export default CanvasLayout;
