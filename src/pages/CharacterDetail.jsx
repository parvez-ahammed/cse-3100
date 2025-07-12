import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CharacterDetail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => setCharacter(data))
      .catch((error) => {
        console.error("Error fetching character:", error);
        setCharacter(null);
      });
  }, [id]);

  if (!character) {
    return <div className="text-center mt-5">Loading character...</div>;
  }

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center fw-bold">{character.name}</h2>
      <div className="row align-items-center">
        <div className="col-md-4 text-center mb-4">
          <img
            src={character.image}
            alt={character.name}
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-8">
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Status:</strong> {character.status}
            </li>
            <li className="list-group-item">
              <strong>Species:</strong> {character.species}
            </li>
            <li className="list-group-item">
              <strong>Origin:</strong> {character.origin.name}
            </li>
            <li className="list-group-item">
              <strong>Last Known Location:</strong> {character.location.name}
            </li>
            <li className="list-group-item">
              <strong>Episodes:</strong> {character.episode.length}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
