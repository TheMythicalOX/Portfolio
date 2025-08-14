import React from "react";
import ConstellationRounded from "./Parts/ConstellationRounded";
import { motion } from "motion/react";
import { useWindowDimensions } from "./App";

const IP = import.meta.env.VITE_API_SERVER_IP;
const E = `http://${IP}:3000/src/Assets/E.svg`;
const L = `http://${IP}:3000/src/Assets/L.svg`;
const I = `http://${IP}:3000/src/Assets/I.svg`;
const J = `http://${IP}:3000/src/Assets/J.svg`;
const A = `http://${IP}:3000/src/Assets/A.svg`;
const H = `http://${IP}:3000/src/Assets/H.svg`;

const Header = () => {
  const { width, height } = useWindowDimensions();

  let mainBox = `h-[100vh] w-full flex flex-wrap justify-center z-50 `;
  let titleStyle = `text-4xl w-full opacity-[50%] text-center m-auto `;
  let buttonStyle = `bg-pri/25 cursor-none constellationBox relative shadow-lg shadow-[#555]/50 active:scale-[90%] m-auto group  text-xl rounded-full linkScroll hover:scale-125 transition duration-200 `;
  let buttonBox = `flex w-full justify-between `;
  let textStyle = `transition duration-500 group-hover:decoration-accent decoration-underline-none underline `;
  let constName = `h-[15vw] max-h-[300px] m-auto nameBlur linkScroll anidelay`;

  if (height >= 850 && width >= 1375) {
    // big screen styles
    mainBox += ``;
    titleStyle += ``;
    buttonStyle += ``;
    buttonBox += `flex w-full justify-between `;
    textStyle += ``;
    constName += ``;
  } else if (height <= 950 || width <= 450 || width <= height) {
    // mobile styles
    mainBox += ``;
    titleStyle += ``;
    buttonStyle += `p-5`;
    buttonBox += `flex w-full justify-between `;
    textStyle += ``;
    constName += ``;
  } else {
    // mid screen styles
    mainBox += ``;
    titleStyle += ``;
    buttonStyle += `p-3 w-[12%] text-center`;
    buttonBox += `m-auto`;
    textStyle += ``;
    constName += ``;
  }

  return (
    <motion.div className={mainBox}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.6 }}
        transition={{ duration: 5, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0 }}
        className="flex w-[70%] m-auto justify-around "
      >
        <img src={E} alt="" className={constName + "2"} />
        <img src={L} alt="" className={constName + "3"} />
        <img src={I} alt="" className={constName + "1"} />
        <img src={J} alt="" className={constName + "4"} />
        <img src={A} alt="" className={constName + "5"} />
        <img src={H} alt="" className={constName + "6"} />
      </motion.div>
      <h1 className="text-4xl w-full opacity-[50%] text-center m-auto">
        Cline
      </h1>
      <h1 className={titleStyle}>Full Stack Developer</h1>
      <div className={buttonBox}>
        <a
          className={buttonStyle + " anidelay1"}
          href="https://github.com/TheMythicalOX"
        >
          <ConstellationRounded />
          <div className={textStyle}>GitHub</div>
        </a>
        <a className={buttonStyle + " anidelay2"} href="#">
          <ConstellationRounded />
          <div className={textStyle}>other1</div>
        </a>
        <a className={buttonStyle + " anidelay3"} href="#">
          <ConstellationRounded />
          <div className={textStyle}>other2</div>
        </a>
        <a className={buttonStyle + " anidelay4"} href="#">
          <ConstellationRounded />
          <div className={textStyle}>other3</div>
        </a>
        <a className={buttonStyle + " anidelay5"} href="#">
          <ConstellationRounded />
          <div className={textStyle}>other4</div>
        </a>
        <a className={buttonStyle + " anidelay6"} href="#">
          <ConstellationRounded />
          <div className={textStyle}>other5</div>
        </a>
      </div>
    </motion.div>
  );
};
export default Header;
