import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
//import Header from "../components/Header";
//import Footer from "../components/Footer";
import './home.css';

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      const params = new URLSearchParams({
        page,
        status,
        name: search,
      });

      const res = await fetch(`https://rickandmortyapi.com/api/character?${params}`);
      const data = await res.json();

      setCharacters(data.results || []);
      setTotalPages(data.info?.pages || 1);
    };

    fetchCharacters();
  }, [page, status, search]);

  return (
    <>

      <main className="container">
        <div className="filters">
          <select
            value={status}
            onChange={(e) => {
              setPage(1);
              setStatus(e.target.value);
            }}
          >
            <option value="">Select status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>

          <input
            type="text"
            placeholder="Search characters"
            value={search}
            onChange={(e) => {
              setPage(1);
              setSearch(e.target.value);
            }}
          />
        </div>

        <p>Showing {characters.length} results</p>

        <div className="grid">
          {characters.slice(0, 10).map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))}
        </div>

        {/* PAGINATION */}
        <div className="pagination">
          <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>{"<"}</button>
          {[...Array(Math.min(totalPages, 5)).keys()].map((i) => (
            <button
              key={i + 1}
              className={page === i + 1 ? "active" : ""}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          {totalPages > 5 && <span>... {totalPages}</span>}
          <button disabled={page === totalPages} onClick={() => setPage((p) => p + 1)}>{">"}</button>
        </div>
      </main>

    </>
  );
}
