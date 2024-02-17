import React from "react";
import { Facebook, LinkedIn, Twitter, Youtube } from "../../SVG";

const FooterBottom = () => {
  const dataArray = [
    { icon: Facebook },
    { icon: LinkedIn },
    { icon: Twitter },
    { icon: Youtube },
  ];

  return (
    <div className="flex items-center justify-between h-[10.85vh] bg-[#1A1A1A] px-[17vh] border-2 border-[#262626]">
      <ul className="font-urbanist-medium text-white text-[1.85vh] gap-[4vh] flex flex-row">
        <li>@2023 Estatein All Rights Reserved</li>
        <li>Terms & Conditions</li>
      </ul>
      <ul className="flex flex-row gap-[1vh]">
        {dataArray.map((item, index) => (
          <li
            className="flex items-center justify-center rounded-full bg-[#141414] h-[5.5vh] w-[5.5vh]"
            key={index}
          >
            <img src={item.icon} alt="icon" className="h-[2.5vh]" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterBottom;
