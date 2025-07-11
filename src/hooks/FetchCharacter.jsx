import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const FetchCharacter = () => {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      const name = searchParams.get("name") || "";
      const status = searchParams.get("status") || "";
      const apiPage = searchParams.get("apipage") || 1;

      const query = new URLSearchParams();
      if (name) query.set("name", name);
      if (status) query.set("status", status);
      query.set("page", apiPage);

      try {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character?${query.toString()}`
        );
        const data = await res.json();
        setCharacters(data.results || []);
        setInfo(data.info || {});
      } catch (err) {
        setCharacters([]);
        setInfo({});
      }
    };

    fetchData();
  }, [searchParams]);

  return { characters, info };
};

export default FetchCharacter;
