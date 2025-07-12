export default function About() {
  return (
    <div className="container my-4">
      <h2>About Rick & Morty Explorer</h2>
      <p>
        This is a simple React app that lets you browse characters from the Rick & Morty universe.
        Built with students of CSE-3100.
      </p>

      <h4>Developer</h4>
      <p>
        Developed by [Anjum Hossain], a student exploring React and APIs.
      </p>

      <h4>Favorite Rick & Morty Quote</h4>
      <blockquote className="blockquote">
        <p>"Nobody exits on purpose,nobody belongs anywhere,everybody's gonna die.come watch TV!"</p>
        <footer className="blockquote-footer">Morty</footer>
      </blockquote>
    </div>
  );
}
