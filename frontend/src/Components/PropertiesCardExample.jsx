import React from "react";
import PropertiesCard from "./PropertiesCard";
import { TestImage } from ".";

const PropertiesCardExample = () => {
  return (
    <PropertiesCard
      image={TestImage}
      name="Seaside Serenity Villa"
      desc="A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood..."
      bed="4-Bedrooms"
      bath="3-Bathrooms"
      villa="Villa"
      price="$550,000"
    />
  );
};

export default PropertiesCardExample;
