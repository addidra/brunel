import React from "react";
import logo from "../assets/logo.svg";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Navbar = ({ home = true }) => {
  const navigator = useNavigate();
  return (
    <div
      className={`m-0 ${
        home && "m-4 border-[1px] border-gray-500 rounded-[2.5rem]"
      } p-4 flex justify-between items-center`}
    >
      <img src={logo} className="ml-8"></img>
      {home ? (
        <div className="Buttons space-x-4">
          <Button
            title="Get Projects"
            primary={false}
            whenClick={() => navigator("/register")}
          />
          <Button title="Onboard Talent" />
        </div>
      ) : (
        <Button
          css=" border-[#CACACA] py-6 px-6"
          title="X"
          primary={false}
          whenClick={() => {
            navigator("/");
          }}
        ></Button>
      )}
    </div>
  );
};

export default Navbar;
