export default function About() {
  return (
    <main className="flex justify-center py-10 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl p-8 transition hover:shadow-2xl">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">About Rick & Morty Explorer</h1>
        
        <p className="mb-6 text-gray-700 leading-relaxed">
          Rick & Morty Explorer is a fan-made application designed for enthusiasts of the popular animated series, Rick and Morty. 
          This app serves as a comprehensive guide to the show's vast universe, offering detailed information about its characters, locations, and episodes. 
          Whether you're a long-time fan or new to the series, Rick & Morty Explorer provides an engaging way to explore the intricate details of Rick and Morty's adventures.
        </p>

        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Developer</h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Rick & Morty Explorer was developed by Nazim Raian Khan, a passionate software developer and fan of Rick and Morty. 
          With great interest in web developing and creating good user experiences, 
          Nazim worked on this app as a project to learn, explore, and share his love for the series with fellow fans.
        </p>
        <p className="mb-6 text-gray-700 leading-relaxed">
          Nazim enjoys working with modern JavaScript frameworks like React and exploring the creative frontend development. 
          His goal is to build applications that are not only functional but also beautiful and user-friendly.
        </p>
        <p className="mb-6 text-gray-700 leading-relaxed">
          You can check out more of Nazim's work on{" "}
          <a
            href="https://github.com/NazimRaianKhan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            GitHub
          </a>{" "}
          or reach out via email at{" "}
          <a
            href="mailto:nazimraiank@example.com"
            className="text-blue-600 underline hover:text-blue-800"
          >
            nazimraiank@gmail.com
          </a>.
        </p>

        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Favorite Quote</h2>
        <blockquote className="mb-6 italic text-gray-800 border-l-4 border-blue-500 pl-4 hover:bg-blue-50 rounded transition">
          "To live is to risk it all; otherwise you’re just an inert chunk of randomly assembled molecules drifting wherever the universe blows you."
        </blockquote>

        <p className="text-xs text-gray-500">
          This application is not affiliated with or endorsed by the creators of Rick and Morty. It is a fan-made project intended for entertainment and informational purposes only.
        </p>
      </div>
    </main>
  );
}
