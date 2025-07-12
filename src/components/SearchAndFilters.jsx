import { useQueryParams } from '../hooks/useQueryParams';

export default function SearchAndFilters() {
  const { getQueryParam, setMultipleParams } = useQueryParams();

  const currentName = getQueryParam('name') || '';
  const currentStatus = getQueryParam('status') || '';

  const handleNameChange = (e) => {
    const value = e.target.value;
    setMultipleParams({
      name: value,
      page: '1' // Reset to page 1 when searching
    });
  };

  const handleStatusChange = (e) => {
    const value = e.target.value;
    setMultipleParams({
      status: value,
      page: '1' // Reset to page 1 when filtering
    });
  };

  const clearFilters = () => {
    setMultipleParams({
      name: '',
      status: '',
      page: '1'
    });
  };

  return (
    <div className="row mb-4">
      <div className="col-md-6 mb-3">
        <div className="input-group">
          <span className="input-group-text">
            <i className="fas fa-search"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search characters by name..."
            value={currentName}
            onChange={handleNameChange}
          />
        </div>
      </div>

      <div className="col-md-4 mb-3">
        <select
          className="form-select"
          value={currentStatus}
          onChange={handleStatusChange}
        >
          <option value="">All Status</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <div className="col-md-2 mb-3">
        <button
          className="btn btn-outline-secondary w-100"
          onClick={clearFilters}
          title="Clear all filters"
        >
          <i className="fas fa-times"></i> Clear
        </button>
      </div>
    </div>
  );
}
