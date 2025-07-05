export default function CharacterCard({ character }) {
  return (
    <div className="card px-4 py-4">
      <img
        src={character.image}
        className="border rounded-t-lg border radius-8"
        alt={character.name}
      />
      <div className="card-body">
        <h5 className="text-xl font-bold m-2">{character.name}</h5>
        <p className="card-text">
          <strong>Status:</strong> {character.status} <br />
          <strong>Species:</strong> {character.species} <br />
        </p>
        <button type = "button" class = "m-4 text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={() => {
            window.location.href = `/character/${character.id}`;
          }}
          >View Details</button>
      </div>
    </div>
  );
}
