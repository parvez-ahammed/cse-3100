import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CharacterDetailsPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        if (!res.ok) throw new Error("Character not found");
        const data = await res.json();
        setCharacter(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCharacter();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!character) return null;

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