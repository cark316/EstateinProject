import React from "react";
import {
  RightSection,
  LeftSection,
  BottomSection,
} from "../Layouts/Header/LandingPage";
import {
  TestImage,
  CarouselNew,
  PropertiesCard,
  TestimonialCard,
  FAQCard,
  CardTopContainer,
  Profile,
} from "../Components";
import { StarIcon } from "../SVG";
import { Footer } from "../Layouts/Footer";

const Home = () => {
  return (
    <header>
      <section className="flex flex-row">
        <LeftSection />
        <RightSection />
      </section>
      <BottomSection />
      <section className="h-screen bg-[#141414] pt-32">
        <CarouselNew
          card={
            <PropertiesCard
              image={TestImage}
              name="Seaside Serenity Villa"
              desc="A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood..."
              bed="4-Bedrooms"
              bath="3-Bathrooms"
              villa="Villa"
              price="$550,000"
            />
          }
        />
      </section>
      <section className="bg-[#141414]">
        <div className="flex flex-col h-screen gap-20 pt-32">
          <CardTopContainer
            heading="What Our Clients Say"
            desc="Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
            button="View All Testimonials"
          />
          <CarouselNew
            card={
              <TestimonialCard
                star={StarIcon}
                profile={Profile}
                heading="Exceptional Service!"
                desc="Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!"
                name="Wade Warren"
                location="USA, California"
              />
            }
          />
        </div>
      </section>
      <section className="bg-[#141414]">
        <div className="flex flex-col h-screen gap-20 pt-32">
          <CardTopContainer
            heading="Frequently Asked Questions"
            desc="Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
            button="View All FAQ’s"
          />
          <CarouselNew
            card={
              <FAQCard
                heading="How do I search for properties on Estatein?"
                desc="Learn how to use our user-friendly search tools to find properties that match your criteria."
              />
            }
          />
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </header>
  );
};

export default Home;
