import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../common/constants';

// Custom hook for fetching characters with search, filter, and pagination
export const useFetchCharacters = (name = '', status = '', page = 1) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const query = new URLSearchParams({ name, status, page }).toString();
    fetch(`${API_BASE_URL}${query ? `?${query}` : ''}`)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [name, status, page]);

  return { data, loading, error };
};