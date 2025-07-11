import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="w-screen h-56 bg-[#9c9c9c] flex justify-center items-center m-0 p-0">
      <img
        src={assets.logo2}
        alt="Header"
        className="object-contain h-full m-0 p-0"
      />
    </div>
  );
};

export default Header;



