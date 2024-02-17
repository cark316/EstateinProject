import React from "react";
import ParaDesc from "./ParaDesc";
import { HeaderCard } from "../../../Components";

const AboutAchievements = () => {
  return (
    <section className="flex flex-col px-[17.5vh] py-[12vh] gap-[8.35vh]">
      <ParaDesc
        heading="Our Achievements"
        para="Our story is one of continuous growth and evolution. 
            We started as a small team with big dreams, determined to 
            create a real estate platform that transcended the ordinary."
      />
      <div className="flex flex-row justify-between items-center gap-[4vh]">
        <HeaderCard
          heading="3+ Years of Excellence"
          desc="With over 3 years in the industry, 
                we've amassed a wealth of knowledge and experience,
                becoming a go-to resource for all things real estate."
        />
        <HeaderCard
          heading="Happy Clients"
          desc="Our greatest achievement is the satisfaction of our 
                clients. Their success stories fuel our passion for 
                what we do."
        />
        <HeaderCard
          heading="Industry Recognition"
          desc="We've earned the respect of our peers and industry 
                leaders, with accolades and awards that reflect our 
                commitment to excellence."
        />
      </div>
    </section>
  );
};

export default AboutAchievements;
