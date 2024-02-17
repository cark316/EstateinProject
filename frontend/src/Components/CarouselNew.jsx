import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Arrow } from "../SVG";
import Button from "./Button";

const CarouselNew = (props) => {
  const cardRef = useRef(null);
  const [cardSize, setCardSize] = useState({ height: 0, width: 0 });
  const [move, setMove] = useState({ x: 0 });
  const [count, setCount] = useState(1);
  let dataArray = [];
  let noOfCards;

  if (props.clientCard === "true") {
    dataArray = new Array(4).fill(props.card);
    noOfCards = 2;
  } else {
    dataArray = new Array(9).fill(props.card);
    noOfCards = 3;
  }

  const handleRightClick = () => {
    if (move.x <= 0 && move.x > -noOfListingPerScroll) {
      setMove((prevMove) => ({
        x: prevMove.x - CardsVisibleWidth,
      }));
      setCount(count + 1);
    }
    console.log(move.x);
  };

  const handleLeftClick = () => {
    if (move.x < 0) {
      setMove((prevMove) => ({
        x: prevMove.x + CardsVisibleWidth,
      }));
      setCount(count - 1);
    }
    console.log(move.x);
  };
  useEffect(() => {
    const { height, width } = cardRef.current.getBoundingClientRect();
    setCardSize({ height, width });
  }, []);

  const gapBetween = 28;
  const CardsVisibleWidth = cardSize.width * noOfCards + gapBetween * noOfCards;
  const CardsVisibleOverflow = cardSize.width * noOfCards + gapBetween * 2;
  const noOfListingPerScroll =
    noOfCards * CardsVisibleWidth - CardsVisibleWidth;

  return (
    <div className="flex justify-center items-center">
      <div>
        <ul style={{ width: CardsVisibleOverflow, overflow: "hidden" }}>
          <motion.div
            animate={move}
            transition={{
              type: "spring",
              stiffness: 320,
              damping: 40,
            }}
            className="flex flex-row gap-7"
          >
            {dataArray.map((item, index) => (
              <li ref={cardRef} key={index}>
                {props.card}
              </li>
            ))}
          </motion.div>
        </ul>
        <div className="mt-[5vh] border-t-[0.2vh] border-[#262626]">
          <div className="flex flex-row justify-between items-center pt-[1.7vh]">
            <div className="flex flex-row gap-[0.4vh]">
              <ul className="font-urbanist-regular text-white flex flex-row gap-[0.4vh]">
                <li>{count}</li>
                <li>of</li>
                <li>{noOfCards}</li>
              </ul>
            </div>
            <div className="flex flex-row gap-[0.8vh]">
              <Button
                color="roundedGreyInvert"
                arrow={Arrow}
                onClick={handleLeftClick}
              />
              <Button
                color="roundedGrey"
                arrow={Arrow}
                onClick={handleRightClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselNew;
