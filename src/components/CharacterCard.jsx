import { useNavigate } from "react-router-dom";

export default function CharacterCard({ character, isDark }) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/character/${character.id}`);
  };

  return (
    <div
      className={`${
        isDark
          ? "bg-gray-800 border-green-400 text-white"
          : "bg-white border-blue-400 text-gray-800"
      } border-2 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300`}
    >
      <img
        src={character.image}
        className="w-full h-48 object-cover"
        alt={character.name}
      />
      <div className="p-4">
        <h5
          className={`${
            isDark ? "text-green-400" : "text-blue-600"
          } text-xl font-bold mb-2`}
        >
          {character.name}
        </h5>
        <p className="mb-4 text-sm">
          <strong>Status:</strong>{" "}
          <span
            className={`${
              character.status === "Alive"
                ? "text-green-500"
                : character.status === "Dead"
                ? "text-red-500"
                : "text-yellow-500"
            }`}
          >
            {character.status}
          </span>{" "}
          <br />
          <strong>Species:</strong> {character.species}
        </p>
        <button
          onClick={handleViewDetails}
          className={`${
            isDark
              ? "bg-green-500 hover:bg-green-600"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white px-4 py-2 rounded font-semibold w-full transition-colors duration-200`}
        >
          View Details
        </button>
      </div>
    </div>
  );
}
