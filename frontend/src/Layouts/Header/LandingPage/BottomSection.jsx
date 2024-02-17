import React from "react";
import { BottomCard } from "../../../Components";
import { HomeIcon, MoneyIcon, BuildingIcon, LightIcon } from "../../../SVG";

const BottomSection = () => {
  return (
    <section>
      <div className="bg-[#141414] grid grid-cols-4 gap-5 h-64 px-5 border-2 border-[#262626]">
        <BottomCard text="Find Your Dream Home" image={HomeIcon} />
        <BottomCard text="Unlock Property Value" image={MoneyIcon} />
        <BottomCard
          text="Effortless Property Management"
          image={BuildingIcon}
        />
        <BottomCard
          text="Smart Investments, Informed Decisions"
          image={LightIcon}
        />
      </div>
    </section>
  );
};

export default BottomSection;
