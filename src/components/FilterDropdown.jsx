export default function FilterDropdown({ statusFilter, onStatusChange }) {
  const statusOptions = ['All', 'Alive', 'Dead', 'unknown'];

  return (
    <div className="filter-dropdown mb-3">
      <select
        className="form-select"
        value={statusFilter}
        onChange={(e) => onStatusChange(e.target.value)}
      >
        {statusOptions.map((status) => (
          <option key={status} value={status === 'All' ? '' : status}>
            {status === 'unknown' ? 'Unknown' : status}
          </option>
        ))}
      </select>
    </div>
  );
}
