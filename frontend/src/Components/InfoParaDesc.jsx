import React from "react";
import { DomIcon, CateIcon } from "../SVG";

const InfoParaDesc = (props) => {
  return (
    <ul className="flex flex-col font-urbanist-medium">
      {props.domain === "true" ? (
        <div>
          <li className="flex flex-row gap-[0.5vh] text-[#9999] text-[1.9vh] pb-[0.75vh]">
            <img src={DomIcon} />
            Domain
          </li>
          <li className="text-[1.9vh] text-white">Commercial Real Estate</li>
        </div>
      ) : props.category === "true" ? (
        <div>
          <li className="flex flex-row gap-[0.5vh] text-[#9999] text-[1.9vh] pb-[0.75vh]">
            <img src={CateIcon} />
            Category
          </li>
          <li className="text-[1.9vh] text-white">Retail Space</li>
        </div>
      ) : (
        <div>
          <li className="text-[#9999] text-[1.9vh]">Since 2019</li>
          <li className="font-urbanist-semibold text-[3vh] text-white">
            ABC Corporation
          </li>
        </div>
      )}
    </ul>
  );
};

export default InfoParaDesc;
