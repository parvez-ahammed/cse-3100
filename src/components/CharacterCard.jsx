import { Navigate, useNavigate } from "react-router-dom";
import CustomButton from "../assets/CustomButton";

export default function CharacterCard({ character }) {
  const navigate = useNavigate();
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg">
      <img src={character.image} className="w-full" alt={character.name} />
      <div class="px-6 py-4">
        <div className="font-bold text-2xl mb-2">{character.name}</div>
        <div className="mb-2">
          <span className="font-bold">Species:</span> {character.species}
        </div>
        <div className="mb-2">
          <span className="font-bold">Status:</span> {character.status}
        </div>
        <CustomButton onClick={() => navigate(`/character/${character.id}`)}>
          View Details
        </CustomButton>
      </div>
    </div>
  );
}
