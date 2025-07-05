import React, { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import SearchBar from "../components/SearchBar";
import FilterDropdown from "../components/FilterDropDown";

export default function Home() {
  // State to hold characters fetched from the API
  const [characters, setCharacters] = useState([]);

  // State to hold the search input value
  const [search, setSearch] = useState('');

  // State to hold the selected status filter value
  const [status, setStatus] = useState('');

  // State to hold any fetch error messages
  const [error, setError] = useState(null);

  /**
   * Fetch characters from the API whenever search or status changes
   * Dynamically builds the URL based on search and status input
   */
  useEffect(() => {
    const controller = new AbortController(); // To cancel fetch if component unmounts

    async function fetchCharacters() {
      try {
        // Build dynamic API query string
        let url = `https://rickandmortyapi.com/api/character/?`;
        if (search) url += `name=${search}&`;
        if (status) url += `status=${status}`;

        const response = await fetch(url, { signal: controller.signal });

        // If the response is not ok (404, 500 etc.), throw an error
        if (!response.ok) throw new Error('No characters found');

        const data = await response.json();
        setCharacters(data.results); // Set character list
        setError(null); // Clear any existing error
      } catch (err) {
        setCharacters([]); // Clear character list on error
        setError(err.message); // Set error message
      }
    }

    fetchCharacters();

    // Cleanup function to abort fetch on unmount or rerun
    return () => controller.abort();
  }, [search, status]); // Dependency array: runs effect on search or status change

  /**
   * Initial fetch to load some characters when the page first loads
   */
  useEffect(() => {
    const fetchCharacters = async () => {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();
      setCharacters(data.results); // Set initial character list
    };

    fetchCharacters();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="container">
      <h1>Rick & Morty Characters</h1>

      {/* Search input box component */}
      <SearchBar search={search} setSearch={setSearch} />

      {/* Dropdown to filter characters by status */}
      <FilterDropdown status={status} setStatus={setStatus} />

      {/* Show error message if characters not found */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Render character cards */}
      <div className="character-grid">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}
