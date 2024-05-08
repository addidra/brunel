import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import rightTick from "../assets/rightTick.svg";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigator = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (countdown > 0) setCountdown((prevCountdown) => prevCountdown - 1);
      else navigator("/", { replace: true });
    }, 1000);
    return () => clearTimeout(timer);
  }, [countdown]);
  return (
    <>
      <div className={`mx-6 p-4 flex items-center`}>
        <img src={logo} className="ml-8 w-32 h-32"></img>
      </div>
      <div className="mt-12 w-full flex justify-center text-center">
        <div className="flex flex-col items-center max-w-[700px]">
          <img src={rightTick} className="mb-16" />
          <span className="font-grace text-[#2DA950] text-4xl">
            Sucess Submitted
          </span>
          <span className="font-manrope font-semibold text-[56px]">
            Congratulations
          </span>
          <span className=" font-manrope font-medium text-[27px] text-[#727272]">
            Your request has been successfully submitted to us. We will validate
            your information and reach out to your shortly with updates
          </span>
          <span className="mt-40 font-manrope text-xl text-[#727272]">
            Redirecting you to Homepage in{" "}
            <span className=" font-medium ">{countdown} Seconds</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Success;
