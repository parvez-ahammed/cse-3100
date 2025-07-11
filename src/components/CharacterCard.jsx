import { Link } from "react-router-dom";

export default function CharacterCard({ character }) {
  return (
    <div
      className="card bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
      style={{ maxWidth: "250px", margin: "auto" }}
    >
      <Link to={`/character/${character.id}`} className="block overflow-hidden">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-56 object-cover rounded-t-lg cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        />
      </Link>

      <div className="card-body flex flex-col justify-between p-3 flex-grow">
        <h5
          className="text-md font-semibold text-center text-gray-900 select-none truncate"
          title={character.name}
        >
          {character.name}
        </h5>

        <div className="flex justify-center mt-3">
          <Link
            to={`/character/${character.id}`}
            className="px-3 py-1.5 text-xs font-semibold text-white bg-teal-600 rounded-md shadow-md hover:bg-teal-700 transition-colors duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}



