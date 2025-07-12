import React from 'react';
import './AboutPage.css'; // Import the CSS file

export default function AboutPage() {
  return (
    <div className="about-page">
      <h1 className="about-heading">🌌 About This App</h1>
      <div className="about-content">
        <p>
          Once upon a glitch in the multiverse, a curious CSE dev named <strong>Tinni 👩‍💻</strong> asked:
          <em> “What if we could explore Rick & Morty characters like we explore universes?”</em>
        </p>
        <p>
          Thus, this app was born — a React-powered portal into the wild, weird, and wonderful world of Rick, Morty, and their infinite variants.
        </p>
        <p>
          Whether you’re scouting for Pickle Rick, Birdperson, or just vibing with Mr. Meeseeks — this app lets you search, explore, and discover all your multiverse faves 💥.
        </p>
        <p><strong>🛠 Developer:</strong> Tinni</p>
        <p><strong>💬 Favorite Quote:</strong> “Wubba Lubba Dub Dub!” — Rick Sanchez</p>
      </div>
    </div>
  );
}
