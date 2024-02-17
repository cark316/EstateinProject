import React from "react";
import ParaDesc from "./ParaDesc";
import { HeaderCard } from "../../../Components";

const AboutExperience = () => {
  return (
    <section className="flex flex-col px-[17.5vh] gap-[8.35vh]">
      <ParaDesc
        heading="Navigating the Estatein Experience"
        para="At Estatein, we've designed a straightforward process 
        to help you find and purchase your dream property with ease. 
        Here's a step-by-step guide to how it all works."
      />
      <div className="flex flex-col gap-[3.5vh]">
        <div className="flex flex-row justify-between items-center gap-[3.5vh]">
          <div>
            <h1 className="font-urbanist-medium text-white text-[2.5vh] p-[2vh] border-l-2 border-[#262626]">
              Step 01
            </h1>
            <HeaderCard
              corner="true"
              heading="Discover a World of Possibilities"
              desc="Your journey begins with exploring our carefully curated 
          property listings. Use our intuitive search tools to filter 
          properties based on your preferences, including location, type, 
          size, and budget."
            />
          </div>
          <div>
            <h1 className="font-urbanist-medium text-white text-[2.5vh] p-[2vh] border-l-2 border-[#262626]">
              Step 02
            </h1>
            <HeaderCard
              corner="true"
              heading="Narrowing Down Your Choices"
              desc="Once you've found properties that catch your eye, 
          save them to your account or make a shortlist. This allows 
          you to compare and revisit your favorites as you make your 
          decision."
            />
          </div>
          <div>
            <h1 className="font-urbanist-medium text-white text-[2.5vh] p-[2vh] border-l-2 border-[#262626]">
              Step 03
            </h1>
            <HeaderCard
              corner="true"
              heading="Personalized Guidance"
              desc="Have questions about a property or need more information? 
          Our dedicated team of real estate experts is just a call or 
          message away."
            />
          </div>
        </div>
        <div className="flex flex-row justify-between items-center gap-[3.5vh]">
          <div>
            <h1 className="font-urbanist-medium text-white text-[2.5vh] p-[2vh] border-l-2 border-[#262626]">
              Step 04
            </h1>
            <HeaderCard
              corner="true"
              heading="See It for Yourself"
              desc="Arrange viewings of the properties you're interested in. 
          We'll coordinate with the property owners and accompany you to 
          ensure you get a firsthand look at your potential new home."
            />
          </div>
          <div>
            <h1 className="font-urbanist-medium text-white text-[2.5vh] p-[2vh] border-l-2 border-[#262626]">
              Step 05
            </h1>
            <HeaderCard
              corner="true"
              heading="Making Informed Decisions"
              desc="Before making an offer, our team will assist you with due 
          diligence, including property inspections, legal checks, and 
          market analysis. We want you to be fully informed and confident 
          in your choice."
            />
          </div>
          <div>
            <h1 className="font-urbanist-medium text-white text-[2.5vh] p-[2vh] border-l-2 border-[#262626]">
              Step 06
            </h1>
            <HeaderCard
              corner="true"
              heading="Getting the Best Deal"
              desc="We'll help you negotiate the best terms and prepare your offer. 
          Our goal is to secure the property at the right price and on favorable 
          terms."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutExperience;
