import { useEffect, useState } from "react";

const FetchCharacter = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const fetchCharacters = async () => {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();
      setCharacters(data.results);
    };

    fetchCharacters();
  }, []);
  return {characters}
}

export default FetchCharacter
