import { useState, useEffect } from 'react';
import { Character, ApiResponse } from '../types/character';
import { api } from '../common/api';

export const useCharacters = (page = 1, name = '', status = '') => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<ApiResponse['info'] | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const data = await api.getCharacters({ page, name, status });
        setCharacters(data.results);
        setInfo(data.info);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setCharacters([]);
        setInfo(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [page, name, status]);

  return { characters, loading, error, info };
};