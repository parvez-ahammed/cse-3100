export default function About() {
  return (
    <div className="container my-4">
      <h2>About Rick & Morty Explorer</h2>

      <p>
        Rick & Morty Explorer is a simple React app that lets you explore characters
        from the Rick and Morty universe. It allows you to search, filter, and view detailed
        information about each character.
      </p>

      <hr />

      <h4>Developer</h4>
      <p>
        Developed by <strong>Mohammad Yahya Bin Belal</strong> as part of the CSE-3100 assignment.<br />
        Technologies used: React, React Router, Bootstrap, and the Rick & Morty public API.
      </p>

      <hr />

      <h4>Favorite Rick & Morty Quote</h4>
      <blockquote className="blockquote">
        <p>
          "Weddings are basically funerals with cake." — Rick Sanchez
        </p>
      </blockquote>
    </div>
  );
}
