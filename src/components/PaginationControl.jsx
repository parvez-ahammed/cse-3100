import { useNavigate } from "react-router-dom";

export default function PaginationControls({
  currentPage,
  totalPages,
  searchQuery,
}) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center gap-4 mt-8 mb-12">
      <button
        onClick={() =>
          searchQuery
            ? navigate(`?search=${searchQuery}&page=${currentPage - 1}`)
            : navigate(`?page=${currentPage - 1}`)
        }
        disabled={currentPage <= 1}
        className="px-4 py-2 bg-[#42B4CA] rounded-md disabled:opacity-50"
      >
        Previous
      </button>

      <span className="flex items-center">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() =>
          searchQuery
            ? navigate(`?search=${searchQuery}&page=${currentPage + 1}`)
            : navigate(`?page=${currentPage + 1}`)
        }
        disabled={currentPage >= totalPages}
        className="px-4 py-2 bg-[#42B4CA] rounded-md disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
