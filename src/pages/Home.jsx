// Home.jsx
import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";

export function Home() {
  const [characters, setCharacters] = useState([]);
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [info, setInfo] = useState({ pages: 1 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const params = new URLSearchParams();
        if (status) params.append("status", status);
        if (search) params.append("name", search);
        params.append("page", page);
        const res = await fetch(
          `https://rickandmortyapi.com/api/character?${params}`
        );
        const data = await res.json();
        setCharacters(data.results || []);
        setInfo(data.info || { pages: 1 });
      } catch {
        setCharacters([]);
        setInfo({ pages: 1 });
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [status, search, page]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 px-4 pt-24 pb-8">
      <div className="max-w-7xl mx-auto">
        <SearchBar
          status={status}
          setStatus={setStatus}
          search={search}
          setSearch={setSearch}
          setPage={setPage}
        />

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500"></div>
          </div>
        ) : (
          <>
            <p className="mb-6 text-center text-gray-600 dark:text-gray-300 animate-fade-in">
              Showing{" "}
              <span className="font-bold text-purple-600 dark:text-purple-400">
                {characters.length}
              </span>{" "}
              of{" "}
              <span className="font-bold text-blue-600 dark:text-blue-400">
                {info.count || 0}
              </span>{" "}
              results
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 animate-fade-in-up">
              {characters.map((char) => (
                <CharacterCard key={char.id} character={char} />
              ))}
            </div>

            {characters.length > 0 && (
              <div className="mt-8 animate-fade-in delay-100">
                <Pagination
                  page={page}
                  setPage={setPage}
                  totalPages={info.pages}
                />
              </div>
            )}

            {characters.length === 0 && (
              <div className="text-center py-12 animate-fade-in">
                <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300">
                  No characters found!
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  Try adjusting your search criteria
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
