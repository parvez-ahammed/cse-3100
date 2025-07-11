import FetchSingleCharacter from "../hooks/FetchSingleCharacter";

export default function CharacterDetail() {
  const { character } = FetchSingleCharacter();

  if (!character) return <p>Loading...</p>;

  return (
    <div className="flex flex-col items-center h-screen justify-center">
      {console.log(character)}
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} className="img-fluid" />
      <p className="card-text">
        <strong>Status:</strong> {character.status} <br />
        <strong>Species:</strong> {character.species} <br />
        <strong>Origin:</strong> {character.origin.name} <br />
        <strong>Last Known Location:</strong> {character.location.name} <br />
        <strong>Episodes Appeared in:</strong> {character.episode.length}
      </p>
    </div>
  );
}
