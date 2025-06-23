import React from "react";
const IP = import.meta.env.VITE_API_SERVER_IP;
const star = `http://${IP}:3000/src/Assets/star.svg`;

const Skills = () => {
  const skillBox = `bg-back h-full w-full flex flex-wrap overflow-clip group hover:h-[200%] hover:bg-sec transition-all duration-500`;
  const skillCard = `bg-sec group-hover:bg-accent h-[90%] flex flex-wrap w-[95%] m-auto mt-0 text-center group-hover:h-[20%] group-hover:w-[100%] transition-all duration-500`;
  const skillList = `flex flex-wrap w-[100%] opacity-0 group-hover:opacity-[100%] transition-all duration-500`;
  const skillListItem = `w-full `;

  return (
    <div className="h-full w-full z-50 flex">
      <div className="flex w-full h-full p-2">
        <div className={skillBox}>
          <div className={skillCard}>
            <h2 className="m-auto">Technologies</h2>
          </div>
          <div className={skillList}>
            <div className={skillListItem}>
              <img className="inline" src={star} alt="" />
              <p className="inline">Tech1</p>
            </div>
            <div className={skillListItem}>
              <img className="inline" src={star} alt="" />
              <p className="inline">Tech2</p>
            </div>
            <div className={skillListItem}>
              <img className="inline" src={star} alt="" />
              <p className="inline">Tech3</p>
            </div>
            <div className={skillListItem}>
              <img className="inline" src={star} alt="" />
              <p className="inline">Tech4</p>
            </div>
            <div className={skillListItem}>
              <img className="inline" src={star} alt="" />
              <p className="inline">Tech5</p>
            </div>
          </div>
        </div>
        <div className={skillBox}>
          <div className={skillCard}>
            <h2 className="m-auto">Framworks</h2>
          </div>
          <div className={skillList}>
            <div className={skillListItem}>
              <img className="inline" src={star} alt="" />
              <p className="inline">asdasda</p>
            </div>
          </div>
        </div>
        <div className={skillBox}>
          <div className={skillCard}>
            <h2 className="m-auto">Certifications</h2>
          </div>
          <div className={skillList}>
            <div className={skillListItem}>
              <img className="inline" src={star} alt="" />
              <p className="inline">asdasda</p>
            </div>
          </div>
        </div>
        <div className={skillBox}>
          <div className={skillCard}>
            <h2 className="m-auto">Schooling</h2>
          </div>
          <div className={skillList}>
            <div className={skillListItem}>
              <img className="inline" src={star} alt="" />
              <p className="inline">asdasda</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
