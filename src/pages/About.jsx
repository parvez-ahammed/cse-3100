import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] px-5 py-10 flex flex-col items-center font-orbitron relative overflow-hidden">
      <Link
        to="/"
        className="self-start bg-cyan-400/20 text-cyan-400 px-6 py-2 rounded-full font-bold mb-8 shadow-cyan-400/80 hover:bg-cyan-400/30 transition duration-300 inline-block"
      >
        ⬅ Back
      </Link>

      {/* Twinkling Stars Background */}
      <div
        className="absolute inset-0 z-0 animate-starTwinkle pointer-events-none"
        style={{
          background:
            "radial-gradient(2px 2px at 20% 30%, #00ffd5, transparent), radial-gradient(3px 3px at 70% 60%, #00fff7, transparent), radial-gradient(1.5px 1.5px at 40% 80%, #00c6a7, transparent)",
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      ></div>

      {/* Glassmorphic Container */}
      <div className="relative z-10 max-w-3xl w-full bg-white/10 rounded-[40px_10px_40px_10px] backdrop-blur-xl border border-cyan-400/10 shadow-[0_10px_40px_rgba(0,255,204,0.2)] p-10 text-cyan-300 text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-cyan-200">
          About Rick & Morty Explorer
        </h1>

        <ul className="text-lg md:text-xl leading-relaxed space-y-4 mb-10">
          <p className="text-base md:text-lg text-cyan-100 leading-relaxed mb-6">
            Welcome to the{" "}
            <span className="text-cyan-400 font-semibold">
              Rick & Morty Explorer
            </span>{" "}
            — a portal into the multiverse! 🚀 This website lets you explore
            detailed profiles of characters from the hit animated sci-fi series{" "}
            <span className="italic text-cyan-300">Rick and Morty</span>.
            Whether you're looking for information about your favorite
            interdimensional misfits or just curious to browse through the
            chaos, this platform offers a sleek, responsive, and interactive way
            to do so.
          </p>

          <p className="text-base md:text-lg text-cyan-100 leading-relaxed mb-6">
            Built as part of a Software Development course assignment, this app
            features live data from the official Rick and Morty API. You can
            search by name, filter characters by status, and explore detailed
            views for each one — all wrapped in a sci-fi aesthetic inspired by
            the show’s bizarre, neon-fueled universe. 🧪✨
          </p>

          <p className="text-base md:text-lg text-cyan-100 leading-relaxed">
            Whether you're a fan, a developer, or just passing through
            dimensions, this site is for you.
          </p>
        </ul>

        <blockquote className="text-2xl font-semibold italic mb-8 text-[#00fff7]">
          “Wubba Lubba Dub-Dub!” — Rick Sanchez
        </blockquote>

        <div className="mt-10 text-center text-sm text-[#00e0b6] font-semibold italic tracking-wide">
          Developed by Sadia Sultana 👩‍💻 <br />
          Just another curious mind from AUST, CSE, Year 3 🎓 <br />
          Crafted this during a multiverse-level coding session for my Software
          Development course 🛠️🪐
        </div>
      </div>

      {/* Star Twinkle Animation */}
      <style>{`
        @keyframes starTwinkle {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0.4; }
        }

        .animate-starTwinkle {
          animation: starTwinkle 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default About;
