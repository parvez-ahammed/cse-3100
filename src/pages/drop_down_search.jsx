import React, { useState } from 'react';
import statemanage from '../stateManage/contex';
const Statusdropdown = () => {
  const [open, setOpen] = useState(false);
  const {selected,setSelected}=statemanage()
  

  const options = ["Alive", "Dead","All"];

  const handleSelect = (status) => {
    setSelected(status);
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-200 text-black px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none"
      >
        
        {selected==""?"Search Stauts":selected} ▾
      </button>

      {open && (
        <ul className="absolute mt-2 w-40 bg-white border rounded-md shadow-lg z-10">
          {options.map((status, index) => (
            <li
              key={index}
              onClick={() => handleSelect(status)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Statusdropdown;
