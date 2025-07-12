import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";
import SearchBar from "../components/SearchBar";
import FilterDropdown from "../components/FilterDropdown";
import PaginationControls from "../components/PaginationControls";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const ITEMS_PER_LOCAL_PAGE = 10;

const Home = () => {
  const [characters, setCharacters] = useState([]); // characters from API (20 per page)
  const [filteredCharacters, setFilteredCharacters] = useState([]); // after filtering (if any)
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Read filters and globalPage from URL
  const name = searchParams.get("name") || "";
  const status = searchParams.get("status") || "";
  const globalPage = parseInt(searchParams.get("page") || "1", 10);

  // localPage controls which half of API data to show (1 or 2)
  const [localPage, setLocalPage] = useState(1);

  // Fetch characters from API when globalPage, name or status change
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const res = await axios.get("https://rickandmortyapi.com/api/character", {
          params: { page: globalPage, name, status },
        });
        setCharacters(res.data.results || []);
        setFilteredCharacters(res.data.results || []);
        setLocalPage(1); // reset localPage on new fetch
      } catch (err) {
        console.error("Failed to fetch characters:", err);
        setCharacters([]);
        setFilteredCharacters([]);
      }
    };
    fetchCharacters();
  }, [globalPage, name, status]);

  // Since filtering is done server side, filteredCharacters = characters (from API)
  // But if you want extra filtering on client side (optional), do it here.

  // Calculate start index for localPage (1 or 2)
  const startIndex = (localPage - 1) * ITEMS_PER_LOCAL_PAGE;
  const visibleCharacters = filteredCharacters.slice(startIndex, startIndex + ITEMS_PER_LOCAL_PAGE);

  // Handler for SearchBar and FilterDropdown to update URL params & reset to page 1
  const updateFilters = (newFilters) => {
    const updatedParams = {
      name,
      status,
      page: globalPage,
      ...newFilters,
    };

    if (newFilters.name !== undefined || newFilters.status !== undefined) {
      updatedParams.page = 1; // reset global page on filter change
    }

    // Remove empty filters
    Object.keys(updatedParams).forEach((key) => {
      if (!updatedParams[key]) delete updatedParams[key];
    });

    setSearchParams(updatedParams);
  };

  return (
    <div className="container mt-5">
      {/* Fixed Top Right Buttons */}
      <div style={{ position: "fixed", top: "10px", right: "10px", zIndex: 1000 }}>
        <button className="btn btn-outline-primary me-2" onClick={() => navigate("/about")}>
          About Us
        </button>
        <button className="btn btn-outline-secondary" onClick={() => navigate("/contact")}>
          Contact
        </button>
      </div>

      {/* Center Title */}
      <h1 className="text-center mb-4">Rick & Morty Explorer</h1>

      {/* Filters */}
      <div className="row mb-3">
        <div className="col-md-6">
          <SearchBar value={name} onChange={(val) => updateFilters({ name: val })} />
        </div>
        <div className="col-md-6">
          <FilterDropdown value={status} onChange={(val) => updateFilters({ status: val })} />
        </div>
      </div>

      {/* Character Grid 3 per row */}
      <div className="row">
        {visibleCharacters.length ? (
          visibleCharacters.map((character) => (
            <div key={character.id} className="col-md-4 mb-4">
              <CharacterCard character={character} />
            </div>
          ))
        ) : (
          <p>No characters found.</p>
        )}
      </div>

      {/* Pagination Controls */}
      <PaginationControls
        info={{ next: characters.length === 20 ? true : false }} // crude check if next exists
        globalPage={globalPage}
        localPage={localPage}
        setSearchParams={setSearchParams}
        setLocalPage={setLocalPage}
      />
    </div>
  );
};

export default Home;
