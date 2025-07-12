import { useSearchParams } from 'react-router-dom';
import { useCallback } from 'react';

export function useQueryParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const getQueryParam = useCallback((key) => searchParams.get(key), [searchParams]);

  const setQueryParam = useCallback((key, value) => {
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);
      if (value) {
        newParams.set(key, value);
      } else {
        newParams.delete(key);
      }
      return newParams;
    });
  }, [setSearchParams]);

  const setMultipleParams = useCallback((paramsObject) => {
    setSearchParams(prev => {
      const newParams = new URLSearchParams(prev);
      Object.entries(paramsObject).forEach(([key, value]) => {
        if (value) {
          newParams.set(key, value);
        } else {
          newParams.delete(key);
        }
      });
      return newParams;
    });
  }, [setSearchParams]);

  const getMultipleParams = useCallback(() => {
    const params = {};
    for (const [key, value] of searchParams.entries()) {
      params[key] = value;
    }
    return params;
  }, [searchParams]);

  return {
    getQueryParam,
    setQueryParam,
    setMultipleParams,
    getMultipleParams,
    searchParams
  };
}
