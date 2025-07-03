import statemanage from "../stateManage/contex";
import { charaterDetails } from '../context/fetchinfo.js'

export default function CharacterDetail() {
  const { character } = statemanage()

  charaterDetails();


  if (!character) return <p className="flex justify-center items-center h-secreen 600">Loading...</p>;

  return (

    <div className="container my-4 text-2xl flex flex-col justify-center items-center border-2 rounded-2xl">
      <h1 className="text-3xl">{character.name}</h1>
      <img src={character.image} alt={character.name} className="img-fluid rounded-2xl" />
      <p>
        <strong>Status:</strong> {character.status} <br />
        <strong>Species:</strong> {character.species} <br />
      </p>
    </div>
  );
}
