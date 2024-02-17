import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { Arrow } from "../SVG";
import PropertiesCard from "./PropertiesCard";
import { TestImage } from ".";

const Carousel = () => {
  const [move, setMove] = useState({ x: 0 });
  const [count, setCount] = useState(1);
  const [cardSize, setCardSize] = useState({ width: 0, height: 0 });
  const cardRef = useRef(null);

  const cardExample = (
    <PropertiesCard
      ref={cardRef}
      image={TestImage}
      name="Seaside Serenity Villa"
      desc="A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood..."
      bed="4-Bedrooms"
      bath="3-Bathrooms"
      villa="Villa"
      price="$550,000"
    />
  );

  useEffect(() => {
    const updateSize = () => {
      if (cardRef.current) {
        const { width, height } = cardRef.current.getBoundingClientRect();
        setCardSize({ width, height });
      }
    };
    updateSize();

    window.addEventListener("resize", updateSize);

    return () => {
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  //   console.log(`width ${cardSize.width}`, `height ${cardSize.height}`);

  const noOfVisibleCards = 3;
  const cardMaximum = cardSize.width * 3 + 28 * 6;
  const cardWithGap = cardSize.width + 28;

  //   console.log(`card gap ${cardWithGap}`);

  const itemsArray = [
    { id: 1, item: cardExample },
    { id: 2, item: cardExample },
    { id: 3, item: cardExample },
    { id: 4, item: cardExample },
    { id: 5, item: cardExample },
    { id: 6, item: cardExample },
    { id: 7, item: cardExample },
    { id: 8, item: cardExample },
    { id: 9, item: cardExample },
  ];

  const handleRightClick = () => {
    if (move.x <= 0 && move.x >= -cardMaximum) {
      setMove((prevMove) => ({
        x: prevMove.x - cardWithGap * 3,
      }));
      setCount((prevCount) => prevCount + 1);
    }
    // console.log(count);
    // console.log(move.x);
  };

  const handleLeftClick = () => {
    if (move.x < 0) {
      setMove((prevMove) => ({
        x: prevMove.x + cardWithGap * 3,
      }));
      setCount((prevCount) => prevCount - 1);
    }
    // console.log(count);
    // console.log(move.x);
  };

  const cardsVisible = cardSize.width * 3 + 28 * 2;
  console.log(`visible card length ${cardsVisible}`);

  return (
    <div className="flex h-screen justify-center items-center">
      <div className={`overflow-hidden w-[${cardsVisible}px]`}>
        <motion.div
          animate={move}
          transition={{
            type: "spring",
            stiffness: 320,
            damping: 40,
          }}
          className="grid grid-flow-col gap-7"
        >
          {itemsArray.map((items) => (
            <div key={items.id}>{items.item}</div>
          ))}
        </motion.div>
        <div className="mt-12 border-t-2 border-[#262626]">
          <div className="flex flex-row justify-between items-center pt-4">
            <div className="flex flex-row gap-1">
              <ul className="font-urbanist-regular text-white flex flex-row gap-1">
                <li>{count}</li>
                <li>of</li>
                <li>3</li>
              </ul>
            </div>
            <div className="flex flex-row gap-2">
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

export default Carousel;