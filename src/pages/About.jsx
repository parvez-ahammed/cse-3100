
import { Link } from 'react-router-dom';

// Enhanced futuristic about page with dynamic holographic card and gradient background
const AboutPage = () => (
  <main className="container mx-auto p-6 bg-gradient-to-br from-dark-space via-purple-950 to-dark-space min-h-screen flex flex-col items-center justify-center">
    <h1 className="text-5xl md:text-6xl font-extrabold uppercase tracking-widest text-neon-green mb-10 animate-pulse-glow select-none text-center">
      About the Rick & Morty Explorer
    </h1>
    <article className="bg-holo-glass backdrop-blur-lg border border-neon-green/40 rounded-2xl p-8 max-w-3xl w-full mx-auto shadow-[0_0_20px_rgba(0,255,159,0.4)] animate-fade-in transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,159,0.6)]">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Welcome to the Multiverse</h2>
        <p className="text-white/90 text-lg leading-relaxed">
          The <span className="text-hot-pink font-semibold">Rick & Morty Character Explorer</span> is your portal to the wild and wacky multiverse of the hit TV show. Powered by the Rick and Morty API, this app lets you discover and explore characters, their adventures, and the chaos of infinite dimensions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="text-xl font-semibold text-neon-green mb-2">Our Mission</h3>
          <p className="text-white/80">
            To bring the interdimensional madness of Rick and Morty to your fingertips, with a sleek, futuristic interface that’s as chaotic and fun as the show itself.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-neon-green mb-2">Developed By</h3>
          <p className="text-white/80">
            <strong>Abhishek Sarker , ID 20220204104
              </strong> Ahsanullah University of Science and technology,Department of CSE 
          </p>
        </div>
      </div>
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold text-neon-green mb-2">Favorite Quote</h3>
        <p className="text-white/80 italic text-lg">
          <span className="text-hot-pink">"Wubba Lubba Dub Dub!"</span> - Rick Sanchez
        </p>
      </div>
      <div className="flex justify-center">
        <Link
          to="/"
          className="group relative text-neon-green font-semibold flex items-center gap-2 px-6 py-3 bg-dark-space/70 rounded-lg transition-all duration-300 hover:bg-hot-pink hover:text-dark-space focus:outline-none focus:ring-4 focus:ring-neon-green focus:ring-opacity-50 active:scale-95 whitespace-nowrap"
          aria-label="Return to homepage"
        >
          <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to Home</span>
        </Link>
      </div>
    </article>
    <footer className="mt-10 text-white/60 text-center">
      <p>Powered by <a href="https://rickandmortyapi.com/" className="text-neon-green hover:text-hot-pink transition-colors" target="_blank" rel="noopener noreferrer">Rick and Morty API</a></p>
    </footer>
  </main>
);

export default AboutPage;