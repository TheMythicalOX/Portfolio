import React from "react";
import Tech from "./Skills/Tech";
import Cert from "./Skills/Cert";
import { useWindowDimensions } from "./App";
const Skills = () => {
  const { width, height } = useWindowDimensions();

  let mainbox = `cursor-none w-full pb-40 flex flex-wrap`;

  if (height >= 850 && width >= 1375) {
    // big screen styles
    mainbox = ``;
  } else if (height <= 950 || width <= 450 || width <= height) {
    // mobile styles
    mainbox = ``;
  } else {
    // mid screen styles
    mainbox = ``;
  }

  return (
    <div className={mainbox}>
      <Tech />
      <Cert />
    </div>
  );
};
export default Skills;
