export default function CharacterCard({ character }) {
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
          <strong>Species:</strong> {character.species} <br />
          <strong>ID:</strong> {character.id} <br />
        </p>
        <button
        onClick={() => {
            window.location.href = `/character/${character.id}`;
          }}
          >View Details</button>
      </div>
    </div>
  );
}
