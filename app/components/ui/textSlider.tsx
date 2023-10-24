import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  useInView,
} from "framer-motion";
import { wrap } from "@motionone/utils";

type Props = {
  children: React.ReactNode;
  baseVelocity: number;
};

export default function TextSlider({ children, baseVelocity }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 5000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      className={`flex flex-nowrap overflow-hidden	m-0 whitespace-nowrap`}
      ref={ref}
    >
      <motion.div
        className={`flex flex-nowrap m-0 whitespace-nowrap gap-2`}
        style={isInView ? { x } : { display: "none" }}
      >
        <span className="flex justify-between items-center flex-nowrap gap-2">
          {children}
        </span>
        <span className="flex justify-between items-center flex-nowrap gap-2">
          {children}
        </span>
        <span className="flex justify-between items-center flex-nowrap gap-2">
          {children}
        </span>
        <span className="flex justify-between items-center flex-nowrap gap-2">
          {children}
        </span>
      </motion.div>
    </div>
  );
}
