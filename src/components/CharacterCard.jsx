import { useNavigate } from "react-router-dom";

export default function CharacterCard({ character }) {

  const navigate = useNavigate();
  return (
    <div className="card border-2 rounded-2xl p-2 flex  flex-col justify-center items-center">
      <img
        src={character.image}
        className="card-img-top rounded-2xl"
        alt={character.name}
      />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">
          <strong>Status:</strong> {character.status} <br />
          <strong>Species:</strong> {character.species}
        </p>
        <button className="cursor-pointer text-blue-700 border-4 p-1 rounded-2xl m-2" onClick={() => navigate(`/details/${character.id}`)} >View Details</button>
      </div>
    </div>
  );
}
