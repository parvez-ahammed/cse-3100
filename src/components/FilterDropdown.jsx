import React from 'react';

export default function FilterDropdown({ value, onChange }) {
  return (
    <select value={value} onChange={onChange} style={{
      padding: '10px 15px',
      borderRadius: '8px',
      border: '1.5px solid #ccc',
      fontSize: '1rem',
      outline: 'none',
      cursor: 'pointer'
    }}>
      <option value="">All Statuses</option>
      <option value="alive">Alive</option>
      <option value="dead">Dead</option>
      <option value="unknown">Unknown</option>
    </select>
  );
}
