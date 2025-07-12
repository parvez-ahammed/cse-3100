// pages/about.jsx

export default function About() {
  return (
    <div className="container my-4">
      <h1>About Rick & Morty Explorer</h1>
      <p className="lead">
        This app allows users to explore characters from the hit TV show{" "}
        <strong>Rick and Morty</strong>. You can search, filter, and view
        details of each character, along with pagination and theming options.
      </p>

      <hr />

      <h3>Developer</h3>
      <p>
        Created by <strong>Prionty Kundu Aurin</strong>, a passionate developer
        and fan of sci-fi and animated shows. Built with <code>React</code>,{" "}
        <code>React Router</code>, and the{" "}
        <a href="https://rickandmortyapi.com/" target="_blank" rel="noreferrer">
          Rick and Morty API
        </a>
        .
      </p>

      <hr />

      <h3>Favorite Quote</h3>
      <blockquote className="blockquote">
        <p>"Wubba Lubba Dub-Dub!"</p>
        <footer className="blockquote-footer">Rick Sanchez</footer>
      </blockquote>
    </div>
  );
}
