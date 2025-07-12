import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then(setCharacter)
      .catch((err) => console.error("Fetch error:", err));
  }, [id]);

  if (!character) return <p>Loading...</p>;

  return (
    <div>
      <div className="container my-4">
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.name} className="img-fluid mb-3" />
        <ul className="list-group">
          <li className="list-group-item"><strong>Status:</strong> {character.status}</li>
          <li className="list-group-item"><strong>Species:</strong> {character.species}</li>
          <li className="list-group-item"><strong>Origin:</strong> {character.origin?.name}</li>
          <li className="list-group-item"><strong>Last Location:</strong> {character.location?.name}</li>
          <li className="list-group-item"><strong>Number of Episodes:</strong> {character.episode?.length}</li>
        </ul>
      </div>
    </div>
  );
}
