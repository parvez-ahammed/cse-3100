import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import { useSearchParams } from "react-router-dom";
import { useLocalStorage } from '../hooks/useLocalStorage';

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  // Replace your current searchPrefs initialization with:
  const [searchPrefs, setSearchPrefs] = useLocalStorage("rickAndMortySearchPrefs", {
    name: "",
    status: "",
    page: 1
  });

  // Get filters from URL first, then fallback to localStorage
  const nameFilter = searchParams.get("name") ?? searchPrefs.name;
  const statusFilter = searchParams.get("status") ?? searchPrefs.status;
  const frontendPage = parseInt(searchParams.get("page")) || searchPrefs.page || 1;


  const apiPage = Math.ceil(frontendPage / 2);
  const sliceStart = frontendPage % 2 === 1 ? 0 : 10;
  const sliceEnd = sliceStart + 10;


  const [nameInput, setNameInput] = useState(nameFilter);
  const [statusInput, setStatusInput] = useState(statusFilter);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setIsLoading(true);
        let url = `https://rickandmortyapi.com/api/character?page=${apiPage}`;

        if (nameFilter) url += `&name=${encodeURIComponent(nameFilter)}`;
        if (statusFilter) url += `&status=${encodeURIComponent(statusFilter)}`;

        const res = await fetch(url);
        const data = await res.json();
        if (data.error) {
          setCharacters([]);
          setInfo({});
        } else {
          setCharacters(data.results);
          setInfo(data.info);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, [apiPage, nameFilter, statusFilter]);

  // Update localStorage when searchParams change
  // Replace your current localStorage update useEffect with this:
  useEffect(() => {
    const currentParams = Object.fromEntries(searchParams);
    const newPrefs = {
      name: currentParams.name || searchPrefs.name || "",
      status: currentParams.status || searchPrefs.status || "",
      page: parseInt(currentParams.page) || searchPrefs.page || 1
    };

    // Only update if something actually changed
    if (JSON.stringify(newPrefs) !== JSON.stringify(searchPrefs)) {
      setSearchPrefs(newPrefs);
    }
  }, [searchParams, searchPrefs, setSearchPrefs]);

  const maxFrontendPages = info.pages ? info.pages * 2 : 0;

  const visiblePagesCount = 7;
  const half = Math.floor(visiblePagesCount / 2);
  let startPage = Math.max(frontendPage - half, 1);
  let endPage = startPage + visiblePagesCount - 1;

  if (endPage > maxFrontendPages) {
    endPage = maxFrontendPages;
    startPage = Math.max(endPage - visiblePagesCount + 1, 1);
  }

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  const handlePageChange = (newPage) => {
    const currentFilters = Object.fromEntries(searchParams);
    setSearchParams({
      ...currentFilters, // Keep existing filters
      page: newPage
    });
  };

  // Update all your pagination handlers to use handlePageChange:
  const handlePrev = () => frontendPage > 1 && handlePageChange(frontendPage - 1);
  const handleNext = () => frontendPage < maxFrontendPages && handlePageChange(frontendPage + 1);
  const handleFirst = () => handlePageChange(1);
  const handleLast = () => handlePageChange(maxFrontendPages);

  // Handle filters
  // Update your handleReset function to explicitly clear localStorage
  const handleReset = () => {
    setNameInput("");
    setStatusInput("");
    // Explicitly set empty filters in localStorage through URL params
    setSearchParams({
      name: "",
      status: "",
      page: 1
    });
  };

  // Update your handleSearch function to properly handle empty strings
  const handleSearch = (e) => {
    e.preventDefault();
    const newParams = {
      name: nameInput.trim(), // will be empty string if cleared
      status: statusInput.trim(), // will be empty string if "All Status"
      page: 1
    };
    setSearchParams(newParams);
  };

  // Update your localStorage useEffect to properly handle empty strings
  useEffect(() => {
    const currentParams = Object.fromEntries(searchParams);
    const newPrefs = {
      name: currentParams.name ?? "", // explicitly store empty string
      status: currentParams.status ?? "", // explicitly store empty string
      page: parseInt(currentParams.page) || 1
    };

    // Always update to ensure empty strings are stored
    setSearchPrefs(newPrefs);
  }, [searchParams, setSearchPrefs]);

  // Skeleton loader
  const CardSkeleton = () => (
    <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden animate-pulse">
      <div className="pt-[100%] bg-gray-200"></div>
      <div className="p-3 bg-gray-100 space-y-2">
        <div className="h-6 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-4 bg-gray-300 rounded"></div>
        <div className="h-8 mt-4 bg-gray-300 rounded"></div>
      </div>
    </div>
  );

  return (
    <main className="container mx-auto px-4 py-8">

      {/* Search and Filter */}
      {/* Search and Filter */}
      <form onSubmit={handleSearch} className="flex flex-wrap gap-3 mb-6 justify-center">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by name..."
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
          className="font-medium text-[#4cb5c3] px-4 py-2 relative rounded-md border border-[#4cb5c3] transition duration-300 hover:bg-[#02afc5] hover:text-white hover:border-[#02afc5] hover:backdrop-blur-sm focus:bg-[#02afc5] focus:text-white focus:border-[#02afc5] focus:backdrop-blur-sm"
          style={{
            fontFamily: "'Get Schwifty', sans-serif",
            letterSpacing: '0.5px',
            outline: 'none'
          }}
        />

        {/* Status Select */}
        <select
          value={statusInput}
          onChange={(e) => setStatusInput(e.target.value)}
          className="font-medium text-[#4cb5c3] px-4 py-2 relative rounded-md border border-[#4cb5c3] transition duration-300 hover:bg-[#02afc5] hover:text-white hover:border-[#02afc5] hover:backdrop-blur-sm focus:bg-[#02afc5] focus:text-white focus:border-[#02afc5] focus:backdrop-blur-sm"
          style={{
            fontFamily: "'Get Schwifty', sans-serif",
            letterSpacing: '0.5px',
            outline: 'none'
          }}
        >
          <option value="">All Status</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>

        {/* Search Button */}
        <button
          type="submit"
          className="font-medium text-[#4cb5c3] px-4 py-2 relative rounded-md border border-[#4cb5c3] transition duration-300 hover:bg-[#02afc5] hover:text-white hover:border-[#02afc5] hover:backdrop-blur-sm glow-animation"
          style={{
            fontFamily: "'Get Schwifty', sans-serif",
            letterSpacing: '0.5px'
          }}
        >
          Search
        </button>

        {/* Reset Button - Add this new button */}
        <button
          type="button"
          onClick={handleReset}
          className="font-medium text-[#ff5555] px-4 py-2 relative rounded-md border border-[#ff5555] transition duration-300 hover:bg-[#ff5555] hover:text-white hover:border-[#ff5555] hover:backdrop-blur-sm"
          style={{
            fontFamily: "'Get Schwifty', sans-serif",
            letterSpacing: '0.5px'
          }}
        >
          Reset
        </button>
      </form>

      {/* Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
        {isLoading ? (
          Array.from({ length: 10 }).map((_, index) => (
            <div key={`skeleton-${index}`} className="h-full">
              <CardSkeleton />
            </div>
          ))
        ) : characters.length > 0 ? (
          characters.slice(sliceStart, sliceEnd).map((char) => (
            <div key={char.id} className="h-full">
              <CharacterCard character={char} />
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-[#02afc5]">No characters found.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex flex-wrap justify-center gap-2 mt-8">
        <button
          onClick={handleFirst}
          disabled={frontendPage === 1}
          className="px-3 py-1 rounded-md bg-lime-300 text-[#02afc5] hover:bg-lime-400 disabled:opacity-50 transition-colors duration-200 border border-[#02afc5]"
          style={{ fontFamily: "'Get Schwifty', sans-serif", letterSpacing: '0.5px', fontWeight: 'normal' }}
        >
          ⏮ First
        </button>

        <button
          onClick={handlePrev}
          disabled={frontendPage === 1}
          className="px-3 py-1 rounded-md bg-lime-300 text-[#02afc5] hover:bg-lime-400 disabled:opacity-50 transition-colors duration-200 border border-[#02afc5]"
          style={{ fontFamily: "'Get Schwifty', sans-serif", letterSpacing: '0.5px', fontWeight: 'normal' }}
        >
          ← Prev
        </button>

        {pages.map((p) => (
          <button
            key={p}
            onClick={() => setSearchParams({ page: p })}
            className={`px-3 py-1 rounded-md border font-normal ${p === frontendPage
              ? "bg-[#02afc5] text-lime-300 border-[#02afc5]"
              : "bg-lime-300 text-[#02afc5] border-[#02afc5] hover:bg-lime-400"
              } transition-colors duration-200`}
            style={{ fontFamily: "'Get Schwifty', sans-serif", letterSpacing: '0.5px' }}
          >
            {p}
          </button>
        ))}

        <button
          onClick={handleNext}
          disabled={frontendPage === maxFrontendPages}
          className="px-3 py-1 rounded-md bg-lime-300 text-[#02afc5] hover:bg-lime-400 disabled:opacity-50 transition-colors duration-200 border border-[#02afc5]"
          style={{ fontFamily: "'Get Schwifty', sans-serif", letterSpacing: '0.5px', fontWeight: 'normal' }}
        >
          Next →
        </button>

        <button
          onClick={handleLast}
          disabled={frontendPage === maxFrontendPages}
          className="px-3 py-1 rounded-md bg-lime-300 text-[#02afc5] hover:bg-lime-400 disabled:opacity-50 transition-colors duration-200 border border-[#02afc5]"
          style={{ fontFamily: "'Get Schwifty', sans-serif", letterSpacing: '0.5px', fontWeight: 'normal' }}
        >
          Last ⏭
        </button>
      </div>
    </main>
  );
}
