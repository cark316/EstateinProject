import React from "react";
import {
  AboutAchievements,
  AboutClients,
  AboutExperience,
  AboutLanding,
  AboutTeam,
  AboutValues,
} from "../Layouts/Header/AboutPage";
import { Footer } from "../Layouts/Footer";

const About = () => {
  return (
    <div className="flex flex-col bg-[#141414]">
      <AboutLanding />
      <AboutValues />
      <AboutAchievements />
      <AboutExperience />
      <AboutTeam />
      <AboutClients />
      <Footer />
    </div>
  );
};

export default About;
