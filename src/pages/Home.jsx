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

  useEffect(() => {
    const fetchData = async () => {
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
      }
    };
    fetchData();
  }, [status, search, page]);

  return (
    <div className="w-full px-4 mt-4">
      {" "}
      {/* 👈 added mt-4 here */}
      <SearchBar
        status={status}
        setStatus={setStatus}
        search={search}
        setSearch={setSearch}
        setPage={setPage}
      />
      <p className="mb-4 text-sm text-gray-600 dark:text-gray-400 text-center animate-pulse">
        Showing {characters.length} of {info.count || 0} results
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 animate-fade-in">
        {characters.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>
      <Pagination page={page} setPage={setPage} totalPages={info.pages} />
    </div>
  );
}

export default Home;
