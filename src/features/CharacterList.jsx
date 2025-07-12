import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import CharacterCard from '../components/CharacterCard';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';
import './CharacterList.css';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get('name') || '';
  const status = searchParams.get('status') || '';
  const page = parseInt(searchParams.get('page')) || 1;

  // Track sub-page for 10-per-page split from 20-per-page API
  const [subPage, setSubPage] = useState(1); // 1 or 2

  useEffect(() => {
    const url = new URL('https://rickandmortyapi.com/api/character');
    url.searchParams.set('page', page);
    if (name) url.searchParams.set('name', name);
    if (status) url.searchParams.set('status', status);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results || []);
        setInfo(data.info || {});
        setSubPage(1); // reset to first half when API page changes
      })
      .catch(() => {
        setCharacters([]);
        setInfo({});
      });
  }, [name, status, page]);

  const handlePageChange = (next) => {
    if (subPage === 1 && next) {
      setSubPage(2);
    } else if (subPage === 2 && next) {
      setSearchParams({ name, status, page: page + 1 });
    } else if (subPage === 2 && !next) {
      setSubPage(1);
    } else if (subPage === 1 && !next && page > 1) {
      setSearchParams({ name, status, page: page - 1 });
      setSubPage(2); // go to second half of previous API page
    }
  };

  // Show 10 at a time
  const visibleCharacters =
    subPage === 1 ? characters.slice(0, 10) : characters.slice(10, 20);

  return (
    <div className="character-list-container">
      <h1 className="heading">Character List</h1>

     
      <div className="search-filter-wrapper">
      <SearchBar name={name} setSearchParams={setSearchParams} status={status} />
      <FilterDropdown status={status} setSearchParams={setSearchParams} name={name} />
      </div>

      <div className="character-grid">
        {visibleCharacters.map((char, index) => (
          <div className="character-block" key={char.id}>
            <CharacterCard character={char} />
            {/* Remove duplicate info, or optionally just one line */}
            {/* <div className="character-details">
              <p><strong>#{(page - 1) * 20 + (subPage - 1) * 10 + index + 1}</strong> - {char.name}</p>
              <p>Status: {char.status}</p>
              <p>Species: {char.species}</p>
            </div> */}
          </div>
        ))}
      </div>

      <div className="pagination-buttons">
        <button
          onClick={() => handlePageChange(false)}
          disabled={page === 1 && subPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(true)}
          disabled={
            (subPage === 2 && !info.next) || characters.length < 11
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}
