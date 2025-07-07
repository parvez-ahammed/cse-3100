export default function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-bar mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search characters by name..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

