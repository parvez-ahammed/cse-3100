import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const name = searchParams.get("name") || "";
  const status = searchParams.get("status") || "";
  const page = parseInt(searchParams.get("page") || 1);

  /*this bit grabs character data from the API based on what’s in the search bar and filters*/
  const fetchCharacters = async () => {
    let url = `https://rickandmortyapi.com/api/character/?page=${page}`;
    if (name) url += `&name=${name}`;
    if (status) url += `&status=${status}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setCharacters(data.results || []);
      setInfo(data.info || {});
    } catch {
      setCharacters([]);
      setInfo({});
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, [searchParams]);
 
  /*Changes the URL search stuff whenever you type or change filters, so the page updates*/
  const updateParams = (newParams) => {
    setSearchParams((prev) => {
      const updated = new URLSearchParams(prev);
      Object.entries(newParams).forEach(([key, value]) => {
        if (value) updated.set(key, value);
        else updated.delete(key);
      });
      return updated;
    });
  };
 
  /*this part draws the main stuff on screen — search boxes, character cards, and next/prev buttons*/
  return (
    <main className="container">
      <h1 className="my-4">Rick & Morty Explorer</h1>
      
      <div className="row mb-3">
        <div className="col-md-6">
          <input
            className="form-control"
            placeholder="Search by name"
            value={name}
            onChange={(e) => updateParams({ name: e.target.value, page: 1 })}
          />
        </div>
        <div className="col-md-6">
          <select
            className="form-control search-input"
            value={status}
            onChange={(e) => updateParams({ status: e.target.value, page: 1 })}
          >
            <option value="">All Status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
      </div>

      <div className="character-list">
        {characters.length > 0 ? (
          characters.slice(0, 10).map((char) => (
            <div className="character-item" key={char.id}>
              <CharacterCard character={char} />
            </div>
          ))
        ) : (
          <p>No characters found.</p>
        )}
      </div>

      <div className="d-flex justify-content-between my-4">
        <button
          className={`btn btn-secondary btn-clickable ${page <= 1 ? "btn-disabled" : ""}`}
          disabled={page <= 1}
          onClick={() => updateParams({ page: page - 1 })}
        >
          Previous
        </button>
        <button
          className={`btn btn-secondary btn-clickable ${!info.next ? "btn-disabled" : ""}`}
          disabled={!info.next}
          onClick={() => updateParams({ page: page + 1 })}
        >
          Next
        </button>
      </div>
    </main>
  );
}
