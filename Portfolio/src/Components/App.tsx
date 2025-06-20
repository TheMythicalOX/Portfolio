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
      <div className="h-[195vh] reative bg-back w-[100vw] text-pritext ">
        <div className=" h-[195vh] z-50 relative absolute flex w-[100vw]">
          <div className="w-[95vw] h-full z-50 grid m-auto">
            <Extras />
            <Header />
            <Projects />
            <Skills />
            <About />
            <Contact />
            <Footer />
          </div>
        </div>
        <div className="fixed z-50">float contact</div>
      </div>
    </>
  );
}

export default App;
