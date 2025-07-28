import React from "react";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Extras from "./Extras";

import OnTop from "./OnTop";
function App() {
  return (
    <div className="relative w-[100vw] h-full">
      <OnTop />
      <Extras />
      <div className="test2 h-[50vh] w-[100vw] opacity-[50%] z-5 absoulute mt-[98vh] float-bottom blur"></div>
      <div className="h-fit top-0 w-[100vw] z-50 absolute overflow-x-clip text-pritext ">
        <div className=" h-fit flex w-[100vw]">
          <div className="w-[85vw] relative h-fit flex flex-wrap m-auto">
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
