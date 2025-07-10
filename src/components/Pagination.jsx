import { useSearchParams } from 'react-router-dom'

const Pagination = ({ pagination, currentPage }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const name = searchParams.get('name') || ''
  const status = searchParams.get('status') || ''

  const handlePageChange = (page) => {
    setSearchParams({ name, status, page })
  }

  if (!pagination) return null

  return (
    <div className="flex justify-center mt-8 space-x-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={!pagination.prev}
        className={`px-4 py-2 rounded-md ${
          !pagination.prev
            ? 'bg-gray-200 cursor-not-allowed'
            : 'bg-green-500 hover:bg-green-600 text-white'
        }`}
      >
        Previous
      </button>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={!pagination.next}
        className={`px-4 py-2 rounded-md ${
          !pagination.next
            ? 'bg-gray-200 cursor-not-allowed'
            : 'bg-green-500 hover:bg-green-600 text-white'
        }`}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination