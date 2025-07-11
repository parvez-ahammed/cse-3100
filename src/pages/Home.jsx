import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";
import Header from "../components/header";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [apiPage, setApiPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [localPage, setLocalPage] = useState(0);
  const charactersPerPage = 10;

  // Get and set query params
  const [searchParams, setSearchParams] = useSearchParams();
  const nameParam = searchParams.get("name") || "";
  const statusParam = searchParams.get("status") || "";

  // Local controlled state for inputs (to avoid immediate API calls)
  const [nameFilter, setNameFilter] = useState(nameParam);
  const [statusFilter, setStatusFilter] = useState(statusParam);

  useEffect(() => {
    // Reset pagination when filters change
    setApiPage(1);
    setLocalPage(0);
  }, [nameParam, statusParam]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const url = new URL("https://rickandmortyapi.com/api/character");
      url.searchParams.set("page", apiPage);
      if (nameParam) url.searchParams.set("name", nameParam);
      if (statusParam) url.searchParams.set("status", statusParam);

      try {
        const res = await fetch(url.toString());
        if (!res.ok) {
          // API returns 404 if no results
          setCharacters([]);
          setTotalPages(1);
          return;
        }
        const data = await res.json();
        setCharacters(data.results);
        setTotalPages(data.info.pages);
      } catch (error) {
        setCharacters([]);
        setTotalPages(1);
      }
    };

    fetchCharacters();
  }, [apiPage, nameParam, statusParam]);

  // Slice results for 10 per page
  const startIndex = localPage * charactersPerPage;
  const selectedCharacters = characters.slice(startIndex, startIndex + charactersPerPage);

  // Combined page number
  const currentPageNumber = (apiPage - 1) * 2 + localPage + 1;

  // Update URL query params on search/filter submit
  const handleFilterSubmit = (e) => {
    e.preventDefault();
    const params = {};
    if (nameFilter.trim()) params.name = nameFilter.trim();
    if (statusFilter) params.status = statusFilter;
    setSearchParams(params);
  };

  return (
    <main className="min-h-screen px-4 py-10">
      <div className="m-0 p-0">
        <Header />
      </div>

      <div className="flex justify-center mt-8">
        <div
          style={{
            maxWidth: "1200px",
            width: "100%",
            backgroundColor: "[#9c9c9c]",
            padding: "2rem",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Characters:
          </h1>

          {/* Search + Filter Form */}
          <form onSubmit={handleFilterSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <input
              type="text"
              placeholder="Search by name"
              value={nameFilter}
              onChange={(e) => setNameFilter(e.target.value)}
              className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="">All Status</option>
              <option value="alive">Alive</option>
              <option value="dead">Dead</option>
              <option value="unknown">Unknown</option>
            </select>

            <button
              type="submit"
              className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition"
            >
              Filter
            </button>
          </form>

          {/* Character Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {selectedCharacters.length > 0 ? (
              selectedCharacters.map((char) => (
                <CharacterCard key={char.id} character={char} />
              ))
            ) : (
              <p className="text-center col-span-full text-gray-700">No characters found.</p>
            )}
          </div>

          {/* Pagination Buttons */}
          <div className="flex justify-center mt-8 space-x-4 items-center">
            <button
              onClick={() => {
                if (localPage === 1) {
                  setApiPage((prev) => prev - 1);
                  setLocalPage(0);
                } else {
                  setLocalPage(1);
                }
              }}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-teal-700"
              disabled={apiPage === 1 && localPage === 0}
            >
              Previous
            </button>

            <span className="text-sm text-white">
              Page {currentPageNumber} of {totalPages * 2 /* Because of 10 per page split */}
            </span>

            <button
              onClick={() => {
                if (localPage === 0) {
                  setLocalPage(1);
                } else {
                  setApiPage((prev) => prev + 1);
                  setLocalPage(0);
                }
              }}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-teal-700"
              disabled={characters.length < 20 && localPage === 1}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

