import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("name") || "";

  useEffect(() => {
    // Load saved search term
    const savedSearch = localStorage.getItem("searchTerm");
    if (savedSearch && !searchTerm) {
      const newParams = new URLSearchParams(searchParams);
      newParams.set("name", savedSearch);
      setSearchParams(newParams);
    }
  }, [searchParams, setSearchParams]);

  const handleSearch = (e) => {
    const value = e.target.value;
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set("name", value);
      localStorage.setItem("searchTerm", value);
    } else {
      newParams.delete("name");
      localStorage.removeItem("searchTerm");
    }
    setSearchParams(newParams);
  };

  return (
    <input
      type="text"
      placeholder="Search by name"
      value={searchTerm}
      onChange={handleSearch}
      className="form-control mb-3"
    />
  );
}