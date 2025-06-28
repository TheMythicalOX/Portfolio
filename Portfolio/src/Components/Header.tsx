import React from "react";
import ConstellationRounded from "./Parts/ConstellationRounded";

const IP = import.meta.env.VITE_API_SERVER_IP;
const E = `http://${IP}:3000/src/Assets/E.svg`;
const L = `http://${IP}:3000/src/Assets/L.svg`;
const I = `http://${IP}:3000/src/Assets/I.svg`;
const J = `http://${IP}:3000/src/Assets/J.svg`;
const A = `http://${IP}:3000/src/Assets/A.svg`;
const H = `http://${IP}:3000/src/Assets/H.svg`;

const Header = () => {
  const buttonStyle = `bg-pri/25 constellationBox relative shadow-lg shadow-[#555]/50 active:scale-[90%] m-auto py-3 px-14 group text-xl rounded-full linkScroll hover:scale-125 transition duration-200`;
  const textStyle = `transition duration-500 group-hover:decoration-accent decoration-underline-none underline `;
  return (
    <div className="h-[100vh] w-full flex flex-wrap justify-center z-50">
      <div className="flex w-full justify-around opacity-[75%]">
        <img src={E} alt="" />
        <img src={L} alt="" />
        <img src={I} alt="" />
        <img src={J} className="pl-6" alt="" />
        <img src={A} alt="" />
        <img src={H} alt="" />
      </div>
      <h1 className="text-4xl w-full text-center m-auto">Cline</h1>
      <div className="flex w-full justify-between ">
        <a className={buttonStyle + " anidelay1"} href="#">
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
    </div>
  );
};
export default Header;
