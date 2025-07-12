import { Link } from 'react-router-dom';

export default function CharacterCard({ character }) {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'alive':
        return 'success';
      case 'dead':
        return 'danger';
      default:
        return 'secondary';
    }
  };

  return (
    <div className="card h-100 shadow-sm">
      <img
        src={character.image}
        className="card-img-top"
        alt={character.name}
        style={{ height: '250px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{character.name}</h5>
        <div className="mb-2">
          <span className={`badge bg-${getStatusColor(character.status)} me-2`}>
            {character.status}
          </span>
          <small className="text-muted">{character.species}</small>
        </div>
        <p className="card-text small">
          <i className="fas fa-map-marker-alt me-1"></i>
          {character.location?.name || 'Unknown'}
        </p>
        <div className="mt-auto">
          <Link
            to={`/character/${character.id}`}
            className="btn btn-primary w-100"
          >
            <i className="fas fa-eye me-1"></i>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
