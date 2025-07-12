import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [displayedCharacters, setDisplayedCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    status: { alive: 0, dead: 0, unknown: 0 },
    species: { human: 0, alien: 0, other: 0 }
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [humansPerPage] = useState(10); 

  useEffect(() => {
    fetchAllCharacters();
  }, []);

  const fetchAllCharacters = async (name = "") => {
    setLoading(true);
    try {
      let allCharacters = [];
      let url = name 
        ? `https://rickandmortyapi.com/api/character/?name=${name}` 
        : "https://rickandmortyapi.com/api/character";
      
      // Fetch all pages
      while (url) {
        const res = await fetch(url);
        const data = await res.json();
        allCharacters = [...allCharacters, ...(data.results || [])];
        url = data.info?.next; 
      }

      setCharacters(allCharacters);
      
      if (!name) {
        const allHumans = allCharacters.filter(char => 
          char.species.toLowerCase() === 'human'
        );
        const paginatedHumans = paginateHumans(allHumans, currentPage);
        setDisplayedCharacters(paginatedHumans);
      } else {
        setDisplayedCharacters(allCharacters);
      }
      
      calculateStats(allCharacters);
    } catch (error) {
      setCharacters([]);
      setDisplayedCharacters([]);
      setStats({
        status: { alive: 0, dead: 0, unknown: 0 },
        species: { human: 0, alien: 0, other: 0 }
      });
    } finally {
      setLoading(false);
    }
  };

  const paginateHumans = (allHumans, page) => {
    const startIndex = (page - 1) * humansPerPage;
    return allHumans.slice(startIndex, startIndex + humansPerPage);
  };

  const calculateStats = (chars) => {
    const statusCount = { alive: 0, dead: 0, unknown: 0 };
    const speciesCount = { human: 0, alien: 0, other: 0 };

    chars.forEach(char => {
      if (char.status?.toLowerCase() === 'alive') statusCount.alive++;
      else if (char.status?.toLowerCase() === 'dead') statusCount.dead++;
      else statusCount.unknown++;

      if (char.species?.toLowerCase() === 'human') speciesCount.human++;
      else if (char.species?.toLowerCase() === 'alien') speciesCount.alien++;
      else speciesCount.other++;
    });

    setStats({
      status: statusCount,
      species: speciesCount
    });
  };

  const handleSearch = (searchTerm) => {
    setCurrentPage(1);
    if (searchTerm === "") {
      const allHumans = characters.filter(char => 
        char.species?.toLowerCase() === 'human'
      );
      const paginatedHumans = paginateHumans(allHumans, 1);
      setDisplayedCharacters(paginatedHumans);
    } else {
      fetchAllCharacters(searchTerm);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const allHumans = characters.filter(char => 
      char.species?.toLowerCase() === 'human'
    );
    const paginatedHumans = paginateHumans(allHumans, page);
    setDisplayedCharacters(paginatedHumans);
  };

  const calculatePercentage = (count, total) => {
    return total > 0 ? Math.round((count / total) * 100) : 0;
  };

  const totalCharacters = characters.length;
  const allHumans = characters.filter(char => char.species?.toLowerCase() === 'human');
  const totalHumanPages = Math.ceil(allHumans.length / humansPerPage);

  return (
    <main className="container">
      <div className="hero-section py-5 my-4">
        <h1 className="display-4 fw-bold">Rick & Morty Explorer</h1>
        <p className="lead text-muted">Discover characters from the multiverse</p>
      </div>

      <SearchBar onSearch={handleSearch} />

      {/* Stats Section */}
      {!loading && totalCharacters > 0 && (
        <div className="row mb-5">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Character Status (All)</h5>
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span>Alive: {stats.status.alive}</span>
                    <span>{calculatePercentage(stats.status.alive, totalCharacters)}%</span>
                  </div>
                  <div className="progress" style={{ height: '20px' }}>
                    <div 
                      className="progress-bar bg-success" 
                      role="progressbar" 
                      aria-label="Alive characters progress"
                      style={{ width: `${calculatePercentage(stats.status.alive, totalCharacters)}%` }}
                    ></div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span>Dead: {stats.status.dead}</span>
                    <span>{calculatePercentage(stats.status.dead, totalCharacters)}%</span>
                  </div>
                  <div className="progress" style={{ height: '20px' }}>
                    <div 
                      className="progress-bar bg-danger" 
                      role="progressbar" 
                      aria-label="Dead characters progress"
                      style={{ width: `${calculatePercentage(stats.status.dead, totalCharacters)}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="d-flex justify-content-between mb-1">
                    <span>Unknown: {stats.status.unknown}</span>
                    <span>{calculatePercentage(stats.status.unknown, totalCharacters)}%</span>
                  </div>
                  <div className="progress" style={{ height: '20px' }}>
                    <div 
                      className="progress-bar bg-secondary" 
                      role="progressbar" 
                      aria-label="Unknown status characters progress"
                      style={{ width: `${calculatePercentage(stats.status.unknown, totalCharacters)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Character Species (All)</h5>
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span>Human: {stats.species.human}</span>
                    <span>{calculatePercentage(stats.species.human, totalCharacters)}%</span>
                  </div>
                  <div className="progress" style={{ height: '20px' }}>
                    <div 
                      className="progress-bar bg-primary" 
                      role="progressbar" 
                      aria-label="Human species progress"
                      style={{ width: `${calculatePercentage(stats.species.human, totalCharacters)}%` }}
                    ></div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span>Alien: {stats.species.alien}</span>
                    <span>{calculatePercentage(stats.species.alien, totalCharacters)}%</span>
                  </div>
                  <div className="progress" style={{ height: '20px' }}>
                    <div 
                      className="progress-bar bg-warning" 
                      role="progressbar" 
                      aria-label="Alien species progress"
                      style={{ width: `${calculatePercentage(stats.species.alien, totalCharacters)}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="d-flex justify-content-between mb-1">
                    <span>Other: {stats.species.other}</span>
                    <span>{calculatePercentage(stats.species.other, totalCharacters)}%</span>
                  </div>
                  <div className="progress" style={{ height: '20px' }}>
                    <div 
                      className="progress-bar bg-info" 
                      role="progressbar" 
                      aria-label="Other species progress"
                      style={{ width: `${calculatePercentage(stats.species.other, totalCharacters)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {loading ? (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : displayedCharacters.length === 0 ? (
        <div className="alert alert-warning">No characters found</div>
      ) : (
        <>
          <div className="row">
            <div className="col-12 mb-3">
              <h4>
                {displayedCharacters.length === characters.length 
                  ? "All Characters" 
                  : `Featured Human Characters (Page ${currentPage} of ${totalHumanPages})`}
              </h4>
            </div>
            {displayedCharacters.map((char) => (
              <CharacterCard key={char.id} character={char} />
            ))}
          </div>
          
          {/* Pagination controls */}
          {displayedCharacters.length !== characters.length && totalHumanPages > 1 && (
            <nav aria-label="Page navigation" className="mt-4">
              <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button 
                    className="page-link" 
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                </li>
                
                {Array.from({ length: Math.min(5, totalHumanPages) }, (_, i) => {
                  let pageNum;
                  if (totalHumanPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalHumanPages - 2) {
                    pageNum = totalHumanPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  return (
                    <li key={pageNum} className={`page-item ${currentPage === pageNum ? 'active' : ''}`}>
                      <button 
                        className="page-link" 
                        onClick={() => handlePageChange(pageNum)}
                      >
                        {pageNum}
                      </button>
                    </li>
                  );
                })}
                
                <li className={`page-item ${currentPage === totalHumanPages ? 'disabled' : ''}`}>
                  <button 
                    className="page-link" 
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalHumanPages}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </>
      )}
    </main>
  );
}