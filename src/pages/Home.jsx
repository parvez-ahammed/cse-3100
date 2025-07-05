// src/pages/Home.jsx

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [pageInfo, setPageInfo] = useState(null); // To store pagination data (next, prev)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // useSearchParams is used to read and modify the URL's query string
  const [searchParams, setSearchParams] = useSearchParams();

  // Get current values from URL or set defaults
  const nameFilter = searchParams.get("name") || "";
  const statusFilter = searchParams.get("status") || "";
  const currentPage = searchParams.get("page") || 1;

  useEffect(() => {
    // Construct the API URL with query parameters for filtering and pagination
    const apiUrl = `https://rickandmortyapi.com/api/character/?page=${currentPage}&name=${nameFilter}&status=${statusFilter}`;
    
    setLoading(true);
    setError(null);

    const fetchCharacters = async () => {
      try {
        const res = await fetch(apiUrl);
        if (!res.ok) {
          // The API returns 404 if no character matches the filter
          if (res.status === 404) {
             setCharacters([]);
             setPageInfo(null);
             throw new Error("No characters found with these filters.");
          }
          throw new Error(`API error: ${res.statusText}`);
        }
        const data = await res.json();
        setCharacters(data.results);
        setPageInfo(data.info); // Save the pagination info
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [nameFilter, statusFilter, currentPage]); // Re-run effect when these change

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    // When filters change, reset to page 1
    setSearchParams({ name: nameFilter, status: statusFilter, [name]: value, page: 1 });
  };

  const handlePageChange = (newPage) => {
    // Keep existing filters when changing page
    setSearchParams({ name: nameFilter, status: statusFilter, page: newPage });
  };

  return (
    <main className="container">
      <h1 className="my-4">Rick & Morty Explorer</h1>
      
      {/* Search and Filter Controls */}
      <div className="row mb-4">
        <div className="col-md-6">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Filter by name..."
            value={nameFilter}
            onChange={handleFilterChange}
          />
        </div>
        <div className="col-md-6">
          <select
            name="status"
            className="form-select"
            value={statusFilter}
            onChange={handleFilterChange}
          >
            <option value="">All Statuses</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
      </div>

      {/* Character List or Messages */}
      {loading && <p>Loading characters...</p>}
      {error && <div className="alert alert-danger">{error}</div>}
      {!loading && (
        <div className="row">
          {characters.map((char) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={char.id}>
              <CharacterCard character={char} />
            </div>
          ))}
        </div>
      )}
      
      {/* Pagination Controls */}
      <div className="d-flex justify-content-center align-items-center my-4">
        <button
          className="btn btn-secondary"
          onClick={() => handlePageChange(Number(currentPage) - 1)}
          disabled={!pageInfo?.prev} // Disable if there's no previous page
        >
          « Previous
        </button>
        <span className="mx-3">
          Page {currentPage} of {pageInfo?.pages || 1}
        </span>
        <button
          className="btn btn-secondary"
          onClick={() => handlePageChange(Number(currentPage) + 1)}
          disabled={!pageInfo?.next} // Disable if there's no next page
        >
          Next »
        </button>
      </div>
    </main>
  );
}