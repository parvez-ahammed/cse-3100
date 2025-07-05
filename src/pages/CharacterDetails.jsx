import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function CharacterDetails() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const data = await res.json();
      setCharacter(data);
      setLoading(false);
    })();
  }, [id]);

  if (loading) return <p className="text-center mt-5">Loading...</p>;
  if (!character) return <p>Character not found</p>;

  return (
    <div className="container my-4">
      <Link to="/" className="btn btn-secondary mb-3">
        ← Back
      </Link>

      <div className="row g-4 align-items-center">
        <div className="col-md-4 text-center">
          <img
            src={character.image}
            alt={character.name}
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-8">
          <h2>{character.name}</h2>
          <ul className="list-unstyled fs-5">
            <li>
              <strong>Status:</strong> {character.status}
            </li>
            <li>
              <strong>Species:</strong> {character.species}
            </li>
            <li>
              <strong>Origin:</strong> {character.origin?.name}
            </li>
            <li>
              <strong>Last known location:</strong>{" "}
              {character.location?.name}
            </li>
            <li>
              <strong>Episodes appeared:</strong>{" "}
              {character.episode.length}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}