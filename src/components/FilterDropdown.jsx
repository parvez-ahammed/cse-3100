import { useState } from "react";

export default function FilterDropdown({ onStatusChange }) {
  const [status, setStatus] = useState("");

  const handleStatusChange = (event) => {
    const selectedStatus = event.target.value;
    setStatus(selectedStatus);
    onStatusChange(selectedStatus);
  };

  return (
    <div>
      <select
        className="px-3 py-2 rounded border border-gray-300 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={status}
        onChange={handleStatusChange}
      >
        <option value="">All Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
}