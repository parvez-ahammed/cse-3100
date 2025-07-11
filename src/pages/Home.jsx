import { Link } from "react-router-dom"; // routing
import CharacterCard from "../components/CharacterCard"; // jei component use korchen
import { useEffect, useState } from "react"; // data load korar jonno

export default function Home() {
  const [characters, setCharacters] = useState([]); // state to store characters

  // API theke character data load korbo
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results))
      .catch((err) => console.error("Error fetching characters:", err));
  }, []);

  return (
    <main className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-success">Rick & Morty Explorer</h1>
        <p className="lead">Discover characters from the Rick and Morty universe!</p>

        {/* Navigation Button to About */}
        <Link to="/about" className="btn btn-outline-primary mt-3">
          Learn More About This App
        </Link>
      </div>

      <div className="row">
        {characters.map((char) => (
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={char.id}>
            <CharacterCard character={char} />
          </div>
        ))}
      </div>
    </main>
  );
}
