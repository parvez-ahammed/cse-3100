export default function PaginationControls({ info, globalPage, localPage, setSearchParams, setLocalPage }) {
  const isFirstGlobal = globalPage === 1 && localPage === 1;
  const isLastGlobal = !info?.next && localPage === 2;

  const goNext = () => {
    if (localPage === 1) {
      setLocalPage(2);
    } else {
      const newParams = new URLSearchParams({ page: globalPage + 1 });
      setSearchParams(newParams);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goPrevious = () => {
    if (localPage === 2) {
      setLocalPage(1);
    } else if (globalPage > 1) {
      const newParams = new URLSearchParams({ page: globalPage - 1 });
      setSearchParams(newParams);
      setLocalPage(2);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentPage = (globalPage - 1) * 2 + localPage;

  return (
    <div className="d-flex justify-content-between align-items-center mt-4">
      <button
        className="btn btn-outline-primary"
        onClick={goPrevious}
        disabled={isFirstGlobal}
      >
        ⬅ Previous
      </button>
      <span>Page {currentPage}</span>
      <button
        className="btn btn-outline-primary"
        onClick={goNext}
        disabled={isLastGlobal}
      >
        Next ➡
      </button>
    </div>
  );
}
