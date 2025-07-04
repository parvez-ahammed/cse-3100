export default function About() {
  return (
    <div className='container my-4'>
      <h2>About Rick & Morty Explorer</h2>
      <p>
        This is a simple React application built to explore characters from the hilarious and mind-bending universe of
        Rick and Morty, using the
        <a href='https://rickandmortyapi.com/' target='_blank' rel='noopener noreferrer'>
          {" "}
          Rick and Morty API
        </a>
        . It allows users to browse characters, filter them by name or status, and view detailed information for each
        character. The app demonstrates React fundamentals, routing with React Router DOM, state management, and API
        data fetching.
      </p>

      <h3>Developer</h3>
      <p>This application was developed by Mahir Faisal as part of the CSE-3100 course curriculum.</p>

      <h3>Favorite Rick & Morty Quote</h3>
      <blockquote>
        <p>"Wubba Lubba Dub Dub!"</p>
        <footer>— Rick Sanchez</footer>
      </blockquote>
      <p>(Translation: "I am in great pain, please help me.")</p>
    </div>
  );
}
