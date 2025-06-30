export default function About() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-10 text-gray-800">
      <h1
        className="text-4xl mb-6 pb-2 border-b-4 border-[#02afc5]"
        style={{
          fontFamily: "'Get Schwifty', sans-serif",
          color: '#02afc5',
          letterSpacing: '1px',
        }}
      >
        About Rick and Morty Explorer
      </h1>

      <section className="mb-10">
        <h2
          className="text-3xl mb-3"
          style={{ fontFamily: "'Get Schwifty', sans-serif", color: '#4cb5c3' }}
        >
          About the Website
        </h2>
        <p className="leading-relaxed text-lg">
          Rick & Morty Explorer is a dynamic React application designed to make discovering characters from the Rick and Morty universe fun and engaging. The app pulls real-time data from the official API, allowing fans to browse detailed profiles, learn about character origins, locations, and appearances in episodes — all wrapped in a playful, interdimensional design.
        </p>
      </section>

      <section className="mb-10">
        <h2
          className="text-3xl mb-3"
          style={{ fontFamily: "'Get Schwifty', sans-serif", color: '#4cb5c3' }}
        >
          About the Developer
        </h2>
        <p className="leading-relaxed text-lg">
          This project was created by me, Md. Iftekhar Zawad, a dedicated frontend developer and huge Rick and Morty fan. I love merging creativity with technical expertise to build user interfaces that are not only functional but also exciting to explore — just like hopping through different universes with Rick and Morty!
        </p>
      </section>

      <section>
        <h2
          className="text-3xl mb-3"
          style={{ fontFamily: "'Get Schwifty', sans-serif", color: '#4cb5c3' }}
        >
          Favorite Rick & Morty Quote
        </h2>
        <blockquote className="border-l-4 border-[#02afc5] pl-4 italic text-gray-700">
          <p className="mb-2">"Wubba Lubba Dub-Dub!"</p>
          <footer className="text-sm text-gray-500">— Rick Sanchez</footer>
        </blockquote>
        <p className="mt-3 leading-relaxed text-lg">
          This unforgettable catchphrase sums up Rick's wild energy and unpredictable adventures — a true motto for anyone exploring the infinite possibilities of the multiverse.
        </p>
      </section>
    </main>
  );
}
