import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then(setCharacter)
      .catch((err) => console.error("Error fetching character:", err));
  }, [id]);

  if (!character) return <p className="text-center mt-4">Loading...</p>;

  return (
    <div className="container my-4">
      <div className="row">
        {/* Character Image */}
        <div className="col-md-4 text-center">
          <img
            src={character.image}
            alt={character.name}
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Character Info */}
        <div className="col-md-8">
          <h2>{character.name}</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Status:</strong> {character.status}
            </li>
            <li className="list-group-item">
              <strong>Species:</strong> {character.species}
            </li>
            <li className="list-group-item">
              <strong>Origin:</strong> {character.origin?.name}
            </li>
            <li className="list-group-item">
              <strong>Last known location:</strong> {character.location?.name}
            </li>
            <li className="list-group-item">
              <strong>Episodes appeared in:</strong> {character.episode.length}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
