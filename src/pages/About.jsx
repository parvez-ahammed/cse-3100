export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-teal-100 to-white px-4 py-16 flex justify-center items-start text-gray-800">
      <div className="bg-white/70 backdrop-blur-lg border border-gray-200 shadow-xl rounded-xl p-8 w-full max-w-3xl animate-fadeIn space-y-8">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-indigo-500 to-purple-600 animate-slideUp">
          🌌 About Rick & Morty Explorer
        </h1>

        <p className="leading-relaxed text-base text-gray-700 animate-fadeIn delay-100">
          <span className="text-indigo-600 font-semibold">Rick & Morty Explorer</span> is a fan-made application built for fellow fans of the iconic animated series,
          <strong> Rick and Morty</strong>. Dive into character details, origin planets, locations, and episodes — all in a fun, engaging UI.
        </p>

        <div className="border-t border-gray-300 pt-6 animate-slideUp delay-200">
          <h2 className="text-xl font-semibold text-teal-700 mb-2">👨‍💻 Developer</h2>
          <p className="text-gray-700 text-base">
            Made by <strong className="text-gray-900">Mahmudul Hasan Fahim</strong>, a passionate frontend developer and long-time Rick and Morty fan. This app blends his love for great UI with multiverse madness.
          </p>
        </div>

        <div className="border-t border-gray-300 pt-6 animate-slideUp delay-300">
          <h2 className="text-xl font-semibold text-purple-700 mb-2">🧠 Favorite Quote</h2>
          <blockquote className="italic text-lg border-l-4 pl-4 border-indigo-400 text-gray-700">
            “Sometimes science is more art than science, Morty. A lot of people don't get that.”
          </blockquote>
        </div>

        <p className="text-xs text-gray-500 pt-4 animate-fadeIn delay-400">
          Disclaimer: This project is not affiliated with or endorsed by the creators of Rick and Morty. It's a fan-made app created for learning and entertainment.
        </p>
      </div>
    </div>
  );
}
