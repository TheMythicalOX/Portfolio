import React from "react";
import ConstellationBox from "./Parts/ConstellationBox";

const Contact = () => {
  return (
    <div className="w-[60%] m-auto relative constellationBox flex flex-wrap bg-amber-700/15 mb-[20vh] h-fit">
      <ConstellationBox />
      <h1 className="m-auto text-center w-full text-center pt-10 text-2xl">
        Get In Touch
      </h1>
      <form
        action="submit"
        className="cursor-none h-[80%] w-[80%] p-10 flex flex-wrap m-auto text-center"
      >
        <div className="m-auto w-full p-5">
          <h2 className="inline p-5">Email</h2>
          <input
            className="cursor-none outline outline-pritext/20 p-2"
            type="text"
            placeholder="email@example.com"
            title="Email"
          />
        </div>
        <div className="m-auto w-full p-5">
          <h2 className="inline p-5">Subject</h2>
          <input
            className="cursor-none outline outline-pritext/20 p-2"
            type="text"
            placeholder="Potential Oportunity..."
            title="Subject"
          />
        </div>
        <div className="m-auto w-full p-5">
          <h2 className="inline p-5">Body Text</h2>
          <input
            className="cursor-none outline outline-pritext/20 p-2"
            type="text"
            placeholder="Hello, my name is..."
            title="Text"
          />
        </div>
      </form>
      <div className="w-full flex m-auto pb-10">
        <button className="bg-back/20 cursor-none constellationBox relative shadow-lg shadow-[#555]/50 active:scale-[90%] m-auto py-3 px-14 group text-xl rounded-full linkScroll hover:decoration-accent decoration-underline-none underline hover:scale-125 transition duration-200">
          Send
        </button>
      </div>
    </div>
  );
};
export default Contact;
