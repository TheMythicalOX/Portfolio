import React from "react";
import { useWindowDimensions } from "../App";

const certCard = `w-[20vw] m-auto relative flex  flex-wrap constellationBox `;
const certName = `w-full m-auto text-center`;
const certImg = `m-auto`;
const certDate = `w-full m-auto text-center`;
const certDesc = `w-full m-auto text-center`;
const certBlur = `absolute m-auto -inset-2 rounded-lg bg-gradient-to-b from-black to-sec opacity-[20%] blur`;

const Cert = () => {
  const { width, height } = useWindowDimensions();

  let mainBox = ``;

  if (height >= 850 && width >= 1375) {
    // big screen styles
    mainBox = `h-[40%] pt-20 w-full cursor-none flex flex-wrap z-50`;
  } else if (height <= 950 || width <= 450 || width <= height) {
    // mobile styles
    mainBox = `h-[40%] pt-20 w-full cursor-none flex flex-wrap z-50`;
  } else {
    // mid screen styles
    mainBox = `h-[40%] pt-40 w-full cursor-none flex flex-wrap z-50`;
  }

  return (
    <div className={mainBox}>
      <h1 className="m-auto w-full my-10 text-4xl text-center">
        Certifications
      </h1>
      <div className={certCard}>
        <h2 className={certName}>CCST</h2>
        <img className={certImg} src="#" alt="" />
        <h3 className={certDate}>2025</h3>
        <p className={certDesc}>
          The CCST (Certified Cybersecurity Technician) certification validates
          foundational knowledge in cybersecurity, covering areas like network
          security, risk management, and threat analysis. It’s ideal for those
          seeking to demonstrate proficiency in securing systems and pursuing a
          career in cybersecurity.
        </p>
        <div className={certBlur} />
      </div>
      <div className={certCard}>
        <h2 className={certName}>FTTH Fiber Optic</h2>
        <img className={certImg} src="#" alt="" />
        <h3 className={certDate}>2024</h3>
        <p className={certDesc}>
          The FTTH (Fiber to the Home) Fiber Optic certification validates
          expertise in installing and maintaining fiber optic networks for
          residential and business connections. It demonstrates proficiency in
          FTTH technologies, including installation, splicing, and
          troubleshooting fiber optic systems.
        </p>
        <div className={certBlur} />
      </div>
      <div className={certCard}>
        <h2 className={certName}>Linux</h2>
        <img className={certImg} src="#" alt="" />
        <h3 className={certDate}>2025</h3>
        <p className={certDesc}>
          The Linux certification validates proficiency in managing and
          administering Linux-based systems. It demonstrates skills in areas
          such as system installation, configuration, and troubleshooting,
          making it ideal for those pursuing careers in IT and system
          administration.
        </p>
        <div className={certBlur} />
      </div>
      <div className={certCard}>
        <h2 className={certName}>CS50</h2>
        <img className={certImg} src="#" alt="" />
        <h3 className={certDate}>2023</h3>
        <p className={certDesc}>
          CS50X is an introductory computer science course offered by Harvard,
          covering foundational topics like algorithms, data structures, and
          programming. It provides a strong understanding of computer science
          principles, making it a great starting point for anyone interested in
          tech and software development.
        </p>
        <div className={certBlur} />
      </div>
    </div>
  );
};
export default Cert;
