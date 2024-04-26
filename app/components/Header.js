'use client'
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import Navbar from './Navbar';
const Header = () => {
    return (
        <div className='sticky top-0'>
        <div className="flex items-center bg-blue-900 text-white p-3  top-0">
            <FontAwesomeIcon icon={faPhone} />
            <span className="text-[12px] pl-[8px] sm:text-[15px] sm:pl-[8px] md:text-[8px] md:pl-3 lg:text-[18px] lg:pl-3">+880 1750 020408 </span>
            <div className="h-6 w-px bg-gray-400 mx-1 sm:mx-2 md:mx-3"></div>
            <FontAwesomeIcon icon={faEnvelope}  />
            <span className="text-[12px] pl-1 sm:text-[15px] sm:pl-2 md:text-[18px] md:pl-3 lg:text-[18px] lg:pl-3"> contact@mediusware.com</span>
            <div className="ml-auto">
              <FontAwesomeIcon className="mr-[10px]" icon={faFacebook} />
              <FontAwesomeIcon className="mr-[10px]" icon={faTwitterSquare} />
              <FontAwesomeIcon className="mr-[10px]" icon={faLinkedin} />
            </div>
          </div>
          <Navbar/>

          </div>
    );
};

export default Header;