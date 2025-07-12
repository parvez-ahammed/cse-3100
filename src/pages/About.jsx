import Header from "../components/Header/header";
import Footer from "../components/footer/Footer";

export default function About() {
  return (
    <div className="min-h-screen transition-colors duration-300 bg-gray-900">
      <Header />

      {/* Hero Section */}
      <div className="relative h-64 md:h-80 lg:h-96">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://static.posters.cz/image/hp/66133.jpg')",
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl font-bold text-white drop-shadow-md">
            About
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl">
            Learn more about the Rick & Morty Explorer
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-16 space-y-16">
        {/* About Rick & Morty Section */}
        <div className="rounded-2xl shadow-md p-8 bg-gray-800">
          <h2 className="text-3xl font-bold mb-6 text-green-400">
            About Rick and Morty
          </h2>
          <p className="text-lg leading-relaxed text-green-200">
            *Rick and Morty* is an American animated science fiction sitcom
            created by Justin Roiland and Dan Harmon. The show follows the
            misadventures of Rick Sanchez, a cynical mad scientist, and his
            good-hearted but easily influenced grandson Morty Smith. Together,
            they travel across galaxies, alternate dimensions, and bizarre
            realities. Known for its dark humor, deep science fiction themes,
            and philosophical questions, *Rick and Morty* has become a cultural
            phenomenon since its debut in 2013 on Adult Swim.
          </p>
        </div>

        {/* Famous Quote */}
        <div className="rounded-2xl shadow-md p-6 bg-gray-800">
          <h2 className="text-2xl font-semibold mb-3 text-green-400">
            Famous Quote by Rick
          </h2>
          <blockquote className="border-l-4 pl-4 italic rounded-md border-green-400 bg-gray-700 text-green-200">
            "Sometimes science is more art than science, Morty. A lot of people
            don't get that."
          </blockquote>
        </div>

        {/* Developer Info */}
        <div className="rounded-2xl shadow-md p-6 text-center bg-gray-800">
          <h2 className="text-2xl font-semibold mb-2 text-green-400">
            Developer Info
          </h2>
          <p className="text-lg text-green-200">
            Developed by <strong>Adnan Kader Mitul</strong>
          </p>
          <p className="text-md mt-1 text-green-300">ID: 20220204102</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
