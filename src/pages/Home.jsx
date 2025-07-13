import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const[searchParams, setSearchParams] = useSearchParams();

  const nameQuery = searchParams.get("name") || "";
  const statusQuery = searchParams.get("status") || "";
  const pageQuery = parseInt(searchParams.get("page")) || 1;

  const[name, setName] = useState(nameQuery);
  const[status, setStatus] = useState(statusQuery);
  const[page, setPage] = useState(pageQuery);

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const[currentPage, setCurrentPage] = useState(1);
  const charactersPerPage = 10;

  const fetchCharacters = async () => {
      setLoading(true);
      try {
        const url = new URL("https://rickandmortyapi.com/api/character")

        if(nameQuery) url.searchParams.append("name", nameQuery);
        if(statusQuery) url.searchParams.append("status", statusQuery);

        const res = await fetch(url);
        if(!res.ok) {
          setCharacters([]);
          setLoading(false);
          return;
        }
        
        const data = await res.json();
        setCharacters(data.results || []);
      } catch (error) {
        console.error("Fetch error:", error);
        setCharacters([]); 
      } finally {
        setLoading(false);
      }
  };

  const handleFilterChange = () => {
    const params = {};
    if (name) params.name = name;
    if (status) params.status = status;
    setCurrentPage(1);
    setSearchParams(params);
  };

  // Calculate characters per page
  const startIndex = (currentPage - 1) * charactersPerPage;
  const endIndex = startIndex + charactersPerPage;
  const paginatedCharacters = characters.slice(startIndex, endIndex);

  const totalPages = Math.ceil(characters.length / charactersPerPage);

  useEffect(() => {
    fetchCharacters();
  }, [searchParams]);
  
  return (
    <main className="container">
      <h1 className="my-4">Rick & Morty Explorer</h1>

      <div className="bar-container">
        <input className="barStyle"
          type="text" 
          placeholder="Search by name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select className="barStyle" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">All Status</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <button onClick={handleFilterChange} className="btn-b"> Apply Filter</button>

      {loading ? (
        <p>loading...</p>
      ) : characters.length === 0 ? (
        <p>No characters found.</p>
      ) : (
        <>
          <div className="characterCard">
            {paginatedCharacters.map((char) => (
              <div className="col-md-4 mb-4" key={char.id}>
                <CharacterCard character={char} />
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="pagination-container">
            <button
              className="pagination-btn"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage <= 1}
            >
              ← Previous
            </button>

            <span className="pagination-text">
              Page <strong>{currentPage}</strong> of <strong>{totalPages}</strong>
            </span>

            <button
              className="pagination-btn"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage >= totalPages}
            >
              Next →
            </button>
          </div>

        </>
      )}

    </main>
  );
}
