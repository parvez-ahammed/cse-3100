// File: src/components/FilterDropdown.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function FilterDropdown({ status, setSearchParams, name }) {
  const handleChange = (e) => {
    const newStatus = e.target.value;
    const newParams = {};

    if (name) newParams.name = name;
    if (newStatus) newParams.status = newStatus;

    newParams.page = 1; // Reset to page 1 on filter

    setSearchParams(newParams);
  };

  return (
    <div className="my-4">
      <label className="mr-2 font-semibold">Filter by Status:</label>
      <select value={status} onChange={handleChange} className="border p-2 rounded">
        <option value="">All</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
}
