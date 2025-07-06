import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import CharacterCard from "../components/CharacterCard";
import "./home.css";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(parseInt(searchParams.get("page")) || 1);
  const [searchTerm, setSearchTerm] = useState(searchParams.get("name") || "");
  const [statusFilter, setStatusFilter] = useState(searchParams.get("status") || "");

  // Fetch characters from API
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        let apiUrl = `https://rickandmortyapi.com/api/character?page=${page}`;
        if (searchTerm) apiUrl += `&name=${encodeURIComponent(searchTerm)}`;
        if (statusFilter) apiUrl += `&status=${encodeURIComponent(statusFilter)}`;

        const res = await fetch(apiUrl);
        if (!res.ok) throw new Error("Failed to fetch characters");
        const data = await res.json();
        setCharacters(data.results || []);
        setInfo(data.info || {});
        setError(null);
      } catch (err) {
        setError(err.message);
        setCharacters([]);
        setInfo({});
      }
    };

    fetchCharacters();

    const newParams = new URLSearchParams(searchParams);
    if (searchTerm) newParams.set("name", searchTerm);
    else newParams.delete("name");
    if (statusFilter) newParams.set("status", statusFilter);
    else newParams.delete("status");
    if (page > 1) newParams.set("page", page.toString());
    else newParams.delete("page");
    setSearchParams(newParams);
  }, [searchTerm, statusFilter, page, searchParams, setSearchParams]);

  // Handle page navigation
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= Math.ceil(info.count / 20)) setPage(newPage);
  };

  return (
    <main className={`home-container ${theme}`}>
      {/* Navbar */}
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero-section text-center mb-5">
        <h1 className="display-3 fw-bold hero-title">Rick & Morty Explorer</h1>
        <p className="lead text-muted hero-subtitle">
          Dive into the multiverse and explore your favorite characters!
        </p>
        <button
          className="btn btn-gradient px-4 py-2 rounded mt-3 animate-pulse"
          onClick={toggleTheme}
        >
          Toggle {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>

      {/* Search and Filter Row */}
      <div className="filter-row mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-control search-input"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="form-select filter-select"
        >
          <option value="">All Statuses</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      {/* Character Grid with Animation */}
      <div className="character-list">
        {error ? (
          <p className="no-results text-center">Error: {error}</p>
        ) : characters.length > 0 ? (
          characters.map((char) => (
            <div className="character-card animate-fade-in" key={char.id}>
              <CharacterCard character={char} />
            </div>
          ))
        ) : (
          <p className="no-results text-center">No characters found.</p>
        )}
      </div>

      {/* Pagination with Animation */}
      <div className="pagination animate-slide-up">
        <button
          className="pagination-btn"
          onClick={() => handlePageChange(page - 1)}
          disabled={!info.prev}
        >
          Previous
        </button>
        <span className="page-info">
          Page {page} of {info.pages || 1}
        </span>
        <button
          className="pagination-btn"
          onClick={() => handlePageChange(page + 1)}
          disabled={!info.next}
        >
          Next
        </button>
      </div>
    </main>
  );
}