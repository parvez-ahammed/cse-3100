import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCharacter = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        const data = await res.json();
        setCharacter(data);
      } catch (err) {
        print(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCharacter();
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" color="green" />
      </div>
    );
  } else {
  }

  if (!character) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Character not found
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <div
        className="fixed inset-0 bg-cover bg-center [filter:blur(2px)] z-0"
        style={{
          backgroundImage: `url('https://i.guim.co.uk/img/media/b563ac5db4b4a4e1197c586bbca3edebca9173cd/0_12_3307_1985/master/3307.jpg?width=1200&quality=85&auto=format&fit=max&s=7543c611e54f684ba5da8700c2ac15d9')`,
        }}
      />
      <div className="relative z-10 flex justify-center items-center min-h-screen">
        <div className="flex flex-col mx-auto p-8 my-8 items-center py-12 rounded-lg border-2 shadow-xl w-[90%] md:w-[60%] lg:w-[30%] max-w-4xl bg-white/90 backdrop-blur-sm">
          <div className="font-bold text-3xl mb-4">{character.name}</div>

          <img
            src={character.image}
            alt={character.name}
            className="h-auto w-[80%] rounded-lg shadow-lg mb-6"
          />

          <div className="w-full space-y-3">
            <div className="mb-2">
              <span className="font-bold text-xl">Species:</span>{" "}
              <span className="text-xl">{character.species}</span>
            </div>
            <div className="mb-2">
              <span className="font-bold text-xl">Status:</span>{" "}
              <span className="text-xl">{character.status}</span>
            </div>
            <div className="mb-2">
              <span className="font-bold text-xl">Gender:</span>{" "}
              <span className="text-xl">{character.gender}</span>
            </div>
            <div className="mb-2">
              <span className="font-bold text-xl">Origin:</span>{" "}
              <span className="text-xl">{character.origin.name}</span>
            </div>
            <div className="mb-2">
              <span className="font-bold text-xl">Location:</span>{" "}
              <span className="text-xl">{character.location.name}</span>
            </div>
            <div className="mb-2">
              <span className="font-bold text-xl">Episode Count:</span>{" "}
              <span className="text-xl">{character.episode.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
