// src/pages/CharacterDetail.jsx

import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Character not found!");
        }
        return res.json();
      })
      .then(setCharacter)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="container my-4">Loading...</p>;
  if (error) return <p className="container my-4 text-danger">{error.message}</p>;
  if (!character) return null;

  
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-4">
          <img src={character.image} alt={character.name} className="img-fluid rounded" />
        </div>
        <div className="col-md-8">
          <h2>{character.name}</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"><strong>Status:</strong> {character.status}</li>
            <li className="list-group-item"><strong>Species:</strong> {character.species}</li>
            <li className="list-group-item"><strong>Origin:</strong> {character.origin.name}</li>
            <li className="list-group-item"><strong>Last known location:</strong> {character.location.name}</li>
            <li className="list-group-item"><strong>Number of episodes they appeared in:</strong> {character.episode.length}</li>
          </ul>
          {/* UPDATED: Added the "btn-3d" class here and used "btn-secondary" */}
          <Link to="/" className="btn btn-secondary btn-3d mt-3">
            Back to List
          </Link>
        </div>
      </div>
    </div>
  );
}