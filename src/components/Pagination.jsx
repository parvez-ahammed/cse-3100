export default function Pagination({ page, setPage, totalPages }) {
  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      <button
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        disabled={page <= 1}
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
      >
        Previous
      </button>
      <span>
        Page {page} of {totalPages}
      </span>
      <button
        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
        disabled={page >= totalPages}
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
