// src/components/PaginationControls.jsx
export default function PaginationControls({ currentPage, goToPage }) {
  // There are 826 characters → 83 pages (10 per page)
  const maxPage = 83;

  return (
    <div className="d-flex justify-content-center my-4 gap-3">
      <button
        className="btn btn-primary"
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ⬅ Previous
      </button>

      <span className="align-self-center">Page {currentPage}</span>

      <button
        className="btn btn-primary"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage >= maxPage}
      >
        Next ➡
      </button>
    </div>
  );
}
