import { useState, useEffect } from "react";

export function useFetchCharacters({ name = "", status = "", page = 1 }) {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      setError(null);
      try {
        let url = `https://rickandmortyapi.com/api/character/?page=${page}`;
        if (name) url += `&name=${encodeURIComponent(name)}`;
        if (status) url += `&status=${encodeURIComponent(status)}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("No results found.");
        const data = await res.json();
        setCharacters(data.results);
        setInfo(data.info);
      } catch (err) {
        setError(err.message);
        setCharacters([]);
        setInfo({});
      } finally {
        setLoading(false);
      }
    };
    fetchCharacters();
  }, [name, status, page]);

  return { characters, info, loading, error };
}