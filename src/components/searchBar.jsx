

const SearchBar = ({ searchParams, setSearchParams }) => {
  const handleSearch = (e) => {
    setSearchParams({ ...Object.fromEntries(searchParams), name: e.target.value });
  };

  return (
    <div className="relative w-full md:w-96">
      <input
        type="text"
        placeholder="Search characters..."
        value={searchParams.get('name') || ''}
        onChange={handleSearch}
        className="w-full border-2 border-green-400 bg-gray-900/80 backdrop-blur-sm rounded-xl px-5 py-3 text-white font-medium transition-all duration-300
                  placeholder-green-400/60
                  focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400
                  shadow-lg shadow-green-500/20 hover:shadow-green-500/40"
      />
      <div className="absolute right-3 top-3 text-green-400">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;