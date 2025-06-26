import React from "react";
import { motion } from "motion/react";
import ConstellationBox from "./Parts/ConstellationBox";

const projectBox = ` h-[85vh] w-full flex justify-around`;
const projectBack = `w-[55%]`;
const projectText = `w-[30%] flex ml-0 text-center m-auto `;
const projectCard = `bg-pri/25 group h-[90%] constellationBox relative w-[95%] group-hover:w-[60%] flex m-auto group-hover:opacity-[0.5] opacity-[1] group-hover:h-[20%] transition-all duration-500`;

const Projects = () => {
  return (
    <div className="h-[30vh] w-full flex z-50">
      <div className="flex flex-wrap w-full h-full p-2">
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
              <h2 className="m-auto">Bug Tracker</h2>
            </div>
          </a>
          <motion.div
            initial={{ opacity: 0, x: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            className={projectText}
          >
            <p className="m-auto">
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
          initial={{ opacity: 0, x: 500, scale: 0.6 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className={projectBox}
        >
          <a href="#" className={projectBack + " ml-auto"}>
            <div className={projectCard}>
              <ConstellationBox />
              <h2 className="m-auto">SWTC Copy</h2>
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
              <h2 className="m-auto">Weather To Go</h2>
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  );
};
export default Projects;
