// src/pages/Home.jsx

import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({});

  useEffect(() => {
    const fetchCharacters = async () => {
      const API_URL = `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchTerm}&status=${status}`;
      try {
        const res = await fetch(API_URL);
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
  }, [page, searchTerm, status]);

  useEffect(() => {
    setPage(1);
  }, [searchTerm, status]);

  const handlePrevious = () => info.prev && setPage(page - 1);
  const handleNext = () => info.next && setPage(page + 1);

  return (
    // Removed the dark theme classes from the main wrapper
    <main className="container py-5">
      <div className="text-center mb-5">
        {/* Removed the inline style from the title */}
        <h1 className="display-4 fw-bold">Rick & Morty Explorer</h1>
        <p className="lead text-muted">
          Find your favorite characters.
        </p>
      </div>

      <div className="row mb-5 justify-content-center">
        <div className="col-md-5">
          {/* Removed dark theme classes from the input */}
          <input
            type="text"
            placeholder="Search by name..."
            className="form-control form-control-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          {/* Removed dark theme classes from the dropdown */}
          <select
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

      <div className="row">
        {characters.length > 0 ? (
          characters.map((char) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={char.id}>
              <CharacterCard character={char} />
            </div>
          ))
        ) : (
          <div className="col text-center">
            {/* Removed inline style from the "not found" message */}
            <h3>Aw, geez!</h3>
            <p className="lead text-muted">
              No characters found.
            </p>
          </div>
        )}
      </div>
      
      <div className="d-flex justify-content-center align-items-center my-5">
        <button
          className="btn btn-primary mx-2"
          onClick={handlePrevious}
          disabled={!info.prev}
        >
          ← Previous
        </button>
        <span className="text-muted mx-3">
          Page {page} of {info.pages || 1}
        </span>
        <button
          className="btn btn-primary mx-2"
          onClick={handleNext}
          disabled={!info.next}
        >
          Next →
        </button>
      </div>
    </main>
  );
}