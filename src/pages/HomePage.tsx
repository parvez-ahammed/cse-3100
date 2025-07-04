import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useCharacters } from '../hooks/useCharacters';
import CharacterCard from '../components/Characters/CharacterCard';
import SearchBar from '../components/Characters/SearchBar';
import FilterDropdown from '../components/Characters/FilterDropdown';
import Pagination from '../components/Characters/Pagination';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import ErrorMessage from '../components/UI/ErrorMessage';

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('name') || '');
  const [statusFilter, setStatusFilter] = useState(searchParams.get('status') || '');
  const [currentPage, setCurrentPage] = useState(parseInt(searchParams.get('page') || '1'));

  const { characters, loading, error, info } = useCharacters(
    currentPage,
    searchTerm,
    statusFilter
  );

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    if (searchTerm) params.set('name', searchTerm);
    if (statusFilter) params.set('status', statusFilter);
    if (currentPage > 1) params.set('page', currentPage.toString());
    
    setSearchParams(params);
  }, [searchTerm, statusFilter, currentPage, setSearchParams]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleStatusFilter = (status: string) => {
    setStatusFilter(status);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const statusOptions = [
    { value: 'alive', label: 'Alive' },
    { value: 'dead', label: 'Dead' },
    { value: 'unknown', label: 'Unknown' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Rick & Morty Character Explorer
        </h1>
        <p className="text-lg text-gray-600">
          Explore the multiverse and discover your favorite characters
        </p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SearchBar
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search characters by name..."
          />
          <FilterDropdown
            value={statusFilter}
            onChange={handleStatusFilter}
            options={statusOptions}
            placeholder="Filter by status"
          />
        </div>
      </div>

      {/* Results */}
      {loading && <LoadingSpinner />}
      
      {error && <ErrorMessage message={error} />}
      
      {!loading && !error && characters.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">No characters found matching your criteria.</p>
        </div>
      )}

      {!loading && !error && characters.length > 0 && (
        <>
          {/* Results count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Found {info?.count || 0} characters
            </p>
          </div>

          {/* Characters grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {characters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>

          {/* Pagination */}
          {info && info.pages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={info.pages}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}
    </div>
  );
};

export default HomePage;