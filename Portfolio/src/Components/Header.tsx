import React from "react";
import ConstellationRounded from "./Parts/ConstellationRounded";

const Header = () => {
  const buttonStyle = `bg-pri/25 constellationBox relative shadow-lg shadow-[#555]/50 active:scale-[90%] m-auto py-3 px-14 group text-xl rounded-full linkScroll hover:scale-125 transition duration-200`;
  const textStyle = `transition duration-500 group-hover:decoration-accent decoration-underline-none underline `;
  return (
    <div className="h-[25vh] w-full flex flex-wrap justify-center z-50">
      <h1 className="text-4xl w-full text-center m-auto">Elijah Cline</h1>
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
