import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
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
        setCharacters(data.results || [])
        setPagination(data.info || {})
        setError(null)
      } catch (err) {
        setError('No characters found with these filters')
        setCharacters([])
        setPagination({})
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
    <div className="container mx-auto px-4 py-8">
      <header className="header-section mb-12">
        <h1 className="text-4xl font-extrabold text-center text-green-700 mb-4">
          Rick & Morty Explorer
        </h1>
        <nav className="flex justify-center gap-4">
          <Link to="/about" className="btn btn-outline-primary">About</Link>
          <Link to="/contact" className="btn btn-outline-primary">Contact</Link>
        </nav>
      </header>

      <div className="controls-section mb-12">
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <SearchBar onSearch={handleSearch} initialValue={name} />
          <FilterDropdown onFilter={handleFilter} initialValue={status} />
        </div>
      </div>

      {loading ? (
        <Spinner />
      ) : error ? (
        <div className="alert alert-warning text-center py-12 text-xl font-semibold">
          {error}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {characters.map((character) => (
              <CharacterCard
                key={character.id}
                character={character}
                className="transform hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
          {pagination && (
            <div className="pagination-section mt-12 flex justify-center">
              <Pagination pagination={pagination} currentPage={Number(page)} />
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default HomePage