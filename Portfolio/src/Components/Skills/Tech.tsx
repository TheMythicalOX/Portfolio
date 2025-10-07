import React from "react";
import { useWindowDimensions } from "../App";
const Tech = () => {
  const { width, height } = useWindowDimensions();

  let mainBox = ``;
  let titleStyle = ``;
  let itemsBox = ``;
  let iconStyle = `m-auto `;

  if (height >= 850 && width >= 1375) {
    // big screen styles
    mainBox = `w-full flex flex-wrap z-50 justify-around`;
    titleStyle = `m-auto w-full text-4xl pb-10 text-center`;
    itemsBox = `flex flex-wrap cursor-none justify-around gap-20`;
    iconStyle += `w-[1.25vw] max-w-[80px]`;
  } else if (height <= 950 || width <= 450 || width <= height) {
    // mobile styles
    mainBox = ` w-full flex flex-wrap z-50 justify-around`;
    titleStyle = `m-auto w-full text-2xl pb-10 text-center`;
    itemsBox = `flex flex-wrap cursor-none gap-2`;
    iconStyle += `w-[6.5vw]`;
  } else {
    // mid screen styles
    mainBox = `w-full flex flex-wrap z-50 justify-around`;
    titleStyle = `m-auto w-full text-4xl pb-20 text-center`;
    itemsBox = `flex flex-wrap cursor-none justify-around gap-20`;
    iconStyle += `w-[1.25vw] max-w-[80px]`;
  }

  const IP = import.meta.env.VITE_API_SERVER_IP;
  const source = `https://${IP}/src/Assets/`;
  const techs = [
    { name: "React", link: `react.svg` },
    { name: "TypeScript", link: `typescript-icon.svg` },
    { name: "JavaScript", link: `javascript.svg` },
    { name: "WordPress", link: `wordpress-icon.svg` },
    { name: "C/C++", link: `c-plusplus.svg` },
    { name: "SQL", link: `mysql-icon.svg` },
    { name: "Docker", link: `docker-icon.svg` },
    { name: "PHP", link: `php.svg` },
    { name: "Python", link: `python.svg` },
    { name: "Tailwind CSS", link: `tailwindcss-icon.svg` },
    { name: "CSS", link: `css-3.svg` },
    { name: "HTML", link: `html-5.svg` },
    { name: "Android Studio", link: `android-icon.svg` },
    { name: "GIT", link: `git-icon.svg` },
    { name: "Linux", link: `linux-tux.svg` },
    { name: "Windows", link: `microsoft-windows-icon.svg` },
    { name: "VMWare", link: `vmware.svg` },
    { name: "Proxmox", link: `proxmox.svg` },
    { name: "VSCode", link: `visual-studio-code.svg` },
    { name: "Visual Studio", link: `visual-studio.svg` },
  ];

  const list = (
    <div className={itemsBox}>
      {techs &&
        techs.map((item) => {
          return (
            <div
              key={item.name}
              className="relative constellationBox p-2 flex justify-around m-auto "
            >
              <h2 className="m-auto pr-2">{item.name}</h2>
              <img className={iconStyle} src={source + item.link} alt="" />
              <div className="absolute m-auto -inset-2 rounded-lg bg-gradient-to-b from-back to-accent opacity-[20%] blur" />
            </div>
          );
        })}
    </div>
  );

  return (
    <div className={mainBox}>
      <h1 className={titleStyle}>Technologies</h1>
      {list}
    </div>
  );
};
export default Tech;
