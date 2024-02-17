import React from "react";

const BottomCard = (props) => {
  return (
    <button className="border-2 text-white border-[#262626] bg-[#1A1A1A] rounded-xl mt-5 mb-5">
      <div className="flex flex-col items-center justify-center">
        <img src={props.image} className="pb-5" />
        <p className="font-urbanist-semibold text-xl">{props.text}</p>
      </div>
    </button>
  );
};

export default BottomCard;
