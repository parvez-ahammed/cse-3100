import { useSearchParams } from "react-router-dom";

export default function SearchBar() {
  const [params, setParams] = useSearchParams();

  const name = params.get("name") || "";
  const status = params.get("status") || "";

  const handleSearch = (e) => {
    const newParams = new URLSearchParams(params);
    newParams.set("name", e.target.value);
    newParams.set("page", "1");
    setParams(newParams);
  };

  const handleStatus = (e) => {
    const newParams = new URLSearchParams(params);
    newParams.set("status", e.target.value);
    newParams.set("page", "1");
    setParams(newParams);
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
      <input
        type="text"
        placeholder="Search by name"
        className="border px-4 py-2 rounded w-full md:w-1/3"
        value={name}
        onChange={handleSearch}
      />
      <select
        className="border px-4 py-2 rounded w-full md:w-1/3"
        value={status}
        onChange={handleStatus}
      >
        <option value="">All Status</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>
  );
}
