import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen px-5 py-10 bg-gradient-to-tr from-[#0f2027] via-[#203a43] to-[#2c5364] flex flex-col items-center font-orbitron text-[#00ffd5] relative overflow-hidden">
      <Link
        to="/"
        className="self-start bg-cyan-400/20 text-cyan-400 px-6 py-2 rounded-full font-bold mb-8 shadow-cyan-400/80 hover:bg-cyan-400/30 transition duration-300 inline-block"
      >
        ⬅ Back
      </Link>

      <div className="w-full max-w-xl bg-white/10 backdrop-blur-lg border border-cyan-400/20 rounded-3xl shadow-[0_10px_40px_rgba(0,255,204,0.2)] px-8 py-10">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

        <p className="text-lg text-center text-cyan-100 mb-8">
          Got questions or any suggestions? Reach out and let's connect!
        </p>

        <form className="flex flex-col">
          <label htmlFor="name" className="mb-2 font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            className="bg-white/10 border-none rounded-xl px-4 py-3 mb-5 text-[#00ffd5] outline-none placeholder:text-cyan-200"
          />

          <label htmlFor="email" className="mb-2 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            className="bg-white/10 border-none rounded-xl px-4 py-3 mb-5 text-[#00ffd5] outline-none placeholder:text-cyan-200"
          />

          <label htmlFor="message" className="mb-2 font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Your message"
            className="bg-white/10 border-none rounded-xl px-4 py-3 mb-5 text-[#00ffd5] outline-none placeholder:text-cyan-200 resize-y"
          />

          <button
            type="submit"
            className="bg-gradient-to-br from-[#00ffd5] to-[#00b3ff] text-black font-bold text-lg py-3 rounded-full shadow-[0_5px_15px_rgba(0,255,204,0.3)] hover:scale-[1.03] transition"
          >
            Send Message
          </button>
        </form>

        <p className="mt-8 text-center italic text-[#008b6b] font-semibold">
          Developed by Sadia Sultana
        </p>
      </div>
    </div>
  );
};

export default Contact;
