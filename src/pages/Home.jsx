import React, { useState, useEffect } from "react";
import { api } from "../common/api";
import { useQueryParams } from "../hooks/useQueryParams";
import CharacterCard from "../components/CharacterCard";
import SearchAndFilter from "../components/SearchAndFilter";
import Pagination from "../components/Pagination";

const Home = () => {
  const { getParam } = useQueryParams();
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalCount: 0,
  });


  const initialPage = parseInt(getParam("page")) || 1;
  const initialName = getParam("name") || "";
  const initialStatus = getParam("status") || "";

  const [searchName, setSearchName] = useState(initialName);
  const [statusFilter, setStatusFilter] = useState(initialStatus);
  const [currentPage, setCurrentPage] = useState(initialPage);

  const fetchCharacters = async (page = 1, name = "", status = "") => {
    try {
      setLoading(true);
      setError(null);

      const data = await api.getCharacters(page, name, status);

      setCharacters(data.results || []);
      setPagination({
        currentPage: page,
        totalPages: data.info?.pages || 1,
        totalCount: data.info?.count || 0,
      });
    } catch (err) {
      setError(err.message || "Failed to fetch characters");
      setCharacters([]);
      setPagination({ currentPage: 1, totalPages: 1, totalCount: 0 });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters(currentPage, searchName, statusFilter);
  }, [currentPage, searchName, statusFilter]);

  const handleSearchChange = (name) => {
    setSearchName(name);
    setCurrentPage(1);
  };

  const handleFilterChange = (status) => {
    setStatusFilter(status);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) {
    return (
      <div className="home-container">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading characters...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="home-container">
        <div className="error-container">
          <h2>Oops! Something went wrong</h2>
          <p>{error}</p>
          <button
            onClick={() => fetchCharacters(1, "", "")}
            className="retry-btn"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Rick & Morty Characters</h1>
        <p>Explore the multiverse and discover your favorite characters</p>
      </div>

      <SearchAndFilter
        onSearchChange={handleSearchChange}
        onFilterChange={handleFilterChange}
      />

      {characters.length === 0 ? (
        <div className="no-results">
          <h3>No characters found</h3>
          <p>Try adjusting your search terms or filters</p>
        </div>
      ) : (
        <>
          <div className="results-info">
            <p>
              Showing {characters.length} of {pagination.totalCount} characters
              {searchName && ` matching "${searchName}"`}
              {statusFilter && ` with status "${statusFilter}"`}
            </p>
          </div>

          <div className="characters-grid">
            {characters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>

          <Pagination
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default Home;
