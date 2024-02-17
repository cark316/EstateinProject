import React from "react";
import { Button } from "../../../Components";
import HeaderCard from "../../../Components/HeaderCard";

const LeftSection = () => {
  return (
    <section className="flex flex-col flex-1 items-start justify-center text-balance pl-40 bg-[#141414] h-[860px] w-40">
      <p className="font-urbanist-semibold text-white text-6xl pb-8">
        Discover Your Dream Property with Estatein
      </p>
      <p className="font-urbanist-regular text-[#999999] text-lg text-balance pb-14">
        Your journey to finding the perfect property begins here. Explore our
        listings to find the home that matches your dreams.
      </p>
      <div className="flex flex-row gap-4 pb-14 flex-wrap">
        <Button text="Learn more" color="darkGrey" />
        <Button text="Browse Properties" color="Purple" />
      </div>
      <div className="flex flex-row gap-5 flex-wrap">
        <HeaderCard number="200+" text="Happy customers" />
        <HeaderCard number="10K+" text="Properties For Clients" />
        <HeaderCard number="16+" text="Years Of Experience" />
      </div>
    </section>
  );
};

export default LeftSection;
