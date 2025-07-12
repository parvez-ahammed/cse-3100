import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import SearchAndFilters from "../components/SearchAndFilters";
import Pagination from "../components/Pagination";
import { useQueryParams } from "../hooks/useQueryParams";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { searchParams } = useQueryParams();

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      setError(null);

      try {
        const page = searchParams.get('page') || '1';
        const name = searchParams.get('name') || '';
        const status = searchParams.get('status') || '';

        // Build query string
        const queryParams = new URLSearchParams();
        queryParams.append('page', page);
        if (name) queryParams.append('name', name);
        if (status) queryParams.append('status', status);

        const response = await fetch(`https://rickandmortyapi.com/api/character?${queryParams}`);

        if (!response.ok) {
          throw new Error('No characters found');
        }

        const data = await response.json();
        setCharacters(data.results);
        setInfo(data.info);
      } catch (err) {
        setError(err.message);
        setCharacters([]);
        setInfo(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [searchParams]);

  return (
    <main className="container-fluid px-4">
      <div className="row justify-content-center">
        <div className="col-xl-10">
          <div className="text-center my-5">
            <h1 className="display-4 fw-bold text-primary">
              <i className="fas fa-rocket me-3"></i>
              Rick & Morty Explorer
            </h1>
            <p className="lead text-muted">
              Explore characters from the Rick and Morty universe
            </p>
          </div>

          <SearchAndFilters />

          {loading && (
            <div className="text-center my-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-2">Loading characters...</p>
            </div>
          )}

          {error && (
            <div className="alert alert-warning text-center" role="alert">
              <i className="fas fa-exclamation-triangle me-2"></i>
              {error}
            </div>
          )}

          {!loading && !error && characters.length === 0 && (
            <div className="text-center my-5">
              <i className="fas fa-search fa-3x text-muted mb-3"></i>
              <h3>No characters found</h3>
              <p className="text-muted">Try adjusting your search or filters</p>
            </div>
          )}

          {!loading && !error && characters.length > 0 && (
            <>
              <div className="mb-3">
                <small className="text-muted">
                  Showing {characters.length} characters
                  {info && ` (${info.count} total)`}
                </small>
              </div>

              <div className="row">
                {characters.map((char) => (
                  <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={char.id}>
                    <CharacterCard character={char} />
                  </div>
                ))}
              </div>

              <Pagination info={info} />
            </>
          )}
        </div>
      </div>
    </main>
  );
}
