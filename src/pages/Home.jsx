import React, { useState, useEffect } from "react";
import CharacterCard from "../components/CharacterCard"; // Correctly import the component

function Home() {
  // State for data and loading
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // State for API info, pagination, and filtering
  const [info, setInfo] = useState({});
  const [page, setPage] = useState(1);
  const [nameFilter, setNameFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    const apiUrl = `https://rickandmortyapi.com/api/character/?page=${page}&name=${nameFilter}&status=${statusFilter}`;

    const fetchCharacters = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("No characters found. Try different filters.");
        }
        const data = await response.json();
        setCharacters(data.results);
        setInfo(data.info);
      } catch (error) {
        setError(error.message);
        setCharacters([]);
        setInfo({});
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [page, nameFilter, statusFilter]); // Re-fetch when page or filters change

  const handleNameChange = (e) => {
    setNameFilter(e.target.value);
    setPage(1); // Reset to page 1 on a new search
  };

  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value);
    setPage(1); // Reset to page 1 on a new filter
  };

  return (
    <div className="home-container">
      <h1>Rick & Morty Characters</h1>

      {/* Filter Controls */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search by name..."
          value={nameFilter}
          onChange={handleNameChange}
        />
        <select value={statusFilter} onChange={handleStatusChange}>
          <option value="">All Statuses</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      {/* Character Display */}
      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}
      {!loading && !error && (
        <>
          <div className="character-grid">
            {characters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="pagination">
            <button onClick={() => setPage(page - 1)} disabled={!info.prev}>
              Previous
            </button>
            <span>
              Page {page} of {info.pages || 1}
            </span>
            <button onClick={() => setPage(page + 1)} disabled={!info.next}>
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
