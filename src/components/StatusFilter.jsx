import { useSearchParams } from "react-router-dom";

const StatusFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const status = searchParams.get("status") || "";

  const handleChange = (e) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("status", e.target.value);
    newParams.set("page", 1);
    setSearchParams(newParams);
  };

  return (
    <select className="form-select mb-3" value={status} onChange={handleChange}>
      <option value="">All Statuses</option>
      <option value="alive">Alive</option>
      <option value="dead">Dead</option>
      <option value="unknown">Unknown</option>
    </select>
  );
};

export default StatusFilter;
