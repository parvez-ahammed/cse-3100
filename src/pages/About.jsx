export default function About() {
  return (
    <div className="container my-5">
      <h2 className="mb-4 text-success">About Rick & Morty Explorer</h2>

      <p>
        <strong>Rick & Morty Explorer</strong> is a fun and informative React app that lets users browse and explore characters from the famous animated series <em>Rick and Morty</em>. It fetches data live from the open <a href="https://rickandmortyapi.com" target="_blank" rel="noopener noreferrer">Rick and Morty API</a>.
      </p>

      <hr />

      <h4 className="mt-4"> Developer Info</h4>
      <p>
        Developed by <strong>Mohsina Rahman Mirza</strong>, a student of the Department of Computer Science and Technology, currently in 3rd Year, 1st Semester. This project is part of a learning journey with React.js and API integration.
      </p>

      <hr />

      <h4 className="mt-4">Favorite Rick & Morty Quote</h4>
      <blockquote className="blockquote">
        <p className="mb-0">
          "Sometimes science is more art than science, Morty. A lot of people don’t get that."
        </p>
        <footer className="blockquote-footer">Rick Sanchez</footer>
      </blockquote>
    </div>
  );
}
