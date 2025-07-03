import { useSearchParams } from "react-router-dom";

export default function Pagination({ currentPage, hasNext, hasPrev }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePageChange = (newPage) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", newPage);
    setSearchParams(newParams);
  };

  return (
    <div className="pagination mt-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={!hasPrev}
      >
        Previous
      </button>
      <span>Page {currentPage}</span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={!hasNext}
      >
        Next
      </button>
    </div>
  );
}
