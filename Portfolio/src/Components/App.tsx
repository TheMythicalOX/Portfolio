import React from "react";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Extras from "./Extras";

function App() {
  return (
    <>
      <div className="h-fit w-[100vw] overflow-x-clip text-pritext ">
        <div className=" h-full flex w-[100vw]">
          <div className="w-[95vw] relative h-full flex flex-wrap m-auto">
            <Extras />
            <Header />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
