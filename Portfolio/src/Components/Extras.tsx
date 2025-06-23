import React from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

const IP = import.meta.env.VITE_API_SERVER_IP;
const star = `http://${IP}:3000/src/Assets/star.svg`;

const Extras = () => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rawY = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 0.9, 1],
    ["0vh", "-60vh", "-85vh", "-95vh", "-105vh", "-110vh"]
  );
  const y = useSpring(rawY, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });
  const rawX = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ["0vh", "55vw", "80vw", "90vw", "100vw", "110vw"]
  );
  const x = useSpring(rawX, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  return (
    <div className="z-0">
      <motion.image
        className="fixed top-[100%] right-[100%] z-1"
        style={{ x, y, rotate }}
      >
        <div className="h-[10vh] w-[10vw]"><img src={star} className="h-[10vh] w-[10vw]" alt="" /></div>
      </motion.image>
      <div className="main fixed z-1 h-[100vh] w-[100vw]"></div>
      <div className="h-[4px] w-[4px] fixed shadow-lg z-1 top-[50%] left-[50%] bg-back m-auto"></div>
      <div className="fixed z-50">float contact</div>
    </div>
  );
};
export default Extras;
