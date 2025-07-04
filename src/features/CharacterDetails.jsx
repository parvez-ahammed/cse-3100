import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCharacterDetails } from "../common/api";

export default function CharacterDetails() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const getCharacterDetails = async () => {
      const data = await fetchCharacterDetails(id);
      setCharacter(data);
    };

    getCharacterDetails();
  }, [id]);

  if (!character) return <p>Loading...</p>;

  return (
    <div className="container my-4">
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} className="img-fluid" />
      <p>
        <strong>Status:</strong> {character.status} <br />
        <strong>Species:</strong> {character.species} <br />
        <strong>Origin:</strong> {character.origin.name} <br />
        <strong>Last known location:</strong> {character.location.name} <br />
        <strong>Episodes appeared in:</strong> {character.episode.length} <br />
      </p>
      <Link to="/">Back to Character List</Link>
    </div>
  );
}