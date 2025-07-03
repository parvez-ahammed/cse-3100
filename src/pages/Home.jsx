import { useRef, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import { allcharaters } from "../context/fetchinfo";
import statemanage from "../stateManage/contex";

export default function Home() {
  const {allCharacter}=statemanage()
  const [visible, setVisible] = useState(3);
  const incrementCharacter = useRef(3)
  allcharaters()
  const increateLoadMore=()=>{
    incrementCharacter.current=incrementCharacter.current+3
    setVisible(incrementCharacter.current)
  }
  

  if(!allCharacter){
      return (
         <p className=" justify-center items-center flex mt-[10%] text-5xl text-black">Loanding.....</p>
        )
    }

  return (
    <main className="container flex flex-col justify-center items-center">
      <h1 className="my-4 text-2xl font-semibold text-center">Rick & Morty Explorer</h1>
      <div className="grid gap-4 grid-cols-3">
        {allCharacter.slice(0,visible).map((char) => (
          <div className="col-md-4 mb-4" key={char.id}>
            <CharacterCard character={char} />
          </div>
        ))}
      </div>
      { incrementCharacter.current<=20 &&  <div className="cursor-pointer w-[15%] font-bold bg-blue-400 text-xl items-center justify-center flex rounded-2xl p-1 border-2" onClick={increateLoadMore}>Load More</div>
      }
    </main>
  );
}
