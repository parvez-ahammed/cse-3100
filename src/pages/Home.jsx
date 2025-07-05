import React, { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";

export default function Home() {
  // Load initial values from localStorage if available
  const [status, setStatus] = useState(() => localStorage.getItem("status") || "");
  const [search, setSearch] = useState(() => localStorage.getItem("search") || "");
  const [page, setPage] = useState(1); // UI page (10 per page)
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  // For 10 per page, calculate which API page to fetch
  const apiPage = Math.floor((page - 1) / 2) + 1;
  const isFirstHalf = (page % 2) === 1;

  useEffect(() => {
    let url = `https://rickandmortyapi.com/api/character/?page=${apiPage}`;
    if (status) url += `&status=${status}`;
    if (search) url += `&name=${search}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results || []);
        setInfo(data.info || {});
      });
  }, [status, search, apiPage]);

  // Store preferences in localStorage when changed
  useEffect(() => {
    localStorage.setItem("status", status);
    localStorage.setItem("search", search);
  }, [status, search]);

  // Calculate total UI pages (10 per page)
  const totalCharacters = info.count || 0;
  const totalPages = Math.ceil(totalCharacters / 10);

  // Slice the characters for the current UI page
  const startIdx = isFirstHalf ? 0 : 10;
  const endIdx = isFirstHalf ? 10 : 20;
  const charactersToShow = characters.slice(startIdx, endIdx);

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    setPage(1); // reset to first page on filter change
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(1); // reset to first page on filter change
  };

  return (
    <main className="container">
      <h1 className="my-4">Rick & Morty Explorer</h1>
      {/* Filters */}
      <div className="row mb-3">
        <div className="col-md-3">
          <select className="form-select" value={status} onChange={handleStatusChange}>
            <option value="">All Status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
        <div className="col-md-5">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name..."
            value={search}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      {/* Character List */}
      <div className="row">
        {charactersToShow.length === 0 ? (
          <p>No characters found.</p>
        ) : (
          charactersToShow.map((char) => (
            <div className="col-md-5th mb-4" key={char.id}>
              <CharacterCard character={char} />
            </div>
          ))
        )}
      </div>
      {/* Pagination */}
      <div className="pagination-bar my-4">
        <button
          className="pagination-btn"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .filter((p) =>
            p === 1 ||
            p === totalPages ||
            (p >= page - 3 && p <= page + 3) 
          )
          .map((p, idx, arr) => (
            <React.Fragment key={p}>
              {idx > 0 && p - arr[idx - 1] > 1 && <span className="pagination-ellipsis">...</span>}
              <button
                className={`pagination-btn${p === page ? " active" : ""}`}
                onClick={() => setPage(p)}
                disabled={p === page}
              >
                {p}
              </button>
            </React.Fragment>
          ))}
        <button
          className="pagination-btn"
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
        >
          &gt;
        </button>
      </div>
    </main>
  );
}