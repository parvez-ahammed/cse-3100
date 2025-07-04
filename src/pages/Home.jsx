import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState(null);
  const [error, setError] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name") || "";
  const status = searchParams.get("status") || "";
  const page = parseInt(searchParams.get("page") || "1");

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const query = new URLSearchParams();
        if (name) query.append("name", name);
        if (status) query.append("status", status);
        query.append("page", page);

        const res = await fetch(
          `https://rickandmortyapi.com/api/character/?${query.toString()}`
        );

        if (!res.ok) {
          setCharacters([]);
          setInfo(null);
          setError("No characters found.");
          return;
        }

        const data = await res.json();
        setCharacters(data.results);
        setInfo(data.info);
        setError("");
      } catch {
        setError("Failed to fetch characters.");
        setCharacters([]);
        setInfo(null);
      }
    };

    fetchCharacters();
  }, [name, status, page]);

  const updateParam = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    newParams.set("page", "1");
    setSearchParams(newParams);
  };

  const handleSearchChange = (e) => updateParam("name", e.target.value);
  const handleStatusChange = (e) => updateParam("status", e.target.value);
  const goToPage = (newPage) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", newPage.toString());
    setSearchParams(newParams);
  };

  return (
    <main className="container">
      <h1 className="my-4">Rick & Morty Explorer</h1>

      {/* Search & Filter */}
      <div className="d-flex justify-content-start mb-4">
  <div style={{ width: "25%" }}>
    <div className="mb-2">
      <input
        type="text"
        className="form-control"
        placeholder="Search by name..."
        value={name}
        onChange={handleSearchChange}
      />
    </div>
    <div>
      <select className="form-control" value={status} onChange={handleStatusChange}>
        <option value="">All Statuses</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  </div>
</div>



      {/* Characters Grid */}
      <div className="character-grid">
       {characters.map((char) => (
    <CharacterCard key={char.id} character={char} />
  ))}
</div>


      {/* Pagination */}
      {!error && info && (
        <div className="d-flex justify-content-between my-4">
          <button
            className="btn btn-secondary"
            onClick={() => goToPage(page - 1)}
            disabled={page <= 1}
          >
            ← Previous
          </button>
          <span className="align-self-center">
            Page {page} of {info.pages}
          </span>
          <button
            className="btn btn-secondary"
            onClick={() => goToPage(page + 1)}
            disabled={page >= info.pages}
          >
            Next →
          </button>
        </div>
      )}
    </main>
  );
}
