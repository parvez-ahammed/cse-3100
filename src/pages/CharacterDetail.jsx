import {useParams} from "react-router-dom";
import {useEffect,useState} from "react";

export default function CharacterDetail() {
  const {id}=useParams();
  const [character,setcharacter]=useState(null);

  useEffect(()=>{
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res)=>res.json())
      .then(setcharacter);
  },[id]);

  if (!character) return <p>Loading...</p>;

  return (
    <div className="container my-4">
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} className="img-fluid"/>
      <p>
        <strong>Status:</strong>{character.status}<br/>
        <strong>Species:</strong>{character.species}<br/>
      </p>
    </div>
  );
}
