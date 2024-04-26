import React from "react";
import ContactForm2 from "./Card/ContactForm2";
import ContactForm1 from "./Card/ContactForm1";
import ContactForm3 from "./Card/ContactForm3";
import ContactForm4 from "./Card/ContactForm4";
import ContactForm5 from "./Card/ContactForm5";
const Form = ({
  setName,
  setEmail,
  setNumber,
  setCompanyName,
  setServices,
  setBudget,
  setQuery,
  setFile,
}) => {
  return (
    <div className="bg-[#F9FAFB] rounded-xl justify-center">
      <div className="p-[12px] font-bold">
        <ContactForm1
          setName={setName}
          setEmail={setEmail}
          setNumber={setNumber}
          setCompanyName={setCompanyName}
        />
        <ContactForm2 setServices={setServices} />
        <ContactForm3 setBudget={setBudget} />

        <ContactForm4 setQuery={setQuery} />

        <ContactForm5 setFile={setFile} />
      </div>
    </div>
  );
};

export default Form;
