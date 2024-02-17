import React from "react";
import { PurpBird, PurpSend } from "../SVG";

const MemberCard = () => {
  return (
    <div className="relative flex flex-col flex-grow items-center justify-center h-[53.5vh] p-[3vh] bg-[#141414] border-2 border-[#262626] rounded-xl">
      <div className="flex items-center justify-center h-[26.5vh] w-[15vw] bg-[#1A1A1A] rounded-2xl mb-[5vh]"></div>
      <ul className="flex flex-col justify-center items-center font-urbanist-semibold text-white mb-[2.5vh]">
        <li className="text-[3vh]">Max Mitchell</li>
        <li className="font-urbanist-medium text-[#9999]">Founder</li>
      </ul>
      <div className="relative">
        <input
          type="text"
          placeholder="Say Hello"
          className="flex pl-[2vh] bg-[#1A1A1A] border-2 border-[#262626] h-[7vh] w-[15vw] rounded-full font-urbanist-medium text-white"
        />
        <button className="absolute inset-y-0 left-[23.5vh]">
          <img src={PurpSend} />
        </button>
      </div>
      <button className="mt-[4vh] absolute">
        <img src={PurpBird} />
      </button>
    </div>
  );
};

export default MemberCard;
