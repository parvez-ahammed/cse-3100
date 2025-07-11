import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const FetchCharacter = () => {
  const [characters, setCharacters] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      const name = searchParams.get("name") || "";
      const status = searchParams.get("status") || "";

      const query = new URLSearchParams();
      if (name) query.set("name", name);
      if (status) query.set("status", status);

      try {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character?${query.toString()}`
        );
        const data = await res.json();
        setCharacters(data.results || []);
      } catch (err) {
        setCharacters([]);
      }
    };

    fetchData();
  }, [searchParams]);

  return { characters };
};

export default FetchCharacter;
