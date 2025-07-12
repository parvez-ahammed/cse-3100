import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get("name") || "";
  const status = searchParams.get("status") || "";
  const page = parseInt(searchParams.get("page") || "1", 10);

  // Initialize from localStorage if no query params
  const getInitialSearchInput = () => {
    if (name) return name;
    const saved = localStorage.getItem("searchInput");
    return saved ? saved : "";
  };

  const getInitialStatusFilter = () => {
    if (status) return status;
    const saved = localStorage.getItem("statusFilter");
    return saved ? saved : "";
  };

  const [searchInput, setSearchInput] = useState(getInitialSearchInput());
  const [statusFilter, setStatusFilter] = useState(getInitialStatusFilter());

  // Sync searchInput and statusFilter with URL params on change
  useEffect(() => {
    setSearchInput(name);
  }, [name]);

  useEffect(() => {
    setStatusFilter(status);
  }, [status]);

  useEffect(() => {
    const fetchCharacters = async () => {
      let url = `https://rickandmortyapi.com/api/character/?page=${page}`;
      if (name) url += `&name=${name}`;
      if (status) url += `&status=${status}`;

      const res = await fetch(url);
      const data = await res.json();
      setCharacters(data.results || []);
      setInfo(data.info || {});
    };

    fetchCharacters();
  }, [name, status, page]);

  // Persist searchInput and statusFilter to localStorage
  useEffect(() => {
    localStorage.setItem("searchInput", searchInput);
  }, [searchInput]);

  useEffect(() => {
    localStorage.setItem("statusFilter", statusFilter);
  }, [statusFilter]);

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value);
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    console.log("Filter submit with searchInput:", searchInput, "statusFilter:", statusFilter);
    const params = {};
    if (searchInput) params.name = searchInput;
    if (statusFilter) params.status = statusFilter;
    params.page = 1; // reset to first page on filter change
    setSearchParams(params);
  };

  const goToPage = (newPage) => {
    console.log("Go to page:", newPage);
    const params = {};
    if (name) params.name = name;
    if (status) params.status = status;
    params.page = newPage;
    setSearchParams(params);
  };

  return (
    <main className="container">
      <h1 className="my-4">Rick & Morty Explorer</h1>

      <form className="mb-4" onSubmit={handleFilterSubmit}>
        <input
          type="text"
          placeholder="Search by name"
          value={searchInput}
          onChange={handleSearchChange}
          className="form-control mb-2"
        />
        <select
          value={statusFilter}
          onChange={handleStatusChange}
          className="form-select mb-2"
        >
          <option value="">All Statuses</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        <button type="submit" className="btn btn-primary">
          Filter
        </button>
      </form>

      <div className="grid-container">
        {characters.length > 0 ? (
          characters.map((char) => (
            <div className="grid-item" key={char.id}>
              <CharacterCard character={char} />
            </div>
          ))
        ) : (
          <p>No characters found.</p>
        )}
      </div>

      <div className="d-flex justify-content-between my-4">
        <button
          className="btn btn-secondary"
          onClick={() => goToPage(page - 1)}
          disabled={!info.prev}
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button
          className="btn btn-secondary"
          onClick={() => goToPage(page + 1)}
          disabled={!info.next}
        >
          Next
        </button>
      </div>
    </main>
  );
}
