import { useSearchParams, useNavigate } from "react-router-dom";

export default function SearchFilterBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const name = searchParams.get("name") || "";
  const status = searchParams.get("status") || "";

  const updateParam = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    newParams.set("page", 1); // Reset to page 1 on filter change
    navigate({ search: newParams.toString() });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between mb-6">
      <select
        value={status}
        onChange={(e) => updateParam("status", e.target.value)}
        className="w-full sm:w-52 p-2 border rounded-md"
      >
        <option value="">Select status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>

      <input
        type="text"
        placeholder="Search characters"
        value={name}
        onChange={(e) => updateParam("name", e.target.value)}
        className="w-full sm:flex-1 p-2 border rounded-md"
      />
    </div>
  );
}
