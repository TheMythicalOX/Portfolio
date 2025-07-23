import React from "react";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Extras from "./Extras";
import { motion } from "motion/react";
function App() {
  return (
    <div className="relative w-[100vw] h-full">
      <div className="bg-linear-to-tr to-back/100 from-black h-[100vh] w-[100vw] z-5 absoulute top-0"></div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.1 }}
        className="blackHole h-[200vh] w-[100vw] opacity-[75%] z-5 absoulute mt-[235vh] blur"
      ></motion.div>
      <div className="test2 h-[50vh] w-[100vw] opacity-[50%] z-5 absoulute mt-[98vh] float-bottom blur"></div>
      <div className="h-fit top-0 w-[100vw] z-50 absolute overflow-x-clip text-pritext ">
        <div className=" h-fit flex w-[100vw]">
          <div className="w-[85vw] relative h-fit flex flex-wrap m-auto">
            <a
              href="/#contact"
              className="fixed cursor-none group z-[9999] left-[2vw] top-[4vh]"
            >
              <div className="bg-pri/25 z-50 text-center flex constellationBox rounded-md relative w-[95%] group-hover:scale-125 flex m-auto group-hover:opacity-[1] opacity-[0.5] transition-all duration-500">
                <h1 className="m-auto text-center px-5 z-50">Contact</h1>
              </div>
            </a>
            <Extras />
            <Header />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
