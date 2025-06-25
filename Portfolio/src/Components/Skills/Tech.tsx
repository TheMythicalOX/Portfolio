import React from "react";

const Tech = () => {
  const techs = [
    { name: "React", link: `` },
    { name: "React Native", link: `` },
    { name: "TypeScript", link: `` },
    { name: "JavaScript", link: `` },
    { name: "C/C++", link: `` },
    { name: "SQL", link: `` },
    { name: "Docker", link: `` },
    { name: "PHP", link: `` },
    { name: "Python", link: `` },
    { name: "Tailwind CSS", link: `` },
    { name: "CSS", link: `` },
    { name: "HTML", link: `` },
    { name: "Android Studio", link: `` },
    { name: "GIT", link: `` },
  ];

  const list = (
    <div>
      {techs &&
        techs.map((item) => {
          return (
            <div>
              <h2>{item.name}</h2>
              <img src={item.link} alt="" />
            </div>
          );
        })}
    </div>
  );

  return (
    <div className="h-full w-full bg-cyan-700/25 flex flex-wrap z-50 justify-around">
      <h1 className="m-auto w-full">Technologies</h1>
      {list}
    </div>
  );
};
export default Tech;
