import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/CharacterDetails.css";

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
    <div className="detail-wrapper">
      <div className="character-detail">
        <img
          src={character.image}
          alt={character.name}
          className="character-img"
        />
        <div className="character-info">
          <h2>{character.name}</h2>
          <ul>
            <li><strong>Status:</strong> {character.status}</li>
            <li><strong>Species:</strong> {character.species}</li>
            <li><strong>Gender:</strong> {character.gender}</li>
            <li><strong>Origin:</strong> {character.origin?.name}</li>
            <li><strong>Location:</strong> {character.location?.name}</li>
            <li><strong>Episodes:</strong> {character.episode?.length}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
