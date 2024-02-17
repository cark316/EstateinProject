import React from "react";
import ParaDesc from "./ParaDesc";
import { Abstract, PurpHat, PurpPep, PurpStar } from "../../../SVG";

const Values = () => {
  return (
    <section className="flex flex-row px-[17.5vh] gap-[8.35vh]">
      <ParaDesc
        heading="Our Values"
        para="Our story is one of continuous growth and evolution. 
              We started as a small team with big dreams, 
              determined to create a real estate platform 
              that transcended the ordinary."
      />
      <div className="flex flex-col rounded-xl w-[105vw] border-2 border-[#262626] p-[6vh] gap-[3vh]">
        <div className="flex flex-row">
          <div className="flex-1 border-r-2 border-[#1A1A1A] pr-[3vh]">
            <ParaDesc
              abstract="false"
              icon={PurpStar}
              title="Trust"
              para="Trust is the cornerstone of every successful real estate transaction."
            />
          </div>
          <div className="flex-1 pl-[3vh]">
            <ParaDesc
              abstract="false"
              icon={PurpHat}
              title="Excellence"
              para="We set the bar high for ourselves. From the properties we list to the services we provide."
            />
          </div>
        </div>
        <div className="flex flex-row pt-[3vh] border-t-2 border-[#1A1A1A]">
          <div className="flex-1 border-r-2 border-[#1A1A1A] pr-[3vh]">
            <ParaDesc
              abstract="false"
              icon={PurpPep}
              title="Client-Centric"
              para="Your dreams and needs are at the center of our universe. We listen, understand."
            />
          </div>
          <div className="flex-1 pl-[3vh]">
            <ParaDesc
              abstract="false"
              icon={PurpStar}
              title="Our Commitement"
              para="We are dedicated to providing you with the highest level of service, professionalism, and support."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
