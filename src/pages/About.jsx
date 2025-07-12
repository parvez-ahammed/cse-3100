export default function About() {
  return (
    <div className="container py-5 text-center">
      <h2 className="mb-4"><i className="bi bi-info-circle-fill me-2"></i>About Rick & Morty Explorer</h2>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/c/c8/Rick_and_Morty_logo.png"
        alt="Rick and Morty"
        className="img-fluid mb-4"
        style={{ maxHeight: "200px" }}
      />
      <p className="lead">This app allows you to explore characters from the Rick and Morty universe using a public API.</p>
      <p><strong>Developer:</strong> Shamima Islam Ria</p>
      <blockquote className="blockquote mt-4">
        “Wubba Lubba Dub Dub!”<footer className="blockquote-footer">Rick Sanchez</footer>
      </blockquote>
    </div>
  );
}
