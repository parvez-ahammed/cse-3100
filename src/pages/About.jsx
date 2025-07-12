export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white dark:bg-gray-700 p-8 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-600 transform transition-all duration-500 hover:shadow-3xl animate-fade-in-up">
          {/* Header with logo and version */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
            <div className="flex items-center">
              <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Rick & Morty Explorer
              </h1>
              <span className="ml-3 px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm font-semibold rounded-full animate-pulse">
                v1.0
              </span>
            </div>
            <button
              onClick={() => window.history.back()}
              className="px-5 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-medium rounded-full hover:from-green-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap"
            >
              ← Back to Explorer
            </button>
          </div>

          {/* Main content */}
          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <p className="text-lg leading-relaxed">
              This React application lets you explore characters from the Rick &
              Morty universe. Built with{" "}
              <span className="text-red-500">❤️</span> as part of our CSE-3100
              course project.
            </p>

            {/* Developer Info */}
            <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl border-l-4 border-indigo-400 dark:border-indigo-500">
              <h3 className="font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                Developer Information
              </h3>
              <div className="space-y-2">
                <p>
                  <span className="font-medium">Name:</span> Md Abu Sayem Pias
                </p>
                <p>
                  <span className="font-medium">ID:</span> 20220204100
                </p>
                <p>
                  <span className="font-medium">Section:</span> B
                </p>
              </div>
            </div>

            {/* Features section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-l-4 border-blue-400 dark:border-blue-500">
                <h3 className="font-bold text-blue-600 dark:text-blue-400 mb-2">
                  Features
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Browse all characters</li>
                  <li>Search by name or status</li>
                  <li>Detailed character profiles</li>
                  <li>Responsive design</li>
                </ul>
              </div>

              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl border-l-4 border-purple-400 dark:border-purple-500">
                <h3 className="font-bold text-purple-600 dark:text-purple-400 mb-2">
                  Tech Stack
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>React.js</li>
                  <li>Tailwind CSS</li>
                  <li>React Router</li>
                  <li>Rick and Morty API</li>
                </ul>
              </div>
            </div>

            {/* Quote section */}
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 dark:border-yellow-500 rounded-r-lg animate-pulse">
              <p className="italic text-yellow-800 dark:text-yellow-200">
                <span className="font-bold text-yellow-600 dark:text-yellow-400">
                  Favorite Quote:
                </span>{" "}
                "Wubba Lubba Dub Dub!" – Rick Sanchez
              </p>
            </div>

            {/* Footer section */}
            <div className="pt-6 border-t border-gray-200 dark:border-gray-600">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Data provided by the{" "}
                <a
                  href="https://rickandmortyapi.com/"
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rick and Morty API
                </a>
                . This is a fan-made project not affiliated with Adult Swim.
              </p>
            </div>
          </div>

          {/* Bottom credit */}
          <div className="mt-8 text-center text-gray-400 dark:text-gray-500 text-sm animate-fade-in delay-300">
            <p>
              Made with React, Tailwind CSS, and interdimensional cable
              technology
            </p>
            <p className="mt-1 text-xs">
              © {new Date().getFullYear()} CSE-3100 Project
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
