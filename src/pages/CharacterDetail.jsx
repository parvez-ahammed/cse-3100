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

  if (!character) return <p className="text-center mt-5">Loading character...</p>;

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-5 text-center">
          <img
            src={character.image}
            alt={character.name}
            className="img-fluid rounded shadow"
            style={{ maxWidth: "100%" }}
          />
        </div>
        <div className="col-md-7">
          <h2 className="mb-3">{character.name}</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Status:</strong> {character.status}
            </li>
            <li className="list-group-item">
              <strong>Species:</strong> {character.species}
            </li>
            <li className="list-group-item">
              <strong>Gender:</strong> {character.gender}
            </li>
            <li className="list-group-item">
              <strong>Origin:</strong> {character.origin?.name}
            </li>
            <li className="list-group-item">
              <strong>Last Known Location:</strong> {character.location?.name}
            </li>
            <li className="list-group-item">
              <strong>Number of Episodes:</strong> {character.episode?.length}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
