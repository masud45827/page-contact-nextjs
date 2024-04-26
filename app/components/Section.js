"use client";
import React, { useState } from "react";
import Form from "./Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import Contact from "./Contact";
const Section = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [services, setServices] = useState([]);
  const [budget, setBudget] = useState("");
  const [query, setQuery] = useState("");
  const [file, setFile] = useState(null);
  console.log("Form submitted with data:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Phone Number:", number);
  console.log("Company Name:", companyName);
  console.log("Services:", services);
  console.log("Budget:", budget);
  console.log("Query:", query);
  console.log("File:", file);
  const handleSubmit = () => {
    const formData = {
      name,
      email,
      number,
      companyName,
      services,
      budget,
      query,
      file,
    };
    console.log("Form submitted with data:", formData);
  };

  return (
    <div className="lg:flex lg:bg-white lg:p-[30px] lg:w-full lg:justify-between ">
    <div className="pt-[0px]  px-[20px] lg:w-[70%] ">
      <div className="bg-white">
        <div className="flex flex-row justify-center items-center font-bold py-[20px]">
          <h1 className="text-[42px]">
            Drop us a <span className="text-[#00A88E]">line</span>
          </h1>
        </div>
        <Form
          setName={setName}
          setEmail={setEmail}
          setNumber={setNumber}
          setCompanyName={setCompanyName}
          setServices={setServices}
          setBudget={setBudget}
          setQuery={setQuery}
          setFile={setFile}
        />
        
        <div className="flex justify-center m-2 mb-[10px] mt-[20px] items-center bg-[#0060AF] text-white  px-4 py-2 rounded-lg">
          <button
            onClick={handleSubmit}
          >
            <div className="flex flex-row items-center justify-center">
              <h1 className="mr-2">Send Query</h1>
              <FontAwesomeIcon icon={faPaperPlane} />
            </div>
          </button>
          
        </div>
        <div className="p-[20px]"></div>
      </div>
      
    </div>
    <Contact/>
 </div>
  );
};

export default Section;
