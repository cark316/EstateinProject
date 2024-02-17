import React from "react";
import Button from "./Button";

const CardTopContainer = (props) => {
  return (
    <div className="flex justify-between items-center px-[132px]">
      <div>
        <h1 className="font-urbanist-semibold text-white text-5xl pb-4">
          {props.heading}
        </h1>
        <p className="font-urbanist-medium text-[#9999] text-lg">
          {props.desc}
        </p>
      </div>
      <div>
        <Button color="darkGrey" text={props.button} />
      </div>
    </div>
  );
};

export default CardTopContainer;
