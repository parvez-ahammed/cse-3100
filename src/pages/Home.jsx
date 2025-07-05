import React, { useState, useEffect, useCallback } from "react";
import { api } from "../common/api";
import { useQueryParams } from "../hooks/useQueryParams";
import CharacterCard from "../components/CharacterCard";
import SearchAndFilter from "../components/SearchAndFilter";
import Pagination from "../components/Pagination";

const Home = () => {
  const { getParam } = useQueryParams();

  // Main state
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [paginationInfo, setPaginationInfo] = useState({
    currentPage: 1,
    totalPages: 1,
    totalCount: 0,
  });

  // Get initial values from URL params
  const pageFromUrl = parseInt(getParam("page")) || 1;
  const nameFromUrl = getParam("name") || "";
  const statusFromUrl = getParam("status") || "";

  // Current filter state
  const [searchQuery, setSearchQuery] = useState(nameFromUrl);
  const [statusFilter, setStatusFilter] = useState(statusFromUrl);
  const [currentPage, setCurrentPage] = useState(pageFromUrl);

  // Fetch characters with current filters
  const loadCharacters = useCallback(async (page = 1, name = "", status = "") => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await api.getCharacters(page, name, status);

      setCharacters(response.results || []);
      setPaginationInfo({
        currentPage: page,
        totalPages: response.info?.pages || 1,
        totalCount: response.info?.count || 0,
      });
    } catch (err) {
      // Handle both API errors and network issues
      const errorMsg = err.message || "Something went wrong while fetching characters";
      setError(errorMsg);
      setCharacters([]);
      setPaginationInfo({ currentPage: 1, totalPages: 1, totalCount: 0 });
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Load data when filters change
  useEffect(() => {
    loadCharacters(currentPage, searchQuery, statusFilter);
  }, [loadCharacters, currentPage, searchQuery, statusFilter]);

  // Event handlers
  const handleSearchSubmit = (searchTerm) => {
    setSearchQuery(searchTerm);
    setCurrentPage(1); // Always reset to first page when searching
  };

  const handleStatusFilterChange = (newStatus) => {
    setStatusFilter(newStatus);
    setCurrentPage(1); // Reset page when filter changes
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    // Scroll to top when changing pages - better UX
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const retryFetch = () => {
    loadCharacters(1, "", ""); // Reset everything and try again
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="home-container">
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading characters...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="home-container">
        <div className="error-container">
          <h2>Oops! Something went wrong</h2>
          <p>{error}</p>
          <button onClick={retryFetch} className="retry-btn">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const hasResults = characters.length > 0;
  const showFilters = searchQuery || statusFilter;

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Rick & Morty Characters</h1>
        <p>Explore the multiverse and discover your favorite characters</p>
      </div>

      <SearchAndFilter
        onSearchChange={handleSearchSubmit}
        onFilterChange={handleStatusFilterChange}
      />

      {!hasResults ? (
        <div className="no-results">
          <h3>No characters found</h3>
          <p>
            {showFilters
              ? "Try adjusting your search terms or filters"
              : "Unable to load characters at the moment"}
          </p>
        </div>
      ) : (
        <>
          <div className="results-info">
            <p>
              Showing {characters.length} of {paginationInfo.totalCount} characters
              {searchQuery && ` matching "${searchQuery}"`}
              {statusFilter && ` with status "${statusFilter}"`}
            </p>
          </div>

          <div className="characters-grid">
            {characters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>

          <Pagination
            currentPage={paginationInfo.currentPage}
            totalPages={paginationInfo.totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default Home;
