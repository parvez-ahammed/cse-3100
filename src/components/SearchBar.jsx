import { FaSearch } from "react-icons/fa";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar-horizontal">
      <FaSearch className="search-icon-outside" />
      <input
        type="search"
        className="fancy-search-input"
        placeholder="Search characters..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
