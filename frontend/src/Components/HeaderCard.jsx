import React from "react";

// from-2% bg-gradient-to-br from-[#703BF7] to-[#141414] bg-gradient-opac to-10%

const HeaderCard = (props) => {
  return (
    <div
      className={
        props.heading && props.desc !== undefined && props.corner === "true"
          ? "flex-grow flex flex-row py-4 px-5 bg-[#141414] border-2 border-[#262626] rounded-tr-2xl rounded-br-2xl rounded-bl-2xl"
          : props.corner !== "true" && props.heading && props.desc !== undefined
          ? "flex flex-row py-4 px-5 bg-[#141414] border-2 border-[#262626] rounded-2xl"
          : "flex flex-row py-4 px-5 bg-[#1A1A1A] border-2 border-[#262626] rounded-2xl"
      }
    >
      <ul>
        <li className="font-urbanist-bold text-4xl text-white pb-1">
          {props.number}
        </li>
        {props.heading &&
        props.desc !== undefined &&
        props.client !== "true" ? (
          <div className="flex flex-col p-[3vh] gap-[1vh]">
            <li className="font-urbanist-semibold text-2xl text-white pb-1">
              {props.heading}
            </li>
            <li className="font-urbanist-medium text-lg text-[#9999]">
              {props.desc}
            </li>
          </div>
        ) : props.heading &&
          props.desc !== undefined &&
          props.client === "true" ? (
          <div className="flex flex-col p-[3vh] gap-[1vh]">
            <li className="font-urbanist-medium text-[1.9vh] text-[#9999] pb-1">
              {props.heading}
            </li>
            <li className="font-urbanist-medium text-[1.9vh] text-white">
              {props.desc}
            </li>
          </div>
        ) : null}
        <li className="font-urbanist-medium text-xl text-[#999999]">
          {props.text}
        </li>
      </ul>
    </div>
  );
};

export default HeaderCard;
