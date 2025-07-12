import { useSearchParams } from 'react-router-dom'

const Pagination = ({ pagination, currentPage }) => {
  const [, setSearchParams] = useSearchParams()

  const handlePageChange = (page) => {
    setSearchParams({ page })
  }

  return (
    <div className="pagination-section flex justify-between items-center">
      <button
        className="btn btn-secondary"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={!pagination.prev}
      >
        ← Previous
      </button>
      <span className="page-info">Page {currentPage} of {pagination.pages || 1}</span>
      <button
        className="btn btn-secondary"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={!pagination.next}
      >
        Next →
      </button>
    </div>
  )
}

export default Pagination