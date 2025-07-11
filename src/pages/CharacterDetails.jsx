// src/pages/CharacterDetails.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CharacterDetails() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => setCharacter(data));
  }, [id]);

  if (!character) return <p className="text-center">Loading...</p>;

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-4">
          <img
            src={character.image}
            alt={character.name}
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-8">
          <h2>{character.name}</h2>
          <p><strong>Status:</strong> {character.status}</p>
          <p><strong>Species:</strong> {character.species}</p>
          <p><strong>Gender:</strong> {character.gender}</p>
          <p><strong>Origin:</strong> {character.origin.name}</p>
        </div>
      </div>
    </div>
  );
}
