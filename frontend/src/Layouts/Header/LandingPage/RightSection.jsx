import React from "react";
import { HeaderBG } from "../../../SVG";

const RightSection = () => {
  const bgSVG = {
    backgroundImage: `linear-gradient(to right, rgba(20, 20, 20, 1), transparent), url(${HeaderBG})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section
      className="flex flex-col flex-1 items-center justify-center bg-[#1A1A1A] pr-40"
      style={bgSVG}
    ></section>
  );
};

export default RightSection;
