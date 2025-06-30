import React, { useEffect, useState } from "react";
const IP = import.meta.env.VITE_API_SERVER_IP;
const star = `http://${IP}:3000/src/Assets/star.svg`;

const Extras = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const updateMousePosition = (e: { clientX: number; clientY: number }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const maxScroll = window.innerHeight; // you can adjust this range
  const progress = Math.min(scrollY / maxScroll, 1); // 0 to 1

  const x = progress * 120 - 10; // percent of screen width
  const y = (1 - Math.pow(progress - 1, 2)) * 110 - 10; // parabolic arch

  return (
    <div className="z-50 fixed w-full">
      <div className="opacity-[50%]">
        <div className="h-[10vh] w-[10vw]">
          <img
            src={star}
            className="h-[4vh] z-5 starSpin"
            alt=""
            style={{
              position: "fixed",
              left: `${x - 1.1}vw`,
              bottom: `${y - 2}vh`,
              transform: "translate(-50%, 50%)",
              transition: "left 0.2s, bottom 0.2s",
            }}
          />
        </div>
        <div
          className="h-[2vh] w-[2vh] rounded-full bg-pritext opacity-[80%]"
          style={{
            position: "fixed",
            left: `${x}vw`,
            bottom: `${y}vh`,
            transform: "translate(-50%, 50%)",
            transition: "left 0.25s, bottom 0.25s",
          }}
        ></div>
        <div
          className="h-[1.5vh] w-[1.5vh] rounded-full bg-pritext opacity-[65%]"
          style={{
            position: "fixed",
            left: `${x}vw`,
            bottom: `${y}vh`,
            transform: "translate(-50%, 50%)",
            transition: "left 0.275s, bottom 0.275s",
          }}
        ></div>
        <div
          className="h-[1vh] w-[1vh] rounded-full bg-pritext opacity-[50%]"
          style={{
            position: "fixed",
            left: `${x}vw`,
            bottom: `${y}vh`,
            transform: "translate(-50%, 50%)",
            transition: "left 0.3s, bottom 0.3s",
          }}
        ></div>
        <div
          className="h-[0.5vh] w-[0.5vh] rounded-full bg-pritext opacity-[50%]"
          style={{
            position: "fixed",
            left: `${x}vw`,
            bottom: `${y}vh`,
            transform: "translate(-50%, 50%)",
            transition: "left 0.325s, bottom 0.325s",
          }}
        ></div>
        <div className="main main1 fixed z-1 h-[100vh] w-[90vw] left-[20%]"></div>
        <div className="main main2 fixed scale-75 z-1 h-[90vh] w-[100vw] right-[20%]"></div>
      </div>

      <div className="fixed z-50">float contact</div>
      <div
        className="h-[1vh] w-[1vh] bg-pritext/75 fixed rounded-full"
        style={{
          position: "fixed",
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />
      <div
        className="h-[7vh] w-[7vh] fixed rounded-full cursor-circle"
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
export default Extras;
