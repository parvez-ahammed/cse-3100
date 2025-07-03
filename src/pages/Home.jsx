import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import { allcharaters } from "../context/fetchinfo";
import statemanage from "../stateManage/contex";

export default function Home() {
  const {allCharacter}=statemanage()

  allcharaters()

  if(!allCharacter){
      return (
         <p className=" justify-center items-center flex mt-[10%] text-5xl text-black">Loanding.....</p>
        )
    }

  return (
    <main className="container">
      <h1 className="my-4 text-2xl font-semibold text-center">Rick & Morty Explorer</h1>
      <div className="grid gap-4 grid-cols-3">
        {allCharacter.map((char) => (
          <div className="col-md-4 mb-4" key={char.id}>
            <CharacterCard character={char} />
          </div>
        ))}
      </div>
    </main>
  );
}
