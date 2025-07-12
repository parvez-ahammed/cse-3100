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

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(1, page - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(maxPage, startPage + maxVisiblePages - 1);

    // Adjust startPage if we're near the end
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gray-900">
      <Header />

      <main className="max-w-6xl mx-auto px-4 mt-20 pb-10">
        <h1 className="text-3xl font-bold my-6 text-center text-green-400">
          Rick & Morty Explorer
        </h1>

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="text"
            placeholder="Search by name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded px-4 py-2 border focus:outline-none bg-gray-800 text-green-400 border-green-400 placeholder-green-300"
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="rounded px-4 py-2 border focus:outline-none bg-gray-800 text-green-400 border-green-400"
          >
            <option value="">All Status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
          <button
            onClick={() => setPage(1)}
            className="px-4 py-2 rounded font-semibold bg-green-400 text-black hover:bg-green-500"
          >
            Search
          </button>
        </div>

        {/* Character Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {characters.length > 0 ? (
            characters.map((char) => (
              <CharacterCard key={char.id} character={char} />
            ))
          ) : (
            <p className="col-span-full text-center font-semibold text-green-400">
              No characters found.
            </p>
          )}
        </div>

        {/* Pagination */}
        <div className="flex flex-wrap justify-center mt-8 gap-2">
          {/* Previous Button */}
          <button
            disabled={page <= 1}
            onClick={() => setPage((prev) => prev - 1)}
            className={`px-4 py-2 rounded font-semibold ${
              page <= 1
                ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                : "bg-green-400 text-black hover:bg-green-500"
            }`}
          >
            Prev
          </button>

          {/* First page if not visible */}
          {getPageNumbers()[0] > 1 && (
            <>
              <button
                onClick={() => setPage(1)}
                className="px-4 py-2 rounded font-semibold bg-gray-700 text-green-400 hover:bg-gray-600"
              >
                1
              </button>
              {getPageNumbers()[0] > 2 && (
                <span className="px-2 py-2 text-green-400">...</span>
              )}
            </>
          )}

          {/* Page Numbers */}
          {getPageNumbers().map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => setPage(pageNum)}
              className={`px-4 py-2 rounded font-semibold ${
                pageNum === page
                  ? "bg-green-400 text-black"
                  : "bg-gray-700 text-green-400 hover:bg-gray-600"
              }`}
            >
              {pageNum}
            </button>
          ))}

          {/* Last page if not visible */}
          {getPageNumbers()[getPageNumbers().length - 1] < maxPage && (
            <>
              {getPageNumbers()[getPageNumbers().length - 1] < maxPage - 1 && (
                <span className="px-2 py-2 text-green-400">...</span>
              )}
              <button
                onClick={() => setPage(maxPage)}
                className="px-4 py-2 rounded font-semibold bg-gray-700 text-green-400 hover:bg-gray-600"
              >
                {maxPage}
              </button>
            </>
          )}

          {/* Next Button */}
          <button
            disabled={page >= maxPage}
            onClick={() => setPage((prev) => prev + 1)}
            className={`px-4 py-2 rounded font-semibold ${
              page >= maxPage
                ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                : "bg-green-400 text-black hover:bg-green-500"
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
