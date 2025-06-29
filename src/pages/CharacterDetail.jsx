import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const getStatusBadge = (status) => {
  switch (status) {
    case 'Alive':
      return 'bg-success';
    case 'Dead':
      return 'bg-danger';
    default:
      return 'bg-secondary';
  }
};

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then(setCharacter);
  }, [id]);

  if (!character) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
  
    <div className="p-4">
      <div className="row">
        <div className="col-md-4">
          <img
            src={character.image}
            alt={character.name}
            className="img-fluid rounded-3 shadow-lg"
          />
        </div>

        <div className="col-md-8">
          <h1 className="display-4 fw-bold">{character.name}</h1>
          
          <span className={`badge fs-6 ${getStatusBadge(character.status)}`}>
            {character.status}
          </span>

          <hr className="my-4" />

          <ul className="list-group list-group-flush fs-5">
            <li className="list-group-item d-flex justify-content-between align-items-center ps-0">
              <strong>Species:</strong>
              <span>{character.species}</span>
            </li>
            {character.type && (
              <li className="list-group-item d-flex justify-content-between align-items-center ps-0">
                <strong>Type:</strong>
                <span>{character.type}</span>
              </li>
            )}
            
            <li className="list-group-item d-flex justify-content-between align-items-center ps-0">
              <strong>Gender:</strong>
              <span>{character.gender}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center ps-0">
              <strong>Origin:</strong>
              <span>{character.origin.name}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center ps-0">
              <strong>Last Known Location:</strong>
              <span>{character.location.name}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center ps-0">
              <strong>Appeared in:</strong>
              <span>{character.episode.length} episodes</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center ps-0">
              <strong>First seen on:</strong>
              <span>{new Date(character.created).toLocaleDateString()}</span>
            </li>
          </ul>

          <Link to="/" className="btn btn-outline-dark mt-4">
            ← Back to Home
          </Link>

        </div>
      </div>
    </div>
  );
}