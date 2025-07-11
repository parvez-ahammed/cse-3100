import React from "react";
import "../styles/About.css";
import developerImage from "../assets/tahmid.jpg"; 

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Rick & Morty Explorer</h1>

      {/* App Info Section */}
      <section className="about-section">
        <h2 className="about-subheading">🧭 What is this app?</h2>
        <p className="about-text">
          Step into the vast multiverse of Rick and Morty with our all-in-one character explorer.
Explore rich character profiles, track their episode journeys,
and uncover unique interdimensional stats that bring each personality to life.
        </p>
      </section>

      {/* Developer Section */}
      <section className="about-section">
        <h2 className="about-subheading">👨‍💻 Developer</h2>

        <div className="developer-card no-box">
          <div className="about-image-wrapper">
            <a href={developerImage} download>
              <img
                src={developerImage}
                alt="Developer"
                className="about-image hoverable-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/200";
                }}
              />
            </a>
          </div>

          <div className="developer-text">
            <h3 className="developer-name">Md Tahmid Amir</h3>
            <p className="developer-role">Frontend Developer</p>
            <a
              href="mailto:tahmid.cse.20220204082@aust.edu"
              className="developer-email"
            >
              tahmid.cse.20220204082@aust.edu
            </a>
          </div>
        </div>
      </section>

      {/* Favorite Quote Section */}
      <section className="about-section">
        <h2 className="about-subheading">🧠 Favorite Quote</h2>
        <blockquote className="about-quote">
           "To live is to risk it all; otherwise you're just an inert chunk of randomly assembled molecules drifting wherever the universe blows you". - Rick Sanchez <br />
        </blockquote>
      </section>
    </div>
  );
}
