import React from "react";

const TestiomonialCard = (props) => {
  const newArray = new Array(5).fill(props.star);

  return (
    <div className="w-[512px] h-[442px] p-12 flex flex-col items-left justify-center border-2 border-[#262626] bg-[#1A1A1A] rounded-xl">
      <ul className="flex flex-row pb-10 gap-2">
        {newArray.map((item, index) => (
          <li
            className="flex items-center justify-center p-2 w-[44px] h-[44px] rounded-full bg-[#1A1A1A] border-2 border-[#262626]"
            key={index}
          >
            <img src={props.star} alt="star" />
          </li>
        ))}
      </ul>
      <h1 className="font-urbanist-semibold text-white text-2xl pb-3">
        {props.heading}
      </h1>
      <p className="font-urbanist-medium text-white text-lg pb-10">
        {props.desc}
      </p>
      <div className="flex flex-row items-center">
        <img src={props.profile} alt="avatar" className="pr-3" />
        <div>
          <ul>
            <li className="font-urbanist-medium text-white text-xl">
              {props.name}
            </li>
            <li className="font-urbanist-medium text-[#999999] text-lg">
              {props.location}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TestiomonialCard;
