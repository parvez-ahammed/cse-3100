import "../styles/Home.css";
import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Sync state with URL parameters
  const [search, setSearch] = useState(searchParams.get("name") || "");
  const [status, setStatus] = useState(searchParams.get("status") || "");

  // Fetch characters
  useEffect(() => {
    const fetchCharacters = async () => {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();
      setCharacters(data.results);
    };
    fetchCharacters();
  }, []);

  // Update URL when filters change
  useEffect(() => {
    const params = {};
    if (search) params.name = search;
    if (status) params.status = status;
    setSearchParams(params);
  }, [search, status, setSearchParams]);

  // Apply filter logic
  const filtered = characters.filter((char) => {
    const matchName = char.name.toLowerCase().includes(search.toLowerCase());
    const matchStatus = status ? char.status === status : true;
    return matchName && matchStatus;
  });

  return (
    <main className="container my-5">
      <h1 className="mb-4 text-center">Rick & Morty Explorer</h1>

      {/* Filters */}
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 mb-4 filters">
        <select
          className="form-select"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
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
          onChange={(e) => setSearch(e.target.value)}
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
    </main>
  );
}
