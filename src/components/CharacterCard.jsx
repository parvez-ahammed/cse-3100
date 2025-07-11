import { useNavigate } from "react-router-dom";

export default function CharacterCard({ character }) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <img
        src={character.image}
        className="card-img-top"
        alt={character.name}
      />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        
        <button onClick={() => navigate(`/character/${character.id}`)}>
          View Details
        </button>
      </div>
    </div>
  );
}
