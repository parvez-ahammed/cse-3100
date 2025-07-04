import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Globe, Calendar, Tv } from 'lucide-react';
import { useCharacter } from '../hooks/useCharacter';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import ErrorMessage from '../components/UI/ErrorMessage';

const CharacterDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { character, episodes, loading, error } = useCharacter(Number(id));

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!character) return <ErrorMessage message="Character not found" />;

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'alive': return 'bg-green-500';
      case 'dead': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back button */}
      <Link
        to="/"
        className="inline-flex items-center space-x-2 text-green-600 hover:text-green-700 mb-6"
      >
        <ArrowLeft size={20} />
        <span>Back to Characters</span>
      </Link>

      {/* Character details */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Character image */}
          <div className="md:w-1/2">
            <img
              src={character.image}
              alt={character.name}
              className="w-full h-96 md:h-full object-cover"
            />
          </div>

          {/* Character info */}
          <div className="md:w-1/2 p-8">
            <div className="flex items-center space-x-3 mb-4">
              <h1 className="text-3xl font-bold text-gray-900">{character.name}</h1>
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white ${getStatusColor(character.status)}`}>
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                {character.status}
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Globe className="text-gray-400" size={20} />
                <span className="text-gray-600">Species:</span>
                <span className="font-medium">{character.species}</span>
              </div>

              <div className="flex items-center space-x-2">
                <MapPin className="text-gray-400" size={20} />
                <span className="text-gray-600">Origin:</span>
                <span className="font-medium">{character.origin.name}</span>
              </div>

              <div className="flex items-center space-x-2">
                <MapPin className="text-gray-400" size={20} />
                <span className="text-gray-600">Last known location:</span>
                <span className="font-medium">{character.location.name}</span>
              </div>

              <div className="flex items-center space-x-2">
                <Tv className="text-gray-400" size={20} />
                <span className="text-gray-600">Episodes:</span>
                <span className="font-medium">{character.episode.length}</span>
              </div>

              <div className="flex items-center space-x-2">
                <Calendar className="text-gray-400" size={20} />
                <span className="text-gray-600">Created:</span>
                <span className="font-medium">
                  {new Date(character.created).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Episodes */}
      {episodes.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Episodes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {episodes.slice(0, 10).map((episode) => (
              <div key={episode.id} className="bg-white rounded-lg shadow-md p-4">
                <h3 className="font-semibold text-gray-900">{episode.name}</h3>
                <p className="text-sm text-gray-600">{episode.episode}</p>
                <p className="text-sm text-gray-500">{episode.air_date}</p>
              </div>
            ))}
          </div>
          {episodes.length > 10 && (
            <p className="text-center text-gray-500 mt-4">
              And {episodes.length - 10} more episodes...
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default CharacterDetailsPage;