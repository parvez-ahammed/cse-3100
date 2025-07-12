export default function SearchBar({
  search,
  setSearch,
  status,
  setStatus,
  setPage,
}) {
  const handleClear = () => {
    setSearch("");
    setStatus("");
    setPage(1);
  };

  return (
    <div className="flex flex-col items-center justify-center mb-10 w-full">
      <div className="w-full max-w-3xl flex flex-col md:flex-row items-center gap-4">
        {/* Name Input with Icon */}
        <div className="relative w-full md:w-1/3">
          <span className="absolute left-3 top-2.5 text-gray-400 dark:text-gray-500">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search by name"
            className="pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            value={search}
            onChange={(e) => {
              setPage(1);
              setSearch(e.target.value);
            }}
          />
        </div>

        {/* Status Select with Icon */}
        <div className="relative w-full md:w-1/3">
          <span className="absolute left-3 top-2.5 text-gray-400 dark:text-gray-500">
            📋
          </span>
          <select
            className="pl-10 pr-4 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            value={status}
            onChange={(e) => {
              setPage(1);
              setStatus(e.target.value);
            }}
          >
            <option value="">All Status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>

        {/* Clear Button */}
        <button
          onClick={handleClear}
          className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg shadow-md hover:from-indigo-600 hover:to-purple-600 transition duration-300"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
