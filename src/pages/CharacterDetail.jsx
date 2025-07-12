import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then(setCharacter);
  }, [id]);

  if (!character)
    return (
      <div className="container my-4 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  return (
    <div className="container my-5">
      <div className="card mx-auto shadow-lg" style={{ maxWidth: "600px" }}>
        <img
          src={character.image}
          alt={character.name}
          className="card-img-top"
          style={{ objectFit: "cover", maxHeight: "400px" }}
        />
        <div className="card-body">
          <h2 className="card-title text-primary mb-3">{character.name}</h2>
          <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item">
              <strong>Status: </strong>
              <span
                className={
                  character.status === "Alive"
                    ? "text-success"
                    : character.status === "Dead"
                    ? "text-danger"
                    : "text-muted"
                }
              >
                {character.status}
              </span>
            </li>
            <li className="list-group-item">
              <strong>Species: </strong> {character.species}
            </li>
            <li className="list-group-item">
              <strong>Gender: </strong> {character.gender}
            </li>
            <li className="list-group-item">
              <strong>Origin: </strong> {character.origin?.name}
            </li>
            <li className="list-group-item">
              <strong>Location: </strong> {character.location?.name}
            </li>
          </ul>
          <button
            className="btn btn-primary w-100"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
