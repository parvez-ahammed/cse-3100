import { useParams, Link } from 'react-router-dom';
import { useFetchCharacter } from '../hooks/useFetchCharacter';

// Futuristic character details page with dynamic holographic card and gradient background
const CharacterDetailsPage = () => {
  const { id } = useParams();
  const { character, loading, error } = useFetchCharacter(id);

  if (loading) return (
    <main className="flex justify-center items-center min-h-screen bg-gradient-to-br from-dark-space via-purple-950 to-dark-space" role="status" aria-live="polite" aria-busy="true">
      <div className="h-12 w-12 border-4 border-neon-green border-t-transparent rounded-full animate-spin" />
      <span className="sr-only">Loading character details...</span>
    </main>
  );
  if (error) return (
    <main className="flex justify-center items-center min-h-screen bg-gradient-to-br from-dark-space via-purple-950 to-dark-space">
      <p className="text-center text-hot-pink font-medium text-lg" role="alert">{error}</p>
    </main>
  );
  if (!character) return null;

  return (
    <main className="container mx-auto p-6 bg-gradient-to-br from-dark-space via-purple-950 to-dark-space min-h-screen flex flex-col items-center justify-between">
      <article className="bg-holo-glass backdrop-blur-lg border border-neon-green/40 rounded-2xl p-8 max-w-2xl w-full mx-auto shadow-[0_0_20px_rgba(0,255,159,0.4)] animate-fade-in transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,159,0.6)]">
        <div className="flex flex-col items-center">
          <img
            src={character.image}
            alt={character.name}
            className="w-80 h-80 object-cover rounded-lg mb-6 border border-electric-blue/50 shadow-[0_0_10px_rgba(0,191,255,0.3)]"
          />
          <h2 className="text-4xl font-extrabold uppercase text-neon-green mb-6 text-center">{character.name}</h2>
          <section className="text-center text-white/90 space-y-4">
            <div>
              <p><strong className="text-neon-green">Status:</strong> <span className="font-medium text-electric-blue">{character.status}</span></p>
              <p><strong className="text-neon-green">Species:</strong> <span className="font-medium text-electric-blue">{character.species}</span></p>
              <p><strong className="text-neon-green">Gender:</strong> <span className="font-medium text-electric-blue">{character.gender}</span></p>
            </div>
            <div>
              <p><strong className="text-neon-green">Origin:</strong> <span className="font-medium text-electric-blue">{character.origin.name}</span></p>
              <p><strong className="text-neon-green">Last Known Location:</strong> <span className="font-medium text-electric-blue">{character.location?.name}</span></p>
              <p><strong className="text-neon-green">Episodes Appeared:</strong> <span className="font-medium text-electric-blue">{character.episode.length}</span></p>
            </div>
          </section>
        </div>
        <section className="mt-6 text-white/90 text-center">
          <h3 className="text-2xl font-bold text-neon-green mb-4">Appeared in Episodes:</h3>
          {character.episode.length > 0 ? (
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4" aria-label="List of episodes featuring the character">
              {character.episode.map((ep) => (
                <li key={ep.id} className="border border-neon-green rounded-lg p-4 shadow-md flex flex-col items-center text-center font-medium text-electric-blue">
                  {ep.youtubeLink ? (
                    <a
                      href={ep.youtubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:text-hot-pink"
                      aria-label={`Watch ${ep.name} on YouTube`}
                    >
                      {ep.name}
                    </a>
                  ) : (
                    <span>{ep.name}</span>
                  )}
                  <span className="text-sm text-white/70 mt-2">({ep.episode})</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="font-medium text-electric-blue">No episode appearances found.</p>
          )}
        </section>
      </article>
      <div className="flex justify-center mt-8 w-full">
        <Link
          to="/"
          className="group relative text-neon-green font-semibold flex items-center gap-2 px-6 py-3 bg-dark-space/70 rounded-lg transition-all duration-300 hover:bg-hot-pink hover:text-dark-space focus:outline-none focus:ring-4 focus:ring-neon-green focus:ring-opacity-50 active:scale-95"
          aria-label="Return to character list"
        >
          <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          <span className="whitespace-nowrap">Back to List</span>
        </Link>
      </div>
    </main>
  );
};

export default CharacterDetailsPage;