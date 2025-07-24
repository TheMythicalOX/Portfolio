import React from "react";
import { motion } from "motion/react";
import ConstellationBox from "./Parts/ConstellationBox";

const IP = import.meta.env.VITE_API_SERVER_IP;
const source = `http://${IP}:3000/src/Assets/`;

const iconStyle = `w-[4vw] p-2`;

const projectBox = ` h-[24%] cursor-none w-full cursor-none flex justify-around`;
const projectBack = `w-[55%] cursor-none`;
const projectText = `w-[30%] cursor-none flex flex-wrap justify-between ml-0 m-auto `;
const projectCard = `bg-pri/25 cursor-none group h-[90%] constellationBox relative w-[95%] group-hover:w-[60%] flex m-auto group-hover:opacity-[0.5] opacity-[1] group-hover:h-[20%] transition-all duration-500`;

const Projects = () => {
  return (
    <div className="h-[350vh] w-full pb-14 cursor-none flex flex-wrap z-50">
      <h1 className="m-auto text-center w-full pb-10 text-4xl">Projects</h1>
      <div className="flex flex-wrap cursor-none w-full h-full p-2">
        <motion.div
          initial={{ opacity: 0, x: -500, scale: 0.6 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className={projectBox}
        >
          <a href="#" className={projectBack}>
            <div className={projectCard}>
              <ConstellationBox />
              <h2 className="m-auto cursor-none">SWTC Copy</h2>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto esse deserunt cumque hic sint pariatur, eaque
              voluptatum libero qui eum dignissimos reprehenderit. Rerum iusto
              fuga id, magni rem temporibus cupiditate quam, nihil dolorem
              aliquam obcaecati corrupti esse. Repellendus optio, ut a
              consectetur perspiciatis recusandae quaerat ad dolorum officiis
              pariatur blanditiis?
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
            <h2 className="text-2xl w-full text-center">Bug Tracker</h2>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto esse deserunt cumque hic sint pariatur, eaque
              voluptatum libero qui eum dignissimos reprehenderit. Rerum iusto
              fuga id, magni rem temporibus cupiditate quam, nihil dolorem
              aliquam obcaecati corrupti esse. Repellendus optio, ut a
              consectetur perspiciatis recusandae quaerat ad dolorum officiis
              pariatur blanditiis?
            </p>
          </motion.div>
          <a href="#" className={projectBack}>
            <div className={projectCard}>
              <ConstellationBox />
              <h2 className="m-auto cursor-none">Bug Tracker</h2>
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
          <a href="#" className={projectBack}>
            <div className={projectCard}>
              <ConstellationBox />
              <h2 className="m-auto cursor-none">Weather To Go</h2>
            </div>
          </a>
          <motion.div
            initial={{ opacity: 0, x: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            className={projectText}
          >
            <p className="m-auto cursor-none">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto esse deserunt cumque hic sint pariatur, eaque
              voluptatum libero qui eum dignissimos reprehenderit. Rerum iusto
              fuga id, magni rem temporibus cupiditate quam, nihil dolorem
              aliquam obcaecati corrupti esse. Repellendus optio, ut a
              consectetur perspiciatis recusandae quaerat ad dolorum officiis
              pariatur blanditiis?
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
            <p className="m-auto cursor-none">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto esse deserunt cumque hic sint pariatur, eaque
              voluptatum libero qui eum dignissimos reprehenderit. Rerum iusto
              fuga id, magni rem temporibus cupiditate quam, nihil dolorem
              aliquam obcaecati corrupti esse. Repellendus optio, ut a
              consectetur perspiciatis recusandae quaerat ad dolorum officiis
              pariatur blanditiis?
            </p>
          </motion.div>
          <a href="#" className={projectBack}>
            <div className={projectCard}>
              <ConstellationBox />
              <h2 className="m-auto cursor-none">TopBlog</h2>
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  );
};
export default Projects;
