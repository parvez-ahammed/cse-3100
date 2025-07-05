import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-green-100 min-h-screen py-12 px-4 flex justify-center items-center">
      <div className="max-w-3xl w-full bg-white shadow-xl rounded-xl p-8 space-y-6">
        <h1 className="text-4xl font-bold text-green-700 text-center">About This App</h1>
        <section className="text-gray-800 space-y-3">
          <h2 className="text-2xl font-semibold text-indigo-600">📱 What is this app?</h2>
          <p>
            This is a fun web application that lets you explore characters from the
            hit cartoon series <span className="italic font-bold">Rick and Morty</span>.
            You can search, filter, and view detailed profiles of characters using data from
            the official <span className="font-semibold">Rick and Morty API</span>.
          </p>
        </section>
        <section className="text-gray-800 space-y-3">
          <h2 className="text-2xl font-semibold text-indigo-600">👨‍💻 Developer</h2>
          <p>
            This app was developed by <span className="font-bold">Rafy Bhuiyan</span>, a passionate
            web developer who loves blending creativity with code. He is currently pursuing a B.Sc. in Computer Science at Ahsanullah University of Science and Technology.
            This project was his course assigment of CSE 3100.
          </p>
        </section>
        <section className="text-gray-800 space-y-3">
          <h2 className="text-2xl font-semibold text-indigo-600">🧠 Favorite Quote</h2>
          <blockquote className="italic border-l-4 border-green-400 pl-4 text-gray-700">
            "Weddings are basically funerals with cake." — <strong>Rick Sanchez</strong>
          </blockquote>
        </section>

        {/* Back button */}
        <div className="text-center pt-4">
          <Link
            to="/"
            className="inline-block bg-indigo-500 hover:bg-green-500 text-white font-semibold px-6 py-2 rounded-lg transition"
          >
            ⬅️ Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}