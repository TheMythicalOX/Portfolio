import React from "react";

const projectBox = `bg-back h-full w-full flex group hover:scale-125 transition-all duration-500`;
const projectCard = `bg-pri h-[90%] w-[95%] group-hover:w-[60%] flex m-auto group-hover:opacity-[0.5] opacity-[1] group-hover:h-[20%] transition-all duration-500`;

const Projects = () => {
  return (
    <div className="h-full w-full flex z-50">
      <div className="flex w-full h-full p-2">
        <a href="#" className={projectBox}>
          <div className={projectCard}>
            <h2 className="m-auto">Bug Tracker</h2>
          </div>
        </a>
        <a href="#" className={projectBox}>
          <div className={projectCard}>
            <h2 className="m-auto">SWTC Copy</h2>
          </div>
        </a>
        <a href="#" className={projectBox}>
          <div className={projectCard}>
            <h2 className="m-auto">Weather To Go</h2>
          </div>
        </a>
      </div>
    </div>
  );
};
export default Projects;
