export default function FilterStatus({ value, onChange }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="">Select status</option>
      <option value="Alive">Alive</option>
      <option value="Dead">Dead</option>
      <option value="Unknown">Unknown</option>
    </select>
  );
}