import { useState } from 'react';

export default function SearchBar({ name, status, setSearchParams }) {
  const [searchName, setSearchName] = useState(name);
  const [searchStatus, setSearchStatus] = useState(status);

  const handleSearch = (e) => {
    e.preventDefault();
    const params = {};
    if (searchName.trim()) params.name = searchName.trim();
    if (searchStatus) params.status = searchStatus;
    params.page = 1;
    setSearchParams(params);
  };

  const handleReset = () => {
    setSearchName('');
    setSearchStatus('');
    setSearchParams({ page: 1 });
  };

  return (
    <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
      <input
        type="text"
        placeholder="Search by name"
        className="p-2 border rounded w-full sm:w-1/2"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
      />
      <select
        className="p-2 border rounded w-full sm:w-1/4"
        value={searchStatus}
        onChange={(e) => setSearchStatus(e.target.value)}
      >
        <option value="">All Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
      <div className="flex gap-2 w-full sm:w-auto">
        <button
          type="submit"
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 w-full"
        >
          Filter
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 w-full"
        >
          Reset
        </button>
      </div>
    </form>
  );
}
