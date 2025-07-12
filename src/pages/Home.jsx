import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
  const fetchCharacters = async () => {
    const query = new URLSearchParams();
    query.append("page", page);
    if (statusFilter) query.append("status", statusFilter);
    if (searchText) query.append("name", searchText);

    const res = await fetch(`https://rickandmortyapi.com/api/character/?${query}`);
    const data = await res.json();

    if (!data.error) {
      setCharacters(data.results.slice(0, 10));
      setTotalPages(data.info.pages);
    } else {
      setCharacters([]);
      setTotalPages(1);
    }
  };

  fetchCharacters();
}, [statusFilter, searchText, page]);


  return (
    <main className="home-wrapper">
  <div className="home-content">

      {/* Filters */}
      <h3 className="filter-title"></h3>
<div className="filter-row">
  <input
    type="text"
    placeholder="Search Characters"
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)}
  />
  <select
    value={statusFilter}
    onChange={(e) => setStatusFilter(e.target.value)}
  >
    <option value="">Select Status</option>
    <option value="alive">Alive</option>
    <option value="dead">Dead</option>
    <option value="unknown">Unknown</option>
  </select>
</div>


      {/* Total count */}
      <p>Showing {characters.length} of {totalPages * 10} results</p>

      {/* Grid */}
      <div className="character-grid">
  {characters.slice(0, 10).map((char) => (
    <CharacterCard key={char.id} character={char} />
  ))}
</div>

      {/* Pagination */}
      <div className="pagination">
        <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1}>‹</button>
        {[...Array(Math.min(5, totalPages))].map((_, i) => (
          <button
            key={i + 1}
            className={page === i + 1 ? "active" : ""}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages}>›</button>
      </div>
      </div>
    </main>
  );
}
