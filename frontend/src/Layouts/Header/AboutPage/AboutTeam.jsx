import React from "react";
import ParaDesc from "./ParaDesc";
import MemberCard from "../../../Components/MemberCard";

const AboutTeam = () => {
  return (
    <div className="flex flex-col p-[17.5vh] gap-[8.35vh]">
      <ParaDesc
        heading="Our Journey"
        para="
              Our story is one of continuous growth and evolution. We started as a
              small team with big dreams, determined to create a real estate platform
              that transcended the ordinary. Over the years, we've expanded our reach,
              forged valuable partnerships, and gained the trust of countless clients."
      />
      <div className="flex flex-row gap-[3.5vh]">
        <MemberCard />
        <MemberCard />
        <MemberCard />
        <MemberCard />
      </div>
    </div>
  );
};

export default AboutTeam;
