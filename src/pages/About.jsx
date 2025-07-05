export default function About() {
  return (
    <div className="container my-4">
      <h2>About Rick & Morty Explorer</h2>
      <h4>About this app</h4>
      <p>
        Rick & Morty Explorer is a simple React app that lets you browse and search for characters from the Rick & Morty universe. You can view details, filter by status, and enjoy a modern UI with dark mode support.
      </p>
      <h4>Developer</h4>
      <p>
          I'm <span style={{ color: "#0984e3" }}>Tajuddin Ahmed</span>, the developer of this web app. Built with React, it is designed to help users discover and explore Rick and Morty, the American animated science-fiction sitcom.
      </p>
      <h4>Favorite Rick & Morty Quote</h4>
      <blockquote style={{ fontStyle: "italic", borderLeft: "4px solid #0984e3", paddingLeft: "1rem", color: "#636e72" }}>
I haven’t watched Rick and Morty, so I don’t have a personal quote and prefer not to use one from the internet or AI.      </blockquote>
    </div>
  );
}