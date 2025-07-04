// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get("name") || "";
  const status = searchParams.get("status") || "";
  const page = parseInt(searchParams.get("page") || "1");

  useEffect(() => {
    const fetchCharacters = async () => {
      const query = new URLSearchParams();
      if (name) query.append("name", name);
      if (status) query.append("status", status);
      query.append("page", page);

      try {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character/?${query.toString()}`
        );
        if (!res.ok) throw new Error("No data");

        const data = await res.json();
        setCharacters(data.results || []);
        setInfo(data.info || {});
      } catch (err) {
        setCharacters([]);
        setInfo(null);
      }
    };

    fetchCharacters();
  }, [name, status, page]);

  const handleSearchChange = (e) => {
    searchParams.set("name", e.target.value);
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  };

  const handleStatusChange = (e) => {
    const value = e.target.value;
    if (value) {
      searchParams.set("status", value);
    } else {
      searchParams.delete("status");
    }
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  };

  const goToPage = (newPage) => {
    if (newPage < 1 || (info && newPage > info.pages)) return;
    searchParams.set("page", newPage);
    setSearchParams(searchParams);
  };

  return (
    <main className="container my-4">
      {/* Filters */}
      <div className="row mb-4">
        <div className="col-md-6 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name..."
            value={name}
            onChange={handleSearchChange}
          />
        </div>
        <div className="col-md-6 mb-2">
          <select
            className="form-select"
            value={status}
            onChange={handleStatusChange}
          >
            <option value="">All Statuses</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
      </div>

      {/* Characters Grid */}
      {characters.length > 0 ? (
        <div
          className="character-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: "20px",
          }}
        >
          {characters.slice(0, 10).map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))}
        </div>
      ) : (
        <p className="text-center">No characters found.</p>
      )}

      {/* Pagination */}
      {info && (
        <div className="d-flex justify-content-center gap-3 my-4">
          <button
            className="btn btn-outline-secondary"
            onClick={() => goToPage(page - 1)}
            disabled={page === 1}
          >
            ⬅ Previous
          </button>

          <span className="align-self-center">
            Page {page} of {info.pages}
          </span>

          <button
            className="btn btn-outline-secondary"
            onClick={() => goToPage(page + 1)}
            disabled={page >= info.pages}
          >
            Next ➡
          </button>
        </div>
      )}
    </main>
  );
}
