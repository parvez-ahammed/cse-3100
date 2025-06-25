import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";

// Helper component for the numbered pagination (this remains mostly the same)
const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = [];
  const createPagination = () => {
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);
    } else {
      pageNumbers.push(1);
      if (currentPage > 4) pageNumbers.push('...');
      for (let i = Math.max(2, currentPage - 2); i <= Math.min(totalPages - 1, currentPage + 2); i++) {
        pageNumbers.push(i);
      }
      if (currentPage < totalPages - 3) pageNumbers.push('...');
      pageNumbers.push(totalPages);
    }
  };
  createPagination();

  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => onPageChange(currentPage - 1)}>«</button>
        </li>
        {pageNumbers.map((num, index) => (
          <li key={index} className={`page-item ${num === currentPage ? 'active' : ''} ${num === '...' ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => onPageChange(num)}>{num}</button>
          </li>
        ))}
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button className="page-link" onClick={() => onPageChange(currentPage + 1)}>»</button>
        </li>
      </ul>
    </nav>
  );
};

export default function Home() { 
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1); //DISPLAY page number (1, 2, 3...)

  useEffect(() => {
    // When filters change, always reset to the first display page
    setCurrentPage(1); 
  }, [searchTerm, statusFilter]);

  useEffect(() => { 
    // api fetches 20items/page and amader requirement holo- display 10 items/page
    // API page 1 covers display pages 1 & 2. API page 2 covers 3 & 4, etc.
    const apiPage = Math.ceil(currentPage / 2);

    const params = new URLSearchParams({
      page: apiPage,
      name: searchTerm,
      status: statusFilter,
    });
    
    const API_URL = `https://rickandmortyapi.com/api/character/?${params.toString()}`;
    
    const fetchCharacters = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) {
          setCharacters([]);
          setInfo({});
          return;
        }
        const data = await res.json();
        setCharacters(data.results || []);
        setInfo(data.info || {});
      } catch (error) {
        console.error("Failed to fetch characters:", error);
        setCharacters([]);
        setInfo({});
      }
    };

    fetchCharacters();
  }, [currentPage, searchTerm, statusFilter]);

  const handlePageChange = (pageNumber) => {
    if (typeof pageNumber === 'number') {
      setCurrentPage(pageNumber);
    }
  };
  
  //for slicing(jehetu api 20 and amader lagbe 10)
  // Determine if we should show the first half (0-9) or second half (10-19)
  const isSecondHalf = currentPage % 2 === 0;
  const charactersToShow = isSecondHalf ? characters.slice(10, 20) : characters.slice(0, 10);
  
  // Calculate the total number of display pages (10 items per page)
  const totalPages = info.count ? Math.ceil(info.count / 10) : 0;

  return (
    <main className="container my-4">
      <div className="row justify-content-center mb-4">
        <div className="col-md-8">
            <h1 className="text-center">Rick & Morty Characters</h1>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-4 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-4 mb-2">
          <select
            className="form-select"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">Select status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
      </div>
      
     {/* Results Count */}
<div className="text-muted mb-4">
  {info.count ? `Showing ${charactersToShow.length} of ${info.count} results` : "No results found"}
</div>

      {/* Character Grid */}
      <div className="row">
        {charactersToShow.length > 0 ? (
          charactersToShow.map((char) => (
            // This column setup will result in 4 items per row on large screens
            <div className="col-custom-5 col-md-4 col-6 mb-4" key={char.id}>
            <CharacterCard character={char} />
          </div>
          ))
        ) : ( 
          <div className="col-12 text-center">
            <p>No characters match the current filters.</p>
          </div>
        )}
      </div>

      {/* Numbered Pagination Component */}
      {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )} 
    </main>
  );  
}  