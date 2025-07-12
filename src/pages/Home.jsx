import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import './Home.css';

export default function Home() {
  const [allCharacters, setAllCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [apiPage, setApiPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const [subPage, setSubPage] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        let query = `https://rickandmortyapi.com/api/character/?page=${apiPage}`;
        if (searchTerm) query += `&name=${searchTerm}`;
        if (statusFilter) query += `&status=${statusFilter}`;

        const res = await fetch(query);
        if (!res.ok) throw new Error("No results found");

        const data = await res.json();
        setAllCharacters(data.results);
        setTotalPages(data.info.pages);
        setSubPage(1);
        setError(null);
        setLoading(false);
      } catch (err) {
        setAllCharacters([]);
        setTotalPages(0);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [apiPage, searchTerm, statusFilter]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setApiPage(1);
  };

  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value);
    setApiPage(1);
  };

  const handlePrevPage = () => {
    if (subPage === 2) {
      setSubPage(1);
    } else if (apiPage > 1) {
      setApiPage(apiPage - 1);
      setSubPage(2); 
    }
  };

  const handleNextPage = () => {
    if (subPage === 1) {
      setSubPage(2);
    } else if (apiPage < totalPages) {
      setApiPage(apiPage + 1);
      setSubPage(1);
    }
  };

  const goToContact = () => {
    window.location.href = '/contact';
  };

  const displayedCharacters = allCharacters.slice((subPage - 1) * 10, subPage * 10);

  return (
    <main className="home-container">
      <nav className="nav-container">
        <div className="logo">🛸 Rick & Morty Explorer</div>
        <div className="nav-links">
          <a href="/" className="nav-link active">Home</a>
          <a href="/about" className="nav-link">About Us</a>
          <button className="nav-link contact-btn" onClick={goToContact}>Contact Us</button>
        </div>
      </nav>

      <header className="home-header">
        <h1>Rick & Morty Explorer</h1>
        <p className="subtitle">Discover all characters from the multiverse</p>
      </header>

      <div className="search-filter-bar">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        <select
          value={statusFilter}
          onChange={handleStatusChange}
          className="filter-select"
        >
          <option value="">All Status</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
        </div>
      ) : error ? (
        <div className="error-container" style={{ textAlign: 'center' }}>
          <div className="error-message">{error}</div>
          <button onClick={() => window.location.reload()} className="retry-button">
            Retry
          </button>
        </div>
      ) : (
        <>
          <div className="character-grid">
            {displayedCharacters.map((char) => (
              <CharacterCard character={char} key={char.id} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="pagination">
              <button
                onClick={handlePrevPage}
                disabled={apiPage === 1 && subPage === 1}
                className="page-button"
              >
                Previous
              </button>
              <span className="page-info">
                Page {(apiPage - 1) * 2 + subPage}
              </span>
              <button
                onClick={handleNextPage}
                disabled={apiPage === totalPages && subPage === 2}
                className="page-button"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}
    </main>
  );
}
