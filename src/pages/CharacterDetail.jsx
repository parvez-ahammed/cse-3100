import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [episodes, setEpisodes] = useState([]);
  const [showEpisodes, setShowEpisodes] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchCharacter = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        const data = await response.json();
        setCharacter(data);

        // Fetch episode names if character exists
        if (data.episode?.length > 0) {
          const episodeIds = data.episode.map((url) => url.split("/").pop());
          const episodesResponse = await fetch(
            `https://rickandmortyapi.com/api/episode/${episodeIds.join(",")}`
          );
          const episodesData = await episodesResponse.json();
          setEpisodes(
            Array.isArray(episodesData) ? episodesData : [episodesData]
          );
        }
      } catch (error) {
        console.error("Error fetching character data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500"></div>
      </div>
    );
  }

  if (!character) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Character not found
          </h2>
          <Link
            to="/"
            className="inline-block px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Back to Characters
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-700 p-8 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-600 transform transition-all duration-500 hover:shadow-3xl">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Character Image */}
            <div className="flex-shrink-0 relative group">
              <img
                src={character.image}
                alt={character.name}
                className="w-72 h-72 rounded-2xl object-cover shadow-xl border-4 border-white dark:border-gray-600 transform transition-all duration-500 group-hover:scale-105 group-hover:border-purple-200 dark:group-hover:border-purple-400"
              />
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-600 px-4 py-2 rounded-full shadow-md">
                <span
                  className={`text-xs font-bold ${
                    character.status === "Alive"
                      ? "text-green-600 dark:text-green-400"
                      : character.status === "Dead"
                      ? "text-red-600 dark:text-red-400"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {character.status} - {character.species}
                </span>
              </div>
            </div>

            {/* Character Details */}
            <div className="flex-1 space-y-6">
              <div>
                <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  {character.name}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                  {character.type ? `${character.type} • ` : ""}
                  {character.gender}
                </p>
              </div>

              {/* Info Cards */}
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-600 rounded-xl transition-all hover:bg-gray-100 dark:hover:bg-gray-500">
                  <h3 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                    Origin
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200">
                    {character.origin.name}
                  </p>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-xl border-l-4 border-blue-400 dark:border-blue-500 transition-all hover:bg-blue-100 dark:hover:bg-blue-900/50">
                  <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    Last Known Location
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200">
                    {character.location.name}
                  </p>
                </div>

                {/* Episodes Section */}
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl transition-all hover:bg-purple-100 dark:hover:bg-purple-900/30">
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => setShowEpisodes(!showEpisodes)}
                  >
                    <h3 className="font-semibold text-purple-600 dark:text-purple-400">
                      Appears in {character.episode.length} episode
                      {character.episode.length !== 1 ? "s" : ""}
                    </h3>
                    <svg
                      className={`w-5 h-5 text-purple-500 dark:text-purple-400 transition-transform duration-300 ${
                        showEpisodes ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>

                  {showEpisodes && (
                    <div className="mt-3 space-y-2 animate-fade-in">
                      {episodes.map((episode) => (
                        <div
                          key={episode.id}
                          className="p-2 bg-white dark:bg-gray-700 rounded-lg shadow-sm text-sm text-gray-700 dark:text-gray-300"
                        >
                          <span className="font-medium">
                            S{episode.episode.slice(1, 3)}E
                            {episode.episode.slice(4)}:
                          </span>{" "}
                          {episode.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/"
                  className="px-6 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-medium rounded-full hover:from-green-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Back to Characters
                </Link>
                <button
                  className="px-6 py-2 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-white font-medium rounded-full hover:bg-gray-200 dark:hover:bg-gray-500 transition-all duration-300 transform hover:scale-105 shadow"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  Scroll to Top
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-400 dark:text-gray-500 text-sm animate-fade-in delay-300">
          <p>
            Data provided by the{" "}
            <a
              href="https://rickandmortyapi.com/"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rick and Morty API
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
