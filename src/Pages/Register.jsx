import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigator = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [emailError, setEmailError] = useState(false);

  useEffect(() => {
    if (email.trim() === "" || name.trim() === "") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [email, name]);

  const onSubmit = () => {
    const isValidEmail = (value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value);
    };

    if (isValidEmail(email)) {
      setEmailError(false);
      navigator("/success");
      const url = "https://api.emailjs.com/api/v1.0/email/send";
      const data = {
        service_id: "service_2zd3nxz",
        template_id: "template_2rtucag",
        user_id: "GMm4C7QoEsZwMWFYY",
        template_params: {
          to_email: email,
        },
      };

      axios
        .post(url, data)
        .then((res) => {
          console.log(res);
        })
        .catch((e) => console.log(e));
    } else setEmailError(true);
  };

  return (
    <>
      <Navbar home={false} />
      <div className="mt-12 w-full flex justify-center text-center">
        <div className="flex flex-col items-center max-w-[600px]">
          <span className="font-grace text-4xl text-[#2DA950] mb-5">
            Registration Form
          </span>
          <span className="font-manrope text-[56px] font-semibold leading-[67px] mb-16">
            Start your success Journey here!
          </span>
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="bg-[#EFEFEF] text-xl rounded-[4rem] py-6 px-10 w-[450px] mb-7"
          />
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="bg-[#EFEFEF] text-xl rounded-[4rem] py-6 px-10 w-[450px] mb-5"
          />
          <div className="mb-16 self-start ml-20 text-[#FF0808] font-manrope font-medium flex items-center">
            {emailError && (
              <>
                <div className="h-4 w-4 rounded-full bg-[#FF0808] mr-2"></div>
                <span>Enter a valid email address</span>
              </>
            )}
          </div>

          <button
            type="submit"
            onClick={onSubmit}
            className={`${
              disabled ? "bg-[#C9C9C9]" : "bg-[#1C1C1C] hover:bg-[#4E4E4E]"
            } text-xl rounded-[4rem] py-6 px-10 w-[450px] text-white`}
            disabled={disabled}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
