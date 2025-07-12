import React from "react";

const FilterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24"
    width="24"
    fill="#042c2bff"
    viewBox="0 0 24 24"
    className="mr-2"
  >
    <path d="M3 5h18v2H3V5zm4 6h10v2H7v-2zm6 6H9v2h4v-2z" />
  </svg>
);

const ArrowDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="16"
    width="16"
    fill="#042c2bff"
    viewBox="0 0 24 24"
    className="pointer-events-none"
  >
    <path d="M7 10l5 5 5-5H7z" />
  </svg>
);

const Search = ({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
}) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-5 px-2 my-8">
      <input
        type="text"
        placeholder="Search characters..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-grow max-w-xl px-6 py-3 text-lg font-medium text-cyan-400 bg-white/5 rounded-full border-2 border-cyan-400/50 shadow-md shadow-cyan-400/30 outline-none font-orbitron backdrop-blur-md transition duration-300"
      />

      <div className="relative flex items-center px-5 py-2 bg-white/5 rounded-full border-2 border-cyan-400/50 shadow-md shadow-cyan-400/30 backdrop-blur-md cursor-pointer transition duration-300">
        <FilterIcon />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="appearance-none bg-transparent border-none font-semibold text-base font-orbitron outline-none pr-8 cursor-pointer"
          style={{ color: "#042c2bff" }}
        >
          <option value="">All Statuses</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        <div className="absolute right-3 flex items-center justify-center pointer-events-none">
          <ArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Search;
