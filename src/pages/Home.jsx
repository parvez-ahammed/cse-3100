// Import hooks for state, effect, and search params
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
// Import the CharacterCard component for displaying individual characters
import CharacterCard from "../components/CharacterCard";
// Import CSS module
import styles from "./Home.module.css";

// Home component - main page for browsing and searching characters
export default function Home() {
  // State for characters on current page
  const [characters, setCharacters] = useState([]);
  // Loading and error state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // React Router search params for filters and pagination
  const [searchParams, setSearchParams] = useSearchParams(() => {
    // Initialize search params from localStorage if present
    const stored = localStorage.getItem('searchFilters');
    if (stored) {
      try {
        const obj = JSON.parse(stored);
        const params = new URLSearchParams();
        if (obj.name) params.set('name', obj.name);
        if (obj.status) params.set('status', obj.status);
        if (obj.page) params.set('page', String(obj.page));
        return params;
      } catch {}
    }
    return undefined;
  });

  // Extract filters from search params
  const name = searchParams.get('name') || '';
  const status = searchParams.get('status') || '';
  const page = parseInt(searchParams.get('page') || '1', 10);
  // State for total page count
  const [pageCount, setPageCount] = useState(1);

  // Persist search/filter preferences to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('searchFilters', JSON.stringify({ name, status, page }));
  }, [name, status, page]);

  // Fetch characters from API whenever filters/page change
  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      setError(null);
      // Rick & Morty API returns 20 per page, but we want 10 per page
      let apiPage = Math.ceil(page / 2) || 1;
      let url = `https://rickandmortyapi.com/api/character?`;
      if (name) url += `name=${encodeURIComponent(name)}&`;
      if (status) url += `status=${encodeURIComponent(status)}&`;
      url += `page=${apiPage}`;
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error('No results');
        const data = await res.json();
        let results = data.results || [];
        // If needed, fetch next API page for strict 10-per-page
        if (page % 2 === 0 && apiPage < data.info.pages) {
          // Even page, need 2nd half from next API page
          const nextRes = await fetch(url.replace(/page=\d+/, `page=${apiPage + 1}`));
          if (nextRes.ok) {
            const nextData = await nextRes.json();
            results = results.concat(nextData.results || []);
          }
        }
        // Calculate strict 10-per-page page count
        const totalResults = data.info.count;
        setPageCount(Math.ceil(totalResults / 10));
        // Slice results for current strict 10-per-page
        const startIdx = (page - 1) % 2 === 0 ? 0 : 10;
        setCharacters(results.slice(startIdx, startIdx + 10));
      } catch (err) {
        setCharacters([]);
        setPageCount(1);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCharacters();
  }, [name, status, page]);

  // Handler for search input change
  const handleSearchChange = (e) => {
    setSearchParams(params => {
      const newParams = new URLSearchParams(params);
      if (e.target.value) newParams.set('name', e.target.value);
      else newParams.delete('name');
      newParams.set('page', '1'); // Reset page on filter
      return newParams;
    });
  };

  // Handler for status filter change
  const handleStatusChange = (e) => {
    setSearchParams(params => {
      const newParams = new URLSearchParams(params);
      if (e.target.value) newParams.set('status', e.target.value);
      else newParams.delete('status');
      newParams.set('page', '1'); // Reset page on filter
      return newParams;
    });
  };

  // Handler for page navigation
  const handlePageChange = (newPage) => {
    setSearchParams(params => {
      const newParams = new URLSearchParams(params);
      newParams.set('page', String(newPage));
      return newParams;
    });
  };

  // Render UI
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Rick & Morty Explorer</h1>
      
      {/* Search and filter form - UPDATED DESIGN */}
      <div className={styles.searchForm}>
        <div className={styles.searchContainer}>
          {/* Character Name Search */}
          <div className={styles.searchInputWrapper}>
            <div className={styles.searchIconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className={styles.searchIcon} viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </div>
            <input
              id="nameSearch"
              type="text"
              className={styles.searchInput}
              placeholder="Search characters..."
              value={name}
              onChange={handleSearchChange}
            />
            {name && (
              <button 
                className={styles.clearButton}
                type="button"
                onClick={() => handleSearchChange({ target: { value: '' } })}
                aria-label="Clear search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </button>
            )}
          </div>
      
          {/* Status Filter */}
          <div className={styles.statusFilterWrapper}>
            <div className={styles.statusButtons}>
              <button 
                className={`${styles.statusButton} ${status === '' ? styles.statusActive : ''}`}
                onClick={() => handleStatusChange({ target: { value: '' } })}
              >
                <span className={styles.statusDot}></span>
                All
              </button>
              <button 
                className={`${styles.statusButton} ${status === 'alive' ? styles.statusActive : ''}`}
                onClick={() => handleStatusChange({ target: { value: 'alive' } })}
              >
                <span className={`${styles.statusDot} ${styles.statusAlive}`}></span>
                Alive
              </button>
              <button 
                className={`${styles.statusButton} ${status === 'dead' ? styles.statusActive : ''}`}
                onClick={() => handleStatusChange({ target: { value: 'dead' } })}
              >
                <span className={`${styles.statusDot} ${styles.statusDead}`}></span>
                Dead
              </button>
              <button 
                className={`${styles.statusButton} ${status === 'unknown' ? styles.statusActive : ''}`}
                onClick={() => handleStatusChange({ target: { value: 'unknown' } })}
              >
                <span className={`${styles.statusDot} ${styles.statusUnknown}`}></span>
                Unknown
              </button>
            </div>
          </div>
        </div>
        
        {/* Active filters display - UPDATED DESIGN */}
        {(name || status) && (
          <div className={styles.activeFilters}>
            <div className={styles.filtersLabel}>Active filters:</div>
            <div className={styles.filterTags}>
              {name && (
                <div className={styles.filterTag}>
                  <span className={styles.filterTagText}>Name: {name}</span>
                  <button 
                    className={styles.filterTagRemove}
                    onClick={() => handleSearchChange({ target: { value: '' } })}
                  >
                    ×
                  </button>
                </div>
              )}
              {status && (
                <div className={`${styles.filterTag} ${styles[`filterTag${status.charAt(0).toUpperCase() + status.slice(1)}`]}`}>
                  <span className={styles.filterTagText}>
                    Status: {status.charAt(0).toUpperCase() + status.slice(1)}
                  </span>
                  <button 
                    className={styles.filterTagRemove}
                    onClick={() => handleStatusChange({ target: { value: '' } })}
                  >
                    ×
                  </button>
                </div>
              )}
            </div>
            <button 
              className={styles.clearFiltersButton}
              onClick={() => {
                setSearchParams(new URLSearchParams({ page: '1' }));
              }}
            >
              Clear All
            </button>
          </div>
        )}
      </div>
      
      {/* Loading state */}
      {loading && (
        <div className={styles.loadingContainer}>
          <div className="spinner-border text-primary me-2" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <span>Loading characters...</span>
        </div>
      )}
      
      {/* Error state */}
      {error && (
        <div className={styles.errorContainer}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-exclamation-triangle-fill me-2" viewBox="0 0 16 16">
            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
          </svg>
          {error}
        </div>
      )}
      
      {/* Character cards grid */}
      <div className={styles.characterGrid}>
        {characters.map((char) => (
          <div key={char.id}>
            <CharacterCard character={char} />
          </div>
        ))}
      </div>
      
      {/* Pagination controls */}
      {!loading && !error && characters.length > 0 && (
        <div className={styles.paginationContainer}>
          <button
            className={styles.pageButton}
            onClick={() => handlePageChange(page - 1)}
            disabled={page <= 1}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
            Previous
          </button>
          
          <span className={styles.pageInfo}>
            Page {page} of {pageCount}
          </span>
          
          <button
            className={styles.pageButton}
            onClick={() => handlePageChange(page + 1)}
            disabled={page >= pageCount}
          >
            Next
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
        </div>
      )}
    </main>
  );
}
