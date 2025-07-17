import React from "react";

const ConstellationBox = () => {
  return (
    <div className="absolute h-full w-full">
      <div className="h-[1vh] w-[1vh] rounded-full bg-pritext/60 left-[99.5%] top-[99.33%] absolute transition-all duration-500"></div>
      <div className="h-[1vh] w-[1vh] rounded-full bg-pritext/60 right-[99.5%] top-[99.33%] absolute transition-all duration-500"></div>
      <div className="h-[1vh] w-[1vh] rounded-full bg-pritext/60 right-[99.5%] bottom-[99.33%] absolute transition-all duration-500"></div>
      <div className="h-[1vh] w-[1vh] rounded-full bg-pritext/60 left-[99.5%] bottom-[99.33%] absolute transition-all duration-500"></div>
    </div>
  );
};
export default ConstellationBox;
