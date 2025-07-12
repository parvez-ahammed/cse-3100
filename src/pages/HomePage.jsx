import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import CharacterCard from '../components/CharacterCard';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';

const API_URL = 'https://rickandmortyapi.com/api/character';

export default function HomePage() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [localPage, setLocalPage] = useState(1);
  const [darkMode, setDarkMode] = useState(false); // Dark mode state
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const name = searchParams.get('name') || '';
  const status = searchParams.get('status') || '';
  const page = parseInt(searchParams.get('page') || '1', 10);

  useEffect(() => {
    async function fetchCharacters() {
      setLoading(true);
      setError('');
      setLocalPage(1); // Reset local page when API page changes
      try {
        let url = `${API_URL}/?page=${page}`;
        if (name) url += `&name=${encodeURIComponent(name)}`;
        if (status) url += `&status=${encodeURIComponent(status)}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error('Failed to fetch characters');
        const data = await res.json();
        setCharacters(data.results || []);
        setInfo(data.info || {});
      } catch (err) {
        setError(err.message);
        setCharacters([]);
        setInfo({});
      } finally {
        setLoading(false);
      }
    }
    fetchCharacters();
  }, [name, status, page]);

  const maxLocalPages = Math.ceil(characters.length / 10);
  const displayedCharacters = characters.slice((localPage - 1) * 10, localPage * 10);

  // Handlers
  const handleSearchChange = (e) => {
    setSearchParams({ name: e.target.value, status, page: 1 });
  };

  const handleFilterChange = (e) => {
    setSearchParams({ name, status: e.target.value, page: 1 });
  };

  const handleLocalPrev = () => {
    if (localPage > 1) {
      setLocalPage(localPage - 1);
    } else if (page > 1) {
      setSearchParams({ name, status, page: page - 1 });
    }
  };

  const handleLocalNext = () => {
    if (localPage < maxLocalPages) {
      setLocalPage(localPage + 1);
    } else if (info.pages && page < info.pages) {
      setSearchParams({ name, status, page: page + 1 });
    }
  };

  const handleCardClick = (id) => {
    navigate(`/character/${id}`);
  };

  // Toggle dark mode
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Styles dependent on dark mode
  const pageStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    backgroundColor: darkMode ? '#121212' : '#fff',
    color: darkMode ? '#eee' : '#000',
    minHeight: '100vh',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const headerStyle = {
    background: darkMode
      ? 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)'
      : 'linear-gradient(135deg, #4b6cb7 0%, #182848 100%)',
    color: 'white',
    padding: '2rem 1rem',
    borderRadius: '12px',
    textAlign: 'center',
    boxShadow: darkMode ? '0 4px 15px rgba(255,255,255,0.1)' : '0 4px 10px rgba(0,0,0,0.1)',
    transition: 'background 0.3s, box-shadow 0.3s',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: darkMode ? '#0d6efd' : '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'background-color 0.3s',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '1.5rem',
    marginTop: '1rem',
  };

  const paginationTextStyle = {
    fontWeight: 'bold',
    color: darkMode ? '#eee' : '#000',
  };

  return (
    <div style={pageStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Rick & Morty Explorer</h1>
        <p style={{ fontSize: '1.2rem', color: darkMode ? '#ccc' : '#e0e0e0' }}>
          Search and filter your favorite characters across the multiverse
        </p>

        {/* Dark Mode Toggle */}
        <button
          style={{ ...buttonStyle, marginTop: '1rem', backgroundColor: darkMode ? '#6c757d' : '#343a40' }}
          onClick={toggleDarkMode}
        >
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>

      {/* Top Nav Buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <button
          style={buttonStyle}
          onClick={() => navigate('/contact')}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = darkMode ? '#084298' : '#0056b3')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = darkMode ? '#0d6efd' : '#007bff')}
        >
          Contact
        </button>
        <button
          style={buttonStyle}
          onClick={() => navigate('/about')}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = darkMode ? '#084298' : '#0056b3')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = darkMode ? '#0d6efd' : '#007bff')}
        >
          About
        </button>
      </div>

      {/* Search and Filters */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center',
        }}
      >
        <SearchBar value={name} onChange={handleSearchChange} darkMode={darkMode} />
        <FilterDropdown value={status} onChange={handleFilterChange} darkMode={darkMode} />
      </div>

      {/* Loading/Error/Empty */}
      {loading && <p style={{ textAlign: 'center' }}>Loading characters...</p>}
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      {!loading && characters.length === 0 && (
        <p style={{ textAlign: 'center' }}>No characters found. Try changing your search or filters.</p>
      )}

      {/* Cards */}
      <div style={gridStyle}>
        {displayedCharacters.map((char) => (
          <div
            key={char.id}
            onClick={() => handleCardClick(char.id)}
            style={{
              cursor: 'pointer',
              transition: 'transform 0.2s',
              borderRadius: '8px',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <CharacterCard character={char} darkMode={darkMode} />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div
        style={{
          marginTop: '2rem',
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          alignItems: 'center',
          color: darkMode ? '#eee' : '#000',
        }}
      >
        <button style={buttonStyle} onClick={handleLocalPrev} disabled={page === 1 && localPage === 1}>
          Previous
        </button>
        <span style={paginationTextStyle}>
          Page {page}.{localPage}
        </span>
        <button
          style={buttonStyle}
          onClick={handleLocalNext}
          disabled={page === info.pages && localPage === maxLocalPages}
        >
          Next
        </button>
      </div>

      {/* Footer */}
      <footer style={{ textAlign: 'center', marginTop: '2rem', color: darkMode ? '#999' : '#666' }}>
        <small>Made by Faiaz </small>
      </footer>
    </div>
  );
}
