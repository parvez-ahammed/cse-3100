import { useNavigate } from "react-router-dom";
export default function CharacterCard({ character }) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/character/${character.id}`)}
      className="cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-md transition-duration-300 text-sm">
      <img
        src={character.image}
        alt={character.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-3">
        <h5 className="tet-center font-semibold text-gray-800 mb-2 truncate">{character.name}</h5>
        <p className="text-gray-600 text-xs leading-relaxed">
          <strong>Status:</strong> {character.status} <br />
          <strong>Species:</strong> {character.species}
        </p>
      </div>
    </div>
  );
}
