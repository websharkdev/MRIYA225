import { fadeOnBeforeCompile } from "@/utils/fadeMaterial";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export function Cloud({ sceneOpacity, variant, ...props }: any) {
  const { nodes, materials }: any = useGLTF("./models/cloud/model.gltf");
  const materialRef = useRef<any>();

  useFrame(() => {
    materialRef.current.opacity = sceneOpacity.current;
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={
          variant === 1 ? nodes.Mball001.geometry : nodes.Mball002.geometry
        }
        rotation-y={-Math.PI / 2}
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

useGLTF.preload("./models/cloud/model.gltf");
