import { useNavigate, useLocation } from "react-router-dom";

export default function Pagination({ currentPage, totalPages }) {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const changePage = (page) => {
    searchParams.set("page", page);
    navigate(`?${searchParams.toString()}`);
  };

  const pagesToShow = [];

  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      Math.abs(i - currentPage) <= 1
    ) {
      pagesToShow.push(i);
    } else if (
      (i === 2 && currentPage > 3) ||
      (i === totalPages - 1 && currentPage < totalPages - 2)
    ) {
      pagesToShow.push("...");
    }
  }

  return (
    <div className="flex justify-center items-center space-x-1 text-sm text-gray-700">
      <button
        onClick={() => changePage(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        &lt;
      </button>

      {pagesToShow.map((p, idx) =>
        p === "..." ? (
          <span key={idx} className="px-2">
            ...
          </span>
        ) : (
          <button
            key={p}
            onClick={() => changePage(p)}
            className={`px-3 py-1 border rounded ${
              currentPage === p ? "bg-black text-white" : ""
            }`}
          >
            {p}
          </button>
        )
      )}

      <button
        onClick={() => changePage(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        &gt;
      </button>
    </div>
  );
}
