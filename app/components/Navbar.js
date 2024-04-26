"use client";
import React, { useState } from "react";
import image from "@/public/brand.svg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faBars, faXmark,faChevronDown  } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Navbar = () => {
  const [isListVisible, setListVisible] = useState(false);
  const [iconMenu, setIcon] = useState(faBars);

  const toggleListVisibility = () => {
    setListVisible(!isListVisible);
  };

  const showBarFun = () => {
    setIcon((prevState) => (prevState === faBars ? faXmark : faBars));
    toggleListVisibility();
  };

  return (
    <div className="flex  justify-between bg-white p-5">
     
      <Image src={image} className="ml-0" alt="profile pic" />
      <ul
        className={`text-[18px] lg:flex md:flex-row items-center justify-center ${
          isListVisible ? "block" : "hidden"
        }`}
      >
       
           <li className="mr-3 hover:bg-blue-700 ">
                    <Link href="/" >HOME</Link>
                </li>
                <li className="mr-3 hover:bg-blue-700">
                    <Link href="/services">SERVICES <span><FontAwesomeIcon icon={faChevronDown} /></span></Link>
                </li>
                <li className="mr-3 hover:bg-blue-700">
                    <Link href="/projects">PROJECTS</Link>
                </li>
                <li className="mr-3 hover:bg-blue-700">
                    <Link href="/why-mediusware">WHY MEDIUSWARE</Link>
                </li>
                <li className="mr-3 hover:bg-blue-700">
                    <Link href="/blog">BLOG</Link>
                </li>
                <li className="mr-3 hover:bg-blue-700">
                    <Link href="/careers">CAREERS</Link>
                </li>
                <li className="mr-3 hover:bg-blue-700">
                    <Link href="/team">OUR TEAM</Link>
                </li>
                <li>
                    <button className="bg-blue-900 text-white rounded-lg px-4 py-2 flex items-center">
                        <span>
                            <FontAwesomeIcon icon={faPhone} />
                        </span>
                        <span className="ml-2">Book a Call</span>
                    </button>
                </li>
      </ul>
      <FontAwesomeIcon
        className="m-2  sm:block lg:hidden h-[24px] w-[24px]"
        icon={iconMenu}
        onClick={showBarFun}
      />
    </div>
  );
};

export default Navbar;
