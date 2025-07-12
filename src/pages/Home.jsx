import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [allCharacters, setAllCharacters] = useState([]);
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get("name") || "";
  const status = searchParams.get("status") || "";
  const internalPage = parseInt(searchParams.get("page") || "1");

  const apiPage = Math.ceil(internalPage / 2);

  const getLocalCharacters = () => {
    const start = (internalPage % 2 === 0 ? 10 : 0);
    return allCharacters.slice(start, start + 10);
  };

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      try {
        const query = new URLSearchParams();
        if (name) query.append("name", name);
        if (status) query.append("status", status);
        query.append("page", apiPage);

        const res = await fetch(`https://rickandmortyapi.com/api/character?${query}`);
        const data = await res.json();

        setAllCharacters(data.results || []);
        setInfo(data.info || null);
      } catch {
        setAllCharacters([]);
        setInfo(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [name, status, apiPage]);

  const handleSearchChange = (e) => {
    searchParams.set("name", e.target.value);
    searchParams.set("page", "1");
    setSearchParams(searchParams);
  };

  const handleStatusChange = (e) => {
    searchParams.set("status", e.target.value);
    searchParams.set("page", "1");
    setSearchParams(searchParams);
  };

  const goToPage = (newPage) => {
    searchParams.set("page", newPage);
    setSearchParams(searchParams);
  };

  const hasNext = () => {
    if (internalPage % 2 === 0) return info?.next !== null;
    return allCharacters.length > 10;
  };

  const hasPrev = internalPage > 1;

  return (
    <main className="container">
      <h1 className="my-4">Rick & Morty Explorer</h1>

      {/* Filters */}
      <div className="row mb-4">
        <div className="col-md-6 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name..."
            value={name}
            onChange={handleSearchChange}
          />
        </div>
        <div className="col-md-6 mb-2">
          <select className="form-control" value={status} onChange={handleStatusChange}>
            <option value="">All Statuses</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
      </div>

      {/* Characters */}
      {loading ? (
        <p>Loading characters...</p>
      ) : getLocalCharacters().length > 0 ? (
        <>
          <div className="row">
            {getLocalCharacters().map((char) => (
              <div className="col-md-6 col-lg-4 mb-4" key={char.id}>
                <CharacterCard character={char} />
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="d-flex justify-content-between mb-5">
            <button
              className="btn btn-secondary"
              onClick={() => goToPage(internalPage - 1)}
              disabled={!hasPrev}
            >
              Previous
            </button>
            <span className="align-self-center">Page {internalPage}</span>
            <button
              className="btn btn-secondary"
              onClick={() => goToPage(internalPage + 1)}
              disabled={!hasNext()}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <p>No characters found.</p>
      )}
    </main>
  );
}
