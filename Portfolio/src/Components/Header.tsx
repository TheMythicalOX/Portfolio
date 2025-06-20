import React from "react";

const Header = () => {
  const buttonStyle = `bg-pri m-auto py-3 px-14 group text-xl rounded-full linkScroll hover:scale-125 transition duration-500`;
  const textStyle = `transition duration-500 group-hover:decoration-accent decoration-underline-none underline  `;
  return (
    <div className="h-full w-full grid z-50">
      <h1 className="text-4xl m-auto">Elijah Cline</h1>
      <div className="flex justify-between ">
          <a className={buttonStyle + " anidelay1"} href="#">
            <div className={textStyle}>GitHub</div>
          </a>
          <a className={buttonStyle + " anidelay2"} href="#">
            <div className={textStyle}>other1</div>
          </a>
          <a className={buttonStyle + " anidelay3"} href="#">
            <div className={textStyle}>other2</div>
          </a>
          <a className={buttonStyle + " anidelay4"} href="#">
            <div className={textStyle}>other3</div>
          </a>
          <a className={buttonStyle + " anidelay5"} href="#">
            <div className={textStyle}>other4</div>
          </a>
          <a className={buttonStyle + " anidelay6"} href="#">
            <div className={textStyle}>other5</div>
          </a>
      </div>
    </div>
  );
};
export default Header;
