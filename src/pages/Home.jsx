import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";

function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder="Search characters..."
      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
    />
  );
}

function FilterDropdown({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
    >
      <option value="">All Status</option>
      <option value="alive">Alive</option>
      <option value="dead">Dead</option>
      <option value="unknown">Unknown</option>
    </select>
  );
}

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({});

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      setError("");
      let url = `https://rickandmortyapi.com/api/character/?page=${page}`;
      if (search) url += `&name=${encodeURIComponent(search)}`;
      if (status) url += `&status=${encodeURIComponent(status)}`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.error) {
          setError(data.error);
          setCharacters([]);
          setInfo({});
        } else {
          setCharacters(data.results);
          setInfo(data.info);
        }
      } catch {
        setError("Failed to fetch characters");
        setCharacters([]);
        setInfo({});
      }
      setLoading(false);
    };
    fetchCharacters();
  }, [search, status, page]);

  const handleSearch = (val) => {
    setSearch(val);
    setPage(1);
  };
  const handleStatus = (val) => {
    setStatus(val);
    setPage(1);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Rick & Morty Explorer</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <SearchBar value={search} onChange={handleSearch} />
        </div>
        <FilterDropdown value={status} onChange={handleStatus} />
      </div>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {characters.map((char) => (
              <CharacterCard key={char.id} character={char} />
            ))}
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => setPage(page - 1)}
              disabled={!info.prev}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
            >
              Previous
            </button>
            <span className="py-2">Page {page}</span>
            <button
              onClick={() => setPage(page + 1)}
              disabled={!info.next}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
            >
              Next
            </button>
          </div>
        </>
      )}
    </main>
  );
}
