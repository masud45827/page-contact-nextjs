import React, { useState } from "react";

const ContactForm3 = ({ setBudget }) => {
  const [selectedBudget, setSelectedBudget] = useState(null);
  const handleBudgetClick = (budget) => {
    setBudget(budget);
    setSelectedBudget(budget);
  };

  return (
    <div>
      <h1 className="py-[16px] text-[16px]">
        Your Budget <span className="text-[#98A2B3]">(optional) </span>
      </h1>
      <div className="flex flex-row flex-wrap gap-4 text-[15px]">
        <h1
          className={`text-center bg-${selectedBudget === "Less Than &gt; $5,00" ? "[#13AF88]" : "[#F2F4F7]"} w-2/5 p-[8px] border border-[#D2D6DB] rounded-md lg:w-[20%] lg:text-[10px]`}
          onClick={() => handleBudgetClick("Less Than &gt; $5,00")}
        >
          Less Than &gt; $5,00
        </h1>

        <h1
          className={`text-center bg-${selectedBudget === "$5,00 - $1,000" ? "[#13AF88]" : "[#F2F4F7]"} w-2/5 p-[8px] border border-[#D2D6DB] rounded-md lg:w-[20%] lg:text-[10px]`}
          onClick={() => handleBudgetClick("$5,00 - $1,000")}
        >
          $5,00 - $1,000
        </h1>

        <h1
          className={`text-center bg-${selectedBudget === "$1,001 - $1500" ? "[#13AF88]" : "[#F2F4F7]"} w-2/5 p-[8px] border border-[#D2D6DB] rounded-md lg:w-[20%] lg:text-[10px]`}
          onClick={() => handleBudgetClick("$1,001 - $1500")}
        >
          $1,001 - $1500
        </h1>

        <h1
          className={`text-center bg-${selectedBudget === "$1,001 - $2,000" ? "[#13AF88]" : "[#F2F4F7]"} w-2/5 p-[8px] border border-[#D2D6DB] rounded-md lg:w-[20%] lg:text-[10px]`}
          onClick={() => handleBudgetClick("$1,001 - $2,000")}
        >
          $1,001 - $2,000
        </h1>
      </div>
    </div>
  );
};

export default ContactForm3;
