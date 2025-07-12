// File: src/components/SearchBar.jsx
import React from 'react';

export default function SearchBar({ name, status, setSearchParams }) {
  const handleChange = (e) => {
    const newName = e.target.value;
    const newParams = {};

    if (newName) newParams.name = newName;
    if (status) newParams.status = status;

    newParams.page = 1; // Always go to page 1 on search

    setSearchParams(newParams);
  };

  return (
    <div className="my-4">
      <label className="mr-2 font-semibold">Search by Name:</label>
      <input
        type="text"
        placeholder="e.g. Rick, Morty"
        value={name}
        onChange={handleChange}
        className="border p-2 rounded w-64"
      />
    </div>
  );
}
