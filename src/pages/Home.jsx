import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1");
  const searchQuery = searchParams.get("name") || "";
  const statusFilter = searchParams.get("status") || "";

  const updateSearchParams = (params) => {
    const newParams = new URLSearchParams(searchParams);
    Object.keys(params).forEach((key) => {
      if (params[key]) {
        newParams.set(key, params[key]);
      } else {
        newParams.delete(key);
      }
    });
    setSearchParams(newParams);
  };

  useEffect(() => {
    const params = new URLSearchParams();
    params.append("page", page);
    if (statusFilter) params.append("status", statusFilter);
    if (searchQuery) params.append("name", searchQuery);

    fetch(`https://rickandmortyapi.com/api/character?${params.toString()}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results || []);
        setTotalPages(data.info?.pages || 1);
      });
  }, [statusFilter, searchQuery, page]);

  return (
    <div className="container">
      <h2 style={{ textAlign: "center" }}>Rick & Morty Explorer</h2>
      <p style={{ textAlign: "center", marginBottom: "2rem" }}>
        Your definitive guide to every character in the multiverse. Use the filters below to start your search.
      </p>

      <div className="filter-container">
        <input
          type="text"
          placeholder="Search characters..."
          value={searchQuery}
          onChange={(e) => updateSearchParams({ name: e.target.value, page: 1 })}
        />
        <select
          value={statusFilter}
          onChange={(e) => updateSearchParams({ status: e.target.value, page: 1 })}
        >
          <option value="">All Status</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <p>Showing {characters.length} results</p>

      <div className="character-grid">
  {characters.map((char) => (
    <CharacterCard key={char.id} character={char} />
  ))}
</div>


      <div className="pagination">
        <button
          disabled={page === 1}
          onClick={() => updateSearchParams({ page: page - 1 })}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .filter(
            (p) =>
              p === 1 ||
              p === totalPages ||
              (p >= page - 2 && p <= page + 2)
          )
          .map((p, i, arr) => (
            <React.Fragment key={p}>
              {i > 0 && p - arr[i - 1] > 1 && (
                <span className="dots">...</span>
              )}
              <button
                onClick={() => updateSearchParams({ page: p })}
                disabled={page === p}
              >
                {p}
              </button>
            </React.Fragment>
          ))}

        <button
          disabled={page === totalPages}
          onClick={() => updateSearchParams({ page: page + 1 })}
        >
          Next
        </button>
      </div>
    </div>
  );
}
