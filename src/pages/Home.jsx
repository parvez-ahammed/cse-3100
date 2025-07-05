import React, { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import SearchBar from "../components/SearchBar";
import FilterDropdown from "../components/FilterDropDown";
import "/src/style.css";
import {useNavigate} from 'react-router-dom';
import ThemeToggle from "../components/ThemeToggle";

export default function Home() {
  
  const navigate = useNavigate();
  const [apiPage, setApiPage] = useState(1);
  const [subPage, setSubPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState(null);
  const [hasNextApiPage, setHasNextApiPage] = useState(false);
  const [hasPrevApiPage, setHasPrevApiPage] = useState(false);
  const [totalPages, setTotalPages] = useState(1);

  const charactersPerPage = 10;

  useEffect(() => {
    const controller = new AbortController();

    async function fetchCharacters() {
      try {
        let url = `https://rickandmortyapi.com/api/character/?page=${apiPage}`;
        if (search) url += `&name=${search}`;
        if (status) url += `&status=${status}`;

        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) throw new Error("No characters found");

        const data = await response.json();
        setCharacters(data.results);
        setHasNextApiPage(!!data.info.next);
        setHasPrevApiPage(!!data.info.prev);
        setError(null);
        setSubPage(1);
        setTotalPages(data.info.pages * 2);
      } catch (err) {
        setCharacters([]);
        setError(err.message);
        setHasNextApiPage(false);
        setHasPrevApiPage(false);
        setTotalPages(1);
      }
    }

    fetchCharacters();
    return () => controller.abort();
  }, [apiPage, search, status]);

  const start = (subPage - 1) * charactersPerPage;
  const end = start + charactersPerPage;
  const paginatedCharacters = characters.slice(start, end);
  const displayPage = (apiPage - 1) * 2 + subPage;

  const handleNext = () => {
    if (subPage === 1 && characters.length > 10) {
      setSubPage(2);
    } else if (subPage === 2 && hasNextApiPage) {
      setApiPage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (subPage === 2) {
      setSubPage(1);
    } else if (subPage === 1 && hasPrevApiPage) {
      setApiPage((prev) => prev - 1);
      setSubPage(2);
    }
  };

  const isPrevDisabled = apiPage === 1 && subPage === 1;
  const isNextDisabled = (subPage === 2 && !hasNextApiPage) || characters.length <= 10;

 return (
    <div className="home-container">
      <header className="home-header">
  <h1>Rick & Morty Characters</h1>
  <p className="subtitle">Browse, filter, and explore characters from the multiverse!</p>

  {/* Navigation + Theme Toggle */}
  <div style={{ marginTop: "1rem", display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
    <button onClick={() => navigate("/about")}>About Us</button>
    <button onClick={() => navigate("/contact")}>Contact</button>
    <ThemeToggle /> 
  </div>
</header>
      <section className="filters">
        <SearchBar search={search} setSearch={setSearch} />
        <FilterDropdown status={status} setStatus={setStatus} />
      </section>

      {error && <p className="error">{error}</p>}

      <section className="character-section">
        <div className="character-grid">
          {paginatedCharacters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </section>

      <footer className="pagination-controls">
        <button onClick={handlePrevious} disabled={isPrevDisabled}>
          Previous
        </button>
        <span>Page {displayPage} of {totalPages}</span>
        <button onClick={handleNext} disabled={isNextDisabled}>
          Next
        </button>
      </footer>
    </div>
  );
}
