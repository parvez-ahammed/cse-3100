import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [apiPage, setApiPage] = useState(1); // page used to fetch from API
  const [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get("name") || "";
  const status = searchParams.get("status") || "";
  const displayPage = parseInt(searchParams.get("page")) || 1;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = new URLSearchParams();
        if (name) query.append("name", name);
        if (status) query.append("status", status);

        // API page changes every 2 display pages
        const apiPageToFetch = Math.ceil(displayPage / 2);
        setApiPage(apiPageToFetch);
        query.append("page", apiPageToFetch);

        const res = await fetch(
          `https://rickandmortyapi.com/api/character/?${query.toString()}`
        );
        if (!res.ok) throw new Error("No results");

        const data = await res.json();
        setCharacters(data.results);
        setInfo(data.info);
      } catch (err) {
        setCharacters([]);
        setInfo({});
      }
    };

    fetchData();
  }, [name, status, displayPage]);

  // Slice characters for 10 per display page
  const start = displayPage % 2 === 0 ? 10 : 0;
  const visibleCharacters = characters.slice(start, start + 10);

  const handleSearchChange = (e) => {
    searchParams.set("name", e.target.value);
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  };

  const handleStatusChange = (e) => {
    searchParams.set("status", e.target.value);
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1) return;
    if (!info.next && newPage > displayPage) return;
    searchParams.set("page", newPage);
    setSearchParams(searchParams);
  };

  return (
    <main className="container">
      {/* Search + Filter UI */}
      <form
        className="d-flex flex-wrap align-items-center gap-2 mb-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex-grow-1">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name..."
            value={name}
            onChange={handleSearchChange}
          />
        </div>

        <div style={{ minWidth: "160px" }}>
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

        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>

      {/* Character Cards Grid */}
      <div className="character-grid mb-4">
        {visibleCharacters.length > 0 ? (
          visibleCharacters.map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))
        ) : (
          <p>No characters found.</p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="d-flex justify-content-center gap-2 mb-5">
        <button
          className="btn btn-secondary"
          onClick={() => handlePageChange(displayPage - 1)}
          disabled={displayPage === 1}
        >
          ◀ Previous
        </button>

        <span className="align-self-center">Page {displayPage}</span>

        <button
          className="btn btn-secondary"
          onClick={() => handlePageChange(displayPage + 1)}
          disabled={!info.next && displayPage % 2 === 0}
        >
          Next ▶
        </button>
      </div>
    </main>
  );
}
