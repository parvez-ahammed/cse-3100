// v0.dev blackmagic

import { useSearchParams } from "react-router-dom";

export default function Pagination({
  currentPage,
  totalPages,
  hasNext,
  hasPrev,
}) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePageChange = (newPage) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", newPage);
    setSearchParams(newParams);
  };

  // Generate page numbers for dot pagination
  const generatePageNumbers = () => {
    const maxVisiblePages = 7;
    const pages = [];

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is less than max visible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show first few, current area, and last few pages
      const startPages = Math.min(3, totalPages);
      const endPages = Math.max(totalPages - 2, startPages + 1);

      for (let i = 1; i <= startPages; i++) {
        pages.push(i);
      }

      if (currentPage > startPages + 1 && currentPage < endPages) {
        pages.push(currentPage);
      }

      for (let i = endPages; i <= totalPages; i++) {
        pages.push(i);
      }
    }

    return [...new Set(pages)].sort((a, b) => a - b).slice(0, maxVisiblePages);
  };

  const visiblePages = generatePageNumbers();

  return (
    <div className="flex justify-center items-center space-x-2">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={!hasPrev}
        className="px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Previous
      </button>

      {/* Page Dots */}
      <div className="flex space-x-1">
        {visiblePages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              currentPage === page
                ? "bg-blue-600"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to page ${page}`}
          />
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={!hasNext}
        className="px-3 py-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        Next
      </button>
    </div>
  );
}
