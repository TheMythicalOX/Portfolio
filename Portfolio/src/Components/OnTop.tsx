import React, { useEffect, useState } from "react";
const OnTop = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const updateMousePosition = (e: { clientX: number; clientY: number }) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener("mousemove", updateMousePosition);
      return () => {
        window.removeEventListener("mousemove", updateMousePosition);
      };
    }, []);

  return (
    <div className="z-50">
      <a
        href="/#contact"
        className="fixed cursor-none group z-[9999] left-[2vw] top-[4vh]"
      >
        <div className="bg-pri/25 z-50 text-center flex constellationBox rounded-md relative w-[95%] group-hover:scale-125 flex m-auto group-hover:opacity-[1] opacity-[0.5] transition-all duration-500">
          <h1 className="m-auto text-center text-pritext px-5 z-50">Contact</h1>
        </div>
      </a>
      <div
        className="h-[1vh] cursor-none w-[1vh] bg-pritext/75 fixed z-[9999] rounded-full"
        style={{
          position: "fixed",
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />
      <div
        className="h-[7vh] cursor-none w-[7vh] fixed rounded-full z-[9999] cursor-circle"
        style={{
          position: "fixed",
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};
export default OnTop;
