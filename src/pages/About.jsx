export default function About() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">About Us</h1>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">About this App</h2>
        <p className="text-gray-600">
          Welcome to the Rick & Morty Explorer! This is a React web application
          designed for fans and newcomers alike to browse and learn about
          characters from the famous animated series.
        </p>
        <p className="text-gray-600">
          Built as an assignment for Software Development-IV (CSE 3100), Fall-24
          semester at Ahsanullah University of Science and Technology, it
          combines practical coding with creativity.
        </p>
        <p className="text-gray-600">
          Tools & technologies include React, Tailwind CSS, GitHub for version
          control, and OpenAI’s ChatGPT & Gemini AI for code assistance.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">
          Why we built it
        </h2>
        <p className="text-gray-600">
          Beyond meeting course requirements, the goal was to create something
          fun, dynamic, and API-driven, so students can practice integrating
          real-world data and building responsive UIs.
        </p>
        <p className="text-gray-600">
          It’s a living example of how small projects help us learn faster and
          showcase our skills.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">
          About the Developer
        </h2>
        <p className="text-gray-600">
          I'm Prionty Saha, a 3rd Year 1st Semester Computer Science student at
          AUST. I'm passionate about front-end development, React, and exploring
          new technologies.
        </p>
        <p className="text-gray-600">
          This project taught me a lot about working with APIs, designing with
          Tailwind, and handling pagination & search in React.
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-gray-800">Future Ideas</h3>
        <p className="text-gray-600">
          Adding episode filters, character favorites, and a dark mode are on my
          wishlist for next versions!
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-gray-800">
          Favorite Rick & Morty Quote
        </h3>
        <blockquote className="italic text-gray-600">
          "Wubba Lubba Dub Dub" - Rick
        </blockquote>
        <p className="text-gray-600">
          (I haven't watched the whole show yet, but it’s definitely on my watch
          list!)
        </p>
      </div>
    </div>
  );
}
