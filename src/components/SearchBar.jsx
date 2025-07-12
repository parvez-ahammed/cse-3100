// src/components/SearchBar.jsx
import { useSearchParams } from "react-router-dom";

export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get("name") || "";

  const handleChange = (e) => {
    const newName = e.target.value;
    searchParams.set("name", newName);
    searchParams.set("page", 1); // Reset to first page
    setSearchParams(searchParams);
  };

  return (
    <input
      type="text"
      className="form-control mb-3"
      placeholder="Search characters by name..."
      value={name}
      onChange={handleChange}
    />
  );
}
