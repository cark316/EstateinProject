import React from "react";
import { Abstract } from "../../../SVG";

const ParaDesc = (props) => {
  return (
    <div>
      {props.abstract === "false" ? null : <img src={Abstract} />}
      <div>
        <div className="flex flex-row items-center gap-[1vh]">
          <img src={props.icon} />
          <h1 className="font-urbanist-semibold text-[2.5vh] text-white">
            {props.title}
          </h1>
        </div>
        <h1 className="font-urbanist-semibold text-[5vh] text-white pb-[1.5vh]">
          {props.heading}
        </h1>
      </div>
      <p className="font-urbanist-medium text-[1.85vh] text-[#9999]">
        {props.para}
      </p>
    </div>
  );
};

export default ParaDesc;
