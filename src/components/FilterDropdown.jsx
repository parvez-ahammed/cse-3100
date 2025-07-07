// FilterDropdown.jsx
import React from 'react';

const FilterDropdown = ({ searchParams, setSearchParams }) => {
  const handleStatusChange = (e) => {
    setSearchParams({ ...Object.fromEntries(searchParams), status: e.target.value });
  };

  return (
    <div className="relative group">
      <select
        value={searchParams.get('status') || ''}
        onChange={handleStatusChange}
        className="appearance-none border-2 border-purple-400 bg-gray-900/80 backdrop-blur-sm rounded-xl px-5 py-3 w-full md:w-48 text-white font-medium cursor-pointer transition-all duration-300 
                  shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40
                  focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400"
      >
        <option value="" className="bg-gray-900 text-purple-300">All Statuses</option>
        <option value="alive" className="bg-gray-900 text-green-400">Alive</option>
        <option value="dead" className="bg-gray-900 text-red-400">Dead</option>
        <option value="unknown" className="bg-gray-900 text-yellow-400">Unknown</option>
      </select>
      <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default FilterDropdown;