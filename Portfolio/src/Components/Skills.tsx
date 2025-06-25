import React, { useState } from "react";
import Tech from "./Skills/Tech";
import Cert from "./Skills/Cert";
import Frame from "./Skills/Frame";
import School from "./Skills/School";
import ConstellationRounded from "./Parts/ConstellationRounded";
const Skills = () => {
  const skillButton = `constellationBox active:scale-[90%] shadow-lg shadow-[#555]/50 hover:bg-accent/25 bg-sec/25 m-auto p-5 hover:cursor-pointer 
  rounded-full text-2xl linkScroll underline decoration-pritext/0 hover:decoration-pritext/100 
  transition-all duration-200 group flex justify-center`;

  type SkillCategory = "tech" | "frame" | "cert" | "school";

  const loadSkill = (type: SkillCategory) => {
    if (type === "tech") setSkill(Tech);
    if (type === "cert") setSkill(Frame);
    if (type === "frame") setSkill(Cert);
    if (type === "school") setSkill(School);
  };

  const [useSkill, setSkill] = useState<null | React.JSX.Element>(null);

  return (
    <div className="h-[95vh] w-full z-50 flex flex-wrap">
      <div className="h-[20vh] w-full flex justify-around">
        <button
          onClick={() => {
            loadSkill("tech");
          }}
          className={skillButton + " anidelay3"}
        >
          Technologies
          <ConstellationRounded />
        </button>
        <button
          onClick={() => {
            loadSkill("frame");
          }}
          className={skillButton + " anidelay1"}
        >
          Frameworks
          <ConstellationRounded />
        </button>
        <button
          onClick={() => {
            loadSkill("cert");
          }}
          className={skillButton + " anidelay6"}
        >
          Certifications
          <ConstellationRounded />
        </button>
        <button
          onClick={() => {
            loadSkill("school");
          }}
          className={skillButton + " anidelay4"}
        >
          Schooling
          <ConstellationRounded />
        </button>
      </div>
      <div className="h-[70vh] w-full">{useSkill}</div>
    </div>
  );
};
export default Skills;
