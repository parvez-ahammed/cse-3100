import statemanage from "../stateManage/contex";
import { charaterDetails } from '../context/fetchinfo.js'

export default function CharacterDetail() {
  const { character } = statemanage()

  charaterDetails();


  if (!character) return <p className="flex justify-center items-center h-screen 600">Loading...</p>;
  console.log(character)

  return (

    <div className="container my-4 text-2xl flex justify-center gap-15 items-start border-2 rounded-2xl">
      <div className="">

      <h1 className="text-3xl">{character.name}</h1>
      <img src={character.image} alt={character.name} className="img-fluid rounded-2xl" />
      <p>
        <strong>Status:</strong> {character.status} <br />
        <strong>Species:</strong> {character.species} <br />
        <strong>Gender:</strong> {character.gender} <br />
        <strong>Origin:</strong> {character.origin['name']} <br />
      </p>
      </div>
      <div className=" flex flex-col gap-2">
        <div className="underline ">Episodes</div>
        {character.episode.map((items, index) => {
          return <a key={items} className="text-blue-600 text-sm" href={items} target="_blank" rel="noopener noreferrer">
                    {index} . {items}
                  </a>
        })}
        </div>
    </div>
  );
}
