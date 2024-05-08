import React from "react";

const Footer = () => {
  return (
    <div className="mb-16 w-full h-[100px] flex justify-center items-center p-10 font-manrope text-lg">
      <div className="bg-[#F5F5F5] rounded-[40px] flex justify-between items-center w-full p-16">
        <span className=" font-medium ">
          &#169; Talup 2023. All rights reserved
        </span>
        <div className="flex gap-12">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
