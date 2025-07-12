import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0f2027] via-[#203a43] to-[#2c5364] p-8 sm:p-6">
      <div className="max-w-[1400px] mx-auto bg-white/5 rounded-2xl backdrop-blur-lg shadow-lg border border-white/20 p-8 relative">
        <Navbar />
        <Banner />
      </div>
    </div>
  );
}
