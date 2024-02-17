import React, { forwardRef } from "react";
import PropertiesIcon from "./PropertiesIcon";
import { BedProp, BathProp, VillaProp } from "../SVG";
import Button from "./Button";

const PropertiesCard = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="flex items-center justify-center border-2 border-[#262626] bg-[#1A1A1A] rounded-xl w-[27vw]"
    >
      <div className="p-[3vh]">
        <img
          src={props.image}
          alt="image"
          className="border-2 border-[#262626] rounded-xl w-[100vh]"
        />
        <h1 className="font-urbanist-semibold text-[2.5vh] text-white pt-[3vh] pb-[1vh]">
          {props.name}
        </h1>
        <p className="font-urbanist-medium text-[2vh] text-[#999999] pb-[3vh]">
          {props.desc}
        </p>
        <div className="h-[5.5vh] flex flex-row justify-between">
          <PropertiesIcon img={BedProp} text={props.bed} />
          <PropertiesIcon img={BathProp} text={props.bath} />
          <PropertiesIcon img={VillaProp} text={props.villa} />
        </div>
        <div className="flex flex-row pt-[3vh] justify-between">
          <div>
            <h1 className="font-urbanist-medium text-[#999999] text-[2vh]">
              Price
            </h1>
            <h1 className="font-urbanist-medium text-white text-[2.5vh]">
              {props.price}
            </h1>
          </div>
          <Button text="View Property Details" color="Purple" />
        </div>
      </div>
    </div>
  );
});

export default PropertiesCard;
