export default function About() {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white border border-gray-200 shadow-2xl rounded-lg transition duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">About Rick & Morty Explorer</h1>

      <p className="text-gray-700 leading-relaxed mb-4">
        <strong>Rick & Morty Explorer</strong> is a fun and interactive React-based web app that allows users to explore characters from the popular animated series <em>Rick and Morty</em>.
        You can browse character profiles, view images, and learn quirky facts — all pulled directly from the Rick and Morty API.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This application was developed as a project for <strong>CSE-3100</strong> to help students gain hands-on experience building modern web apps using React, Tailwind CSS, and API integration.
      </p>

      <p className="text-gray-700 leading-relaxed">
        Beyond just exploring characters, the app is a practical learning tool — teaching routing, component design, data fetching, and responsive UI development.
        We hope you enjoy using it as much as we enjoyed building it!
      </p>
    </div>
  );
}
