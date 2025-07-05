import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  // New state for filters
  const [statusFilter, setStatusFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      try {
        // Build query parameters with filters
        let apiUrl = `https://rickandmortyapi.com/api/character?page=${page}`;
        if (statusFilter) apiUrl += `&status=${statusFilter}`;
        if (searchTerm) apiUrl += `&name=${searchTerm}`;
        
        const res = await fetch(apiUrl);
        const data = await res.json();
        
        // Handle no results
        if (data.error) {
          setCharacters([]);
          setTotalPages(0);
        } else {
          setCharacters(data.results);
          setTotalPages(data.info.pages);
        }
      } catch (error) {
        console.error("Error fetching characters:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [page, statusFilter, searchTerm]); // Add filters to dependencies

  // Reset to page 1 when filters change
  useEffect(() => {
    setPage(1);
  }, [statusFilter, searchTerm]);

  return (
    <main>
      {/* Hero Section with Fixed Background */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-headline">RICK & MORTY EXPLORER</h1>
            <p className="hero-subtitle">Discover characters from the multiverse</p>
            <div className="hero-button-container">
              <button 
                className="hero-explore-btn"
                onClick={() => document.querySelector('.character-gallery').scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Characters
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Character Grid with Filters */}
      <div className="container py-5 character-gallery">
        <h1 className="text-center mb-4 gallery-title">CHARACTER GALLERY<br></br><br></br></h1>
        
        {/* Filter Section */}
        <div className="filter-section mb-5">
          <div className="row justify-content-center">
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="search-filter">
                <input
                  type="text"
                  className="form-control search-input"
                  placeholder="Search by name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                
              </div>
            </div>
            <div className="col-md-3">
              <select 
                className="form-select status-select"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="">All Statuses</option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
              </select>
            </div>
          </div>
        </div>
        
        {loading ? (
          <div className="text-center my-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-2">Loading characters...</p>
          </div>
        ) : (
          <>
            {characters.length === 0 ? (
              <div className="no-results text-center py-5">
                <div className="no-results-icon">😢</div>
                <h3>No characters found</h3>
                <p>Try adjusting your search or filter</p>
              </div>
            ) : (
              <>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                  {characters.map((char) => (
                    <div className="col mb-4" key={char.id}>
                      <CharacterCard character={char} />
                    </div>
                  ))}
                </div>
                
                {/* Pagination */}
<div className="d-flex justify-content-between align-items-center mt-5">
              <button 
                className="btn btn-outline-primary"
                disabled={page === 1}
                onClick={() => setPage(prev => Math.max(1, prev - 1))}
              >
                Previous
              </button>
              <span className="text-muted">Page {page} of {totalPages}</span>
              <button 
                className="btn btn-outline-primary"
                disabled={page === totalPages}
                onClick={() => setPage(prev => Math.min(totalPages, prev + 1))}
              >
                Next
              </button>
            </div>
              </>
            )}
          </>
        )}
      </div>
    </main>
  );
}