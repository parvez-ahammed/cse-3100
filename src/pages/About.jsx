export default function About() {
  return (
    <div className="max-w-4xl mx-auto my-8 px-6 py-8 bg-gray-800 rounded-xl border border-blue-500/50 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-500">
      <h2 className="text-4xl font-bold mb-6 py-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
        About Rick & Morty Explorer
      </h2>
      <div className="space-y-4 text-lg">
        <p className="text-gray-200 leading-relaxed">
          Rick & Morty Explorer is a fan-made application for enthusiasts of the
          popular animated series, Rick & Morty. This app serves as a
          comprehensive guide to the show's vast universe, offering detailed
          information about its characters, locations, and episodes. Whether
          you're a lon-time fan or new to the series, Rick & Morty Explorer
          provides an engaging way to explore the intricate details of Rick and
          Morty's adventures
        </p>
        <h3 className="text-2xl font-semibold text-blue-300">Developer</h3>
        <p className="text-gray-200">
          Rick & Morty Explorer was developed by Ethan Carter, a passionate fan
          of software development and a deep appreciation for the show's
          creativity and humor, Ethan created this app to share his enthusiasm
          with fellow fans. The app is a testament to the vibrant community,
          surrounding Rick & Morty and a tribute to its imaginative
          storytelling.
        </p>
        <h3 className="text-2xl font-semibold text-blue-300">Favorite Quote</h3>
        <p className="italic text-teal-300">
          "To live is to risk it all, otherwise, you're just an inert chunk of
          randomly assembled molecules drifting wherever the universe blows
          you."
        </p>
        <p className="pt-4 text-gray-400 text-sm font-light">
          This application is not affiliated with or endorsed by the creators of
          Rick & Morty. It is a fan-made project for entertainment and
          informational purposes only.
        </p>
      </div>
    </div>
  );
}
