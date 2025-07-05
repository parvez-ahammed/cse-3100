import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then(setCharacter);
  }, [id]);

  if (!character) return <p className="text-center mt-5">Loading Character Details...</p>;

  return (
    <div className="container my-4 d-flex flex-column align-items-center">
      <h2 className="mb-4 text-center">{character.name}</h2>

      <img
        src={character.image}
        alt={character.name}
        className="img-fluid mb-4"
        style={{
          maxWidth: "250px",
          borderRadius: "10px",
        }}
      />

      <ul className="list-group" style={{ maxWidth: "400px", width: "100%" }}>
        <li className="list-group-item">
          <strong>Status :</strong> {character.status}
        </li>
        <li className="list-group-item">
          <strong>Species :</strong> {character.species}
        </li>
        <li className="list-group-item">
          <strong>Origin :</strong> {character.origin?.name}
        </li>
        <li className="list-group-item">
          <strong>Last Known Location :</strong> {character.location?.name}
        </li>
        <li className="list-group-item">
          <strong>Number of Episodes :</strong> {character.episode.length}
        </li>
      </ul>
    </div>
  );
}
