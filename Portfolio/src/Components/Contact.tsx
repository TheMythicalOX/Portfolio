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

  let mainBox = `z-50 m-auto relative constellationBox flex flex-wrap bg-amber-700/15 mb-[20vh] h-fit `;
  let mainTitle = `m-auto text-center w-full text-center pt-10 text-2xl `;
  let formBox = `z-50 relative h-[80%] w-[90%] flex flex-wrap m-auto text-center `;
  let inputTitle = `my-auto `;
  let inputStyle = `cursor-none outline outline-pritext/20 `;
  let inputBox = `m-auto flex w-[100%] `;
  let buttonBox = `w-full flex m-auto pb-10 `;
  let buttonStyle = `bg-back/20 cursor-none constellationBox shadow-lg shadow-[#555]/50 active:scale-[90%] m-auto py-3 px-14 group text-xl rounded-full linkScroll hover:decoration-accent decoration-underline-none underline hover:scale-125 transition duration-200 `;

  if (height >= 850 && width >= 1375) {
    // big screen styles
    mainBox += `w-[60%]`;
    mainTitle += ``;
    formBox += `p-10`;
    inputTitle += `p-5  w-[20%]`;
    inputStyle += `text-right p-5  w-[80%]`;
    inputBox += `p-5 `;
    buttonBox += ``;
    buttonStyle += ``;
  } else if (height <= 950 || width <= 450 || width <= height) {
    // mobile styles
    mainBox += `w-[90%]`;
    mainTitle += ``;
    formBox += `p-2`;
    inputTitle += `p-1 w-[100%]`;
    inputStyle += `text-left text-sm p-1 w-[100%]`;
    inputBox += `p-1 flex-wrap`;
    buttonBox += ``;
    buttonStyle += ``;
  } else {
    // mid screen styles
    mainBox += `w-[95%]`;
    mainTitle += ``;
    formBox += `p-10`;
    inputTitle += `p-5  w-[20%]`;
    inputStyle += `text-rightp-5  w-[80%]`;
    inputBox += `p-5 `;
    buttonBox += ``;
    buttonStyle += ``;
  }

  return (
    <div id="contact" className={mainBox}>
      <ConstellationBox />
      <h1 className={mainTitle}>Get In Touch</h1>
      <form action="submit" className={formBox}>
        <div className={inputBox}>
          <h2 className={inputTitle}>Name</h2>
          <input
            className={inputStyle}
            type="text"
            placeholder="John Smith"
            title="name"
            value={useName}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className={inputBox}>
          <h2 className={inputTitle}>Email</h2>
          <input
            className={inputStyle}
            type="email"
            placeholder="example@email.com"
            title="email"
            value={useEmail}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className={inputBox}>
          <h2 className={inputTitle}>Message</h2>
          <textarea
            className={inputStyle}
            placeholder="Hello, my name is..."
            title="message"
            value={useMessage}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </div>
      </form>
      <div className={buttonBox}>
        <button onClick={handleSubmit} className={buttonStyle}>
          Send
        </button>
      </div>
    </div>
  );
};
export default Contact;
