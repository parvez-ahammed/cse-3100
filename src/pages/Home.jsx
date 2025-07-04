import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(res => res.json())
      .then(data => setCharacters(data.results));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Rick and Morty Characters</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {characters.map(character => (
          <Link
            to={`/character/${character.id}`}
            key={character.id}
            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition"
          >
            <img src={character.image} alt={character.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{character.name}</h2>
              <p className="text-sm text-gray-600">{character.species} - {character.status}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
