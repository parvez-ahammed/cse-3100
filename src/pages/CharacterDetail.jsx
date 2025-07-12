import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CharacterDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacterAndEpisodes = async () => {
      setLoading(true);
      setError(null);

      try {
        // Fetch character details
        const characterResponse = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        if (!characterResponse.ok) {
          throw new Error('Character not found');
        }
        const characterData = await characterResponse.json();
        setCharacter(characterData);

        // Fetch episode details for bonus feature
        if (characterData.episode && characterData.episode.length > 0) {
          const episodePromises = characterData.episode.slice(0, 5).map(url =>
            fetch(url).then(res => res.json())
          );
          const episodeData = await Promise.all(episodePromises);
          setEpisodes(episodeData);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacterAndEpisodes();
  }, [id]);

  if (loading) {
    return (
      <div className="container my-5">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Loading character details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container my-5">
        <div className="alert alert-danger text-center">
          <i className="fas fa-exclamation-triangle me-2"></i>
          {error}
        </div>
        <div className="text-center">
          <Link to="/" className="btn btn-primary">
            <i className="fas fa-arrow-left me-1"></i>
            Back to Characters
          </Link>
        </div>
      </div>
    );
  }

  if (!character) return null;

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'alive': return 'success';
      case 'dead': return 'danger';
      default: return 'secondary';
    }
  };

  return (
    <div className="container my-4">
      <div className="row mb-4">
        <div className="col">
          <button
            onClick={() => navigate(-1)}
            className="btn btn-outline-secondary me-2"
          >
            <i className="fas fa-arrow-left me-1"></i>
            Back
          </button>
          <Link to="/" className="btn btn-outline-primary">
            <i className="fas fa-home me-1"></i>
            Home
          </Link>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4 mb-4">
          <div className="card shadow">
            <img
              src={character.image}
              alt={character.name}
              className="card-img-top"
              style={{ height: '400px', objectFit: 'cover' }}
            />
          </div>
        </div>

        <div className="col-lg-8">
          <div className="card shadow h-100">
            <div className="card-body">
              <h1 className="card-title display-5 mb-3">{character.name}</h1>

              <div className="row g-3">
                <div className="col-md-6">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fas fa-heartbeat text-danger me-2"></i>
                    <strong>Status:</strong>
                    <span className={`badge bg-${getStatusColor(character.status)} ms-2`}>
                      {character.status}
                    </span>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fas fa-dna text-info me-2"></i>
                    <strong>Species:</strong>
                    <span className="ms-2">{character.species}</span>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fas fa-venus-mars text-warning me-2"></i>
                    <strong>Gender:</strong>
                    <span className="ms-2">{character.gender}</span>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fas fa-globe text-success me-2"></i>
                    <strong>Origin:</strong>
                    <span className="ms-2">{character.origin?.name || 'Unknown'}</span>
                  </div>
                </div>

                <div className="col-12">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fas fa-map-marker-alt text-primary me-2"></i>
                    <strong>Last known location:</strong>
                    <span className="ms-2">{character.location?.name || 'Unknown'}</span>
                  </div>
                </div>

                <div className="col-12">
                  <div className="d-flex align-items-center mb-3">
                    <i className="fas fa-tv text-purple me-2"></i>
                    <strong>Episodes appeared in:</strong>
                    <span className="badge bg-info ms-2">{character.episode?.length || 0}</span>
                  </div>
                </div>
              </div>

              {character.type && (
                <div className="mt-3">
                  <strong>Type:</strong> {character.type}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {episodes.length > 0 && (
        <div className="row mt-4">
          <div className="col-12">
            <div className="card shadow">
              <div className="card-header">
                <h5 className="mb-0">
                  <i className="fas fa-list me-2"></i>
                  Recent Episodes (First 5)
                </h5>
              </div>
              <div className="card-body">
                <div className="row">
                  {episodes.map((episode, index) => (
                    <div key={episode.id} className="col-lg-6 mb-3">
                      <div className="border rounded p-3 h-100">
                        <h6 className="text-primary">{episode.name}</h6>
                        <small className="text-muted">
                          {episode.episode} • {episode.air_date}
                        </small>
                      </div>
                    </div>
                  ))}
                </div>
                {character.episode?.length > 5 && (
                  <small className="text-muted">
                    ... and {character.episode.length - 5} more episodes
                  </small>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
