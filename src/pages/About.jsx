import React from "react";
import "./styles/About.css";

const About = () => (
    <div className="about-container">
        <header className="about-hero">
            <h1>Rick & Morty Explorer</h1>
            <p className="about-tagline">Explore the multiverse, one character at a time.</p>
        </header>

        <main className="about-main-content">
            <section className="about-section app-description">
                <h2>What is this app?</h2>
                <p>
                    Rick & Morty Explorer is a modern web app for discovering, searching, and learning about characters and episodes from the Rick and Morty universe. Enjoy a fast, responsive, and visually engaging experience powered by the public Rick and Morty API.
                </p>
            </section>

            <section className="about-section features-list">
                <h2>Features</h2>
                <ul>
                    <li>🔍 Instant character search</li>
                    <li>🎯 Filter by status and species</li>
                    <li>📱 Fully responsive design</li>

                    <li>📺 Episode details for each character</li>
                    <li>💾 Local preference saving</li>
                </ul>
            </section>

            <section className="about-section developer-profile">
                <h2>Meet the Developer</h2>
                <div className="dev-card">
                    <div className="dev-avatar">A</div>
                    <div className="dev-info">
                        <h3>Adel Mohammad Zahid</h3>
                        <p className="dev-title">CSE Student, Ahsanullah University of Science and Technology</p>
                        <div className="dev-meta">
                            <span>3rd Year, 1st Semester</span>
                            <span>ID: 20220204057</span>
                        </div>
                        <p className="dev-desc">
                            Passionate about web development, UI/UX, and exploring new technologies. I love building interactive apps that make data fun and accessible. Rick & Morty Explorer is a project that combines my enthusiasm for coding and my love for the show!
                        </p>
                        <div className="dev-contact">
                            <a href="mailto:adelzahid.cse@gmail.com">adelzahid.cse@gmail.com</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-section quote-section">
                <h2>Favorite Rick & Morty Quote</h2>
                <blockquote>
          <span className="quote-text">
            "Wubba lubba dub dub!"
          </span>
                    <span className="quote-author">— Rick Sanchez</span>
                </blockquote>
                <p className="quote-context">
                    (Which means "I am in great pain, please help me" in Birdperson's language.)
                </p>
            </section>

            <section className="about-section tech-stack">
                <h2>Tech Stack</h2>
                <div className="tech-list">
                    <span>React</span>
                    <span>React Router</span>
                    <span>CSS3</span>
                    <span>Vite</span>
                    <span>Rick and Morty API</span>
                    <span>localStorage</span>
                </div>
            </section>

            <section className="about-section acknowledgments">
                <h2>Acknowledgments</h2>
                <p>
                    Thanks to the <a href="https://rickandmortyapi.com" target="_blank" rel="noopener noreferrer">Rick and Morty API</a> team for their awesome API, and to Dan Harmon & Justin Roiland for creating this amazing universe!
                </p>
            </section>
        </main>
    </div>
);

export default About;