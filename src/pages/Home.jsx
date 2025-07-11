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

  // fetch characters with filters
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

  // handle changes
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
    <main className="container py-5">
      <div className="text-center mb-4">
        <h1 className="display-5 fw-bold text-success">Rick & Morty Explorer</h1>
        <p className="lead">Discover characters from the Rick and Morty universe!</p>
        <Link to="/about" className="btn btn-outline-primary mb-3">Learn More About This App</Link>
      </div>

      <div className="row mb-4">
        <div className="col-md-6 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            value={name}
            onChange={handleSearchChange}
          />
        </div>
        <div className="col-md-6">
          <select className="form-select" value={status} onChange={handleStatusChange}>
            <option value="">All Status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
      </div>

      <div className="row">
        {characters.length > 0 ? (
          characters.map((char) => (
            <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={char.id}>
              <CharacterCard character={char} />
            </div>
          ))
        ) : (
          <p>No characters found.</p>
        )}
      </div>

      <div className="d-flex justify-content-between mt-4">
        <button
          className="btn btn-outline-secondary"
          disabled={!info.prev}
          onClick={() => goToPage(page - 1)}
        >
          Previous
        </button>
        <button
          className="btn btn-outline-secondary"
          disabled={!info.next}
          onClick={() => goToPage(page + 1)}
        >
          Next
        </button>
      </div>
    </main>
  );
}
