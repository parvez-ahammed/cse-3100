import { useSearchParams } from "react-router-dom";

const PaginationControls = ({ totalItems }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const uiPage = parseInt(searchParams.get("page") || "1");
  const apiPage = parseInt(searchParams.get("apipage") || "1");

  const handleChange = (newUIPage) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", newUIPage);
    newParams.set("apipage", Math.ceil(newUIPage / 2));
    setSearchParams(newParams);
  };

  const isFirst = uiPage <= 1;
  const isLast = uiPage >= Math.ceil(totalItems / 10);

  return (
    <div className="flex justify-center items-center gap-6">
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
        onClick={() => handleChange(uiPage - 1)}
        disabled={isFirst}
      >
        Previous
      </button>
      <span className="text-lg font-medium">Page {uiPage}</span>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
        onClick={() => handleChange(uiPage + 1)}
        disabled={isLast}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationControls;
