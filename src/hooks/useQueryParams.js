import { useLocation, useNavigate } from "react-router-dom";
import { useCallback } from "react";

export const useQueryParams = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const getQueryParam = useCallback(
    (key) => {
      const params = new URLSearchParams(location.search);
      return params.get(key) || "";
    },
    [location.search]
  );

  const setQueryParams = useCallback(
    (params) => {
      const searchParams = new URLSearchParams(location.search);

      Object.entries(params).forEach(([key, value]) => {
        if (value) {
          searchParams.set(key, value);
        } else {
          searchParams.delete(key);
        }
      });

      navigate(`${location.pathname}?${searchParams.toString()}`, {
        replace: true,
      });
    },
    [location.pathname, location.search, navigate]
  );

  return { getQueryParam, setQueryParams };
};
