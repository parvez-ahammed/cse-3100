import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { motion } from "framer-motion";

const MotionWrapper = motion.img;

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    async function fetchCharacter() {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const data = await res.json();
      setCharacter(data);

      //Fetching the episode titles in parallel
      const episodeResponses = await Promise.all(
        data.episode.map((url) => fetch(url).then((res) => res.json()))
      );
      setEpisodes(episodeResponses);
    }
    fetchCharacter();
  }, [id]);

  if (!character) return <Spinner />;

  return (
    <div className="max-w-4xl mx-auto p-6 mt-16 border-2 bg-white rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
        {character.name}
      </h2>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Character Image */}
        <MotionWrapper
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
          src={character.image}
          alt={character.name}
          className="rounded-xl w-full max-w-sm self-center"
        />
        {/* Character Info */}
        <div className="flex-1 space-y-4 text-gray-800">
          <p>
            <strong>Status:</strong> {character.status}
          </p>
          <p>
            <strong>Species:</strong> {character.species}
          </p>
          <p>
            <strong>Origin: </strong> {character.origin.name}
          </p>
          <p>
            <strong>Last known location: </strong> {character.location.name}
          </p>
          <p>
            <strong>Appeared in {character.episode.length} episodes</strong>
          </p>
          <div>
            <strong>Episodes:</strong>
            <ul className="list-disc list-inside mt-1 space-y-1 text-sm text-gray-700 max-h-64 overflow-y-auto pr-2">
              {episodes.map((ep) => (
                <li key={ep.id}>
                  {ep.episode} - {ep.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
