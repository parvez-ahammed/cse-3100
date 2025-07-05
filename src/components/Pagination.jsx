export default function Pagination({ page, setPage, totalPages }) {
  return (
    <div className="flex items-center justify-center mt-8">
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
        className="px-4 py-2 bg-black text-white rounded-lg disabled:opacity-50"
      >
        Previous
      </button>
      <span className="mx-4 text-lg">
        Page {page} of {totalPages}
      </span>
      <button
        onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={page === totalPages}
        className="px-4 py-2 bg-black text-white rounded-lg disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}