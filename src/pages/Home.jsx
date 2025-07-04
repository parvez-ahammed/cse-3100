import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  // Get query parameters from URL
  const nameQuery = searchParams.get("name") || "";
  const statusQuery = searchParams.get("status") || "";

  // Fetch characters
  useEffect(() => {
    const fetchCharacters = async () => {
      let apiUrl = `https://rickandmortyapi.com/api/character/?`;

      if (nameQuery) apiUrl += `name=${nameQuery}&`;
      if (statusQuery) apiUrl += `status=${statusQuery}&`;

      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        if (data.results) setCharacters(data.results);
        else setCharacters([]); // No results
      } catch (error) {
        console.error("Fetch error:", error);
        setCharacters([]);
      }
    };

    fetchCharacters();
  }, [nameQuery, statusQuery]);

  // Handle search and filter change
  const handleSearchChange = (e) => {
    searchParams.set("name", e.target.value);
    searchParams.set("page", 1); // optional reset page
    setSearchParams(searchParams);
  };

  const handleStatusChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      searchParams.delete("status");
    } else {
      searchParams.set("status", value);
    }
    searchParams.set("page", 1); // optional reset page
    setSearchParams(searchParams);
  };

  return (
    <main className='container my-4'>
      <h1 className='mb-4'>Rick & Morty Explorer</h1>

      {/* Filter UI */}
      <div className='row mb-3'>
        <div className='col-md-3 mb-2'>
          <select className='form-select' value={statusQuery} onChange={handleStatusChange}>
            <option value=''>Select status</option>
            <option value='alive'>Alive</option>
            <option value='dead'>Dead</option>
            <option value='unknown'>Unknown</option>
          </select>
        </div>

        <div className='col-md-5 mb-2'>
          <input
            type='text'
            placeholder='Search characters'
            className='form-control'
            value={nameQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {/* Character Grid */}
      {characters.length === 0 ? (
        <p>No characters found.</p>
      ) : (
        <div className='row'>
          {characters.map((char) => (
            <div className='col-md-4 mb-4' key={char.id}>
              <CharacterCard character={char} />
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
