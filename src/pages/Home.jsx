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
    window.scrollTo({ top: 0, behavior: "smooth" });
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
          onSubmit={handleSearch}
          className="bg-[#e0f2fe] md:flex md:flex-wrap items-end gap-4 p-6 rounded-xl shadow-sm"
        >
          {/* Name Input */}
          <div className="w-full md:w-5/12">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              defaultValue={name}
              placeholder="Search by name..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

          {/* Status Select */}
          <div className="w-full md:w-4/12">
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Status
            </label>
            <select
              name="status"
              id="status"
              defaultValue={status}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              <option value="">All Statuses</option>
              <option value="alive">Alive</option>
              <option value="dead">Dead</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="w-full md:w-3/12">
            <button
              type="submit"
              className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
            >
              Search
            </button>
          </div>
        </form>

        {loading && <p className="text-center text-secondary">Loading...</p>}
        {error && <p className="text-center text-danger">{error}</p>}
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {characters.map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-4 my-6 flex-wrap">
          <button
            className="px-5 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!info.prev}
            onClick={() =>
              setSearchParams({ name, status, page: displayPage - 1 })
            }
          >
            ← Previous
          </button>

          <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md font-semibold shadow-sm">
            Page {displayPage}
          </span>

          <button
            className="px-5 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
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
