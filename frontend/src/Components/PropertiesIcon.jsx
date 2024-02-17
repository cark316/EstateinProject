import React from "react";

const PropertiesIcon = (props) => {
  return (
    <div className="font-urbanist-medium 2xl:text-[1.9vh] xl:text-[1.7vh] text-white flex flex-row items-center justify-center border-2 border-[#262626] bg-[#141414] px-[2vh] py-[1vh] rounded-full whitespace-nowrap">
      <img src={props.img} alt="img" className="h-[3vh] w-[1.5vw] pr-[0.5vh]" />
      {props.text}
    </div>
  );
};

export default PropertiesIcon;
