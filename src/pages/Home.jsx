import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [apiPage, setApiPage] = useState(1);
  const [uiPage, setUiPage] = useState(1);
  const [totalCharacters, setTotalCharacters] = useState(0);
  const [theme, setTheme] = useState("light");

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const name = searchParams.get("name") || "";
  const status = searchParams.get("status") || "";

  const totalUiPages = Math.ceil(totalCharacters / 10);

  // Theme setup
  useEffect(() => {
    const stored = localStorage.getItem("theme") || "light";
    setTheme(stored);
    document.body.classList.toggle("dark-mode", stored === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.classList.toggle("dark-mode", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  // Fetch data
  useEffect(() => {
    const fetchCharacters = async () => {
      const params = new URLSearchParams();
      if (name) params.append("name", name);
      if (status) params.append("status", status);
      params.append("page", apiPage);

      try {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character?${params.toString()}`
        );
        const data = await res.json();
        setCharacters(data.results || []);
        setTotalCharacters(data.info?.count || 0);
      } catch (error) {
        setCharacters([]);
        setTotalCharacters(0);
      }
    };

    fetchCharacters();
  }, [apiPage, name, status]);

  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalUiPages) return;
    setUiPage(newPage);
    const newApiPage = Math.ceil(newPage / 2);
    if (newApiPage !== apiPage) setApiPage(newApiPage);
  };

  // Handle form
  const handleFilterChange = (e) => {
    e.preventDefault();
    const newName = e.target.name.value.trim();
    const newStatus = e.target.status.value;

    const newParams = {};
    if (newName) newParams.name = newName;
    if (newStatus) newParams.status = newStatus;

    setSearchParams(newParams);
    setUiPage(1);
    setApiPage(1);
  };

  return (
    <main className="container">
      <div className="d-flex justify-content-between align-items-center mt-4 mb-3">
        <h1>Rick & Morty Explorer</h1>
        <button
          onClick={toggleTheme}
          className="btn btn-sm btn-outline-primary"
        >
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>

      <form
        onSubmit={handleFilterChange}
        className="row g-3 align-items-end mb-4"
      >
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">
            Search by Name
          </label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            className="form-control"
            placeholder="e.g., Rick"
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="status" className="form-label">
            Filter by Status
          </label>
          <select name="status" defaultValue={status} className="form-select">
            <option value="">All</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-primary w-100">
            Apply
          </button>
        </div>
      </form>

      {/* Character grid */}
      <div className="row">
        {characters.length > 0 ? (
          characters
            .slice(
              (uiPage - 1) % 2 === 0 ? 0 : 10,
              (uiPage - 1) % 2 === 0 ? 10 : 20
            )
            .map((char) => (
              <div className="col-md-4 mb-4" key={char.id}>
                <CharacterCard character={char} />
              </div>
            ))
        ) : (
          <div className="col text-center">
            <p className="text-danger fs-5">No characters found.</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalUiPages > 1 && (
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-2 my-4">
          <button
            className="btn btn-outline-secondary"
            onClick={() => handlePageChange(uiPage - 1)}
            disabled={uiPage <= 1}
          >
            Previous
          </button>

          {[...Array(totalUiPages)].map((_, index) => {
            const pageNum = index + 1;
            return (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className={`btn ${
                  pageNum === uiPage ? "btn-success" : "btn-outline-secondary"
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          <button
            className="btn btn-outline-secondary"
            onClick={() => handlePageChange(uiPage + 1)}
            disabled={uiPage >= totalUiPages}
          >
            Next
          </button>
        </div>
      )}
    </main>
  );
}
