export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content text-center">
          <h1 className="hero-headline">ABOUT RICK & MORTY EXPLORER</h1>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="about-content">
        <section className="about-section">
          <h2 className="section-title">About Rick & Morty Explorer</h2>
          <p className="section-text">
            Rick & Morty Explorer is a fan-made application designed for enthusiasts of the popular animated series, 
            Rick and Morty. This app serves as a comprehensive guide to the show's vast universe, offering detailed 
            information about its characters, locations, and episodes. Whether you're a long-time fan or new to the series, 
            Rick & Morty Explorer provides an engaging way to explore the intricate details of Rick and Morty's adventures.
          </p>
        </section>
        
        <section className="about-section">
          <h2 className="section-title">Developer</h2>
          <p className="section-text">
            Rick & Morty Explorer was developed by Ethan Carter, a passionate fan of Rick and Morty. With a background 
            in software development and a deep appreciation for the show's creativity and humor, Ethan created this app 
            to share his enthusiasm with fellow fans. The app is a testament to the vibrant community surrounding Rick 
            and Morty and a tribute to its imaginative storytelling.
          </p>
        </section>
        
        <section className="quote-section">
          <div className="quote-icon">❝</div>
          <blockquote className="favorite-quote">
            "To live is to risk it all; otherwise, you're just an inert chunk of randomly assembled molecules 
            drifting wherever the universe blows you."
          </blockquote>
        </section>
        
        <section className="disclaimer-section">
          <p className="disclaimer-text">
            "This application is not affiliated with or endorsed by the creators of Rick and Morty. 
            It is a fan-made project intended for entertainment and informational purposes only."
          </p>
        </section>
      </div>
    </div>
  );
}