import React from "react";

const Header = () => {
  const handleHome = () => {
    console.log("Home clicked");
  };

  const handleAbout = () => {
    console.log("About clicked");
  };

  const handleContact = () => {
    console.log("Contact clicked");
  };

  return (
    <header className="bg-black border-green-400 border-b-2 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center cursor-pointer" onClick={handleHome}>
          <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center mr-3">
            <span className="text-black font-bold text-sm">R&M</span>
          </div>
          <h1 className="text-green-400 text-xl font-bold">RICK & MORTY</h1>
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-4">
          <nav className="flex space-x-4">
            <button
              onClick={handleAbout}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-semibold"
            >
              About Us
            </button>
            <button
              onClick={handleContact}
              className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded font-semibold"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
