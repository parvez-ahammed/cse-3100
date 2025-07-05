import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import { useSearchParams } from "react-router-dom";
import FilterStatus from "../components/FilterStatus";
import Search from "../components/Search";
import Pagination from "../components/Pagination";

const CARDS_PER_PAGE = 10;

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState(searchParams.get("name") || "");
  const [status, setStatus] = useState(searchParams.get("status") || "");
  const [searchTrigger, setSearchTrigger] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [apiCharacters, setApiCharacters] = useState([]);
  const [apiPage, setApiPage] = useState(1);

  useEffect(() => {
    const newApiPage = Math.floor((page - 1) * CARDS_PER_PAGE / 20) + 1;
    setApiPage(newApiPage);
  }, [page, name, status]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const ask = new URLSearchParams();
      if (name) ask.set("name", name);
      if (status) ask.set("status", status);
      ask.set("page", apiPage);
      const url = `https://rickandmortyapi.com/api/character?${ask.toString()}`;
      const res = await fetch(url);
      const data = await res.json();
      const results = data.results || [];
      setApiCharacters(results);
      const totalCount = data.info ? data.info.count : 0;
      setTotalPages(Math.ceil(totalCount / CARDS_PER_PAGE));

      setSearchParams(ask);
      setSearchTrigger(false);
    };
    fetchCharacters();
  }, [searchTrigger, setSearchParams, apiPage, name, status]);

  useEffect(() => {
    setPage(1);
  }, [name, status]);

  const startIdx = ((page - 1) * CARDS_PER_PAGE) % 20;
  const endIdx = startIdx + CARDS_PER_PAGE;
  const charactersToShow = apiCharacters.slice(startIdx, endIdx);

  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-4 pb-10 text-bold bg-green-100">
      <div>
        <div className="flex flex-col items-center justify-center mb-8">
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-green md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Rick & Morty
            </span>{" "}
            Characters
          </h1>
        </div>
        <div className="flex flex-wrap items-center justify-end gap-4 mb-4">
          <div className="border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black">
            <Search
              value={name}
              onChange={(v) => {
                setName(v);
                setSearchTrigger(true);
              }}
            />
          </div>
          <div className="border rounded-xl px-3 py-2  focus:outline-none focus:ring-2 focus:ring-black">
            <FilterStatus
              value={status}
              onChange={(v) => {
                setStatus(v);
                setSearchTrigger(true);
              }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 ">
          {charactersToShow.map((char) => (
            <div className="col-md-4 mb-4" key={char.id}>
              <CharacterCard character={char} />
            </div>
          ))}
        </div>
        <Pagination
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      </div>
    </main>
  );
}