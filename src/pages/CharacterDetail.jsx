import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./CharacterDetail.css";

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then(setCharacter);
  }, [id]);

  if (!character) {
    return <p className="loading">Loading...</p>;
  }

  return (
    <div className="detail-wrapper">
      <div className="character-card">
        <img
          src={character.image}
          alt={character.name}
          className="character-image"
        />
        <div className="character-info">
          <h1>{character.name}</h1>
          <div className="info-grid">
            <div>
              <span>Status</span>
              <p>{character.status}</p>
            </div>
            <div>
              <span>Species</span>
              <p>{character.species}</p>
            </div>
            <div>
              <span>Gender</span>
              <p>{character.gender}</p>
            </div>
            <div>
              <span>Origin</span>
              <p>{character.origin?.name}</p>
            </div>
            <div>
              <span>Location</span>
              <p>{character.location?.name}</p>
            </div>
          </div>
          <Link to="/" className="back-button">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
