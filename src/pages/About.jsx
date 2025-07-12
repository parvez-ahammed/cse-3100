export default function About() {
  return (
    <div className="container" style={{ padding: "2rem", lineHeight: "1.8", fontSize: "1.1rem" }}>
      <h2>About This App</h2>
      <p>
        This app is built using React and the Rick and Morty API. It allows users to explore characters by name and status,
        view detailed information, and use pagination, search, and filters.
      </p>

      <h3>Developer</h3>
      <p>
        Created by <strong>Your Name</strong> — a frontend developer who loves building fun and useful UIs with React.
      </p>

      <h3>Favorite Rick & Morty Quote</h3>
      <blockquote style={{ fontStyle: "italic", color: "#555", borderLeft: "4px solid #ccc", paddingLeft: "1rem" }}>
        "Sometimes science is more art than science, Morty." – Rick Sanchez
      </blockquote>
    </div>
  );
}
