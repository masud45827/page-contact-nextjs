import React from 'react';

const ContactForm1 = ({
setName,
  setEmail,
  setNumber,
  setCompanyName,
}) => {
    const handleNameChange = (e) => {
        setName(e.target.value);
      };
    
      const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const handleNumberChange = (e) => {
        setNumber(e.target.value);
      };
    
      const handleCompanyNameChange = (e) => {
        setCompanyName(e.target.value);
      };
    
    return (
        <div1 className="lg:flex lg:gap-[15px] lg:flex-wrap">
        <div className="lg:w-[48%]">
          <h1 className="py-[16px] text-[16px] ">Name*</h1>
          <input
            className="rounded-md pl-2 w-full h-[44px] border border-[#667085]"
            onChange={handleNameChange}
            placeholder="Enter Your Name"
            required
          />
        </div>

        <div className="lg:w-[48%]">
          <h1 className="py-[16px] text-[16px]">Email*</h1>
          <input
            className="pl-2 rounded-md w-full h-[44px] border border-[#667085]"
            onChange={handleEmailChange}
            placeholder="Enter Your Email"
            required
          />
        </div>

        <div className="lg:w-[48%]">
          <h1 className=" py-[16px] text-[16px]">
            Phone Number <span className="text-[#98A2B3]">(optional) </span>
          </h1>
          <input
            className="pl-2 rounded-md w-full h-[44px] border border-[#667085]"
            onChange={handleNumberChange}
            placeholder="Enter Your Phone Number"
          />
        </div>

        <div className="lg:w-[48%]">
          <h1 className="py-[16px] text-[16px]">
            Company Name <span className="text-[#98A2B3]">(optional) </span>
          </h1>
          <input
            className="pl-2 rounded-md w-full h-[44px] border border-[#667085]"
            onChange={handleCompanyNameChange}
            placeholder="Enter Your Company Name"
          />
        </div>

      </div1>
    );
};

export default ContactForm1;