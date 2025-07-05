import React from "react";

function getPageNumbers(current, total) {
  const delta = 2;
  const range = [];
  for (let i = Math.max(2, current - delta); i <= Math.min(total - 1, current + delta); i++) {
    range.push(i);
  }
  if (current - delta > 2) range.unshift("...");
  if (current + delta < total - 1) range.push("...");
  range.unshift(1);
  if (total > 1) range.push(total);
  return range;
}

export default function Pagination({ page, totalPages, onPageChange }) {
  const pages = getPageNumbers(page, totalPages);

  return (
    <div className="flex flex-col items-center gap-2 mt-8">
      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          className={`px-6 py-3 rounded-lg font-semibold transition ${
            page === 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-blue-700 text-white hover:bg-blue-800"
          }`}
        >
          &larr; Previous
        </button>
        {pages.map((p, idx) =>
          p === "..." ? (
            <span key={idx} className="px-3 py-2 text-gray-400 font-bold">
              ...
            </span>
          ) : (
            <button
              key={p}
              onClick={() => onPageChange(p)}
              className={`px-4 py-2 rounded-lg font-semibold transition
                ${
                  p === page
                    ? "bg-purple-600 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-purple-100"
                }
              `}
              disabled={p === page}
            >
              {p}
            </button>
          )
        )}
        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
          className={`px-6 py-3 rounded-lg font-semibold transition ${
            page === totalPages
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-purple-600 text-white hover:bg-purple-700"
          }`}
        >
          Next &rarr;
        </button>
      </div>
      <div className="text-gray-500 mt-2">
        Page {page} of {totalPages}
      </div>
    </div>
  );
}