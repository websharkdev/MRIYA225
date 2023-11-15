"use client";

import { fadeOnBeforeCompile } from "@/utils/fadeMaterial";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { MathUtils } from "three";

export function Balloon(props: any) {
  const { nodes }: any = useGLTF("./models/balloon.gltf");

  const sceneOpacity = useRef<any>(0);
  const materialRef = useRef<any>();

  useFrame((_state, delta) => {
    sceneOpacity.current = MathUtils.lerp(sceneOpacity.current, 1, delta * 0.7);
    materialRef.current.opacity = sceneOpacity.current;
  });
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.BALLOON.geometry}
        position={[0.021, 0, -0.062]}
        scale={1.083}
      >
        <meshStandardMaterial
          ref={materialRef}
          onBeforeCompile={fadeOnBeforeCompile}
          envMapIntensity={2}
          transparent
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("./models/balloon.gltf");
