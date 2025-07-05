export default function CharacterCard({ character }) {
  return (
    <div className="bg-gray-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
      <img src={character.image} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h5 className="text-lg text-center font-bold text-black mb-3">
          {character.name}
        </h5>
        <p className="text-gray-700">
          <span className="font-semibold">Status:</span> {character.status}
          <br />
          <span className="font-semibold">Species:</span> {character.species}
        </p>
        <button
          className="mt-4 w-full rounded-lg bg-gray-900 text-white py-2 font-medium hover:bg-gray-800 transition"
          onClick={() => {
            window.location.href = `/character/${character.id}`;
          }}
        >
          Details
        </button>
      </div>
    </div>
  );
}

