import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get("name") || "";
  const status = searchParams.get("status") || "";
  const page = parseInt(searchParams.get("page") || "1", 10);

  useEffect(() => {
    const url = new URL("https://rickandmortyapi.com/api/character");
    if (name) url.searchParams.set("name", name);
    if (status) url.searchParams.set("status", status);
    if (page) url.searchParams.set("page", page);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results || []);
        setInfo(data.info || {});
      });
  }, [name, status, page]);

  const handleSearchChange = (e) => {
    setSearchParams({ name: e.target.value, status, page: 1 });
  };

  const handleStatusChange = (e) => {
    setSearchParams({ name, status: e.target.value, page: 1 });
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= (info.pages || 1)) {
      setSearchParams({ name, status, page: newPage });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-fadeIn">
      <h1 className="text-3xl font-extrabold text-center text-blue-600 mb-10 drop-shadow-sm">
        🌌 Explore Rick & Morty Characters
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <div className="w-full md:w-52 relative">
          <label className="block mb-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
            Filter by Status
          </label>
          <select
            value={status}
            onChange={handleStatusChange}
            className={`
              appearance-none w-full px-4 py-2 pr-10 text-sm font-medium rounded-lg border shadow-md transition-all
              bg-gradient-to-r
              ${status === "alive"
                ? "from-green-400 to-green-600 text-white border-green-500"
                : status === "dead"
                  ? "from-red-400 to-red-600 text-white border-red-500"
                  : status === "unknown"
                    ? "from-gray-400 to-gray-600 text-white border-gray-500"
                    : "from-white to-gray-100 text-gray-800 dark:from-gray-800 dark:to-gray-700 dark:text-gray-100 border-gray-300"
              }
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-blue-400
            `}
          >
            <option value="">🌐 All</option>
            <option value="alive">🟢 Alive</option>
            <option value="dead">🔴 Dead</option>
            <option value="unknown">⚪ Unknown</option>
          </select>
          <div className="pointer-events-none absolute right-3 top-[38px] text-gray-600 dark:text-gray-300">
            ▼
          </div>
        </div>

        <input
          type="text"
          value={name}
          onChange={handleSearchChange}
          placeholder="🔍 Search characters"
          className="border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 rounded-lg px-4 py-2 w-full md:w-1/2 shadow focus:outline-none focus:ring-2 focus:ring-blue-400
    transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:ring-1 hover:ring-yellow-300"
        />

      </div>

      <p className="mb-4 text-sm text-gray-500 italic">
        Showing <span className="font-semibold text-gray-800 dark:text-gray-200">{characters.length}</span> of <span className="font-semibold text-gray-800 dark:text-gray-200">{info.count || 0}</span> characters
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {characters.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>

      <div className="flex justify-center mt-12 space-x-2 animate-slideUp">
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page <= 1}
          className="px-3 py-1 border rounded-md bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition disabled:opacity-50"
        >
          &lt;
        </button>

        {Array.from({ length: info.pages || 1 }, (_, i) => i + 1).slice(
          Math.max(0, page - 3),
          Math.min(info.pages, page + 2)
        ).map((p) => (
          <button
            key={p}
            onClick={() => handlePageChange(p)}
            className={`px-3 py-1 rounded-md border transition font-medium ${p === page ? "bg-blue-600 text-white" : "hover:bg-slate-200 dark:hover:bg-slate-700"}`}
          >
            {p}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={page >= (info.pages || 1)}
          className="px-3 py-1 border rounded-md bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition disabled:opacity-50"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
