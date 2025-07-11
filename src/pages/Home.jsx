import "../styles/Home.css";
import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  // Get filters and page from URL
  const initialSearch = searchParams.get("name") || "";
  const initialStatus = searchParams.get("status") || "";
  const initialPage = parseInt(searchParams.get("page")) || 1;

  const [search, setSearch] = useState(initialSearch);
  const [status, setStatus] = useState(initialStatus);
  const [page, setPage] = useState(initialPage);

  // Fetch characters based on current filters and page
  useEffect(() => {
    const fetchCharacters = async () => {
      const query = new URLSearchParams();
      if (search) query.append("name", search);
      if (status) query.append("status", status);
      query.append("page", page);

      try {
        const res = await fetch(`https://rickandmortyapi.com/api/character?${query.toString()}`);
        const data = await res.json();
        setCharacters(data.results || []);
        setInfo(data.info || {});
      } catch (error) {
        setCharacters([]);
        setInfo({});
      }
    };

    fetchCharacters();
  }, [search, status, page]);

  // Update URL when filters or page change
  useEffect(() => {
    const params = {};
    if (search) params.name = search;
    if (status) params.status = status;
    params.page = page; // Always reflect page in URL
    setSearchParams(params);
  }, [search, status, page, setSearchParams]);

  // Limit display to 10 characters per page
  const filtered = characters.slice(0, 10);

  return (
    <main className="container my-5">
      <h1 className="mb-4 text-center">Rick & Morty Explorer</h1>

      {/* Filters */}
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mb-4 filters">
        <select
          className="form-select"
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
            setPage(1); // reset to page 1 when filters change
          }}
        >
          <option value="">All Statuses</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>

        <input
          type="text"
          className="form-control"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1); // reset to page 1 when filters change
          }}
        />
      </div>

      {/* Character Grid */}
      <div className="row">
        {filtered.length > 0 ? (
          filtered.map((char) => (
            <div className="col-md-4 mb-4" key={char.id}>
              <CharacterCard character={char} clickable />
            </div>
          ))
        ) : (
          <p className="text-center">No characters match your criteria.</p>
        )}
      </div>

      {/* Pagination */}
      {characters.length > 0 && (
        <div className="pagination-buttons mt-4">
          <button
            className="btn btn-secondary"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
          >
            Previous
          </button>
          <span className="page-number">Page {page}</span>
          <button
            className="btn btn-secondary"
            onClick={() => setPage((prev) => (info?.next ? prev + 1 : prev))}
            disabled={!info?.next}
          >
            Next
          </button>
        </div>
      )}
    </main>
  );
}
