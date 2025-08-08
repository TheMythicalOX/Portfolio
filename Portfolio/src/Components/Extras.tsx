import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useWindowDimensions } from "./App";
const IP = import.meta.env.VITE_API_SERVER_IP;
const star = `http://${IP}:3000/src/Assets/star.svg`;
const source = `http://${IP}:3000/src/Assets/`;

const Extras = () => {
  const { width, height } = useWindowDimensions();
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const maxScroll = height * 3;
  const progress = Math.min(scrollY / maxScroll, 1);

  const x = progress * 120 - 10;
  const y = (1 - Math.pow(progress - 1, 2)) * 110 - 10;

  if (height >= 850 && width >= 1375) {
    // big screen styles
  } else if (height <= 950 || width <= 450 || width <= height) {
    // mobile styles
  } else {
    // mid screen styles
  }

  return (
    <div className="w-full">
      <div className="h-[100vh] mt-[100vh] absolute nebulaMove blur-xs">
        <img
          className="opacity-[25%]"
          src={source + "nebula.jpg"}
          alt="nebula"
        />
      </div>
      <div className="bg-linear-to-tr to-back/100 from-black h-[100vh] w-[100vw] z-5 absoulute top-0"></div>
      <motion.div
        initial={{ scale: 0.5, opacity: 0.01 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 4, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.1 }}
        className="h-[200vh] w-[100%] relative absolute mt-[235vh] opacity-[75%] blur-[3px]"
      >
        <div className="h-[100vh] overflow-clip absolute relative">
          <div className="blackHole h-[200vh] w-[100%] z-5" />
        </div>
        <div className="h-[100vh] w-[100%] overflow-clip absolute relative">
          <motion.div
            initial={{ perspective: 75, rotateX: -75, opacity: 0 }}
            whileInView={{ perspective: 75, rotateX: -75, opacity: 1 }}
            transition={{ duration: 4, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.1 }}
            className="blackHoleRing h-[200vh] w-[100%] absolute -translate-y-[100vh] z-15"
          ></motion.div>
          <div className="blackHole h-[200vh] w-[100%] absolute -translate-y-[100vh] z-5"></div>
        </div>
      </motion.div>
      <div className="cursor-none opacity-[50%]">
        <div className="cursor-none h-[10vh] w-[10vw]">
          <img
            src={star}
            className="h-[4vh] cursor-none z-5 starSpin"
            alt=""
            style={{
              position: "fixed",
              left: `${x - 1.1}vw`,
              bottom: `${y - 2}vh`,
              transform: "translate(-50%, 50%)",
              transition: "left 0.2s, bottom 0.2s",
            }}
          />
        </div>
        <div
          className="h-[2vh] w-[2vh] cursor-none rounded-full bg-pritext opacity-[80%]"
          style={{
            position: "fixed",
            left: `${x}vw`,
            bottom: `${y}vh`,
            transform: "translate(-50%, 50%)",
            transition: "left 0.25s, bottom 0.25s",
          }}
        ></div>
        <div
          className="h-[1.5vh] w-[1.5vh] cursor-none rounded-full bg-pritext opacity-[65%]"
          style={{
            position: "fixed",
            left: `${x}vw`,
            bottom: `${y}vh`,
            transform: "translate(-50%, 50%)",
            transition: "left 0.275s, bottom 0.275s",
          }}
        ></div>
        <div
          className="h-[1vh] w-[1vh] cursor-none rounded-full bg-pritext opacity-[50%]"
          style={{
            position: "fixed",
            left: `${x}vw`,
            bottom: `${y}vh`,
            transform: "translate(-50%, 50%)",
            transition: "left 0.3s, bottom 0.3s",
          }}
        ></div>
        <div
          className="h-[0.5vh] w-[0.5vh] cursor-none rounded-full bg-pritext opacity-[50%]"
          style={{
            position: "fixed",
            left: `${x}vw`,
            bottom: `${y}vh`,
            transform: "translate(-50%, 50%)",
            transition: "left 0.325s, bottom 0.325s",
          }}
        ></div>
        <div className="main main1 cursor-none fixed z-1 h-[100vh] w-[90vw] left-[20%]"></div>
        <div className="main main2 cursor-none fixed scale-75 z-1 h-[90vh] w-[100%] right-[20%]"></div>
      </div>
    </div>
  );
};
export default Extras;
