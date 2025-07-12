import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacter(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="container">Loading...</div>;
  if (!character) return <div className="container">Character not found.</div>;

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h2>{character.name}</h2>
      <img
        src={character.image}
        alt={character.name}
        style={{ maxWidth: "300px", borderRadius: "8px" }}
      />
      <p><strong>Status:</strong> {character.status}</p>
      <p><strong>Species:</strong> {character.species}</p>
      <p><strong>Gender:</strong> {character.gender}</p>
      <p><strong>Origin:</strong> {character.origin.name}</p>
      <p><strong>Location:</strong> {character.location.name}</p>
      <p><strong>Episodes:</strong> {character.episode.length}</p>
    </div>
  );
}
