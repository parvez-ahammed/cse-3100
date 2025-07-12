import { useSearchParams } from "react-router-dom";

export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name") || "";

  const handleChange = (e) => {
    const newName = e.target.value;
    const updatedParams = new URLSearchParams(searchParams);
    if (newName) {
      updatedParams.set("name", newName);
    } else {
      updatedParams.delete("name");
    }
    updatedParams.set("page", 1); // reset pagination
    setSearchParams(updatedParams);
  };

  return (
    <input
      type="text"
      className="form-control mb-3"
      placeholder="Search by name..."
      value={name}
      onChange={handleChange}
    />
  );
}
