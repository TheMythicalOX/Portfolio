import React from "react";
import Tech from "./Skills/Tech";
import Cert from "./Skills/Cert";
import { useWindowDimensions } from "./App";
const Skills = () => {
  const { width, height } = useWindowDimensions();

  if (height >= 850 && width >= 1375) {
    // big screen styles
  } else if (height <= 950 || width <= 450 || width <= height) {
    // mobile styles
  } else {
    // mid screen styles
  }

  return (
    <div className="h-[120vh] cursor-none w-full pb-40 flex flex-wrap">
      <Tech />
      <Cert />
    </div>
  );
};
export default Skills;
