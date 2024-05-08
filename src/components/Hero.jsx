import React from "react";
import mainImg from "../assets/mainImg.svg";
import highlight from "../assets/numHighlight.svg";
import rocket from "../assets/rocket.svg";
import { Carousel } from "react-responsive-carousel";
import AutoSlider from "./AutoSlider";
import Button from "./Button";
const Hero = () => {
  const texts = [
    "Enhance fortune 50 company’s insights teams research capabilities",
    "Enhance the research capabilities of a Fortune 50 company's insights teams.",
    "Boost the research capabilities of a Fortune 50 company's insights teams.",
  ];
  return (
    <>
      <div name="main-title" className="flex flex-col items-center p-16">
        <div className=" font-grace text-[36px] text-[#2DA950]">
          Success Stories
        </div>
        <div className=" font-semibold font-manrope text-[56px] w-1/2 text-center leading-[67px]">
          Every success journey we've encountered
        </div>
      </div>
      <div
        name="main-carousel"
        className="flex px-20 justify-around items-center ml-32"
      >
        <div name="image container" className="relative">
          <img src={mainImg} className="w-[30rem] rounded-[3rem]" />
          <div
            className="p-6 pt-4 w-[17rem] absolute top-[20%]
            -left-[10rem] rounded-[2rem] shadow-2xl bg-white flex flex-col"
          >
            <span className=" relative font-medium text-[64px] font-switzer">
              <img src={highlight} className=" absolute -top-12 -left-12"></img>
              40%
            </span>
            <span className="font-medium font-manrope text-[#828282] text-lg leading-[23px]">
              Achieved reduction in project execution time by optimising team
              availability
            </span>
          </div>
          <div className="bg-white absolute -left-20 bottom-[10%] rounded-[3rem] shadow-2xl w-[17rem] p-4 flex justify-between">
            <img src={rocket} className=" rounded-full bg-[#DDEFE0] p-4"></img>
            <div className="flex flex-col font-manrope">
              <span className="font-bold text-[24px]">10 DAYS</span>
              <span className="text-[#828282] font-medium text-xl">
                Staff Deployment
              </span>
            </div>
          </div>
          <div className="bg-[#002E18] border-[1px] border-gray-700 rounded-[2.5rem] px-10 py-8 w-[19rem] absolute -bottom-16 -right-20 flex flex-col gap-4">
            <div>
              <span className=" font-switzer font-medium text-[63px] text-white">
                $0.5
              </span>
              <span className="text-[#A6A3A0] text-[23px] font-medium ml-2">
                MILLION
              </span>
            </div>
            <span className="text-[#CCCCCC] font-medium text-lg font-manrope leading-[23px]">
              Reduced client expenses by saving on hiring and employee costs
            </span>
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-center">
          <div className="flex flex-col items-start">
            <AutoSlider texts={texts} interval={4000} />
            <Button
              title="Explore More"
              css=" mt-32 flex items-center gap-x-10 py-[31px] px-[40px]"
              arrow={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
