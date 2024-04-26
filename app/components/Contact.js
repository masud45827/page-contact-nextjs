import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneVolume,
  faEnvelope,
  faClock,
  faDownload,
  faUserCircle 
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faLinkedin,
    faTwitterSquare,
  } from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  return (
    <div className="bg-white pt-[24px] lg:w-[30%]">
      <h1 className="text-[32px] pl-[20px]">
        Contact <span className="text-[#13AF88] ">Details</span>
      </h1>
      <div className="px-[20px] flex flex-col gap-[20px]">
        <div className="p-[20px] bg-[#F9FAFB]  rounded-lg flex flex-col gap-[20px]">
          <h1 className="font-bold text-[16px]">Bangladesh Address</h1>

          <div className="flex items-center ">
            <FontAwesomeIcon icon={faPhoneVolume} />
            <h1 className="pl-[8px] text-[20px] lg:text-[10px]">
              18/5 Ring Road, Mohammadpur,Dhaka
            </h1>
          </div>

          <div className="flex items-center ">
            <FontAwesomeIcon icon={faEnvelope} />
            <h1 className="pl-[8px] text-[20px] lg:text-[10px]">+8801750020408</h1>
          </div>

          <div className="flex items-center ">
            <FontAwesomeIcon icon={faLocationDot} />
            <h1 className="pl-[8px] text-[20px] lg:text-[10px]">career@mediusware.com</h1>
          </div>

          <div className="flex items-center ">
            <FontAwesomeIcon icon={faClock} />
            <h1 className="pl-[8px] text-[20px] lg:text-[10px]">
              Monday to Friday: 12 PM - 9 PM
            </h1>
          </div>
        </div>

        <div className="p-[20px] bg-[#F9FAFB] rounded-lg flex flex-col gap-[16px]">
          <h1 className="font-bold">USA Address</h1>
          <div className="flex items-center ">
            <FontAwesomeIcon icon={faPhoneVolume} />
            <h1 className="pl-[8px] text-[20px] lg:text-[10px]">
              1903 commonwealth st, Houston tx 77006
            </h1>
          </div>

          <div className="flex items-center ">
            <FontAwesomeIcon icon={faEnvelope} />
            <h1 className="pl-[8px] text-[20px] lg:text-[10px]">+1 (978) 431-0122</h1>
          </div>

          <div className="flex items-center ">
            <FontAwesomeIcon icon={faLocationDot} />
            <h1 className="pl-[8px] text-[20px] lg:text-[10px]">career@mediusware.com</h1>
          </div>

          <div className="flex items-center ">
            <FontAwesomeIcon icon={faClock} />
            <h1 className="pl-[8px] text-[20px] lg:text-[10px]">
              Monday to Friday: 12 PM - 9 PM
            </h1>
          </div>
        </div>

        <div>
          <h1 className="text-2xl pb-[20px]">
            Company <span className="text-[#13AF88]">Deck</span>
          </h1>
          <button className="border-2 border-[#0060AF] rounded-md">
            <div className="flex flex-row justify-center items-center w-[200px] py-[20px] bg-[#E6EFF7] text-[#0060AF] px-2 gap-[10px]">
              <h1 className="">Company Profile</h1>
              <FontAwesomeIcon icon={faDownload} />
            </div>
          </button>
        </div>
        
        <div>
          <h1 className="text-2xl pb-[20px]">
            Follow <span className="text-[#13AF88]">Us</span>
          </h1>
          <div className="ml-auto">
              <FontAwesomeIcon className="mr-[24px] w-[34px] h-[34px]" icon={faFacebook} />
              <FontAwesomeIcon className="mr-[24px] w-[34px] h-[34px]" icon={faTwitterSquare} />
              <FontAwesomeIcon className="mr-[24px] w-[34px] h-[34px]" icon={faLinkedin} />
              <FontAwesomeIcon className="w-[34px] h-[34px]" icon={faUserCircle} />
           </div>
        </div>


      </div>
    </div>
  );
};

export default Contact;
