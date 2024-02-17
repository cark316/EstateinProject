import React from "react";
import { Logo } from "../../SVG";

const FooterMiddle = () => {
  const Headings = [
    {
      item: "Home",
      subItems: [
        "Hero Section",
        "Features",
        "Properties",
        "Testimonials",
        "FAQ's",
      ],
    },
    {
      item: "About Us",
      subItems: [
        "Our Story",
        "Our Works",
        "How It Works",
        "Our Team",
        "Our Clients",
      ],
    },
    { item: "Properties", subItems: ["Portfolio", "Categories"] },
    {
      item: "Services",
      subItems: [
        "Valuation Mastery",
        "Strategic Marketing",
        "Negotiation Wizardry",
        "Closing Success",
        "Property Management",
      ],
    },
    { item: "Contact Us", subItems: ["Contact Form", "Our Offices"] },
  ];

  return (
    <div className="flex h-[47vh] bg-[#141414] px-[17vh] py-[10.5vh] items-start justify-between">
      <ul className="flex flex-col gap-[3vh]">
        <li>
          <img src={Logo} alt="logo" className="h-[5vh] w-[8.5vw]" />
        </li>
        <li>
          <input
            type="text"
            placeholder="Enter Your Email"
            className="bg-[#141414] border-2 border-[#1A1A1A] h-[7vh] w-[20vw] rounded-xl font-urbanist-medium focus:border-[#141414] flex"
          />
        </li>
      </ul>
      <ul className="flex flex-row items-start gap-[5vw] font-urbanist-medium">
        {Headings.map((item, index) => (
          <ul
            className="flex flex-col justify-center items-start text-[#9999] text-[2vh] gap-[3vh]"
            key={index}
          >
            <li>{item.item}</li>
            <ul className="flex flex-col justify-center items-start text-white gap-[1.75vh] text-[1.85vh]">
              {item.subItems.map((subItem, subIndex) => (
                <li key={subIndex}>{subItem}</li>
              ))}
            </ul>
          </ul>
        ))}
      </ul>
    </div>
  );
};

export default FooterMiddle;
