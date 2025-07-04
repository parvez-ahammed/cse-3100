import { useState } from "react";

export default function SearchBar({ onSearchChange }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    onSearchChange(searchTerm);
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2">
      <input
        type="text"
        placeholder="Search characters by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-3 py-2 rounded border border-gray-300 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Search
      </button>
    </form>
  );
}