import { useSearchParams } from "react-router-dom";

export default function FilterDropdown() {
  const [searchParams, setSearchParams] = useSearchParams();
  const status = searchParams.get("status") || "";

  const handleChange = (e) => {
    const newStatus = e.target.value;
    const updatedParams = new URLSearchParams(searchParams);
    if (newStatus) {
      updatedParams.set("status", newStatus);
    } else {
      updatedParams.delete("status");
    }
    updatedParams.set("page", 1); // reset pagination
    setSearchParams(updatedParams);
  };

  return (
    <select className="form-select mb-4" value={status} onChange={handleChange}>
      <option value="">Filter by status</option>
      <option value="alive">Alive</option>
      <option value="dead">Dead</option>
      <option value="unknown">Unknown</option>
    </select>
  );
}
