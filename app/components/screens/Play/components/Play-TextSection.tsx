import { fadeOnBeforeCompileFlat } from "@/utils/fadeMaterial";
import { Text } from "@react-three/drei";

export const TextSection = ({ title, subtitle, ...props }: any) => {
  return (
    <group {...props}>
      {!!title && (
        <Text
          color="white"
          anchorX={"left"}
          anchorY="bottom"
          fontSize={0.52}
          maxWidth={3}
          lineHeight={1}
          font="./fonts/Montserrat-Bold.ttf"
        >
          {title}
          <meshStandardMaterial
            color={"white"}
            onBeforeCompile={fadeOnBeforeCompileFlat}
          />
        </Text>
      )}

      <Text
        anchorX={"left"}
        anchorY="top"
        fontSize={window && window.innerWidth > 720 ? 0.2 : 0.4}
        maxWidth={4.8}
        position-y={-0.2}
        font="./fonts/Montserrat-Regular.ttf"
      >
        {subtitle}
        <meshStandardMaterial
          color={"white"}
          onBeforeCompile={fadeOnBeforeCompileFlat}
        />
      </Text>
    </group>
  );
};
