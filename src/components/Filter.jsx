import { useEffect, useState } from "react";

export default function Filter({ name, status, onFilterChange }) {
  const [search, setSearch] = useState(name || "");
  const [selectedStatus, setSelectedStatus] = useState(status || "");

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      onFilterChange({ name: search, status: selectedStatus });
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [search, selectedStatus]);

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 justify-center">
      <div className="relative w-full sm:w-64">
        <input
          type="text"
          placeholder="Search by name..."
          className="w-full px-4 py-2 pl-10 text-sm text-gray-700 placeholder-gray-400 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="absolute left-3 top-2.5 text-gray-400 text-sm">🔍</div>
      </div>
      <select
        value={selectedStatus}
        onChange={(e) => setSelectedStatus(e.target.value)}
        className="w-full sm:w-48 px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
      >
        <option value="">All Status</option>
        <option value="alive">✅ Alive</option>
        <option value="dead">☠️ Dead</option>
        <option value="unknown">❓ Unknown</option>
      </select>
    </div>
  );
}
