import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    { id: 1, label: "One" },
    { id: 2, label: "Two" },
    { id: 3, label: "Three" },
    { id: 4, label: "Four" },
    { id: 5, label: "Five" },
    { id: 6, label: "Six" },
    { id: 7, label: "Seven" },
    { id: 8, label: "Eight" },
    { id: 9, label: "Nine" },
  ];

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-screen-md mx-auto">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, x: currentImageIndex > 0 ? "100%" : "-100%" }}
          animate={{ opacity: 1, x: "0%" }}
          exit={{ opacity: 0, x: currentImageIndex > 0 ? "-100%" : "100%" }}
          transition={{ type: "tween", duration: 0.5 }}
          className="overflow-hidden relative w-full"
        >
          <div className="bg-gray-200 w-full h-64 flex justify-center items-center text-5xl">
            {images[currentImageIndex].label}
          </div>
        </motion.div>
      </AnimatePresence>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-0 bg-black bg-opacity-50 text-white p-2 rounded-l focus:outline-none"
        onClick={goToPrevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-black bg-opacity-50 text-white p-2 rounded-r focus:outline-none"
        onClick={goToNextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};

export default ImageSlider;
