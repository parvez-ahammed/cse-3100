export default function Pagination({ page, setPage, totalPages }) {
  const pageNumbers = [];
  const maxVisiblePages = 5; // Maximum number of visible page buttons

  // Calculate the range of page numbers to display
  let startPage = Math.max(1, page - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  // Adjust if we're at the end of the range
  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 mt-8 mb-12 animate-fade-in">
      <div className="flex items-center gap-2">
        <button
          onClick={() => setPage(1)}
          disabled={page <= 1}
          className="px-3 py-1 sm:px-4 sm:py-2 rounded-md bg-indigo-500 text-white hover:bg-indigo-600 disabled:bg-gray-300 dark:disabled:bg-gray-700 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 shadow-md"
          aria-label="First page"
        >
          &laquo;
        </button>

        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page <= 1}
          className="px-3 py-1 sm:px-4 sm:py-2 rounded-md bg-indigo-500 text-white hover:bg-indigo-600 disabled:bg-gray-300 dark:disabled:bg-gray-700 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 shadow-md"
          aria-label="Previous page"
        >
          &lsaquo;
        </button>
      </div>

      <div className="flex items-center gap-1 sm:gap-2">
        {startPage > 1 && <span className="px-2 py-1 text-gray-500">...</span>}

        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setPage(number)}
            className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-md transition-all duration-200 hover:scale-105 shadow-sm ${
              page === number
                ? "bg-indigo-600 text-white font-bold shadow-md"
                : "bg-white dark:bg-gray-700 hover:bg-indigo-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
            }`}
            aria-label={`Page ${number}`}
          >
            {number}
          </button>
        ))}

        {endPage < totalPages && (
          <span className="px-2 py-1 text-gray-500">...</span>
        )}
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page >= totalPages}
          className="px-3 py-1 sm:px-4 sm:py-2 rounded-md bg-indigo-500 text-white hover:bg-indigo-600 disabled:bg-gray-300 dark:disabled:bg-gray-700 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 shadow-md"
          aria-label="Next page"
        >
          &rsaquo;
        </button>

        <button
          onClick={() => setPage(totalPages)}
          disabled={page >= totalPages}
          className="px-3 py-1 sm:px-4 sm:py-2 rounded-md bg-indigo-500 text-white hover:bg-indigo-600 disabled:bg-gray-300 dark:disabled:bg-gray-700 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 shadow-md"
          aria-label="Last page"
        >
          &raquo;
        </button>
      </div>

      {totalPages > 10 && (
        <div className="mt-2 sm:mt-0 sm:ml-4 text-sm text-gray-600 dark:text-gray-400">
          <span className="font-medium">Go to:</span>
          <input
            type="number"
            min="1"
            max={totalPages}
            value={page}
            onChange={(e) => {
              const newPage = Math.max(
                1,
                Math.min(totalPages, Number(e.target.value))
              );
              setPage(newPage);
            }}
            className="w-16 ml-2 px-2 py-1 border rounded-md bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      )}
    </div>
  );
}
