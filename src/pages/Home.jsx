import React, { useState, useEffect } from "react";
import CharacterCard from "../components/CharacterCard";

function Home() {
  const [apiCharacters, setApiCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [nameFilter, setNameFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  // ... the rest of your Home.jsx code remains the same ...

  useEffect(() => {
    const apiPage = Math.ceil(currentPage / 2);
    const apiUrl = `https://rickandmortyapi.com/api/character/?page=${apiPage}&name=${nameFilter}&status=${statusFilter}`;
    const fetchCharacters = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("No characters found. Try different filters.");
        }
        const data = await response.json();
        setApiCharacters(data.results);
        setInfo(data.info);
      } catch (error) {
        setError(error.message);
        setApiCharacters([]);
        setInfo({});
      } finally {
        setLoading(false);
      }
    };
    fetchCharacters();
  }, [currentPage, nameFilter, statusFilter]);

  const handleNameChange = (e) => {
    setNameFilter(e.target.value);
    setCurrentPage(1);
  };

  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value);
    setCurrentPage(1);
  };

  const isFirstHalf = currentPage % 2 === 1;
  const charactersToShow = isFirstHalf
    ? apiCharacters.slice(0, 10)
    : apiCharacters.slice(10, 20);

  const totalUiPages = info.pages ? info.pages * 2 : 1;

  return (
    <div>
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
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && charactersToShow.length > 0 && (
        <>
          <div className="character-grid">
            {charactersToShow.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
          <div className="pagination">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalUiPages}
            </span>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={
                currentPage === totalUiPages || (!info.next && !isFirstHalf)
              }
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
