import React from "react";
import arrowSvg from "../assets/arrow.svg";

const Button = ({ title, whenClick, primary = true, css, arrow = false }) => {
  return (
    <button
      onClick={whenClick}
      className={`${css} font-manrope text-[18px] font-semibold border-[1px] border-gray-500 rounded-[3rem] px-8 py-4 transition-all duration-300 ${
        primary
          ? "bg-[#1C1C1C] text-white hover:bg-[#4E4E4E]"
          : " hover:bg-[#EAEAEA]"
      }`}
    >
      {title}
      {arrow && <img src={arrowSvg}></img>}
    </button>
  );
};

export default Button;
