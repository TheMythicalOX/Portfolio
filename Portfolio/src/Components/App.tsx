import React from "react";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Extras from "./Extras";

function App() {
  return (
    <div className="relative">
      <div className="bg-linear-to-tr to-back/100 from-black h-[100vh] w-[100vw] z-5 absoulute top-0"></div>
      <div className="bg-linear-to-bl to-back/100 from-black h-[100vh] w-[100vw] z-5 absoulute top-[100vh] blur"></div>
      <div className="h-fit top-0 w-[100vw] absolute z-50 overflow-x-clip text-pritext ">
        <div className=" h-full flex w-[100vw]">
          <div className="w-full relative h-full flex flex-wrap m-auto">
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
