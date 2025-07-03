// idk what this is I just asked Deepseek to convert my code into a workable component

import { useSearchParams } from "react-router-dom";

export default function SearchFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Get current filter values from URL (or defaults)
  const name = searchParams.get("name") || "";
  const status = searchParams.get("status") || "";

  // Update URL when filters change
  const handleFilterChange = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  return (
    <div className="search-filter mb-4">
      {/* Name Search */}
      <input
        type="text"
        placeholder="Search by name..."
        value={name}
        onChange={(e) => handleFilterChange("name", e.target.value)}
      />

      {/* Status Dropdown */}
      <select
        value={status}
        onChange={(e) => handleFilterChange("status", e.target.value)}
      >
        <option value="">All Statuses</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
}
