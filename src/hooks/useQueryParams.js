import { useSearchParams } from "react-router-dom";

export function useQueryParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  const params = {
    name: searchParams.get("name") || "",
    status: searchParams.get("status") || "",
    page: parseInt(searchParams.get("page") || "1", 10),
  };

  const setParams = (newParams) => {
    const updated = { ...params, ...newParams };
    const filtered = Object.fromEntries(
      Object.entries(updated).filter(([_, v]) => v !== "" && v !== null && v !== undefined)
    );
    setSearchParams(filtered);
  };

  return [params, setParams];
}