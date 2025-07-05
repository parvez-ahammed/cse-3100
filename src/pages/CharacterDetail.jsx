import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./CharacterDetail.css"
export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
 const [error, setError] =useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {
        if(!res.ok) throw new Error("Character Not Found");
        return res.json();
      })
      .then(setCharacter)
      .catch((error) => setError(error.message));
  }, [id]);

  if(error) 
    return <p className="error">{error}</p>;
  if (!character) return <p>Loading...</p>;

  return (
    <div className="character">
     
      <img src={character.image} alt={character.name} className="char-img" />
     
     <div className="char-info">
      <h2 className="char-name">
        {character.name}
      </h2>
      <p><strong>Status:</strong> {character.status}</p>
     <p><strong>Species:</strong>{character.species}</p>
      <p><strong>Origin:</strong>{character.origin.name}</p>
      <p><strong>Location:</strong>{character.location.name}</p>
      <p><strong>Number of Episodes:</strong> {character.episode.length}</p>
      <br />
     </div>

    </div>
  );
}
