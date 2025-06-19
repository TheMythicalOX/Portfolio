import React from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

const Extras = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "110vw"]);
  const rawY = useTransform(
    scrollYProgress,
    [0, 0.3, 1],
    ["0vh", "-55vh", "-110vh"]
  );
  const y = useSpring(rawY, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });
  return (
    <div>
      <motion.div
        className="h-20 w-20 bg-accent rounded-full fixed top-[100%] right-[100%] z-2"
        style={{ x, y }}
      />
      <div className="main fixed z-0 h-[100vh] w-[100vw]"></div>
      <div className="h-[4px] w-[4px] shadow-lg fixed z-1 top-[50%] left-[50%] bg-back m-auto"></div>
    </div>
  );
};
export default Extras;
