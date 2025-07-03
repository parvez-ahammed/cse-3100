import { useEffect } from "react";
import statemanage from "../stateManage/contex";
import { useParams } from "react-router-dom";

export const charaterDetails = () => {

    useEffect
    const { id } = useParams();
    const {setCharacter}=statemanage()
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res) => res.json())
        .then(setCharacter);
  }, [id]);
}

export const allcharaters=()=>{
  const {setAllCharacter}=statemanage()
  useEffect(() => {
    const fetchCharacters = async () => {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();
      setAllCharacter(data.results);
    };
    fetchCharacters();
  }, []);
}
