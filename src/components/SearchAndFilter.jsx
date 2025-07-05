import React, { useEffect, useState } from "react";
import { useQueryParams } from "../hooks/useQueryParams";

const SearchAndFilter = ({ onSearchChange, onFilterChange }) => {
  const { getParam, setMultipleParams } = useQueryParams();
  const [searchTerm, setSearchTerm] = useState(getParam("name"));
  const [statusFilter, setStatusFilter] = useState(getParam("status"));

  useEffect(() => {
    const savedSearch = localStorage.getItem("searchPreferences");
    if (savedSearch) {
      const preferences = JSON.parse(savedSearch);
      if (!getParam("name") && preferences.name) {
        setSearchTerm(preferences.name);
      }
      if (!getParam("status") && preferences.status) {
        setStatusFilter(preferences.status);
      }
    }
  }, []);

  useEffect(() => {
    const preferences = { name: searchTerm, status: statusFilter };
    localStorage.setItem("searchPreferences", JSON.stringify(preferences));
  }, [searchTerm, statusFilter]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    setMultipleParams({
      name: value,
      status: statusFilter,
      page: 1,
    });

    onSearchChange(value);
  };

  const handleStatusChange = (e) => {
    const value = e.target.value;
    setStatusFilter(value);

    setMultipleParams({
      name: searchTerm,
      status: value,
      page: 1,
    });

    onFilterChange(value);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setStatusFilter("");
    setMultipleParams({ name: "", status: "", page: 1 });
    onSearchChange("");
    onFilterChange("");
  };

  return (
    <div className="search-filter-container">
      <div className="search-section">
        <div className="search-input-container">
          <input
            type="text"
            placeholder="Search characters by name..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
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

      {(searchTerm || statusFilter) && (
        <button onClick={clearFilters} className="clear-filters-btn">
          Clear Filters
        </button>
      )}

      {(searchTerm || statusFilter) && (
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
