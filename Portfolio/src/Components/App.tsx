import React, { useEffect, useState } from "react";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";
import Header from "./Header";
import Extras from "./Extras";
import OnTop from "./OnTop";

// 850 h 1375 w

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array ensures the effect runs only once on mount and cleans up on unmount

  return windowDimensions;
}

function App() {
  const { width, height } = useWindowDimensions();

  let portBox = `relative h-full `;
  let mainBox = `h-fit text-pritext absolute top-0 z-50 `;
  let secBox = `h-fit flex justify-center `;
  let triBox = `w-[85%] relative h-fit flex flex-wrap m-auto `;

  if (height >= 850 && width >= 1375) {
    // big screen styles
    portBox += `max-w-[1920px] m-auto`;
    mainBox += `max-w-[1920px] overflow-x-clip`;
    secBox += `max-w-[1920px]`;
    triBox += ``;
  } else if ((height <= 950 && width <= 450) || width <= height) {
    // mobile styles
    portBox += `w-full`;
    mainBox += ``;
    secBox += ``;
    triBox += `overflow-clip`;
  } else {
    // mid screen styles
    portBox += `w-full`;
    mainBox += ``;
    secBox += `max-w-[1920px]`;
    triBox += `overflow-clip`;
  }

  return (
    <div className={portBox}>
      <OnTop />
      <Extras />
      <div className={mainBox}>
        <div className={secBox}>
          <div className={triBox}>
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
