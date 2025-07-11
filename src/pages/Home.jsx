import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get("name") || "";
  const status = searchParams.get("status") || "";
  const page = parseInt(searchParams.get("page")) || 1;

  useEffect(() => {
    let url = `https://rickandmortyapi.com/api/character/?page=${page}`;
    if (name) url += `&name=${name}`;
    if (status) url += `&status=${status}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results || []);
        setInfo(data.info || {});
      })
      .catch(() => {
        setCharacters([]);
        setInfo({});
      });
  }, [name, status, page]);

  const handleSearchChange = (e) => {
    setSearchParams({ name: e.target.value, status, page: 1 });
  };

  const handleStatusChange = (e) => {
    setSearchParams({ name, status: e.target.value, page: 1 });
  };

  const goToPage = (newPage) => {
    setSearchParams({ name, status, page: newPage });
  };

  return (
    <main className="min-vh-100 bg-light py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-success">Rick & Morty Explorer</h1>
          <p className="lead">Discover characters from the Rick and Morty universe!</p>
          <Link to="/about" className="btn btn-outline-primary mt-2">
            Learn More About This App
          </Link>
        </div>

        <div className="row g-3 mb-4">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control shadow-sm rounded-pill px-4"
              placeholder="🔍 Search by name"
              value={name}
              onChange={handleSearchChange}
            />
          </div>
          <div className="col-md-6">
            <select
              className="form-select shadow-sm rounded-pill px-4"
              value={status}
              onChange={handleStatusChange}
            >
              <option value="">All Status</option>
              <option value="alive">Alive</option>
              <option value="dead">Dead</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {characters.length > 0 ? (
            characters.map((char) => (
              <div key={char.id} className="d-flex">
                <CharacterCard character={char} />
              </div>
            ))
          ) : (
            <p className="text-center">No characters found.</p>
          )}
        </div>

        <div className="d-flex justify-content-between align-items-center mt-5">
          <button
            className="btn btn-outline-secondary rounded-pill px-4"
            disabled={!info.prev}
            onClick={() => goToPage(page - 1)}
          >
            ← Previous
          </button>
          <span className="text-muted">Page {page}</span>
          <button
            className="btn btn-outline-secondary rounded-pill px-4"
            disabled={!info.next}
            onClick={() => goToPage(page + 1)}
          >
            Next →
          </button>
        </div>
      </div>
    </main>
  );
}
