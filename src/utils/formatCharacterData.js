export function formatCharacterData(character) {
  return {
    id: character.id,
    name: character.name,
    image: character.image,
    status: character.status,
    species: character.species,
    origin: character.origin.name,
    location: character.location.name,
    episodeCount: character.episode.length,
  };
}