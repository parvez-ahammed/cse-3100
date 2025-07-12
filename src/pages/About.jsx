import "./About.css";

export default function About() {
  return (
    <div className="container about-page my-5">
      <h2 className="display-5 fw-bold text-center mb-4">About Rick & Morty Explorer</h2>
      <p className="lead text-center mb-5">
        This is a simple React app that lets you browse characters from the Rick & Morty universe.
        Built with students of CSE-3100.
      </p>

      <div className="section">
        <h3 className="section-title">Overview</h3>
        <p>
          <strong>Rick and Morty</strong> is an American adult animated science fiction sitcom created
          by Justin Roiland and Dan Harmon for Cartoon Network's Adult Swim. The series follows the
          misadventures of Rick Sanchez, a cynical mad scientist, and his good-hearted but fretful grandson
          Morty Smith, as they navigate both domestic life and wild interdimensional adventures.
        </p>
        <p>
          Roiland originally voiced both Rick and Morty, with Ian Cardoni and Harry Belden taking over in
          season seven. The show has been acclaimed for its creativity, humor, and originality, and has won
          multiple awards including Primetime Emmys and Annie Awards.
        </p>
      </div>

      <div className="section">
        <h3 className="section-title">Production & Evolution</h3>
        <p>
          The show began as a parody short and evolved into a global sci-fi franchise. In 2024, it was renewed
          through season 12. Despite controversies, the series remained successful, with Adult Swim recasting
          roles for season 7. Season 8 premiered on May 25, 2025.
        </p>
        <p>
          The show has developed a large fan base and generated over $100 million through merchandise and media.
        </p>
      </div>

      <div className="section">
        <h3 className="section-title">Premise & Main Characters</h3>
        <p>
          The story centers around the Smith family: parents Jerry and Beth, their children Summer and Morty,
          and Beth's father Rick Sanchez. They live in suburban Seattle and frequently travel to alternate
          dimensions using Rick's inventions.
        </p>
        <p>
          Rick is an alcoholic genius who avoids conventional life. Morty is a kind yet anxious teen often
          dragged into Rick’s schemes. Summer is socially conscious and adventurous. Beth, a horse surgeon,
          balances assertiveness with self-doubt. Jerry is simple and insecure, often clashing with Rick.
        </p>
        <p>
          Alternate versions of characters appear throughout the show, with Rick identifying as "Rick C-137."
          The multiverse concept allows complex storytelling with moral ambiguity and existential themes.
        </p>
      </div>
    </div>
  );
}
