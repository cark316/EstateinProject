import React from "react";
import { Button } from "../../Components";
import { HeaderBG } from "../../SVG";

const FooterTop = () => {
  const bgSVG = {
    backgroundImage: `linear-gradient(to top, rgba(20, 20, 20, 1), transparent), linear-gradient(to bottom, rgba(20, 20, 20, 1), transparent), url(${HeaderBG})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div
      className="flex justify-between items-center border-2 border-[#1A1A1A] bg-[#141414] px-[17vh] py-[10.5vh] h-[38vh] gap-[26vh]"
      style={bgSVG}
    >
      <div className="flex flex-row">
        <ul>
          <li className="font-urbanist-semibold text-[5vh] text-white">
            Start Your Real Estate Journey Today
          </li>
          <li className="font-urbanist-medium text-[1.85vh] text-[#9999]">
            Your dream property is just a click away. Whether you're looking for
            a new home, a strategic investment, or expert real estate advice,
            Estatein is here to assist you every step of the way. Take the first
            step towards your real estate goals and explore our available
            properties or get in touch with our team for personalized
            assistance.
          </li>
        </ul>
      </div>
      <Button color="Purple" text="Explore Properties" />
    </div>
  );
};

export default FooterTop;
