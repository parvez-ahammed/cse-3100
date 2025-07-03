import { useNavigate } from "react-router-dom";


export default function CharacterCard({ character }) {
  const navigate = useNavigate()
  return (
    <div className="card border-2 rounded-2xl p-2 font-semibold">
      <img
        src={character.image}
        className="card-img-top  rounded-2xl"
        alt={character.name}
      />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">
          <strong>Status:</strong> {character.status} <br />
          <strong>Species:</strong> {character.species}
        </p>
        <button onClick={() => navigate(`/details/${character.id}`)} className="text-blue-500 cursor-pointer" >View Details</button>
      </div>
    </div>
  );
}
