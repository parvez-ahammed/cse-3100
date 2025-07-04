
import Navbar from "./Navbar";
import React from "react";
import Hero2 from "./Hero_Section/Hero2";
import Hero1 from "./Hero_Section/Hero1";
import { AppleCardsCarouselDemo } from "./Verti_char/Character";
export default function Home() {
 
  return (
    
<div className="w-full bg-black">

<div className="w-full h-[100vh] bg-black flex">
  <div className="w-1/2">
    <Hero2 />
  </div>
  <div className="w-1/2">
    <Hero1 />
  </div>
</div>

  <div className="w-full border-t-8 border-gray-500"></div>
  
  <AppleCardsCarouselDemo className="fixed"/>
</div>


  );  
}



