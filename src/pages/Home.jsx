import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get("name") || "";
  const status = searchParams.get("status") || "";

  useEffect(() => {
    const url = new URL("https://rickandmortyapi.com/api/character");
    if (name) url.searchParams.append("name", name);
    if (status) url.searchParams.append("status", status);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.results) {
          setCharacters(data.results);
        } else {
          setCharacters([]); 
        }
      });
  }, [name, status]);

  const handleSearchChange = (e) => {
    const newName = e.target.value;
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set("name", newName);
      return params;
    });
  };

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      if (newStatus) {
        params.set("status", newStatus);
      } else {
        params.delete("status");
      }
      return params;
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Rick and Morty Characters
      </h1>

      <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
        <input
          type="text"
          placeholder="Search by name"
          value={name}
          onChange={handleSearchChange}
          className="border border-gray-300 rounded-md p-2 w-full sm:w-64"
        />
        <select
          value={status}
          onChange={handleStatusChange}
          className="border border-gray-300 rounded-md p-2 w-full sm:w-48"
        >
          <option value="">All Statuses</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      {characters.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {characters.map((character) => (
            <Link
              to={`/character/${character.id}`}
              key={character.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={character.image}
                alt={character.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{character.name}</h2>
                <p className="text-sm text-gray-600">
                  {character.species} - {character.status}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No characters found.</p>
      )}
    </div>
  );
}

export default Home;
