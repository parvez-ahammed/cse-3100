export default function CharacterCard({ character }) {
  return (
    <div className="card shadow-sm" style={{ width: "16rem" }}>
      <img
        src={character.image}
        alt={character.name}
        className="card-img-top"
        style={{ height: "250px", objectFit: "cover" }}
      />
      <div className="card-body text-center">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">{character.species}</p>
        <small className="text-muted">{character.status}</small>
      </div>
    </div>
  );
}
