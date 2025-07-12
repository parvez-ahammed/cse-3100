export default function Pagination({ page, setPage, totalPages }) {
  return (
    <div className="flex justify-center items-center gap-4 mt-8 mb-12">
      <button
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        disabled={page <= 1}
        className="px-4 py-2 rounded bg-indigo-500 text-white hover:bg-indigo-600 disabled:bg-gray-300 dark:disabled:bg-gray-700 disabled:cursor-not-allowed transition-all"
      >
        Previous
      </button>

      <span
        className="text-sm font-medium text-black dark:text-black
"
      >
        Page <span className="font-bold">{page}</span> of{" "}
        <span className="font-bold">{totalPages}</span>
      </span>

      <button
        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
        disabled={page >= totalPages}
        className="px-4 py-2 rounded bg-indigo-500 text-white hover:bg-indigo-600 disabled:bg-gray-300 dark:disabled:bg-gray-700 disabled:cursor-not-allowed transition-all"
      >
        Next
      </button>
    </div>
  );
}
