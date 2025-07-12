import { useNavigate } from "react-router-dom";

export default function CharacterCard({ character }) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    console.log("Navigating to character detail for ID:", character.id);
    navigate(`/character/${character.id}`);
  };

  return (
    <div className="card">
      <img
        src={character.image}
        className="card-img-top"
        alt={character.name}
      />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">
          <strong>Status:</strong> {character.status} <br />
          <strong>Species:</strong> {character.species}
        </p>
        <button onClick={handleViewDetails}>View Details</button>
      </div>
    </div>
  );
}
