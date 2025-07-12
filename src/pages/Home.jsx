import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const nameFilter = searchParams.get("name") || "";
  const statusFilter = searchParams.get("status") || "";

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        let query = "";
        if (nameFilter) query += `&name=${nameFilter}`;
        if (statusFilter) query += `&status=${statusFilter}`;

        const res = await fetch(
          `https://rickandmortyapi.com/api/character?${query}`
        );
        const data = await res.json();
        setCharacters(data.results || []);
        // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setCharacters([]); // handle error or empty results
      }
    };

    fetchCharacters();
  }, [nameFilter, statusFilter]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      if (value) params.set("name", value);
      else params.delete("name");
      return params;
    });
  };

  const handleStatusChange = (e) => {
    const value = e.target.value;
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      if (value) params.set("status", value);
      else params.delete("status");
      return params;
    });
  };

  return (
    <main className="container">
      <h1 className="my-4">Rick & Morty Explorer</h1>

      <div className="row mb-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name..."
            value={nameFilter}
            onChange={handleSearchChange}
          />
        </div>
        <div className="col-md-6">
          <select
            className="form-control"
            value={statusFilter}
            onChange={handleStatusChange}
          >
            <option value="">All Statuses</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
      </div>

      <div className="row">
        {characters.length > 0 ? (
          characters.map((char) => (
            <div className="col-md-4 mb-4" key={char.id}>
              <CharacterCard character={char} />
            </div>
          ))
        ) : (
          <p>No characters found.</p>
        )}
      </div>
    </main>
  );
}
