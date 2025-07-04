// src/components/Navbar.jsx
import React from "react";
import Contact from './Contact'
import About from './About'

const Navbar = () => {
  return (
    <nav className=" backdrop-blur-[15px] p-[1rem] fixed w-[80%] left-[50%] translate-x-[-50%] top-[2rem] rounded-[30px] border-[1px] border-solid border-[#ffffff80] shadow-[0_6px_6px_rgba(0,0,0,0.5)] z-50">
      <div >
       {/*  <div className="text-black text-2xl font-bold">MyApp</div>*/}
        <ul className="  text-white list-none flex justify-center gap-[3rem] text-3xl">
          <li><a href="/" className="hover:text-gray-300">Home</a></li>
          <li><a href="/about" className="hover:text-gray-300">About</a></li>
          <li><a href="/character" className="hover:text-gray-300">Character</a></li>
          <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

