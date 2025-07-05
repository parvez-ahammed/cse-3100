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
      <div className="flex justify-center gap-6 mb-8">
        <a
          href="https://github.com/sakibul-shovon"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition"
          aria-label="GitHub"
        >
          {/* GitHub SVG */}
          <svg width="36" height="36" fill="currentColor" className="text-gray-800 dark:text-gray-100" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/sakibul-hassan-shovon/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-110 transition"
          aria-label="LinkedIn"
        >
          {/* LinkedIn SVG */}
          <svg width="36" height="36" fill="currentColor" className="text-blue-700 dark:text-blue-400" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2.01 3.61 4.62v5.56z"/>
          </svg>
        </a>
      </div>
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