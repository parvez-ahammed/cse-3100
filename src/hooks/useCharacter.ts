import { useState, useEffect } from 'react';
import { Character, Episode } from '../types/character';
import { api } from '../common/api';

export const useCharacter = (id: number) => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const characterData = await api.getCharacter(id);
        setCharacter(characterData);
        
        // Extract episode IDs from URLs
        const episodeIds = characterData.episode.map(url => {
          const id = url.split('/').pop();
          return id ? parseInt(id) : 0;
        }).filter(id => id > 0);
        
        if (episodeIds.length > 0) {
          const episodesData = await api.getEpisodes(episodeIds);
          setEpisodes(episodesData);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setCharacter(null);
        setEpisodes([]);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCharacter();
    }
  }, [id]);

  return { character, episodes, loading, error };
};