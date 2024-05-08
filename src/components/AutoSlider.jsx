import React, { useState, useEffect } from "react";
import "../assets/slider.css";
const AutoSlider = ({ texts, interval }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [texts.length, interval]);

  const handleIndicatorClick = (clickedIndex) => {
    setIndex(clickedIndex);
  };

  return (
    <>
      <div className="slider w-[30rem]">
        {texts.map((text, i) => (
          <p
            key={i}
            className={`slide font-bold text-[40px] font-manrope leading-[48px] text-left transition-all duration-500 ${
              index === i ? "slide-in" : "slide-out hidden"
            }`}
          >
            {text}
          </p>
        ))}
      </div>
      <div className="indicators flex mt-20">
        {texts.map((_, i) => (
          <span
            key={i}
            className={`indicator w-3 h-3 rounded-full  mx-1 cursor-pointer ${
              index === i ? "bg-[#2DA950]" : "bg-[#E4E3E3]"
            }`}
            onClick={() => handleIndicatorClick(i)}
          />
        ))}
      </div>
    </>
  );
};

export default AutoSlider;
