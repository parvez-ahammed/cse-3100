export default function About() {
  return (
    <div className="container my-5" style={{ maxWidth: '700px' }}>
      <h1 className="mb-4 text-primary">About Rick & Morty Explorer</h1>

      <section className="mb-4">
        <h3>App Information</h3>
        <p>
          Rick & Morty Explorer is a React application designed to help fans explore characters from the Rick & Morty universe.
          You can browse, search, and view detailed information about your favorite characters. This project is built by students of CSE-3100 to practice React, routing, and API integration.
        </p>
      </section>

      <section className="mb-4">
        <h3>Developer Info</h3>
        <p>
          Developed by <strong>Mohammed Faiyaz Alam</strong>, a passionate web developer and Rick & Morty fan. This app is a part of the learning journey to build interactive and dynamic React apps with real-world APIs.
        </p>
        <p>
          <b>Contact: </b> <a href="mailto:faiyaz.cse.20220204066@aust.edu">faiyaz.cse.20220204066@aust.edu</a>
        </p>
      </section>

      <section className="mb-4">
        <h3>Favorite Rick & Morty Quote</h3>
        <blockquote style={{ fontStyle: 'italic', backgroundColor: '#f0f8ff', padding: '15px', borderLeft: '5px solid #4caf50' }}>
          "Wubba Lubba Dub Dub! — Rick Sanchez"
        </blockquote>
      </section>
    </div>
  );
}
