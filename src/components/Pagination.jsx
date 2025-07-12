import { useQueryParams } from '../hooks/useQueryParams';

export default function Pagination({ info }) {
  const { getQueryParam, setQueryParam } = useQueryParams();

  const currentPage = parseInt(getQueryParam('page')) || 1;
  const { pages, next, prev } = info || {};

  const handlePageChange = (page) => {
    setQueryParam('page', page.toString());
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!info || pages <= 1) return null;

  return (
    <div className="d-flex justify-content-center align-items-center my-4">
      <nav aria-label="Character pagination">
        <ul className="pagination mb-0">
          <li className={`page-item ${!prev ? 'disabled' : ''}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={!prev}
            >
              <i className="fas fa-chevron-left me-1"></i>
              Previous
            </button>
          </li>

          <li className="page-item active">
            <span className="page-link">
              Page {currentPage} of {pages}
            </span>
          </li>

          <li className={`page-item ${!next ? 'disabled' : ''}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={!next}
            >
              Next
              <i className="fas fa-chevron-right ms-1"></i>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
