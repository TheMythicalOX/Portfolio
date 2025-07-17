import React from "react";
const Tech = () => {
  const techs = [
    { name: "React", link: `#` },
    { name: "React Native", link: `#` },
    { name: "TypeScript", link: `#` },
    { name: "JavaScript", link: `#` },
    { name: "WordPress", link: `#` },
    { name: "C/C++", link: `#` },
    { name: "SQL", link: `#` },
    { name: "Docker", link: `#` },
    { name: "PHP", link: `#` },
    { name: "Python", link: `#` },
    { name: "Tailwind CSS", link: `#` },
    { name: "CSS", link: `#` },
    { name: "HTML", link: `#` },
    { name: "Android Studio", link: `#` },
    { name: "GIT", link: `#` },
    { name: "Linux", link: `#` },
    { name: "Windows", link: `#` },
    { name: "VMWare", link: `#` },
    { name: "VSCode", link: `#` },
    { name: "Visual Studio", link: `#` },
  ];

  const list = (
    <div className="flex flex-wrap cursor-none justify-around gap-20">
      {techs &&
        techs.map((item) => {
          return (
            <div
              key={item.name}
              className="relative constellationBox p-2 flex m-auto "
            >
              <h2 className="m-auto">{item.name}</h2>
              <img className="m-auto" src={item.link} alt="" />
              <div className="absolute m-auto -inset-2 rounded-lg bg-gradient-to-b from-back to-accent opacity-[20%] blur" />
            </div>
          );
        })}
    </div>
  );

  return (
    <div className="h-[30%] w-full flex flex-wrap z-50 justify-around">
      <h1 className="m-auto w-full text-4xl pb-10 text-center">Technologies</h1>
      {list}
    </div>
  );
};
export default Tech;
