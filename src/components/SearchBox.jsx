import { useSearchParams } from "react-router-dom";

const SearchBox = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name") || "";

  const handleChange = (e) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("name", e.target.value);
    newParams.set("page", 1); // Optional if paginated later
    setSearchParams(newParams);
  };

  return (
    <input
      type="text"
      placeholder="Search by name"
      value={name}
      onChange={handleChange}
      className="form-control mb-3"
    />
  );
};

export default SearchBox;
