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
    <main className="container home-main">
      <header className="header-section home-header">
        <h1 className="my-4 title-link">Rick & Morty Explorer</h1>
        <nav className="nav-bar mb-4">
          <Link to="/about" className="nav-btn">About</Link>
          <Link to="/contact" className="nav-btn">Contact</Link>
        </nav>
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
      </header>

      {loading && <div className="text-center"><p>Loading characters...</p></div>}

      {error && <div className="alert alert-warning text-center">{error}</div>}

      {!loading && !error && (
        <>
          {/* Horizontal Scroll Container */}
          <section className="character-row-container">
            <div className="character-row">
              {characters.map((char) => (
                <div className="character-card-wrapper" key={char.id}>
                  <CharacterCard character={char} />
                </div>
              ))}
            </div>
          </section>

          {/* Pagination */}
          {info && (
            <nav className="pagination-section">
              <button
                className="pagination-btn"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={!info.prev}
              >
                ← Previous
              </button>

              <span className="page-info">
                Page {currentPage} of {info.pages || 1}
              </span>

              <button
                className="pagination-btn"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={!info.next}
              >
                Next →
              </button>
            </nav>
          )}
        </>
      )}

      {/* Add this CSS */}
      <style jsx>{`
        .character-row-container {
          width: 100%;
          overflow-x: auto;
          padding: 1rem 0;
          margin-bottom: 2rem;
        }
        
        .character-row {
          display: flex;
          gap: 1rem;
          padding: 0 1rem;
          min-width: max-content;
        }
        
        .character-card-wrapper {
          flex: 0 0 auto;
          width: 200px; /* Adjust card width as needed */
        }
        
        /* Hide scrollbar but keep functionality */
        .character-row-container::-webkit-scrollbar {
          display: none;
        }
        
        .character-row-container {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </main>
  );
}