export default function About() {
  return (
    <main
      className="container my-5 p-4 rounded"
      style={{
        maxWidth: "700px",
        backgroundColor: "#f0f8ff", // light blue background
        color: "#222",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2 className="mb-4 text-center" style={{ color: "#0077cc" }}>
        About Rick &amp; Morty Explorer
      </h2>
      <p className="fs-5">
        This application allows you to explore characters from the Rick and Morty universe.
        You can filter, search, and view details of each character.
      </p>
      <p className="fs-5">
        <strong>Developer:</strong>{" "}
        <span style={{ color: "#cc6600" }}>Tayeb Mahmud</span>
      </p>
      <blockquote
        className="blockquote fs-5 fst-italic text-center mt-4"
        style={{
          borderLeft: "4px solid #0077cc",
          paddingLeft: "1rem",
          color: "#0077cc",
        }}
      >
        “Wubba Lubba Dub Dub!” <br />
        – Rick Sanchez
      </blockquote>
    </main>
  );
}
