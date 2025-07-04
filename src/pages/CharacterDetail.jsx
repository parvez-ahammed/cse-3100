import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then(setCharacter);
  }, [id]);

  if (!character)
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <p>Loading...</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={character.image}
              alt={character.name}
              className="w-full md:w-1/3 rounded-lg"
            />
            <div>
              <h2 className="text-2xl font-bold mb-4">{character.name}</h2>
              <div className="space-y-2">
                <p>
                  <strong>Status:</strong> {character.status}
                </p>
                <p>
                  <strong>Species:</strong> {character.species}
                </p>
                <p>
                  <strong>Origin:</strong> {character.origin.name}
                </p>
                <p>
                  <strong>Last Location:</strong> {character.location.name}
                </p>
                <p>
                  <strong>Episodes Appeared:</strong> {character.episode.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
