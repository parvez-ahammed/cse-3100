import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="px-5 md:px-20 py-8 bg-gray-50 min-h-screen">
      {/* ABOUT US SECTION */}
      <div className="text-center relative mb-8">
        <h1 className="text-2xl font-extrabold text-gray-800">
          About Rick and Morty Explorer
        </h1>
      </div>

      {/* CONTENT SECTION */}
      <div className="my-8 flex flex-col md:flex-row gap-6 items-center justify-center">
        {/* Description Box with Double Border */}
        <div
          className="flex flex-col justify-center gap-4 md:w-2/4 text-gray-700 p-4 rounded-lg relative bg-white text-sm"
          style={{ border: "4px double #22c55e" }}
        >
          <p>
            This is a simple React website that lets you browse characters from
            the Rick & Morty universe. Built with students of CSE-3100.
          </p>
          <p>
            This is an assignment for the course: Software Development-IV, CSE
            3100 for the Fall-24 semester at Ahsanullah University of Science
            and Technology. It is built with React. Tools used include: VS Code,
            GitHub. ChatGPT were used for code generation.
          </p>

          <h2 className="text-lg font-semibold text-gray-800 mt-3">
            About the Developer
          </h2>
          <p className="text-gray-600">
            I'm Jerin Jalal. I'm currently a 3rd Year 1st Semester student at
            Ahsanullah University of Science and Technology, pursuing a BSc
            degree in Computer Science and Engineering.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mt-3">
            Favorite Rick & Morty Quote
          </h3>
          <blockquote className="italic text-gray-600 mt-1 border-l-4 border-green-500 pl-3">
            "Wubba Lubba Dub Dub" - Rick
          </blockquote>

          <p className="text-gray-600 mt-2">
          Hope you watch the show and discover more details here!
          </p>

          {/* LOGO in Bottom Right */}
          <img
            className="w-14 absolute bottom-2 right-2 opacity-70"
            src={assets.logo}
            alt="Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
