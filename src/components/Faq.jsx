import React, { useState } from "react";
import FaqArrow from "../assets/FaqArrow.svg";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = [
    {
      question: "Do you offer freelancers?",
      answer:
        "We do provide freelancers with diverse skill sets. If issues arise, communicate with freelancers directly, allowing for revisions as per agreements. Our support team is available for mediation if needed.",
    },
    {
      question:
        "What’s the guarantee that I will be satisfied with the hired talent?",
      answer:
        "While we can't guarantee satisfaction, we facilitate direct communication with hired talent. Revision opportunities are available to address any concerns. Our support team is ready to assist in resolving disputes if needed.",
    },
    {
      question: "Can I hire multiple talents at once?",
      answer:
        "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
    },
    {
      question: "Why should I not go to an agency directly?",
      answer:
        "Choosing our platform offers flexibility and direct access to freelancers. We provide transparent communication channels and revision processes. Our support team is available to assist with any issues or disputes.",
    },
    {
      question: "Who can help me pick a right skillset and duration for me?",
      answer:
        "Our platform offers guidance in selecting suitable skillsets and project durations. We provide resources and support to assist in decision-making. Our team is available to offer personalized advice based on your requirements.",
    },
  ];

  const handleQuestionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className=" w-full h-[800px] mt-36 flex justify-center items-center p-10">
      <div className="bg-[#E8EEE7] rounded-[40px] w-full h-full flex justify-between p-32 relative">
        <div className="flex flex-col">
          <span className=" font-grace text-[32px] text-[#9E9D9D] ">
            Whats on your mind
          </span>
          <span className=" font-manrope font-semibold text-[60px]">
            Ask Questions
          </span>
          <img src={FaqArrow} className=" absolute bottom-0 left-0" />
        </div>
        <div className="flex flex-col">
          {faqs.map((q, index) => (
            <div
              key={index}
              className={`mb-3 p-3  ${
                index !== 4 &&
                "border-b-[#D7D7D7] border-t-transparent border-x-transparent border-2"
              }`}
            >
              <div
                className="flex cursor-pointer justify-between items-top gap-x-32 "
                onClick={() => handleQuestionClick(index)}
              >
                <div className=" font-semibold text-[20px] font-manrope mb-2 max-w-[450px]">
                  {q.question}
                </div>
                <span className=" text-[25px]">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 max-w-[600px] ${
                  activeIndex === index ? "max-h-[150px]" : "max-h-0"
                }`}
              >
                <div className="font-manrope text-lg text-[#617275] mt-3 leading-6">
                  {q.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
