import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";
import SearchFilter from "../components/SearchFilter";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchCharacters = async () => {
      const name = searchParams.get("name") || "";
      const status = searchParams.get("status") || "";

      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}`
      );
      const data = await res.json();
      setCharacters(data.results || []);
    };

    fetchCharacters();
  }, [searchParams]); // useEffect runs every time the page changes

  return (
    <main className="container">
      <h1 className="my-4">Rick & Morty Explorer</h1>

      <SearchFilter />

      <div className="row">
        {characters.map((char) => (
          <div className="col-md-4 mb-4" key={char.id}>
            <CharacterCard character={char} />
          </div>
        ))}
      </div>
    </main>
  );
}
