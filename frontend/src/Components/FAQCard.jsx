import React from "react";
import Button from "./Button";

const FAQCard = (props) => {
  return (
    <div className="w-[512px] h-[346px] p-12 flex flex-col items-left justify-center border-2 border-[#262626] bg-[#1A1A1A] rounded-xl">
      <h1 className="font-urbanist-semibold text-white text-2xl pb-8">
        {props.heading}
      </h1>
      <p className="font-urbanist-medium text-[#999999] text-lg pb-8">
        {props.desc}
      </p>
      <div className="flex-1">
        <Button color="darkGrey" text="Read More" />
      </div>
    </div>
  );
};

export default FAQCard;
