import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          About Rick & Morty Explorer
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">About the App</h2>
          <p className="text-gray-700 mb-4">
            This is a comprehensive React application that allows users to
            explore the vast universe of Rick and Morty characters. Built with
            modern React features including hooks, routing, and state
            management, this app provides an intuitive interface for browsing,
            searching, and discovering detailed information about your favorite
            characters.
          </p>
          <p className="text-gray-700">
            The application fetches data from the official Rick and Morty API,
            providing up-to-date information about characters, their status,
            origins, and episodes they've appeared in.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Developer</h2>
          <p className="text-gray-700 mb-2">
            <strong>Name:</strong> Md. Rubayet Islam
          </p>
          <p className="text-gray-700 mb-2">
            <strong>ID:</strong> 20220204069
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Course:</strong> CSE-3100
          </p>
          <p className="text-gray-700">
            <strong>University:</strong> Ahsanullah University of Science and
            Technology (AUST)
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-lg p-6 text-white">
          <h2 className="text-2xl font-semibold mb-4">
            Favorite Rick & Morty Quote
          </h2>
          <blockquote className="text-lg italic mb-4">
            "Wubba lubba dub dub!"
          </blockquote>
          <p className="text-sm opacity-90">
            - Rick Sanchez (which actually means "I am in great pain, please
            help me" in Bird Person's language)
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
