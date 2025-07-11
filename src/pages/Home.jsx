import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [pageCount, setPageCount] = useState(1); // max pages from API
  const [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get("name") || "";
  const status = searchParams.get("status") || "";
  const page = parseInt(searchParams.get("page") || "1");

  useEffect(() => {
    const fetchData = async () => {
      let url = `https://rickandmortyapi.com/api/character/?page=${page}`;
      if (name) url += `&name=${name}`;
      if (status) url += `&status=${status}`;
      try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.error) {
          setCharacters([]);
          setPageCount(1);
        } else {
          const start = 0;
          const end = 10;
          setCharacters(data.results.slice(start, end));
          setPageCount(data.info.pages);
        }
      } catch (err) {
        setCharacters([]);
        setPageCount(1);
      }
    };

    fetchData();
  }, [name, status, page]);

  const handlePageChange = (newPage) => {
    const params = {};
    if (name) params.name = name;
    if (status) params.status = status;
    params.page = newPage;
    setSearchParams(params);
  };

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-6">
        <SearchBar
          name={name}
          status={status}
          setSearchParams={setSearchParams}
        />
        <h1 className="text-2xl font-bold my-6 text-center">
          Rick & Morty Explorer
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {characters.length > 0 ? (
            characters.map((char) => (
              <CharacterCard key={char.id} character={char} />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No characters found.
            </p>
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page <= 1 || characters.length === 0}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
          >
            Previous
          </button>
          <span>
            Page {characters.length === 0 ? 1 : page} of {pageCount}
          </span>
          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page >= pageCount || characters.length === 0}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </main>
    </>
  );
}
