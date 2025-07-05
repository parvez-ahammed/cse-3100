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
              <div className="feature-icon">🔍</div>
              <h3>Smart Search</h3>
              <p>Search characters by name with real-time filtering</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Advanced Filtering</h3>
              <p>Filter characters by status (Alive, Dead, Unknown)</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Responsive Design</h3>
              <p>Optimized for all devices and screen sizes</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🌙</div>
              <h3>Dark Mode</h3>
              <p>Toggle between light and dark themes</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📺</div>
              <h3>Episode Details</h3>
              <p>View detailed episode information for each character</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💾</div>
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
