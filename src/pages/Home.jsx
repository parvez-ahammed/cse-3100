import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";

export default function Home() {
  const [allCharacters, setAllCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 10;
  const location = useLocation();
  const navigate = useNavigate();

  // Parse the page number from the URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = parseInt(params.get("page") || "1", 10);
    setCurrentPage(page);
  }, [location]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchAllCharacters = async () => {
      setLoading(true);
      setError("");
      try {
        let all = [];
        let page = 1;
        let hasMore = true;

        while (hasMore) {
          const res = await fetch(
            `https://rickandmortyapi.com/api/character?page=${page}`,
            { signal: controller.signal }
          );

          if (!res.ok) throw new Error("Error fetching characters");

          const data = await res.json();
          all = all.concat(data.results);

          if (data.info.next) {
            page++;
          } else {
            hasMore = false;
          }
        }

        setAllCharacters(all);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("Failed to fetch characters.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAllCharacters();
    return () => controller.abort();
  }, []);

  const totalPages = Math.ceil(allCharacters.length / pageSize);
  const paginatedCharacters = allCharacters.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const changePage = (page) => {
    setCurrentPage(page);
    navigate(`?page=${page}`); // Update URL with the new page
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      {error && (
        <p className="text-red-500 font-semibold mb-4">{error}</p>
      )}

      {loading && <p>Loading all characters...</p>}

      {!loading && !error && (
        <>
          <p className="mb-4 text-sm text-gray-600">
            Showing {paginatedCharacters.length} of {allCharacters.length} results
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-8">
            {paginatedCharacters.map((char) => (
              <CharacterCard key={char.id} character={char} />
            ))}
          </div>

          <div className="flex justify-center items-center space-x-1 text-sm text-gray-700">
            <button
              onClick={() => changePage(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              &lt;
            </button>

            {Array.from({ length: totalPages }, (_, index) => {
              if (
                index + 1 === 1 ||
                index + 1 === totalPages ||
                Math.abs(index + 1 - currentPage) <= 1
              ) {
                return (
                  <button
                    key={index}
                    onClick={() => changePage(index + 1)}
                    className={`px-3 py-1 border rounded ${currentPage === index + 1 ? "bg-black text-white" : ""}`}
                  >
                    {index + 1}
                  </button>
                );
              } else if (
                (index === 1 && currentPage > 3) ||
                (index === totalPages - 2 && currentPage < totalPages - 2)
              ) {
                return <span key={index}>...</span>;
              }
              return null;
            })}

            <button
              onClick={() => changePage(Math.min(currentPage + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              &gt;
            </button>
          </div>
        </>
      )}
    </main>
  );
}
