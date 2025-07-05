import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then(setCharacter)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="container text-center my-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-2">Loading character details...</p>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <div className="card border-0 shadow-lg">
        <div className="row g-0">
          <div className="col-md-5">
            <img 
              src={character.image} 
              alt={character.name} 
              className="img-fluid rounded-start"
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h2 className="card-title mb-4">{character.name}</h2>
              
              <div className="mb-3">
                <span className={`badge ${character.status === 'Alive' ? 'bg-success' : 'bg-danger'} fs-6 me-2`}>
                  {character.status}
                </span>
                <span className="badge bg-info fs-6 me-2">{character.species}</span>
                <span className="badge bg-secondary fs-6">{character.gender}</span>
              </div>
              
              <div className="row">
                <div className="col-md-6">
                  <p className="mb-2"><strong>Origin:</strong> {character.origin.name}</p>
                  <p className="mb-2"><strong>Location:</strong> {character.location.name}</p>
                </div>
                <div className="col-md-6">
                  <p className="mb-2"><strong>Type:</strong> {character.type || 'Unknown'}</p>
                  <p className="mb-2"><strong>Created:</strong> {new Date(character.created).toLocaleDateString()}</p>
                </div>
              </div>
              
              <div className="mt-4">
                <Link to="/" className="btn btn-outline-primary me-2">
                  Back to Characters
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}