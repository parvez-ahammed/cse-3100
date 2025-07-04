import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import CharacterCard from "../components/CharacterCard";
import SearchFilter from "../components/SearchFilter";
import Pagination from "../components/Pagination";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [searchParams] = useSearchParams();
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    hasNext: false,
    hasPrev: false,
  });

  useEffect(() => {
    const fetchCharacters = async () => {
      const name = searchParams.get("name") || "";
      const status = searchParams.get("status") || "";
      const page = parseInt(searchParams.get("page")) || 1;

      // Calculate which API page to fetch (each API page has 20 characters)
      const apiPage = Math.ceil((page * 10) / 20);

      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${apiPage}&name=${name}&status=${status}`
      );
      const data = await res.json();

      // Deepseek blackmagic because I couldnt get 10 characters in the page
      if (!data.results) {
        setCharacters([]);
        setPagination({
          currentPage: 1,
          totalPages: 1,
          hasNext: false,
          hasPrev: false,
        });
        return;
      }

      // Calculate which 10 characters to show from the 20-item API response
      const startIndex = page % 2 === 1 ? 0 : 10;
      const visibleCharacters = data.results.slice(startIndex, startIndex + 10);

      setCharacters(visibleCharacters);
      setPagination({
        currentPage: page,
        totalPages: data.info.pages * 2, // Each API page = 2 UI pages
        hasNext: page < data.info.pages * 2 && !!data.info.next,
        hasPrev: page > 1,
      });
    };

    fetchCharacters();
  }, [searchParams]); // useEffect runs every time the page changes

  return (
    <div className="min-h-screen bg-gray-50">
      <div>
        <Navbar />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Select Character
          </h2>

          <SearchFilter />

          {/* Make this a component later*/}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-8">
            {characters.map((char) => (
              <CharacterCard key={char.id} character={char} />
            ))}
          </div>

          <Pagination
            currentPage={pagination.currentPage}
            totalPages={pagination.totalPages}
            hasNext={pagination.hasNext}
            hasPrev={pagination.hasPrev}
          />
        </div>
      </div>
    </div>
  );
}
