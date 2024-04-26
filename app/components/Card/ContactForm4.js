import React from 'react';

const ContactForm4 = ({setQuery}) => {
    const handleQueryChange = (e) => {
        setQuery(e.target.value);
      };
    return (
        <div>
          <h1 className="py-[16px] text-[16px]">
            Query <span className="text-[#98A2B3]">(optional) </span>
          </h1>
          <textarea
            className="pl-2 rounded-md w-full h-[64px] border border-[#667085]"
            onChange={handleQueryChange}
            placeholder="Tell us more about your query"
          />
        </div>
    );
};

export default ContactForm4;