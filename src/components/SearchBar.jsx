import React, { useState, useEffect } from 'react';

const SearchBar = ({ onSearch, onStatusFilter, searchValue, statusValue }) => {
    const [localSearch, setLocalSearch] = useState(searchValue || '');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            onSearch(localSearch);
        }, 300);

        return () => clearTimeout(timeoutId);
    }, [localSearch, onSearch]);

    const handleClearSearch = () => {
        setLocalSearch('');
        onSearch('');
    };

    const handleClearFilters = () => {
        setLocalSearch('');
        onSearch('');
        onStatusFilter('');
    };

    return (
        <div className="search-container">
            <div className="search-wrapper">
                <div className="search-input-wrapper">
                    <span className="search-icon">🔍</span>
                    <input
                        type="text"
                        placeholder="Search for characters..."
                        value={localSearch}
                        onChange={(e) => setLocalSearch(e.target.value)}
                        className="search-input"
                    />
                    {localSearch && (
                        <button
                            onClick={handleClearSearch}
                            className="clear-search-btn"
                            type="button"
                        >
                            ✕
                        </button>
                    )}
                </div>

                <div className="filter-wrapper">
                    <span className="filter-icon">🎯</span>
                    <select
                        value={statusValue}
                        onChange={(e) => onStatusFilter(e.target.value)}
                        className="status-filter"
                    >
                        <option value="">All Status</option>
                        <option value="alive">🟢 Alive</option>
                        <option value="dead">🔴 Dead</option>
                        <option value="unknown">🟡 Unknown</option>
                    </select>
                </div>

                {(localSearch || statusValue) && (
                    <button
                        onClick={handleClearFilters}
                        className="clear-filters-btn"
                        type="button"
                    >
                        Clear All
                    </button>
                )}
            </div>

            {(localSearch || statusValue) && (
                <div className="active-filters">
                    <span className="filter-label">Active filters:</span>
                    {localSearch && (
                        <span className="filter-tag">
              Name: "{localSearch}"
              <button onClick={handleClearSearch} className="remove-filter">✕</button>
            </span>
                    )}
                    {statusValue && (
                        <span className="filter-tag">
              Status: {statusValue}
                            <button onClick={() => onStatusFilter('')} className="remove-filter">✕</button>
            </span>
                    )}
                </div>
            )}
        </div>
    );
};

export default SearchBar;