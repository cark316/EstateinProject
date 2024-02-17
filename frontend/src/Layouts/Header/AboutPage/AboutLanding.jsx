import React from "react";
import { HeaderCard, AboutImage } from "../../../Components";
import { HeaderBG } from "../../../SVG";
import ParaDesc from "./ParaDesc";

const AboutLandingSec = () => {
  const bgSVG = {
    backgroundImage: `linear-gradient(to right, rgba(20, 20, 20, 1), transparent), linear-gradient(to left, rgba(20, 20, 20, 1), transparent), url(${HeaderBG})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section className="flex flex-row p-[17.5vh] gap-[8.35vh]">
      <div className="flex-1">
        <ParaDesc
          heading="Our Journey"
          para="
              Our story is one of continuous growth and evolution. We started as a
              small team with big dreams, determined to create a real estate platform
              that transcended the ordinary. Over the years, we've expanded our reach,
              forged valuable partnerships, and gained the trust of countless clients."
        />
        <div className="flex flex-row gap-[2vh] pt-[8.35vh]">
          <HeaderCard number="200+" text="Happy customers" />
          <HeaderCard number="10K+" text="Properties For Clients" />
          <HeaderCard number="16+" text="Years Of Experience" />
        </div>
      </div>
      <div
        className="flex border-2 border-[#1A1A1A] bg-[#141414] rounded-xl h-[57vh] w-[40vw] overflow-hidden"
        style={bgSVG}
      >
        <img src={AboutImage} />
      </div>
    </section>
  );
};

export default AboutLandingSec;
