import { useEffect, useState, useMemo } from "react";
import CharacterCard from "../components/CharacterCard.jsx";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({});
  const itemsPerPage = (status === "" && searchTerm === "") ? 20 : 10;
  const apiPage = itemsPerPage === 20 ? page : Math.ceil(page / 2);

  useEffect(() => {
    const API_URL = `https://rickandmortyapi.com/api/character/?page=${apiPage}&name=${searchTerm}&status=${status}`;
    const fetchCharacters = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setCharacters(data.results || []);
        setInfo(data.info || {});
      } catch (error) {
        console.error("Error fetching characters:", error);
        setCharacters([]);
        setInfo({});
      }
    };
    fetchCharacters();
  }, [apiPage, searchTerm, status]);

  useEffect(() => {
    setPage(1);
  }, [searchTerm, status]);

  const displayedCharacters = useMemo(() => {
    if (!characters.length) return [];
    if (itemsPerPage === 20) {
      return characters;
    }
    const isFirstHalf = page % 2 === 1;
    return isFirstHalf ? characters.slice(0, 10) : characters.slice(10, 20);
  }, [characters, page, itemsPerPage]);

  const totalDisplayPages = info.count
    ? Math.ceil(info.count / itemsPerPage)
    : 1;

  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalDisplayPages) setPage(page + 1);
  };

  return (
    <main className="container py-4">
      
      <div className="p-5 mb-3 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-4 fw-bold">Rick & Morty Explorer</h1>
          <p className="col-md-8 fs-4">Your definitive guide to every character in the multiverse. Use the filters below to start your search.</p>
        </div>
      </div>

      <div className="card shadow-sm mb-4">
        <div className="card-body p-4">
          <div className="row g-3 align-items-end">
            <div className="col-md-8">
              <label htmlFor="search-input" className="form-label fw-bold">Character Name</label>
              <input
                id="search-input"
                type="text"
                placeholder="Search by name..."
                className="form-control form-control-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="status-select" className="form-label fw-bold">Status</label>
              <select
                id="status-select"
                className="form-select form-select-lg"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="">All Statuses</option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {displayedCharacters.length > 0 ? (
          displayedCharacters.map((char) => (
            <div className="col-lg-4 col-md-6 mb-4" key={char.id}>
              <CharacterCard character={char} />
            </div>
          ))
        ) : (
          <div className="col text-center py-5">
            <h3>Aw, geez!</h3>
            <p className="lead text-muted">No characters found.</p>
          </div>
        )}
      </div>
      
      <div className="d-flex justify-content-center align-items-center my-5">
        <button
          className="btn btn-dark mx-2"
          onClick={handlePrevious}
          disabled={page === 1}
        >
          ← Previous
        </button>
        <span className="text-muted mx-3">
          Page {page} of {totalDisplayPages}
        </span>
        <button
          className="btn btn-dark mx-2"
          onClick={handleNext}
          disabled={page >= totalDisplayPages}
        >
          Next →
        </button>
      </div>
    </main>
  );
}