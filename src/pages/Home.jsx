import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";
import PaginationControls from "../components/PaginationControls";
import SearchBar from "../components/SearchBar";
import FilterDropdown from "../components/FilterDropdown";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);

  const name = searchParams.get("name") || "";
  const status = searchParams.get("status") || "";
  const page = parseInt(searchParams.get("page") || "1");
  const apiPage = Math.ceil(page / 2);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      try {
        let apiUrl = `https://rickandmortyapi.com/api/character/?page=${apiPage}`;

        if (name) apiUrl += `&name=${name}`;
        if (status) apiUrl += `&status=${status}`;

        const res = await fetch(apiUrl);
        const data = await res.json();

        if (data.results) {
          const half = 10;
          const sliceStart = (page % 2 === 1) ? 0 : half;
          const pagedCharacters = data.results.slice(sliceStart, sliceStart + half);
          setCharacters(pagedCharacters);
        } else {
          setCharacters([]);
        }
      } catch (error) {
        console.error("Fetch failed:", error);
        setCharacters([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [name, status, page]);

  const goToPage = (newPage) => {
    if (newPage < 1) return;
    searchParams.set("page", newPage);
    setSearchParams(searchParams);
  };

  return (
    <main className="container">
      <h1 className="text-center my-4">Rick & Morty Explorer</h1>

      {/* Search & Filter in a horizontal row */}
      <div className="d-flex gap-3 flex-wrap mb-4">
        <div className="flex-grow-1">
          <SearchBar />
        </div>
        <div style={{ minWidth: "200px" }}>
          <FilterDropdown />
        </div>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="card-grid">
            {characters.length > 0 ? (
              characters.map((char) => (
                <CharacterCard character={char} key={char.id} />
              ))
            ) : (
              <p>No characters found.</p>
            )}
          </div>
          <PaginationControls currentPage={page} goToPage={goToPage} />
        </>
      )}
    </main>
  );
}
