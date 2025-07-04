import { useState } from "react";
import CharacterList from "../features/CharacterList";
import { useQueryParams } from "../hooks/useQueryParams";

export default function HomePage() {
  const [queryParams, setQueryParams] = useQueryParams();
  const [search, setSearch] = useState(queryParams.name || "");
  const [status, setStatus] = useState(queryParams.status || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    setQueryParams({ name: search, status, page: 1 });
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-700 dark:text-blue-400 mb-2 drop-shadow-lg">
          Rick & Morty Explorer
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-8">
          Explore the Multiverses of Rick & Morty
        </h2>
        <form
          className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-3xl mx-auto"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Search characters by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 w-full px-6 py-4 rounded-full border-none shadow-lg text-lg focus:ring-4 focus:ring-blue-400 focus:outline-none transition bg-white/90 text-gray-900 dark:bg-gray-800 dark:text-gray-100 placeholder-gray-400"
            style={{
              boxShadow: "0 4px 24px 0 rgba(59,130,246,0.10)",
            }}
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="px-6 py-4 rounded-full bg-white/90 dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-lg shadow-lg focus:ring-4 focus:ring-blue-400 focus:outline-none transition"
            style={{
              boxShadow: "0 4px 24px 0 rgba(59,130,246,0.10)",
            }}
          >
            <option value="">All Status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
          <button
            type="submit"
            className="px-8 py-4 rounded-full bg-blue-600 text-white font-bold text-lg shadow-lg hover:bg-blue-700 transition"
            style={{
              boxShadow: "0 4px 24px 0 rgba(59,130,246,0.15)",
            }}
          >
            Search
          </button>
        </form>
      </section>
      <CharacterList />
    </main>
  );
}