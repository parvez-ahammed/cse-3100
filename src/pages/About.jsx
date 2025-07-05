export default function About() {
  return (
    <div className="container my-5 about-section" style={{ maxWidth: 800 }}>
      <h2 className="about-title mb-4">💫 About Rick & Morty Explorer</h2>

      <p className="about-text">
        <strong>Rick & Morty Explorer</strong> is a fan-made application
        designed for enthusiasts of the iconic animated series,{" "}
        <strong>Rick and Morty</strong>. Dive deep into the show's vast
        multiverse with this comprehensive guide that brings you detailed
        insights into the characters, locations, and episodes. Whether you’re a
        seasoned fan or new to the madness, this app lets you explore the
        bizarre brilliance of Rick and Morty in style.
      </p>

      <h4 className="section-heading mt-4">👨‍💻 Developer</h4>
      <p className="about-text">
        Created by <strong>Ethan Carter</strong>, a developer fueled by
        interdimensional curiosity and humor. His passion for tech and love for
        the show inspired this sleek portal to the Rick and Morty universe. It’s
        not just an app — it’s a tribute to fans who never settle for a simple
        “Wubba Lubba Dub Dub!”
      </p>

      <h4 className="section-heading mt-4">🧠 Favorite Quote</h4>
      <blockquote className="blockquote fancy-quote mt-3">
        <p>
          “To live is to risk it all; otherwise, you're just an inert chunk of
          randomly assembled molecules drifting wherever the universe blows
          you.”
        </p>
      </blockquote>

      <p className="text-muted disclaimer mt-4" style={{ fontSize: "0.9rem" }}>
        ⚠️{" "}
        <em>
          This app is not affiliated with or endorsed by the creators of Rick
          and Morty.
        </em>
        <br />
        It’s a fan-made project crafted purely for entertainment and
        informational purposes.
      </p>
    </div>
  );
}
