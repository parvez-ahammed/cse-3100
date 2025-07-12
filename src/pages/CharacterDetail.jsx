import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CharacterDetailsPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const data = await res.json();
        setCharacter(data);
      } catch (err) {
        console.error("Error loading character", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) return <div className="container text-center my-5">Loading...</div>;
  if (!character) return <div className="container text-center my-5">Character not found.</div>;

  return (
    <div className="container my-5">
      <div className="card mx-auto" style={{ maxWidth: "600px" }}>
        <img src={character.image} className="card-img-top" alt={character.name} />
        <div className="card-body">
          <h3 className="card-title">{character.name}</h3>
          <p><strong>Status:</strong> {character.status}</p>
          <p><strong>Species:</strong> {character.species}</p>
          <p><strong>Origin:</strong> {character.origin?.name}</p>
          <p><strong>Last known location:</strong> {character.location?.name}</p>
          <p><strong>Appeared in episodes:</strong> {character.episode.length}</p>
        </div>
      </div>
    </div>
  );
}
