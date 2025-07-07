import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="container my-4">
      <Link to="/" className="btn btn-secondary mb-4">
        ← Back to Home
      </Link>

      <h2>About Rick & Morty Explorer</h2>

      <div className="about-content">
        <div className="app-info mb-4">
          <h3>About the App</h3>
          <p>
            This is an interactive single-page application that allows users to
            explore, filter, and view detailed information about characters from
            the Rick and Morty universe. Built with React and powered by the
            public Rick and Morty API, this app provides a seamless experience
            for fans to discover their favorite characters.
          </p>
          <p>
            Features include character search, status filtering, pagination, and
            detailed character profiles with information about their origin,
            location, and episode appearances.
          </p>
        </div>

        <div className="developer-info mb-4">
          <h3>Developer</h3>
          <p>
            This app was developed as part of CSE-3100 assignment to demonstrate
            React development skills including routing, API integration, state
            management, and user interface design.
          </p>
        </div>

        <div className="favorite-quote">
          <h3>Favorite Rick & Morty Quote</h3>
          <blockquote className="blockquote">
            <p className="mb-0">"Wubba lubba dub dub!"</p>
            <footer className="blockquote-footer mt-2">
              Rick Sanchez -{" "}
              <cite title="Source Title">
                which means "I am in great pain, please help me"
              </cite>
            </footer>
          </blockquote>
        </div>

        <div className="tech-info mt-4">
          <h3>Technologies Used</h3>
          <ul>
            <li>React 19.1.0</li>
            <li>React Router DOM 7.6.2</li>
            <li>Vite for build tooling</li>
            <li>Rick and Morty API</li>
            <li>Bootstrap CSS framework</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
