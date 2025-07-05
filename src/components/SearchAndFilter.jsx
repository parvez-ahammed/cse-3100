import React, { useEffect, useState } from "react";
import { useQueryParams } from "../hooks/useQueryParams";

const SearchAndFilter = ({ onSearchChange, onFilterChange }) => {
  const { getParam, setMultipleParams } = useQueryParams();

  // Keep track of both the actual search term and what user is typing
  const [searchTerm, setSearchTerm] = useState(getParam("name"));
  const [searchInput, setSearchInput] = useState(getParam("name"));
  const [statusFilter, setStatusFilter] = useState(getParam("status"));

  // Load saved preferences on mount - nice UX touch
  useEffect(() => {
    const savedPrefs = localStorage.getItem("searchPreferences");
    if (savedPrefs) {
      try {
        const preferences = JSON.parse(savedPrefs);
        // Only restore if URL doesn't already have params
        if (!getParam("name") && preferences.name) {
          setSearchTerm(preferences.name);
          setSearchInput(preferences.name);
        }
        if (!getParam("status") && preferences.status) {
          setStatusFilter(preferences.status);
        }
      } catch (err) {
        // Invalid JSON in localStorage, just ignore
        console.warn('Invalid search preferences in localStorage');
      }
    }
  }, [getParam]);

  // Auto-save preferences whenever they change
  useEffect(() => {
    const prefs = { name: searchTerm, status: statusFilter };
    localStorage.setItem("searchPreferences", JSON.stringify(prefs));
  }, [searchTerm, statusFilter]);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const performSearch = () => {
    const trimmedInput = searchInput.trim();
    setSearchTerm(trimmedInput);

    setMultipleParams({
      name: trimmedInput,
      status: statusFilter,
      page: 1, // Reset to first page when searching
    });

    onSearchChange(trimmedInput);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission if inside a form
      performSearch();
    }
  };

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setStatusFilter(newStatus);

    setMultipleParams({
      name: searchTerm,
      status: newStatus,
      page: 1,
    });

    onFilterChange(newStatus);
  };

  const resetAllFilters = () => {
    setSearchTerm("");
    setSearchInput("");
    setStatusFilter("");
    setMultipleParams({ name: "", status: "", page: 1 });
    onSearchChange("");
    onFilterChange("");
  };

  const hasActiveFilters = searchTerm || statusFilter;

  return (
    <div className="search-filter-container">
      <div className="search-section">
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Search characters by name..."
            value={searchInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="search-input"
          />
          <button
            onClick={performSearch}
            className="search-icon"
            type="button"
            aria-label="Search"
          >
            {/* Search icon SVG */}
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="filter-section">
        <select
          value={statusFilter}
          onChange={handleStatusChange}
          className="status-filter"
        >
          <option value="">All Status</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      {hasActiveFilters && (
        <button onClick={resetAllFilters} className="clear-filters-btn">
          Clear All
        </button>
      )}

      {hasActiveFilters && (
        <div className="active-filters">
          <span className="filter-label">Active filters:</span>
          {searchTerm && (
            <span className="filter-tag">Name: "{searchTerm}"</span>
          )}
          {statusFilter && (
            <span className="filter-tag">Status: {statusFilter}</span>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchAndFilter;
