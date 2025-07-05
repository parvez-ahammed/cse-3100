import React, { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import SearchAndFilter from "../components/SearchAndFilter";
import Pagination from "../components/Pagination";
import { useQueryParams } from "../hooks/useQueryParams";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  const { getQueryParam, setQueryParams } = useQueryParams();

  const searchTerm = getQueryParam("name");
  const statusFilter = getQueryParam("status");
  const currentPage = parseInt(getQueryParam("page")) || 1;

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      setError(null);

      try {
        const params = new URLSearchParams({
          page: currentPage.toString(),
          ...(searchTerm && { name: searchTerm }),
          ...(statusFilter && { status: statusFilter }),
        });

        const response = await fetch(
          `https://rickandmortyapi.com/api/character?${params}`
        );

        if (!response.ok) {
          throw new Error("No characters found");
        }

        const data = await response.json();
        setCharacters(data.results);
        setTotalPages(data.info.pages);
      } catch (err) {
        setError(err.message);
        setCharacters([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [currentPage, searchTerm, statusFilter]);

  const handleSearchChange = (value) => {
    setQueryParams({ name: value, status: statusFilter, page: "1" });
  };

  const handleStatusChange = (value) => {
    setQueryParams({ name: searchTerm, status: value, page: "1" });
  };

  const handlePageChange = (page) => {
    setQueryParams({
      name: searchTerm,
      status: statusFilter,
      page: page.toString(),
    });
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading characters...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Rick & Morty Explorer
      </h1>

      <SearchAndFilter
        searchTerm={searchTerm}
        statusFilter={statusFilter}
        onSearchChange={handleSearchChange}
        onStatusChange={handleStatusChange}
      />

      {error ? (
        <div className="text-center py-8">
          <p className="text-red-600 text-lg">{error}</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {characters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default Home;