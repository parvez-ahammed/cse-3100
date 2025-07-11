import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const FetchSingleCharacter = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then(setCharacter);
  }, [id]);
  return { character };
};

export default FetchSingleCharacter;
