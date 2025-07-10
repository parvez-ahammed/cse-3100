import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getCharacters } from '../services/api'
import CharacterCard from '../components/CharacterCard'
import SearchBar from '../components/SearchBar'
import FilterDropdown from '../components/FilterDropdown'
import Pagination from '../components/Pagination'
import Spinner from '../components/Spinner'

const HomePage = () => {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [pagination, setPagination] = useState({})
  const [searchParams, setSearchParams] = useSearchParams()
  const [error, setError] = useState(null)

  const page = searchParams.get('page') || 1
  const name = searchParams.get('name') || ''
  const status = searchParams.get('status') || ''

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true)
        const data = await getCharacters({ page, name, status })
        setCharacters(data.results)
        setPagination(data.info)
        setError(null)
      } catch (err) {
        setError('No characters found with these filters')
        setCharacters([])
      } finally {
        setLoading(false)
      }
    }

    fetchCharacters()
  }, [page, name, status])

  const handleSearch = (searchTerm) => {
    setSearchParams({ name: searchTerm, status, page: 1 })
  }

  const handleFilter = (filterStatus) => {
    setSearchParams({ name, status: filterStatus, page: 1 })
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <SearchBar onSearch={handleSearch} initialValue={name} />
        <FilterDropdown onFilter={handleFilter} initialValue={status} />
      </div>

      {loading ? (
        <Spinner />
      ) : error ? (
        <div className="text-center py-8 text-red-500">{error}</div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {characters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </div>
          <Pagination pagination={pagination} currentPage={Number(page)} />
        </>
      )}
    </div>
  )
}

export default HomePage