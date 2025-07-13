export default function About() {
  return (
    <div className="center">
      <div className="container my-4 about">
        <div className="about-app">
          <h1>Rick & Morty Explorer</h1>
          <p>
            Rick & Morty Explorer is a fun little app built using React that allows you to browse and explore characters 
            from the hit animated series "Rick and Morty". You can search, filter, and 
            view detailed info about each character — all powered bythe public Rick and Morty API.
          </p>
        </div>
        <div className="about-me">
          <h3>Hello Everyone, I'm</h3>
          <div className="banner">
            <h2>Nusrat Jarin Eitu</h2>
          </div>
          <p>
            I am a student developer learning React through fun projects like this.
            This assignment helped me practice routing, API integration, state management, and form validation.
          </p>
        </div>
        <div className="fav-quote">
          <h2>Favorite Rick & Morty Quote</h2>
          <blockquote>
            “Weddings are basically funerals with cake.”
          </blockquote>
        </div>
      </div>
    </div>
  );
}