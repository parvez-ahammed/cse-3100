import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";
import SearchBar from "../components/SearchBar";
import FilterDropdown from "../components/FilterDropdown";
import Pagination from "../components/Pagination";

export default function Home() {
  /* --- URL query params --- */
  const [params, setParams] = useSearchParams();
  const nameQ   = params.get("name")   || "";
  const statusQ = params.get("status") || "";
  const pageQ   = parseInt(params.get("page") || "1", 10); // UI page (10 items)

  /* --- state --- */
  const [results, setResults] = useState([]);      // 0‑20 raws from API
  const [info, setInfo]       = useState(null);    // API info {count, next, …}
  const [loading, setLoading] = useState(false);

  // map UI‑page → API‑page
  const apiPage     = Math.floor((pageQ - 1) / 2) + 1; // API page = 1,2,3…
  const sliceOffset = ((pageQ - 1) % 2) * 10;          // 0 or 10

  /* --- fetch --- */
  useEffect(() => {
    async function fetchList() {
      setLoading(true);
      const url = new URL(
        `https://rickandmortyapi.com/api/character?page=${apiPage}`
      );
      if (nameQ)   url.searchParams.set("name", nameQ);
      if (statusQ) url.searchParams.set("status", statusQ);

      const res  = await fetch(url);
      const data = await res.json();
      setInfo(data.info || null);
      setResults(data.results || []);  // API returns error obj if none
      setLoading(false);
    }
    fetchList();
  }, [apiPage, nameQ, statusQ]);

  /* --- derived data --- */
  const viewList    = results.slice(sliceOffset, sliceOffset + 10);
  const totalPages  = info ? Math.ceil(info.count / 10) : 0;

  /* --- helpers --- */
  const setParam = (key, value) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    if (key !== "page") next.set("page", "1");
    setParams(next);
  };

  /* --- render --- */
  return (
    <main className="container" style={{ maxWidth: 1100 }}>
      <h1 className="my-4">Rick & Morty Explorer</h1>

      {/* controls */}
      <div className="controls">
        <FilterDropdown value={statusQ} onChange={(v) => setParam("status", v)} />
        <SearchBar     value={nameQ}   onChange={(v) => setParam("name", v)}   />
      </div>

      {loading && <p>Loading…</p>}
      {!loading && (
        <>
          <p>
            Showing {viewList.length} of {info?.count ?? 0} results
          </p>

          <div className="character-grid">
            {viewList.map((c) => (
              <CharacterCard key={c.id} character={c} />
            ))}
          </div>

          <Pagination
            page={pageQ}
            total={totalPages}
            onChange={(p) => setParam("page", String(p))}
          />
        </>
      )}
    </main>
  );
}