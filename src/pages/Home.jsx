import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        const data = await res.json();
        setCharacters(data.results);
        setTotalPages(data.info.pages);
      } catch (error) {
        console.error("Error fetching characters:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [page]);

  return (
    <main>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="container">
          <div className="hero-content text-center">
            <h1 className="hero-headline">RICK & MORTY EXPLORER</h1>
            <p className="hero-subtitle">Discover characters from the multiverse</p><br></br>
            <button 
              className="btn btn-primary btn-lg mt-3"
              onClick={() => document.querySelector('.character-gallery').scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Characters
            </button>
          </div>
        </div>
      </div>
      
      {/* Character Grid */}
      <div className="container py-5 character-gallery">
        <h1 className="text-center mb-4">CHARACTER GALLERY</h1>
        
        
        {loading ? (
          <div className="text-center my-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-2">Loading characters...</p>
          </div>
        ) : (
          <>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {characters.map((char) => (
                <div className="col mb-4" key={char.id}>
                  <CharacterCard character={char} />
                </div>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="d-flex justify-content-between align-items-center mt-5">
              <button 
                className="btn btn-outline-primary"
                disabled={page === 1}
                onClick={() => setPage(prev => Math.max(1, prev - 1))}
              >
                Previous
              </button>
              <span className="text-muted">Page {page} of {totalPages}</span>
              <button 
                className="btn btn-outline-primary"
                disabled={page === totalPages}
                onClick={() => setPage(prev => Math.min(totalPages, prev + 1))}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}