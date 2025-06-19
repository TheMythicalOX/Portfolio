import React from "react";
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div className="h-[100vh] overflow-y-scroll scrollbar-hidden">
        <div className="h-[200vh] w-full bg-red-500 flex">
          <div className="fixed">float contact</div>
          <div className="h-[95%] w-[95vw] bg-blue-400 m-auto grid">
            <Header />
            <Skills />
            <Projects />
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
