import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const urlPage = parseInt(searchParams.get("page")) || 1;
  const [visiblePage, setVisiblePage] = useState(urlPage);

  const name = searchParams.get("name") || "";
  const status = searchParams.get("status") || "";

  const apiPage = Math.ceil(visiblePage / 2);
  const isFirstHalf = visiblePage % 2 !== 0;

  useEffect(() => {
    const url = new URL("https://rickandmortyapi.com/api/character");
    if (name) url.searchParams.append("name", name);
    if (status) url.searchParams.append("status", status);
    url.searchParams.append("page", apiPage);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.results) {
          setCharacters(data.results);
          setInfo(data.info);
        } else {
          setCharacters([]);
          setInfo(null);
        }
      });
  }, [apiPage, name, status]);

  useEffect(() => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      params.set("page", visiblePage);
      return params;
    });
  }, [visiblePage, setSearchParams]);

  const updateSearchParams = (key, value) => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      params.set("page", "1");
      return params;
    });
    setVisiblePage(1);
  };

  const handleSearchChange = (e) => updateSearchParams("name", e.target.value);
  const handleStatusChange = (e) =>
    updateSearchParams("status", e.target.value);

  const handleNext = () => {
    const totalPages = info ? Math.ceil(info.count / 10) : 1;
    if (visiblePage < totalPages) {
      setVisiblePage((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (visiblePage > 1) {
      setVisiblePage((prev) => prev - 1);
    }
  };

  const displayedCharacters = characters.slice(
    isFirstHalf ? 0 : 10,
    isFirstHalf ? 10 : 20
  );

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

      {displayedCharacters.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedCharacters.map((character) => (
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

          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={handlePrevious}
              disabled={visiblePage === 1}
              className={`px-4 py-2 rounded-md ${
                visiblePage === 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={!info || visiblePage >= Math.ceil(info.count / 10)}
              className={`px-4 py-2 rounded-md ${
                !info || visiblePage >= Math.ceil(info.count / 10)
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500">No characters found.</p>
      )}
    </div>
  );
}

export default Home;
