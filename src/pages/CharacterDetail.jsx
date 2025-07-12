import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then(setCharacter)
      .catch((err) => console.error("Error fetching character:", err));
  }, [id]);

  if (!character) return <p className="text-center mt-4">Loading...</p>;

  return (
    <div>
      <NavBar></NavBar>
      <div className="max-w-5xl mx-auto p-4">
        <div className="grid md:grid-cols-3 gap-6 items-start bg-white shadow-lg rounded-2xl p-6">
          {/* Character Image */}
          <div className="md:col-span-1 flex justify-center">
            <img
              src={character.image}
              alt={character.name}
              className="w-60 h-60 object-cover rounded-xl shadow-md"
            />
          </div>

          {/* Character Info */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {character.name}
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>
                <span className="font-semibold">Status:</span>{" "}
                {character.status}
              </li>
              <li>
                <span className="font-semibold">Species:</span>{" "}
                {character.species}
              </li>
              <li>
                <span className="font-semibold">Origin:</span>{" "}
                {character.origin?.name}
              </li>
              <li>
                <span className="font-semibold">Last known location:</span>{" "}
                {character.location?.name}
              </li>
              <li>
                <span className="font-semibold">Episodes appeared in:</span>{" "}
                {character.episode.length}
              </li>
            </ul>
          </div>
        </div>
        <br />
        {/* Episodes List */}
        <div className="mt-8 bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Episodes</h2>
          <ul className="justify-self-center list-disc list-inside space-y-1 text-gray-700">
            {character.episode.map((url, index) => {
              const episodeUrl = url;
              const episodeNumber = url.split("/").pop();
              return (
                <li key={index}>
                  <span className="text-1xl font-bold text-gray-800 mb-4">
                    Episode {episodeNumber} -
                  </span>{" "}
                  {episodeUrl}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
