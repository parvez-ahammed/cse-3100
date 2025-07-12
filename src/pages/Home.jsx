import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const nameFilter = searchParams.get("name") || "";
  const statusFilter = searchParams.get("status") || "";

  const page = parseInt(searchParams.get("page")) || 1;
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        let query = `?page=${page}`;
        if (nameFilter) query += `&name=${nameFilter}`;
        if (statusFilter) query += `&status=${statusFilter}`;

        const res = await fetch(
          `https://rickandmortyapi.com/api/character?${query}`
        );
        const data = await res.json();
        setCharacters(data.results || []);
        setTotalPages(data.info?.pages || 1);
      } catch (err) {
        setCharacters([]);
        setTotalPages(1);
      }
    };

    fetchCharacters();
  }, [nameFilter, statusFilter, page]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      if (value) params.set("name", value);
      else params.delete("name");
      return params;
    });
  };

  const handleStatusChange = (e) => {
    const value = e.target.value;
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      if (value) params.set("status", value);
      else params.delete("status");
      return params;
    });
  };

  const handlePageChange = (newPage) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set("page", newPage);
      return params;
    });
  };

  return (
    <main className="container my-5">
      <div className="text-center mb-4">
        <h1 className="display-4 fw-bold text-success">
          Rick & Morty Explorer
        </h1>
        <p className="lead text-muted">
          Search and filter your favorite characters
        </p>
      </div>

      {/* Filters */}
      <div className="row g-3 mb-5 align-items-end">
        <div className="col-md-6">
          <label className="form-label fw-semibold">Search by Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g., Rick, Morty..."
            value={nameFilter}
            onChange={handleSearchChange}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label fw-semibold">Filter by Status</label>
          <select
            className="form-select"
            value={statusFilter}
            onChange={handleStatusChange}
          >
            <option value="">All Statuses</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
      </div>

      {/* Character Grid */}
      <div className="row">
        {characters.length > 0 ? (
          characters.map((char) => (
            <div className="col-md-4 mb-4" key={char.id}>
              <CharacterCard character={char} />
            </div>
          ))
        ) : (
          <div className="col text-center">
            <p className="text-danger fs-5">No characters found.</p>
          </div>
        )}
      </div>

      {/* Page Buttons */}
      {totalPages > 1 && (
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-2 my-4">
          <button
            className="btn btn-outline-secondary"
            onClick={() => handlePageChange(page - 1)}
            disabled={page <= 1}
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, index) => {
            const pageNum = index + 1;
            return (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className={`btn ${
                  pageNum === page ? "btn-success" : "btn-outline-secondary"
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          <button
            className="btn btn-outline-secondary"
            onClick={() => handlePageChange(page + 1)}
            disabled={page >= totalPages}
          >
            Next
          </button>
        </div>
      )}
    </main>
  );
}
