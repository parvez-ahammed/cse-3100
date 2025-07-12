import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import aboutBg from "../assets/bg_pic/about_us_bg.jpg";
export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div
        className="bg-cover bg-center min-h-[700px] flex flex-col items-start justify-start text-white px-4 sm:px-8 md:px-12 py-12 space-y-8"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        {/* About Section */}
        <section className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Rick & Morty Explorer
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            Rick and Morty is an animated sci-fi comedy series that follows the
            misadventures of a brilliant but reckless scientist, Rick Sanchez,
            and his good-hearted but anxious grandson, Morty Smith. Together,
            they travel through space, alternate realities, and bizarre
            dimensions, often facing absurd dangers and moral dilemmas. The show
            blends dark humor, satire, and science fiction, exploring complex
            themes like identity, free will, and the multiverse. Its unique
            storytelling and edgy humor have made it a cult favorite worldwide.
          </p>
        </section>

        {/* Developer Section */}
        <section className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Developer</h2>
          <p className="text-base sm:text-lg leading-relaxed">
            Rick and Morty was created by Justin Roiland and Dan Harmon. Roiland
            voices both main characters, while Harmon, known for *Community*,
            brings his signature storytelling style. The show debuted on Adult
            Swim in 2013 and quickly gained popularity for its clever writing,
            dark humor, and unique take on science fiction.
          </p>
        </section>

        {/* Quote Section */}
        <section className="max-w-3xl">
          <h2 className="text-lg md:text-xl font-serif font-semibold italic">
            "To live is to risk it all; otherwise you're just an inert chunk of
            randomly assembled molecules drifting wherever the universe blows
            you."
            <br />– Rick
          </h2>
        </section>
      </div>
      <Footer />
    </div>
  );
}
