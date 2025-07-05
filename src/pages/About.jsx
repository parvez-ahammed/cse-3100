// About page component - displays static information about the app, developer, and a quote
export default function About() {
  return (
    <div className="container my-4">
      {/* App description */}
      <h2>About Rick & Morty Explorer</h2>
      <p>
        <strong>Rick & Morty Explorer</strong> is a React single-page application that allows users to browse, search, and filter characters from the Rick and Morty universe. You can view detailed information about each character, use advanced filters, and enjoy a modern, responsive UI. This app is built as part of the CSE-3100 Software Development Lab assignment.
      </p>
      <hr />
      {/* Developer info */}
      <h4>Developer</h4>
      <p>
        <strong> Salman Faresi</strong><br />
        ID- 20220104007, CSE-3100 Software Development Lab
      </p>
      <hr />
      {/* Favorite quote section */}
      <h4>Favorite Rick & Morty Quote</h4>
      <blockquote className="blockquote">
        <p>"Wubba Lubba Dub Dub!"</p>
        <footer className="blockquote-footer">Rick Sanchez</footer>
      </blockquote>
    </div>
  );
}
