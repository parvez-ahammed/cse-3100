export default function Search({ value, onChange }) {
  return (
    <input
      type="search"
      placeholder="Search characters"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}