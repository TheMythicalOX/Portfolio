import React from "react";
import Tech from "./Skills/Tech";
import Cert from "./Skills/Cert";
const Skills = () => {
  return (
    <div className="h-[95vh] cursor-none w-full pb-40 flex flex-wrap">
      <Tech />
      <Cert />
    </div>
  );
};
export default Skills;
