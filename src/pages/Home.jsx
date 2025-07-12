import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import "./Home.css"; // Custom CSS for grid layout


export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const charactersPerPage = 10;

  const descriptions = {
    1: "Rick is a genius scientist with reckless behavior.",
    2: "Morty is Rick's anxious but kind-hearted grandson.",
    3: "Summer is confident, sarcastic, and independent.",
    4: "Beth is a successful horse surgeon and Rick's daughter.",
    5: "Jerry is insecure, naive, and often clueless.",
  };

  useEffect(() => {
    const fetchCharacters = async () => {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();

      const updatedCharacters = data.results.map((char) => ({
        ...char,
        description: descriptions[char.id] || "No description available.",
      }));

      setCharacters(updatedCharacters);
    };

    fetchCharacters();
  }, []);

  const filteredCharacters = characters.filter((char) => {
    const matchesStatus = statusFilter ? char.status === statusFilter : true;
    const matchesName = char.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    return matchesStatus && matchesName;
  });

  const totalPages = Math.ceil(filteredCharacters.length / charactersPerPage);
  const startIndex = (currentPage - 1) * charactersPerPage;
  const currentCharacters = filteredCharacters.slice(
    startIndex,
    startIndex + charactersPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [statusFilter, searchText]);

  return (
    <main className="container">
      <h1 className="my-4">Rick & Morty Explorer</h1>

      {/* 🔍 Filters */}
      <div className="row mb-4">
        <div className="col-md-6 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="col-md-6 mb-2">
          <select
            className="form-control"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">All Statuses</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
      </div>

      {/* 🧾 Character Cards in 5-column grid */}
      <div className="character-grid">
        {currentCharacters.length > 0 ? (
          currentCharacters.map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))
        ) : (
          <p>No characters found.</p>
        )}
      </div>

      {/* ⏪ Pagination Controls */}
      <div className="d-flex justify-content-center my-4">
        <button
          className="btn btn-secondary mx-2"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Previous
        </button>
        <span className="align-self-center">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="btn btn-secondary mx-2"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </main>
  );
}
