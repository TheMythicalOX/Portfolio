import React from "react";
import Tech from "./Skills/Tech";
import Cert from "./Skills/Cert";
import Frame from "./Skills/Frame";
import School from "./Skills/School";
const Skills = () => {
  return (
    <div className="h-[95vh] w-full z-50 flex flex-wrap">
      <Tech />
      <Cert />
      <Frame />
      <School />
    </div>
  );
};
export default Skills;
