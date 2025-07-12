import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Search from "../pages/search";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]); //holds the array of characters fetched from the API.
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({}); //holds metadata from the API response (e.g., next, prev, pages).
  const [searchTerm, setSearchTerm] = useState(""); //current search input (for filtering by name).
  const [statusFilter, setStatusFilter] = useState(""); //selected filter (Alive, Dead & Unknown).
  const [hoveredButtonId, setHoveredButtonId] = useState(null);

  // Fetching from API
  const fetchCharacters = (pageNumber) => {
    fetch(`https://rickandmortyapi.com/api/character?page=${pageNumber}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((err) => console.error(err));
  };
  //Fetching New data when page changes
  useEffect(() => {
    fetchCharacters(page);
  }, [page]);

  // Filter/Search and Sort
  const filteredAndSortedCharacters = characters
    .filter((char) =>
      char.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((char) =>
      statusFilter
        ? char.status.toLowerCase() === statusFilter.toLowerCase()
        : true
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  //pagination : 10 character card per page
  const charactersPerPage = 10;
  const totalPages = Math.ceil(
    filteredAndSortedCharacters.length / charactersPerPage
  );
  const paginatedCharacters = filteredAndSortedCharacters.slice(
    (page - 1) * charactersPerPage,
    page * charactersPerPage
  );

  return (
    <div className="px-5 max-w-[1400px] mx-auto py-10">
      <h1 className="text-center text-4xl mb-5 text-green-500 font-orbitron">
        Rick & Morty Characters
      </h1>

      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 mt-8">
        {paginatedCharacters.length > 0 ? (
          paginatedCharacters.map((char) => (
            <div
              key={char.id}
              className="bg-[#1e1e2f] rounded-xl overflow-hidden text-white shadow-lg flex flex-col justify-between"
            >
              <img
                src={char.image}
                alt={char.name}
                className="w-full h-[260px] object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="text-xl font-bold mb-3">{char.name}</h3>
                <div>
                  <span
                    className={`inline-block px-5 py-2  rounded font-semibold mb-5 select-none font-orbitron ${
                      char.status === "Alive"
                        ? " text-green-600 shadow-[0_0_8px_2px_rgba(0,255,0,0.6)]"
                        : char.status === "Dead"
                        ? " text-red-600 shadow-[0_0_8px_2px_rgba(255,0,0,0.6)]"
                        : "text-gray-300 shadow-[0_0_8px_2px_rgba(170,170,170,0.6)]"
                    }`}
                  >
                    {char.status.charAt(0).toUpperCase() + char.status.slice(1)}{" "}
                  </span>
                </div>
                <Link
                  to={`/character/${char.id}`}
                  onMouseEnter={() => setHoveredButtonId(char.id)}
                  onMouseLeave={() => setHoveredButtonId(null)}
                  className={`inline-block text-[#0a0a0a] font-semibold text-[15px] px-7 py-3 rounded-[30px] mt-4 transition-transform transition-shadow ${
                    hoveredButtonId === char.id
                      ? "bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_6px_15px_rgba(0,230,195,0.6)] -translate-y-0.5"
                      : "bg-gradient-to-br from-cyan-500 to-blue-500 shadow-[0_4px_12px_rgba(0,255,204,0.3)]"
                  }`}
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full">
            No characters found.
          </p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-5 mt-10">
        <button
          onClick={() => setPage(page - 1)}
          disabled={!info.prev}
          className={`px-4 py-2 text-white rounded-md bg-gray-800 transition-opacity ${
            !info.prev ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          ◀ Previous
        </button>
        <span className="text-cyan-400 font-bold text-lg">Page {page}</span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={!info.next}
          className={`px-4 py-2 text-white rounded-md bg-gray-800 transition-opacity ${
            !info.next ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          Next ▶
        </button>
      </div>
    </div>
  );
};

export default CharacterList;
