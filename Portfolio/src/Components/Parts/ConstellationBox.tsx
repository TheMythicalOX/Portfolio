import React from "react";

const ConstellationBox = () => {
  return (
    <div>
      <div className="h-[1vh] w-[1vh] group-hover:h-[0.75vh] group-hover:w-[0.75vh] rounded-full bg-pritext/60 left-[99%] top-[98%] group-hover:top-[92%] absolute transition-all duration-500"></div>
      <div className="h-[1vh] w-[1vh] group-hover:h-[0.75vh] group-hover:w-[0.75vh] rounded-full bg-pritext/60 right-[99%] top-[98%] group-hover:top-[92%] absolute transition-all duration-500"></div>
      <div className="h-[1vh] w-[1vh] group-hover:h-[0.75vh] group-hover:w-[0.75vh] rounded-full bg-pritext/60 right-[99%] bottom-[98%] group-hover:bottom-[92%] absolute transition-all duration-500"></div>
      <div className="h-[1vh] w-[1vh] group-hover:h-[0.75vh] group-hover:w-[0.75vh] rounded-full bg-pritext/60 left-[99%] bottom-[98%] group-hover:bottom-[92%] absolute transition-all duration-500"></div>
    </div>
  );
};
export default ConstellationBox;
