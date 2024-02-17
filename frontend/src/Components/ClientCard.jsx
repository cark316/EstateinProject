import React from "react";
import InfoParaDesc from "./InfoParaDesc";
import Button from "./Button";

const ClientCard = (props) => {
  return (
    <div className="flex flex-col w-[42vw] gap-[4vh] p-[5vh] rounded-xl items-center bg-[#141414] border-2 border-[#262626]">
      <div className="flex justify-between gap-[26vh]">
        <InfoParaDesc />
        <Button color="darkGrey" text="Visit Website" />
      </div>
      <div className="flex flex-row gap-[34vh]">
        <InfoParaDesc domain="true" />
        <InfoParaDesc category="true" />
      </div>
      {props.card}
    </div>
  );
};

export default ClientCard;
