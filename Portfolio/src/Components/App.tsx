import React from "react";
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Footer from "./Footer";
import Extras from "./Extras";

function App() {
  return (
    <>
      <div className="h-full reative bg-linear-to-b to-backlight/50 from-back w-[100vw] text-pritext ">
        <div className=" h-full z-50 relative absolute flex w-[100vw]">
          <div className="w-[95vw] h-full z-50 flex flex-wrap m-auto">
            <Extras />
            <Header />
            <Projects />
            <Skills />
            <About />
            <Contact />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
