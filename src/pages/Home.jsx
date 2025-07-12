import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import Pagination from "../components/Pagination";

const STATUS_OPTIONS = ["Alive", "Dead", "unknown"];

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
    <div>
      <div className="flex flex-col gap-4 mb-6">
        <select
          className="p-2 border rounded w-64"
          value={status}
          onChange={(e) => {
            setPage(1);
            setStatus(e.target.value);
          }}
        >
          <option value="">Select status</option>
          {STATUS_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="🔍 Search characters"
          className="p-2 border rounded w-full sm:w-96"
          value={search}
          onChange={(e) => {
            setPage(1);
            setSearch(e.target.value);
          }}
        />
      </div>

      <p className="mb-4 text-sm text-gray-600">
        Showing {characters.length} of {info.count || 0} results
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
        {characters.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>

      <Pagination page={page} setPage={setPage} totalPages={info.pages} />
    </div>
  );
}

export default Home;
