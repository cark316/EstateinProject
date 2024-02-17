import React from "react";
import classNames from "classnames";

const Button = (props) => {
  const buttonClass = classNames(
    "flex items-center justify-center border-[2px] text-white text-[2vh] font-urbanist-medium",
    {
      "bg-[#141414] border-[#262626] rounded-xl pt-3 pb-3 pl-6 pr-6 whitespace-nowrap":
        props.color === "darkGrey",
      "bg-[#1A1A1A] border-[#262626] rounded-xl pt-3 pb-3 pl-6 pr-6 whitespace-nowrap":
        props.color === "lightGrey",
      "bg-[#703BF7] border-[#703BF7] rounded-xl pt-3 pb-3 pl-6 pr-6 whitespace-nowrap":
        props.color === "Purple",
      "bg-[#1A1A1A] border-[#262626] rounded-full p-4 whitespace-nowrap":
        props.color === "roundedGrey",
      "bg-[#1A1A1A] border-[#262626] rounded-full p-4 rotate-180 whitespace-nowrap":
        props.color === "roundedGreyInvert",
    }
  );

  return (
    <button className={buttonClass} onClick={props.onClick}>
      {props.text !== undefined ? (
        props.text
      ) : (
        <img src={props.arrow} alt="SVG" height="20" width="20" />
      )}
    </button>
  );
};

export default Button;
