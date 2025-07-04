// components/CharacterCard.jsx
import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  return (
    <Link
      to={`/character/${character.id}`}
      className="text-decoration-none"
      style={{ color: "#fff" }}
    >
      <div
        className="card text-center h-100 shadow"
        style={{
          backgroundColor: "#000",
          border: "none",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <img
          src={character.image}
          alt={character.name}
          className="card-img-top"
          style={{ width: "100%", objectFit: "cover" }}
        />
        <div className="card-body p-3">
          <h5 className="card-title mb-1">{character.name}</h5>
          <p className="card-text" style={{ fontSize: "0.9rem", color: "#ccc" }}>
            {character.status} • {character.species}
          </p>
        </div>
      </div>
    </Link>
  );
}

