import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

  if (loading) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!character) {
    return <div className="alert alert-danger">Character not found</div>;
  }

  const statusColor = {
    Alive: "success",
    Dead: "danger",
    unknown: "secondary"
  };

  return (
    <div className="container my-4">
      <Link to="/" className="btn btn-outline-secondary mb-4">
        Back to Characters
      </Link>
      
      <div className="row">
        <div className="col-md-4">
          <img
            src={character.image}
            alt={character.name}
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-8">
          <h2>{character.name}</h2>
          <div className="mb-3">
            <span className={`badge bg-${statusColor[character.status]}`}>
              {character.status}
            </span>
          </div>
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Details</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Species:</strong> {character.species}
                </li>
                <li className="list-group-item">
                  <strong>Gender:</strong> {character.gender}
                </li>
                <li className="list-group-item">
                  <strong>Origin:</strong> {character.origin.name}
                </li>
                <li className="list-group-item">
                  <strong>Location:</strong> {character.location.name}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}