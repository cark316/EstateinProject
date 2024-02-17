import React from "react";
import { CarouselNew, ClientCard, HeaderCard } from "../../../Components";
import ParaDesc from "./ParaDesc";

const AboutClients = () => {
  return (
    <div className="flex flex-col px-[17.5vh] gap-[8.35vh] pb-[10vh]">
      <ParaDesc
        abstract="true"
        heading="Our Valued Clients"
        para="At Estatein, we have had the privilege of working with a diverse 
        range of clients across various industries. Here are some of the clients 
        we've had the pleasure of serving"
      />
      <CarouselNew
        clientCard="true"
        card={
          <ClientCard
            card={
              <HeaderCard
                heading="What they said"
                desc="Estatein's expertise in finding the perfect office space 
                  for our expanding operations was invaluable. They truly understand 
                  our business needs."
                client="true"
              />
            }
          />
        }
      />
    </div>
  );
};

export default AboutClients;
