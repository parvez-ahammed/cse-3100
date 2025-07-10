export const formatCharacterData = (character) => {
  return {
    ...character,
    status: character.status || 'Unknown',
    species: character.species || 'Unknown',
    origin: character.origin?.name || 'Unknown',
    location: character.location?.name || 'Unknown',
  }
}