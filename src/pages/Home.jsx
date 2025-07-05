import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";
import SearchFilterBar from "../components/SearchFilterBar";
import Pagination from "../components/Pagination";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [totalFrontendPages, setTotalFrontendPages] = useState(1);

  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name") || "";
  const status = searchParams.get("status") || "";
  const page = parseInt(searchParams.get("page") || "1", 10);

  const apiPage = Math.ceil(page / 2); // API page (20 per page)

  useEffect(() => {
    const controller = new AbortController();

    const fetchCharacters = async () => {
      setLoading(true);
      setError("");

      try {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character?page=${apiPage}&name=${name}&status=${status}`,
          { signal: controller.signal }
        );

        if (!res.ok) {
          if (res.status === 404) {
            setCharacters([]);
            setTotalFrontendPages(1);
            return;
          }
          throw new Error("Error fetching characters");
        }

        const data = await res.json();
        const allResults = data.results;

        // Determine frontend page content (10 per page)
        const isFirstHalf = page % 2 !== 0;
        const startIdx = isFirstHalf ? 0 : 10;
        const endIdx = isFirstHalf ? 10 : 20;
        setCharacters(allResults.slice(startIdx, endIdx));

        // Dynamic calculation
        if (data.info.next === null) {

          const realTotalCharacters = (data.info.count || 0);
          setTotalFrontendPages(Math.ceil(realTotalCharacters / 10));
        } else {
          setTotalFrontendPages(Math.ceil(data.info.count / 10));

        }
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("Failed to fetch characters.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
    return () => controller.abort();
  }, [name, status, page, apiPage]);

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <SearchFilterBar />

      {error && <p className="text-red-500 font-semibold mb-4">{error}</p>}
      {loading && <p>Loading characters...</p>}

      {!loading && !error && (
        <>
          <p className="mb-4 text-sm text-gray-600">
            Showing {characters.length} results on page {page} of {totalFrontendPages}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-8">
            {characters.map((char) => (
              <CharacterCard key={char.id} character={char} />
            ))}
          </div>

          <Pagination currentPage={page} totalPages={totalFrontendPages} />
        </>
      )}
    </main>
  );
}
