import React from "react";

const Skills = () => {
  const skillBox = `bg-yellow-600 h-full w-full flex group hover:scale-125 transition-all duration-500`;
  const skillCard = `bg-yellow-400 h-[90%] w-[95%] m-auto group-hover:h-[20%] transition-all duration-500`;

  return (
    <div className="h-full w-full flex bg-blue-600">
      <div className="flex w-full h-full p-2">
        <div className={skillBox}>
          <div className={skillCard}>Technologies</div>
        </div>
        <div className={skillBox}>
          <div className={skillCard}>Framworks</div>
        </div>
        <div className={skillBox}>
          <div className={skillCard}>Certifications</div>
        </div>
        <div className={skillBox}>
          <div className={skillCard}>Schooling</div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
