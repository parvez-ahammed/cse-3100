// src/pages/About.jsx

export default function About() {
  return (
    <div className="container my-4">
      <h2>About Rick & Morty Explorer</h2>
      <p>
        This is a React application that lets you browse, search, and filter characters from the iconic TV show, Rick & Morty.
        It utilizes the <a href="https://rickandmortyapi.com/" target="_blank" rel="noopener noreferrer">Rick and Morty API</a> to fetch character data.
      </p>

      <hr className="my-4" />

      <h4>About the Developer</h4>
      <p>
        This app was developed by a passionate student exploring the world of front-end development with React, Vite, and React Router.
      </p>

      <hr className="my-4" />

      <h4>Favorite Rick & Morty Quote</h4>
      <figure className="text-end">
        <blockquote className="blockquote">
          <p>"Wubba lubba dub dub!"</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          Birdperson <cite title="Source Title">in 'Ricksy Business'</cite>
        </figcaption>
      </figure>
    </div>
  );
}