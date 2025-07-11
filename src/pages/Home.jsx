import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name") || "";
  const status = searchParams.get("status") || "";
  const displayPage = parseInt(searchParams.get("page") || "1");

  // Fetch characters based on query params
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        setError(null);
        const query = new URLSearchParams();
        if (name) query.append("name", name);
        if (status) query.append("status", status);
        query.append("page", displayPage);

        const res = await fetch(
          `https://rickandmortyapi.com/api/character/?${query}`
        );
        if (!res.ok) throw new Error("No characters found");
        const data = await res.json();
        setCharacters(data.results);
        setInfo(data.info);
      } catch (err) {
        setError(err.message);
        setCharacters([]);
        setInfo({});
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [name, status, displayPage]);

  // Update query params
  const handleSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    const newName = form.name.value;
    const newStatus = form.status.value;
    setSearchParams({ name: newName, status: newStatus, page: 1 });
  };

  return (
    <div>
      <NavBar />
      <main className="container mx-auto px-4 my-4">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-dark">
          Rick & Morty Explorer
        </h1>

        {/* Search & Filter Form */}
        <form
          className="bg-sky-100 row gy-2 gx-3 align-items-center mb-4 bg-light p-3 rounded shadow-sm p-4"
          onSubmit={handleSearch}
        >
          <div className="col-12 col-md-5 gy-2 gx-3">
            <label htmlFor="name" className="form-label visually-hidden">
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              placeholder=" Search by name..."
              defaultValue={name}
            />
          </div>

          <div className="col-12 col-md-4">
            <label htmlFor="status" className="form-label visually-hidden">
              Status:
            </label>
            <select
              name="status"
              id="status"
              className="form-select"
              defaultValue={status}
            >
              <option value="">All Statuses</option>
              <option value="alive">Alive</option>
              <option value="dead">Dead</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>

          <div className="col-12 col-md-3">
            <button type="submit" className="btn btn-primary w-100 bg-sky-500">
              Search
            </button>
          </div>
        </form>

        {loading && <p className="text-center text-secondary">Loading...</p>}
        {error && <p className="text-center text-danger">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {characters.map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="d-flex justify-content-center gap-3 align-items-center my-4 flex-wrap">
          <button
            className="btn btn-outline-primary px-4"
            disabled={!info.prev}
            onClick={() =>
              setSearchParams({ name, status, page: displayPage - 1 })
            }
          >
            ← Previous
          </button>

          <span className="px-3 py-1 border rounded text-muted bg-light fw-semibold">
            Page {displayPage}
          </span>

          <button
            className="btn btn-outline-primary px-4"
            disabled={!info.next}
            onClick={() =>
              setSearchParams({ name, status, page: displayPage + 1 })
            }
          >
            Next →
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
