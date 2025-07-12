// src/components/FilterDropdown.jsx
import { useSearchParams } from "react-router-dom";

export default function FilterDropdown() {
  const [searchParams, setSearchParams] = useSearchParams();

  const status = searchParams.get("status") || "";

  const handleChange = (e) => {
    const newStatus = e.target.value;
    if (newStatus) {
      searchParams.set("status", newStatus);
    } else {
      searchParams.delete("status");
    }
    searchParams.set("page", 1); // Reset to first page
    setSearchParams(searchParams);
  };

  return (
    <select
      className="form-select mb-3"
      value={status}
      onChange={handleChange}
    >
      <option value="">Filter by status</option>
      <option value="alive">Alive</option>
      <option value="dead">Dead</option>
      <option value="unknown">Unknown</option>
    </select>
  );
}
