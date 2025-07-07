import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";
import SearchBar from "../components/SearchBar";
import FilterDropdown from "../components/FilterDropdown";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [info, setInfo] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  // Get current search and filter values from URL
  const searchTerm = searchParams.get('name') || '';
  const statusFilter = searchParams.get('status') || '';
  const currentPage = parseInt(searchParams.get('page')) || 1;

  const updateURL = (updates) => {
    const newParams = new URLSearchParams(searchParams);

    Object.entries(updates).forEach(([key, value]) => {
      if (value) {
        newParams.set(key, value);
      } else {
        newParams.delete(key);
      }
    });

    // Reset to page 1 when search or filter changes
    if (updates.name !== undefined || updates.status !== undefined) {
      newParams.set('page', '1');
    }

    setSearchParams(newParams);
  };

  const handleSearchChange = (value) => {
    updateURL({ name: value });
  };

  const handleStatusChange = (value) => {
    updateURL({ status: value });
  };

  const handlePageChange = (page) => {
    updateURL({ page: page.toString() });
  };

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        let url = `https://rickandmortyapi.com/api/character?page=${currentPage}`;

        if (searchTerm) {
          url += `&name=${encodeURIComponent(searchTerm)}`;
        }

        if (statusFilter) {
          url += `&status=${encodeURIComponent(statusFilter)}`;
        }

        const res = await fetch(url);
        const data = await res.json();

        if (res.ok) {
          setCharacters(data.results || []);
          setInfo(data.info || {});
          setError(null);
        } else {
          setCharacters([]);
          setInfo({});
          setError(data.error || 'No characters found');
        }
      } catch (error) {
        setError('Failed to fetch characters');
        setCharacters([]);
        setInfo({});
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [searchTerm, statusFilter, currentPage]);

  return (
    <main className="container">
      <div className="header-section">
        <Link to="/" className="title-link">
          <h1 className="my-4">Rick & Morty Explorer</h1>
        </Link>

        {/* Navigation */}
        <nav className="mb-4">
          <Link to="/about" className="btn btn-outline-primary me-2">About</Link>
          <Link to="/contact" className="btn btn-outline-primary">Contact</Link>
        </nav>

        {/* Search and Filter Controls */}
        <div className="controls-section mb-4">
          <div className="row">
            <div className="col-md-8">
              <SearchBar
                searchTerm={searchTerm}
                onSearchChange={handleSearchChange}
              />
            </div>
            <div className="col-md-4">
              <FilterDropdown
                statusFilter={statusFilter}
                onStatusChange={handleStatusChange}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Loading State */}
      {loading && <div className="text-center"><p>Loading characters...</p></div>}

      {/* Error State */}
      {error && <div className="alert alert-warning text-center">{error}</div>}

      {/* Characters Grid */}
      {!loading && !error && (
        <>
          <div className="row">
            {characters.map((char) => (
              <div className="col-md-4 mb-4" key={char.id}>
                <CharacterCard character={char} />
              </div>
            ))}
          </div>

          {/* Pagination */}
          {info && (
            <div className="pagination-section d-flex justify-content-between align-items-center mt-4">
              <button
                className="btn btn-secondary"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={!info.prev}
              >
                ← Previous
              </button>

              <span className="page-info">
                Page {currentPage} of {info.pages || 1}
              </span>

              <button
                className="btn btn-secondary"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={!info.next}
              >
                Next →
              </button>
            </div>
          )}
        </>
      )}
    </main>
  );
}
