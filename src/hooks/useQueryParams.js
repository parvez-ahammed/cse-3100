import { useSearchParams } from 'react-router-dom';
import { useCallback } from 'react';

export const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getParam = useCallback((key) => {
    return searchParams.get(key) || '';
  }, [searchParams]);

  const setParam = useCallback((key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  }, [searchParams, setSearchParams]);

  const setMultipleParams = useCallback((params) => {
    const newParams = new URLSearchParams(searchParams);
    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        newParams.set(key, value);
      } else {
        newParams.delete(key);
      }
    });
    setSearchParams(newParams);
  }, [searchParams, setSearchParams]);

  return {
    getParam,
    setParam,
    setMultipleParams,
    searchParams
  };
};