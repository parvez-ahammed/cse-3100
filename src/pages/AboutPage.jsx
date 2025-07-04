import React from 'react';

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto my-12 p-8 rounded-xl bg-white dark:bg-gray-800 shadow-lg text-center">
      <h2 className="text-4xl font-extrabold text-blue-700 dark:text-blue-400 mb-4 drop-shadow">
        About Rick & Morty Explorer
      </h2>
      <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
        Developer: <span className="text-blue-600 dark:text-blue-300">Sakibul Hassan Shovon</span>
      </h3>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        This application allows you to explore characters from the Rick & Morty universe.<br />
        Built for fun and learning as part of a web application development course.
      </p>
      <blockquote className="italic text-xl text-blue-500 dark:text-blue-300 border-l-4 border-blue-400 pl-4 mb-4">
        "Wubba Lubba Dub Dub!" - Rick Sanchez
      </blockquote>
      <img
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        alt="Rick Sanchez"
        className="mx-auto rounded-full w-32 h-32 border-4 border-blue-400 shadow-lg"
      />
    </div>
  );
}