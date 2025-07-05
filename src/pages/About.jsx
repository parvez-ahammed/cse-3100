import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Rick & Morty Explorer</h1>
        <p>Your gateway to the infinite multiverse</p>
      </div>

      <div className="about-content">
        <section className="app-info">
          <h2>About the App</h2>
          <p>
            Rick & Morty Explorer is a comprehensive single-page application that
            allows users to explore, search, and discover characters from the
            beloved animated series "Rick and Morty". Built with modern web
            technologies, this app provides an intuitive and engaging way to dive
            deep into the Rick and Morty universe.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="11"
                    cy="11"
                    r="8"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="m21 21-4.35-4.35"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Smart Search</h3>
              <p>Search characters by name with real-time filtering</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 6H21L19 20H5L3 6Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 6V4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3>Advanced Filtering</h3>
              <p>Filter characters by status (Alive, Dead, Unknown)</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="4"
                    width="20"
                    height="16"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path d="M10 4V2" stroke="currentColor" strokeWidth="2" />
                  <path d="M14 4V2" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3>Responsive Design</h3>
              <p>Optimized for all devices and screen sizes</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3>Dark Mode</h3>
              <p>Toggle between light and dark themes</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <polyline
                    points="14,2 14,8 20,8"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3>Episode Details</h3>
              <p>View detailed episode information for each character</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <polyline
                    points="17,21 17,13 7,13 7,21"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <polyline
                    points="7,3 7,8 15,8"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3>Persistent Preferences</h3>
              <p>Your search preferences are saved locally</p>
            </div>
          </div>
        </section>

        <section className="developer-info">
          <h2>About the Developer</h2>
          <div className="developer-card">
            <div className="developer-avatar">👨‍💻</div>
            <div className="developer-details">
              <h3>Md. Rubayet Islam</h3>
              <p className="developer-title">
                Computer Science & Engineering Student | Full Stack Developer & Rick and Morty Enthusiast
              </p>
              <div className="academic-info">
                <div className="info-row">
                  <span className="info-label">🎓 University:</span>
                  <span className="info-value">Ahsanullah University of Science and Technology</span>
                </div>
                <div className="info-row">
                  <span className="info-label">📚 Department:</span>
                  <span className="info-value">Computer Science & Engineering (CSE)</span>
                </div>
                <div className="info-row">
                  <span className="info-label">📅 Semester:</span>
                  <span className="info-value">3rd Year, 1st Semester</span>
                </div>
                <div className="info-row">
                  <span className="info-label">🆔 Student ID:</span>
                  <span className="info-value">20220204069</span>
                </div>
              </div>
              <p className="developer-description">
                Passionate about creating interactive web experiences and exploring the
                infinite possibilities of the multiverse. This project combines my love
                for React development with my appreciation for the brilliant storytelling
                of Rick and Morty. Currently pursuing Computer Science & Engineering at
                AUST, focusing on modern web technologies and full-stack development.
              </p>

              <div className="developer-skills">
                <span className="skill-tag">React</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">API Integration</span>
                <span className="skill-tag">Responsive Design</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">MERN Stack</span>
              </div>
            </div>
          </div>
        </section>

        <section className="favorite-quote">
          <h2>Favorite Rick & Morty Quote</h2>
          <blockquote className="quote-card">
            <div className="quote-text">
              "Nobody exists on purpose. Nobody belongs anywhere. Everybody's gonna
              die. Come watch TV."
            </div>
            <div className="quote-author">— Morty Smith</div>
            <div className="quote-context">
              Season 1, Episode 8: "Rixty Minutes"
            </div>
          </blockquote>
          <p className="quote-explanation">
            This quote perfectly captures the existential humor and philosophical
            depth that makes Rick and Morty such a compelling series. It's both
            nihilistic and comforting, reminding us that in an infinite universe,
            sometimes the best thing we can do is simply enjoy the journey
            together.
          </p>
        </section>

        <section className="tech-stack">
          <h2>Technology Stack</h2>
          <div className="tech-grid">
            <div className="tech-item">
              <strong>Frontend:</strong> React 19, React Router
            </div>
            <div className="tech-item">
              <strong>Styling:</strong> CSS3, Responsive Design
            </div>
            <div className="tech-item">
              <strong>API:</strong> Rick and Morty API
            </div>
            <div className="tech-item">
              <strong>Build Tool:</strong> Vite
            </div>
            <div className="tech-item">
              <strong>State Management:</strong> React Hooks
            </div>
            <div className="tech-item">
              <strong>Persistence:</strong> localStorage
            </div>
          </div>
        </section>

        <section className="acknowledgments">
          <h2>Acknowledgments</h2>
          <p>
            Special thanks to the creators of the{" "}
            <a
              href="https://rickandmortyapi.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rick and Morty API
            </a>{" "}
            for providing such a comprehensive and well-documented API. Also,
            immense gratitude to Dan Harmon and Justin Roiland for creating the
            brilliant universe of Rick and Morty that inspired this project.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
