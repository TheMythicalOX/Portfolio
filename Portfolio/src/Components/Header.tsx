import React from "react";

const Header = () => {
  const buttonStyle = `bg-pri m-auto py-3 px-14 text-xl rounded-full linkScroll`;
  return (
    <div className="h-full w-full grid z-50">
      <h1 className="text-4xl m-auto">Elijah Cline</h1>
      <div className="flex justify-between ">
        <a className={buttonStyle + " anidelay1"} href="#">
          GitHub
        </a>
        <a className={buttonStyle + " anidelay2"} href="#">
          other1
        </a>
        <a className={buttonStyle + " anidelay3"} href="#">
          other2
        </a>
        <a className={buttonStyle + " anidelay4"} href="#">
          other3
        </a>
        <a className={buttonStyle + " anidelay5"} href="#">
          other4
        </a>
        <a className={buttonStyle + " anidelay6"} href="#">
          other5
        </a>
      </div>
    </div>
  );
};
export default Header;
