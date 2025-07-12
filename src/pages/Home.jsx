import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";
import { Link } from "react-router-dom";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState(null); 

  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name") || "";
  const status = searchParams.get("status") || "";
  const rawPage = parseInt(searchParams.get("page") || "1");
const page = isNaN(rawPage) || rawPage < 1 ? 1 : rawPage;
;

  useEffect(() => {
    async function fetchCharacters() {
      setLoading(true);
      try {
        const query = new URLSearchParams();
        if (name) query.append("name", name);
        if (status) query.append("status", status);
        query.append("page", page);

        const res = await fetch(
          `https://rickandmortyapi.com/api/character/?${query.toString()}`
        );
        const data = await res.json();

        setCharacters(data.results || []);
        setInfo(data.info || null); 
        if (data.info && page > data.info.pages) {
  setSearchParams({ name, status, page: data.info.pages });
  return;
}

      } catch (err) {
        console.error(err);
        setCharacters([]);
        setInfo(null);
      } finally {
        setLoading(false);
      }
    }

    fetchCharacters();
  }, [name, status, page]);

  
  const handleSearchChange = (e) => {
    setSearchParams({ name: e.target.value, status, page: 1 });
  };

  const handleStatusChange = (e) => {
    setSearchParams({ name, status: e.target.value, page: 1 });
  };

  const handleNext = () => {
    if (info?.next) {
      setSearchParams({ name, status, page: page + 1 });
    }
  };

  const handlePrev = () => {
    if (info?.prev) {
      setSearchParams({ name, status, page: page - 1 });
    }
  };

  return (
    <div className="container">
      <h2>Character List</h2>

      {/* Filters */}
      <div style={{ marginBottom: "1.5rem" }}>
        <input
          type="text"
          placeholder="Search by name"
          value={name}
          onChange={handleSearchChange}
          style={{ padding: "0.5rem", marginRight: "1rem" }}
        />
        <select
          value={status}
          onChange={handleStatusChange}
          style={{ padding: "0.5rem" }}
        >
          <option value="">All Status</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      {/* Character Grid */}
      {loading ? (
        <p>Loading...</p>
      ) : characters.length > 0 ? (
        <>
          <div className="character-grid">
            {characters.map((char) => (
              <CharacterCard key={char.id} character={char} />
            ))}
          </div>

          {/*Pagination */}
      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <button
          onClick={handlePrev}
          disabled={!info?.prev}
          style={{
            padding: "0.6rem 1.2rem",
            backgroundColor: info?.prev ? "#0077ff" : "#ccc",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: info?.prev ? "pointer" : "not-allowed",
          }}
        >
          Previous
        </button>

        <button
          onClick={handleNext}
          disabled={!info?.next}
          style={{
            padding: "0.6rem 1.2rem",
            backgroundColor: info?.next ? "#0077ff" : "#ccc",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: info?.next ? "pointer" : "not-allowed",
          }}
        >
          Next
        </button>
      </div>
      {/*Add Link inside the return block */}
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <Link to="/contact">
          <button style={{ padding: "0.6rem 1.5rem", fontSize: "1rem" }}>
            Go to Contact Page
          </button>
        </Link>
      </div>

        </>
      ) : (
        <p>No characters found.</p>
      )}
    </div>
  );
}

