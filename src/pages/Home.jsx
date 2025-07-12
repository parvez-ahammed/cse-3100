import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import { useSearchParams } from "react-router-dom";

const STATUS_OPTIONS = ["Alive", "Dead", "unknown"];
const SPECIES_OPTIONS = ["Human", "Alien"];

export default function Home({ theme }) {
  const [allCharacters, setAllCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  const page = parseInt(searchParams.get("page")) || 1;
  const name = searchParams.get("name") || "";
  const status = searchParams.get("status") || "";
  const species = searchParams.get("species") || "";

  const itemsPerPage = 10;
  const apiPage = Math.ceil(page / 2);

  useEffect(() => {
    let url = `https://rickandmortyapi.com/api/character/?page=${apiPage}`;
    if (name) url += `&name=${name}`;
    if (status) url += `&status=${status.toLowerCase()}`;
    if (species) url += `&species=${species.toLowerCase()}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setAllCharacters([]);
          setInfo({});
        } else {
          setAllCharacters(data.results || []);
          setInfo(data.info || {});
        }
      })
      .catch(() => {
        setAllCharacters([]);
        setInfo({});
      });
  }, [apiPage, name, status, species]);

  const displayedCharacters = allCharacters.slice(
    page % 2 === 1 ? 0 : 10,
    page % 2 === 1 ? 10 : 20
  );

  const totalPages = info.count ? Math.ceil(info.count / itemsPerPage) : 1;

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newParams = new URLSearchParams(searchParams);
    if (value) newParams.set(name, value);
    else newParams.delete(name);
    newParams.set("page", "1");
    setSearchParams(newParams);
  };

  const goToPage = (p) => {
    if (p < 1 || p > totalPages) return;
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", p);
    setSearchParams(newParams);
  };

  return (
    <main style={{ maxWidth: 900, margin: "20px auto", color: theme === "dark" ? "#eee" : "#111" }}>
      
      {/* Filters */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 20 }}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Search by name..."
          style={{
            flexGrow: 1,
            minWidth: 180,
            padding: 8,
            borderRadius: 6,
            border: `1px solid ${theme === "dark" ? "#555" : "#ccc"}`,
            backgroundColor: theme === "dark" ? "#2e2e2e" : "#fff",
            color: theme === "dark" ? "#eee" : "#111",
          }}
        />
        <select name="status" value={status} onChange={handleChange} style={selectStyle(theme)}>
          <option value="">All Status</option>
          {STATUS_OPTIONS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <select name="species" value={species} onChange={handleChange} style={selectStyle(theme)}>
          <option value="">All Species</option>
          {SPECIES_OPTIONS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* Characters */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 }}>
        {displayedCharacters.length > 0 ? (
          displayedCharacters.map((char) => (
            <CharacterCard key={char.id} character={char} theme={theme} />
          ))
        ) : (
          <p>No characters found.</p>
        )}
      </div>

      {/* Pagination */}
      <div style={{ marginTop: 20, display: "flex", justifyContent: "center", gap: 20 }}>
        <button onClick={() => goToPage(page - 1)} disabled={page === 1} style={buttonStyle(page === 1)}>
          Previous
        </button>
        <span>Page {page} of {totalPages}</span>
        <button onClick={() => goToPage(page + 1)} disabled={page >= totalPages} style={buttonStyle(page >= totalPages)}>
          Next
        </button>
      </div>
    </main>
  );
}

function selectStyle(theme) {
  return {
    padding: 8,
    borderRadius: 6,
    border: `1px solid ${theme === "dark" ? "#555" : "#ccc"}`,
    backgroundColor: theme === "dark" ? "#2e2e2e" : "#fff",
    color: theme === "dark" ? "#eee" : "#111",
  };
}

function buttonStyle(disabled) {
  return {
    padding: "8px 16px",
    borderRadius: 6,
    cursor: disabled ? "not-allowed" : "pointer",
  };
}
