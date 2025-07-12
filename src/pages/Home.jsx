import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";
import "../styles/Home.css";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [speciesList, setSpeciesList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const [name, setName] = useState(searchParams.get("name") || "");
  const [status, setStatus] = useState(searchParams.get("status") || "");
  const [species, setSpecies] = useState(searchParams.get("species") || "");
  const [page, setPage] = useState(parseInt(searchParams.get("page")) || 1);
  const [maxPage, setMaxPage] = useState(1);
  const [searchTrigger, setSearchTrigger] = useState(false);

  // Fetch characters based on filters and pagination
  useEffect(() => {
    const fetchCharacters = async () => {
      const query = new URLSearchParams();
      if (name) query.set("name", name);
      if (status) query.set("status", status);
      if (species) query.set("species", species);
      query.set("page", Math.ceil(page / 2));

      try {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character/?${query.toString()}`
        );
        const data = await res.json();

        const results = data.results || [];
        const sliced =
          page % 2 === 1 ? results.slice(0, 10) : results.slice(10, 20);

        setCharacters(sliced);
        setMaxPage(data.info?.pages * 2 - 1 || 1);

        query.set("page", page);
        setSearchParams(query);
        setSearchTrigger(false);
      } catch (err) {
        setCharacters([]);
        setMaxPage(1);
      }
    };

    fetchCharacters();
  }, [searchTrigger, page, setSearchParams]);

  // Fetch species list from first 5 pages on mount
  useEffect(() => {
    const fetchAllSpecies = async () => {
      let speciesSet = new Set();
      let pageNum = 1;
      let hasMore = true;

      try {
        while (hasMore && pageNum <= 5) {
          const res = await fetch(
            `https://rickandmortyapi.com/api/character/?page=${pageNum}`
          );
          const data = await res.json();
          data.results.forEach((char) => speciesSet.add(char.species));
          hasMore = data.info?.next !== null;
          pageNum++;
        }
      } catch (err) {
        speciesSet = new Set();
      }

      setSpeciesList(Array.from(speciesSet));
    };

    fetchAllSpecies();
  }, []);

  const handleSearch = () => {
    setPage(1);
    setSearchTrigger(true);
  };

  const handleReset = () => {
    setName("");
    setStatus("");
    setSpecies("");
    setPage(1);
    setSearchTrigger(true);
    setSearchParams({});
  };

  const isSearchApplied = name || status || species;

  return (
    <div className="home-container">
      <h1 className="title">Character Browser</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search by name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">Any Status</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>

        <select value={species} onChange={(e) => setSpecies(e.target.value)}>
          <option value="">Any Species</option>
          {speciesList.map((spc, index) => (
            <option value={spc} key={index}>
              {spc}
            </option>
          ))}
        </select>

        <button onClick={handleSearch}>Search</button>

        {isSearchApplied && (
          <button className="reset-button" onClick={handleReset}>
            Reset
          </button>
        )}
      </div>

      <div className="card-list">
        {characters.length > 0 ? (
          characters.map((char) => (
            <div className="card-wrapper" key={char.id}>
              <CharacterCard character={char} />
            </div>
          ))
        ) : (
          <p className="no-results">No characters found.</p>
        )}
      </div>

      <div className="pagination">
        <button
          disabled={page <= 1}
          onClick={() => {
            setPage(page - 1);
            setSearchTrigger(true);
          }}
        >
          Prev
        </button>
        <span>
          Page {page} of {maxPage}
        </span>
        <button
          disabled={page >= maxPage}
          onClick={() => {
            setPage(page + 1);
            setSearchTrigger(true);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
