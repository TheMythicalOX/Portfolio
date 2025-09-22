import React, { useState } from "react";
import ConstellationBox from "./Parts/ConstellationBox";
import { useWindowDimensions } from "./App";
const Contact = () => {
  const [useName, setName] = useState("");
  const [useEmail, setEmail] = useState("");
  const [useMessage, setMessage] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `https://elijahcline.dev/api?name=${useName}&email=${useEmail}&subject=${"Hello World!"}&message=${useMessage}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log("ok");
      } else {
        console.log("error");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
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
          <h2 className="inline p-5">Name</h2>
          <input
            className="cursor-none outline outline-pritext/20 p-2"
            type="text"
            placeholder="John Smith"
            title="name"
            value={useName}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="m-auto w-full p-5">
          <h2 className="inline p-5">Email</h2>
          <input
            className="cursor-none outline outline-pritext/20 p-2"
            type="email"
            placeholder="Potential Oportunity..."
            title="email"
            value={useEmail}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="m-auto w-full p-5">
          <h2 className="inline p-5">Message</h2>
          <textarea
            className="cursor-none outline outline-pritext/20 p-2"
            placeholder="Hello, my name is..."
            title="message"
            value={useMessage}
            onChange={(e) => {
              setMessage(e.target.value);
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
