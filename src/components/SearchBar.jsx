import { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  const [query, setQurey] = useState("");

  const handleChange = (e) => {
    setQurey(e.target.value);
  };

  return (
    <div className="flex justify-center">
      <div className="relative w-full">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search..."
          className="w-full py-2 pl-10 pr-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          <Search />
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
