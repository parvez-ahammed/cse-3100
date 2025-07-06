import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function FilterDropdown() {
  const [searchParams, setSearchParams] = useSearchParams();
  const status = searchParams.get("status") || "";

  useEffect(() => {
    // Load saved status filter
    const savedStatus = localStorage.getItem("statusFilter");
    if (savedStatus && !status) {
      const newParams = new URLSearchParams(searchParams);
      newParams.set("status", savedStatus);
      setSearchParams(newParams);
    }
  }, [searchParams, setSearchParams]);

  const handleStatusChange = (e) => {
    const value = e.target.value;
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set("status", value);
      localStorage.setItem("statusFilter", value);
    } else {
      newParams.delete("status");
      localStorage.removeItem("statusFilter");
    }
    setSearchParams(newParams);
  };

  return (
    <select
      value={status}
      onChange={handleStatusChange}
      className="form-select mb-3"
    >
      <option value="">All Statuses</option>
      <option value="alive">Alive</option>
      <option value="dead">Dead</option>
      <option value="unknown">Unknown</option>
    </select>
  );
}