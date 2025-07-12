import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function FilterBar() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [name, setName] = useState(searchParams.get("name") || "");
  const [status, setStatus] = useState(searchParams.get("status") || "");

  const handleChange = () => {
    const params = {};
    if (name) params.name = name;
    if (status) params.status = status;
    setSearchParams(params);
  };

  return (
    <div className="d-flex gap-2 my-3">
      <input
        type="text"
        placeholder="Search by name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onBlur={handleChange}
        className="form-control"
      />
      <select
        value={status}
        onChange={(e) => {
          setStatus(e.target.value);
          handleChange();
        }}
        className="form-select"
      >
        <option value="">All Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
}
