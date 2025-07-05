// src/components/FilterDropdown.jsx
import React from 'react';
import '/src/style.css';

export default function FilterDropdown({ status, setStatus }) {
  return (
    <div className="status-filter">
      <label htmlFor="status">Filter by status:</label>
      <select
        id="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="status-dropdown"
      >
        <option value="">All</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
}
