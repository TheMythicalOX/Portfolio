import React, { useState } from "react";
import ConstellationBox from "./Parts/ConstellationBox";
import { useWindowDimensions } from "./App";

const Contact = () => {
  const [useEmail, setEmail] = useState("");
  const [useSubject, setSubject] = useState("");
  const [useText, setText] = useState("");

  const handleSubmit = () => {
    setEmail("");
    setSubject("");
    setText("");
  };

  const { width, height } = useWindowDimensions();

  let mainBox = ``;

  if (height >= 850 && width >= 1375) {
    // big screen styles
    mainBox = `w-[60%] z-50 m-auto relative constellationBox flex flex-wrap bg-amber-700/15 mb-[20vh] h-fit`;
  } else if (height <= 950 || width <= 450 || width <= height) {
    // mobile styles
    mainBox = `w-[60%] z-50 m-auto relative constellationBox flex flex-wrap bg-amber-700/15 mb-[20vh] h-fit`;
  } else {
    // mid screen styles
    mainBox = `w-[95%] z-50 m-auto relative constellationBox flex flex-wrap bg-amber-700/15 mb-[20vh] h-fit`;
  }

  return (
    <div id="contact" className={mainBox}>
      <ConstellationBox />
      <h1 className="m-auto text-center w-full text-center pt-10 text-2xl">
        Get In Touch
      </h1>
      <form
        action="submit"
        className="z-50 relative h-[80%] w-[80%] p-10 flex flex-wrap m-auto text-center"
      >
        <div className="m-auto w-full p-5">
          <h2 className="inline p-5">Email</h2>
          <input
            className="cursor-none outline outline-pritext/20 p-2"
            type="email"
            placeholder="email@example.com"
            title="Email"
            value={useEmail}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="m-auto w-full p-5">
          <h2 className="inline p-5">Subject</h2>
          <input
            className="cursor-none outline outline-pritext/20 p-2"
            type="text"
            placeholder="Potential Oportunity..."
            title="Subject"
            value={useSubject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />
        </div>
        <div className="m-auto w-full p-5">
          <h2 className="inline p-5">Body Text</h2>
          <input
            className="cursor-none outline outline-pritext/20 p-2"
            type="text"
            placeholder="Hello, my name is..."
            title="Text"
            value={useText}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
      </form>
      <div className="w-full flex m-auto pb-10">
        <button
          onClick={handleSubmit}
          className="bg-back/20 cursor-none constellationBox shadow-lg shadow-[#555]/50 active:scale-[90%] m-auto py-3 px-14 group text-xl rounded-full linkScroll hover:decoration-accent decoration-underline-none underline hover:scale-125 transition duration-200"
        >
          Send
        </button>
      </div>
    </div>
  );
};
export default Contact;
