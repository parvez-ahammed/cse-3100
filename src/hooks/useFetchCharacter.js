import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../common/constants';

const episodeYouTubeLinks = {
  1: 'https://www.youtube.com/watch?v=example1',
  2: 'https://www.youtube.com/watch?v=example2',
  3: 'https://www.youtube.com/watch?v=example3',
  4: 'https://www.youtube.com/watch?v=example4',
  5: 'https://www.youtube.com/watch?v=example5',
  // Add more episode id to YouTube link mappings here
};

// Custom hook for fetching a single character by ID, including episode names and YouTube links
export const useFetchCharacter = (id) => {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        setLoading(true);
        // Fetch character data
        const characterResponse = await fetch(`${API_BASE_URL}/${id}`);
        if (!characterResponse.ok) throw new Error('Failed to fetch character');
        const characterData = await characterResponse.json();

        // Fetch episode details
        const episodePromises = characterData.episode.map(async (episodeUrl) => {
          const episodeResponse = await fetch(episodeUrl);
          if (!episodeResponse.ok) throw new Error('Failed to fetch episode');
          return episodeResponse.json();
        });

        // Resolve all episode fetches
        const episodeData = await Promise.all(episodePromises);

        // Update character data with episode details and YouTube links
        const updatedCharacter = {
          ...characterData,
          episode: episodeData.map((ep) => ({
            id: ep.id,
            name: ep.name,
            episode: ep.episode, // Include episode code (e.g., S01E01)
            youtubeLink: episodeYouTubeLinks[ep.id] || null,
          })),
        };

        setCharacter(updatedCharacter);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  return { character, loading, error };
};