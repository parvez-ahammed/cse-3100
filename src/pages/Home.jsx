import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [pageInfo, setPageInfo] = useState({}); // for next/prev page detection
  const [searchParams, setSearchParams] = useSearchParams();

  const nameQuery = searchParams.get("name") || "";
  const statusQuery = searchParams.get("status") || "";
  const pageQuery = parseInt(searchParams.get("page")) || 1;

  useEffect(() => {
    const fetchCharacters = async () => {
      let apiUrl = `https://rickandmortyapi.com/api/character/?page=${pageQuery}`;

      if (nameQuery) apiUrl += `&name=${nameQuery}`;
      if (statusQuery) apiUrl += `&status=${statusQuery}`;

      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        if (data.results) {
          setCharacters(data.results);
          setPageInfo(data.info);
        } else {
          setCharacters([]);
          setPageInfo({});
        }
      } catch (error) {
        setCharacters([]);
        setPageInfo({});
      }
    };

    fetchCharacters();
  }, [nameQuery, statusQuery, pageQuery]);

  const handleSearchChange = (e) => {
    searchParams.set("name", e.target.value);
    searchParams.set("page", 1); // Reset to page 1 on filter change
    setSearchParams(searchParams);
  };

  const handleStatusChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      searchParams.delete("status");
    } else {
      searchParams.set("status", value);
    }
    searchParams.set("page", 1); // Reset to page 1 on filter change
    setSearchParams(searchParams);
  };

  const goToPage = (newPage) => {
    if (newPage >= 1 && (!pageInfo.pages || newPage <= pageInfo.pages)) {
      searchParams.set("page", newPage);
      setSearchParams(searchParams);
    }
  };

  return (
    <main className='container my-4'>
      <h1 className='mb-4'>Rick & Morty Explorer</h1>

      {/* Filter Section */}
      <div className='row mb-3'>
        <div className='col-md-3 mb-2'>
          <select className='form-select' value={statusQuery} onChange={handleStatusChange}>
            <option value=''>Select status</option>
            <option value='alive'>Alive</option>
            <option value='dead'>Dead</option>
            <option value='unknown'>Unknown</option>
          </select>
        </div>
        <div className='col-md-5 mb-2'>
          <input
            type='text'
            placeholder='Search characters'
            className='form-control'
            value={nameQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {/* Characters Display */}
      {characters.length === 0 ? (
        <p>No characters found.</p>
      ) : (
        <div className='row'>
          {characters.map((char) => (
            <div className='col-md-4 mb-4' key={char.id}>
              <CharacterCard character={char} />
            </div>
          ))}
        </div>
      )}

      {/* Pagination Buttons */}
      <div className='d-flex justify-content-center my-4'>
        <button className='btn btn-secondary me-2' onClick={() => goToPage(pageQuery - 1)} disabled={pageQuery <= 1}>
          Previous
        </button>
        <span className='align-self-center px-3'>
          Page {pageQuery} {pageInfo.pages ? `of ${pageInfo.pages}` : ""}
        </span>
        <button
          className='btn btn-secondary ms-2'
          onClick={() => goToPage(pageQuery + 1)}
          disabled={!pageInfo.pages || pageQuery >= pageInfo.pages}>
          Next
        </button>
      </div>
    </main>
  );
}
