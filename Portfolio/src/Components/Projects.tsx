import React from "react";
import { motion } from "motion/react";
import ConstellationBox from "./Parts/ConstellationBox";
import { useWindowDimensions } from "./App";

const IP = import.meta.env.VITE_API_SERVER_IP;
const source = `https://${IP}/src/Assets/`;

const Projects = () => {
  const { width, height } = useWindowDimensions();

  let mainBox = ``;
  let titleStyle = ``;
  let boxBox = ``;
  let iconStyle = ``;
  let projectBox = ``;
  let projectBack = ``;
  let projectText = ``;
  let projectCard = ``;
  let projectImage = ``;

  if (height >= 850 && width >= 1375) {
    // big screen styles
    mainBox = `h-[350vh] w-full pb-14 cursor-none flex flex-wrap z-25`;
    titleStyle = `m-auto text-center w-full pb-10 text-4xl`;
    boxBox = `flex flex-wrap cursor-none w-full h-full p-2`;
    iconStyle = `w-[4vw] max-w-[80px] p-2`;
    projectBox = `h-[24%] cursor-none w-full cursor-none flex justify-around`;
    projectBack = `w-[55%] cursor-none hover:scale-[110%] transition-all duration-500`;
    projectText = `w-[30%] cursor-none flex flex-wrap justify-between m-auto `;
    projectCard = `cursor-none group h-[90%] relative constellationBox relative w-[95%] group-hover:w-[60%] flex m-auto group-hover:opacity-[0.5] opacity-[1] group-hover:h-[20%] transition-all duration-500`;
    projectImage = `object-cover opacity-[75%] group-hover:opacity-[100%] absolute w-full h-full transition-all duration-500`;
  } else if (height <= 950 || width <= 450 || width <= height) {
    // mobile styles
    mainBox = `h-[350vh] w-full pb-14 cursor-none flex flex-wrap z-25`;
    titleStyle = `m-auto text-center w-full pb-10 text-4xl`;
    boxBox = `flex flex-wrap cursor-none w-full h-full p-2`;
    iconStyle = `w-[4vw] max-w-[80px] p-2`;
    projectBox = `h-[24%] cursor-none w-full cursor-none flex justify-around`;
    projectBack = `w-[55%] cursor-none hover:scale-[110%] transition-all duration-500`;
    projectText = `w-[30%] cursor-none flex flex-wrap justify-between m-auto `;
    projectCard = `cursor-none group h-[90%] relative constellationBox relative w-[95%] group-hover:w-[60%] flex m-auto group-hover:opacity-[0.5] opacity-[1] group-hover:h-[20%] transition-all duration-500`;
    projectImage = `object-cover opacity-[75%] group-hover:opacity-[100%] absolute w-full h-full transition-all duration-500`;
  } else {
    // mid screen styles
    mainBox = `h-[500vh] w-full pb-14 cursor-none flex flex-wrap z-25`;
    titleStyle = `m-auto text-center w-full pb-10 text-4xl`;
    boxBox = `flex flex-wrap cursor-none w-full h-full p-2`;
    iconStyle = `w-[6vw] max-w-[80px] p-2`;
    projectBox = `h-[24%] cursor-none w-full cursor-none flex flex-wrap justify-around`;
    projectBack = `w-[100%] h-[75%] cursor-none hover:scale-[110%] transition-all duration-500`;
    projectText = `w-[100%] p-10 cursor-none flex flex-wrap justify-between m-auto `;
    projectCard = `cursor-none group h-[90%] relative constellationBox relative w-[95%] group-hover:w-[60%] flex m-auto group-hover:opacity-[0.5] opacity-[1] group-hover:h-[20%] transition-all duration-500`;
    projectImage = `object-cover opacity-[75%] group-hover:opacity-[100%] absolute w-full h-full transition-all duration-500`;
  }

  return (
    <div className={mainBox}>
      <h1 className={titleStyle}>Projects</h1>
      <div className={boxBox}>
        <motion.div
          initial={{ opacity: 0, x: -500, scale: 0.6 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className={projectBox}
        >
          <a href="https://www.swtc.onl" className={projectBack}>
            <div className={projectCard}>
              <ConstellationBox />
              <img
                className={projectImage}
                src={source + "swtccopy.png"}
                alt="swtccoppy"
              />
            </div>
          </a>
          <motion.div
            initial={{ opacity: 0, x: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            className={projectText}
          >
            <h2 className="text-2xl w-full m-auto text-center">SWTC Copy</h2>
            <div className="flex flex-wrap justify-between w-full m-auto">
              <img
                className={iconStyle}
                src={source + "react" + ".svg"}
                alt="react"
              />
              <img
                className={iconStyle}
                src={source + "typescript-icon" + ".svg"}
                alt="typescript-icon"
              />
              <img
                className={iconStyle}
                src={source + "mysql-icon" + ".svg"}
                alt="mysql-icon"
              />
              <img
                className={iconStyle}
                src={source + "php" + ".svg"}
                alt="php"
              />
              <img
                className={iconStyle}
                src={source + "docker-icon" + ".svg"}
                alt="docker-icon"
              />
              <img
                className={iconStyle}
                src={source + "html-5" + ".svg"}
                alt="html-5"
              />
              <img
                className={iconStyle}
                src={source + "css-3" + ".svg"}
                alt="css-3"
              />
              <img
                className={iconStyle}
                src={source + "tailwindcss-icon" + ".svg"}
                alt="tailwindcss-icon"
              />
              <img
                className={iconStyle}
                src={source + "git-icon" + ".svg"}
                alt="git-icon"
              />
            </div>
            <p className="m-auto text-right cursor-none">
              SWTC Copy is a replica of the original SWTC website, which was
              initially created using WordPress, but this version is built with
              React, TypeScript, and TailwindCSS. The design and functionality
              are nearly identical to the original, with the primary exception
              being the login system, which is designed as a password scraper.
              This website is intended solely for cybersecurity training and
              should not be used for any real-world activities. Users are
              strongly advised not to input any sensitive or personal
              information while interacting with this site.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: +500, scale: 0.6 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className={projectBox}
        >
          <motion.div
            initial={{ opacity: 0, x: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            className={projectText}
          >
            <h2 className="text-2xl w-full m-auto text-center">Bug Tracker</h2>
            <div className="flex flex-wrap justify-between w-full m-auto">
              <img
                className={iconStyle}
                src={source + "react" + ".svg"}
                alt="react"
              />
              <img
                className={iconStyle}
                src={source + "typescript-icon" + ".svg"}
                alt="typescript-icon"
              />
              <img
                className={iconStyle}
                src={source + "mysql-icon" + ".svg"}
                alt="mysql-icon"
              />
              <img
                className={iconStyle}
                src={source + "php" + ".svg"}
                alt="php"
              />
              <img
                className={iconStyle}
                src={source + "docker-icon" + ".svg"}
                alt="docker-icon"
              />
              <img
                className={iconStyle}
                src={source + "html-5" + ".svg"}
                alt="html-5"
              />
              <img
                className={iconStyle}
                src={source + "css-3" + ".svg"}
                alt="css-3"
              />
              <img
                className={iconStyle}
                src={source + "tailwindcss-icon" + ".svg"}
                alt="tailwindcss-icon"
              />
              <img
                className={iconStyle}
                src={source + "git-icon" + ".svg"}
                alt="git-icon"
              />
            </div>
            <p className="m-auto cursor-none">
              BugTracker is a web application built with React, TypeScript, PHP,
              MySQL, and TailwindCSS, designed as a comprehensive bug tracking
              and ticket management system. Users can create accounts, join or
              create projects, and efficiently track and resolve tickets. The
              platform also uses cookies to store login information, ensuring a
              seamless user experience. With its modern tech stack and intuitive
              design, BugTracker streamlines project management and enhances
              team collaboration.
            </p>
          </motion.div>
          <a href="https://bugtrack.elijahcline.dev" className={projectBack}>
            <div className={projectCard}>
              <ConstellationBox />
              <img
                className={projectImage}
                src={source + "bugtrack.png"}
                alt="bugtrack"
              />
            </div>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -500, scale: 0.6 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className={projectBox}
        >
          <a href="https://weather.elijahcline.dev" className={projectBack}>
            <div className={projectCard}>
              <ConstellationBox />
              <img
                className={projectImage}
                src={source + "weather.png"}
                alt="weather"
              />
            </div>
          </a>
          <motion.div
            initial={{ opacity: 0, x: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            className={projectText}
          >
            <h2 className="text-2xl w-full m-auto text-center">
              Weather To Go
            </h2>
            <img
              className={iconStyle}
              src={source + "react" + ".svg"}
              alt="react"
            />
            <img
              className={iconStyle}
              src={source + "javascript" + ".svg"}
              alt="javascript"
            />
            <img
              className={iconStyle}
              src={source + "css-3" + ".svg"}
              alt="css-3"
            />
            <img
              className={iconStyle}
              src={source + "html-5" + ".svg"}
              alt="html-5"
            />
            <img
              className={iconStyle}
              src={source + "git-icon" + ".svg"}
              alt="git-icon"
            />
            <p className="ml-auto cursor-none text-right">
              WeatherToGo is a web application built with React that displays
              weather information for a selected location. It uses the
              OpenWeatherMap API to fetch real-time data, which is then
              presented in a clean and user-friendly interface. Users can search
              for specific areas to view current weather conditions, making
              WeatherToGo a simple yet effective tool for staying updated on the
              weather.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: +500, scale: 0.6 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className={projectBox}
        >
          <motion.div
            initial={{ opacity: 0, x: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            className={projectText}
          >
            <h2 className="text-2xl w-full m-auto text-center">TopBlog</h2>
            <img
              className={iconStyle}
              src={source + "wordpress-icon" + ".svg"}
              alt="wordpress-icon"
            />
            <p className="m-auto cursor-none ">
              TopBlog is a self-hosted blog website built with WordPress that
              features AI-assisted content creation. While the posts are not
              generated automatically, AI tools are used to help craft and
              enhance the content before publishing. This approach allows for
              more control over the quality and tone of each post, combining
              human creativity with AI support. TopBlog showcases how AI can be
              integrated into the blogging process without fully automating it.
            </p>
          </motion.div>
          <a href="https://topblog.elijahcline.dev" className={projectBack}>
            <div className={projectCard}>
              <ConstellationBox />
              <img
                className={projectImage}
                src={source + "topblog.png"}
                alt="topblog"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  );
};
export default Projects;
