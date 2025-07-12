import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";
import Header from "../components/Header/header";
import Footer from "../components/footer/Footer";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  // Initialize states from URL params
  const [name, setName] = useState(searchParams.get("name") || "");
  const [status, setStatus] = useState(searchParams.get("status") || "");
  const [page, setPage] = useState(parseInt(searchParams.get("page")) || 1);

  const [maxPage, setMaxPage] = useState(1);
  const [isDark, setIsDark] = useState(true);

  // Fetch characters whenever filters or page changes
  useEffect(() => {
    const fetchCharacters = async () => {
      const query = new URLSearchParams();
      if (name) query.set("name", name);
      if (status) query.set("status", status);
      query.set("page", Math.ceil(page / 2));

      const url = `https://rickandmortyapi.com/api/character/?${query.toString()}`;
      const res = await fetch(url);
      const data = await res.json();

      let slicedData = [];
      if (data.results) {
        slicedData =
          page % 2 !== 0
            ? data.results.slice(0, 10)
            : data.results.slice(10, 20);
      }

      setCharacters(slicedData);
      setMaxPage(data.info ? data.info.pages * 2 - 1 : 1);

      // Update URL params
      query.set("page", page);
      setSearchParams(query);
    };

    fetchCharacters();
  }, [name, status, page, setSearchParams]);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <Header isDark={isDark} setIsDark={setIsDark} />

      <main className="max-w-6xl mx-auto px-4 mt-20 pb-10">
        <h1
          className={`text-3xl font-bold my-6 text-center ${
            isDark ? "text-green-400" : "text-blue-600"
          }`}
        >
          Rick & Morty Explorer
        </h1>

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="text"
            placeholder="Search by name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`rounded px-4 py-2 border focus:outline-none ${
              isDark
                ? "bg-gray-800 text-green-400 border-green-400 placeholder-green-300"
                : "bg-white text-blue-600 border-blue-400 placeholder-blue-300"
            }`}
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className={`rounded px-4 py-2 border focus:outline-none ${
              isDark
                ? "bg-gray-800 text-green-400 border-green-400"
                : "bg-white text-blue-600 border-blue-400"
            }`}
          >
            <option value="">All Status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
          <button
            onClick={() => setPage(1)}
            className={`px-4 py-2 rounded font-semibold ${
              isDark
                ? "bg-green-400 text-black hover:bg-green-500"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Search
          </button>
        </div>

        {/* Character Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {characters.length > 0 ? (
            characters.map((char) => (
              <CharacterCard key={char.id} character={char} isDark={isDark} />
            ))
          ) : (
            <p
              className={`col-span-full text-center font-semibold ${
                isDark ? "text-green-400" : "text-blue-600"
              }`}
            >
              No characters found.
            </p>
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            disabled={page <= 1}
            onClick={() => setPage((prev) => prev - 1)}
            className={`px-4 py-2 rounded font-semibold ${
              page <= 1
                ? "bg-gray-300"
                : isDark
                ? "bg-green-400 text-black hover:bg-green-500"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Prev
          </button>
          <span
            className={`my-auto font-semibold ${
              isDark ? "text-green-400" : "text-blue-600"
            }`}
          >
            Page {page} of {maxPage}
          </span>
          <button
            disabled={page >= maxPage}
            onClick={() => setPage((prev) => prev + 1)}
            className={`px-4 py-2 rounded font-semibold ${
              page >= maxPage
                ? "bg-gray-300"
                : isDark
                ? "bg-green-400 text-black hover:bg-green-500"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Next
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
