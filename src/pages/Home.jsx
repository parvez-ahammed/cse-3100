import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CharacterCard from "../components/CharacterCard"; // ✅ Correct import

export default function HomePage() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState(null);

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
        setInfo(data.info);
      })
      .catch(() => {
        setCharacters([]);
        setInfo(null);
      });
  }, [name, status, page]);

  const handleSearchChange = (e) => {
    setSearchParams({ name: e.target.value, status, page: 1 });
  };

  const handleStatusChange = (e) => {
    setSearchParams({ name, status: e.target.value, page: 1 });
  };

  const handlePageChange = (newPage) => {
    setSearchParams({ name, status, page: newPage });
  };

  return (
    <div className="container py-4">
      <h1 className="mb-4">Rick & Morty Explorer</h1>

      <div className="row mb-3">
        <div className="col-md-6 mb-2">
          <input
            type="text"
            placeholder="Search by name"
            value={name}
            onChange={handleSearchChange}
            className="form-control"
          />
        </div>
        <div className="col-md-6 mb-2">
          <select
            value={status}
            onChange={handleStatusChange}
            className="form-control"
          >
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
            <div className="col-md-4 mb-4" key={char.id}>
              <CharacterCard character={char} />
            </div>
          ))
        ) : (
          <div className="col-12">
            <p>No characters found.</p>
          </div>
        )}
      </div>

      {info && (
        <div className="d-flex justify-content-between my-4">
          <button
            className="btn btn-outline-primary"
            onClick={() => handlePageChange(page - 1)}
            disabled={page <= 1}
          >
            ◀ Previous
          </button>

          <span className="align-self-center">Page {page} of {info.pages}</span>

          <button
            className="btn btn-outline-primary"
            onClick={() => handlePageChange(page + 1)}
            disabled={page >= info.pages}
          >
            Next ▶
          </button>
        </div>
      )}
    </div>
  );
}
