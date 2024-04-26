import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
const ContactForm5 = ({  setFile}) => {
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
      };
    
    return (
        <div1>
          <h1 className="py-[16px] text-[16px]">
            Add Attachments <span className="text-[#98A2B3]">(optional) </span>
          </h1>

          <div className="flex flex-row items-center justify-between p-[8px] border border-[#D2D6DB] rounded-md">
            <span className="text-[#98A2B3] pr-2">
              (a brief, idea, branding...
            </span>
            <div className="bg-[#13AF88] rounded-lg p-2">
              <FontAwesomeIcon className="text-white px-2" icon={faPaperclip} />
              <label
                htmlFor="fileInput"
                className="ml-2 cursor-pointer text-white"
              >
                Add File (5Mb)
              </label>
            </div>

            <input
              
              id="fileInput"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        </div1>
    );
};

export default ContactForm5;