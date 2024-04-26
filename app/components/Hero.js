import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import image from "@/public/image.gif";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="lg:flex  lg:px-[120px] lg:py-[50px] ">
      <div className="pt-[20px]">
        <div className="flex flex-row justify-center items-center mb-[24px] ">
          <h1 className=" font-bold text-[32px] text-center w-2/4">
            GET IN TOUCH WITH <span className="text-[#00A88E]">US TODAY!</span>
          </h1>
        </div>
        <div className="flex justify-center items-center mb-[24px]">
          <h1 className="w-3/4 text-center text-[20px] ">
            Click The 'Schedule a Meeting' button and select a time that works
            for you, and we'll be ready to talk! Excited to connect with you in
            the near future!
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <div className="w-3/4 h-[56px] flex items-center justify-center bg-blue-900 text-white rounded-lg p-4 ">
            <FontAwesomeIcon icon={faCalendarAlt} className="text-3xl mr-4" />
            <h1 className="text-2xl">Schedule a Meeting</h1>
          </div>
        </div>

       
      </div>
         
      <div className="flex justify-center items-center mt-[20px]">
          <Image src={image} className="lg:h-[412px] lg:w-[776]" alt="picture" />
        </div>

    </div>
  );
};

export default Hero;
