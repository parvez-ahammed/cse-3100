import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Spinner from '../components/Spinner'

export default function CharacterDetail() {
  const { id } = useParams()
  const [character, setCharacter] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        setLoading(true)
        const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        if (!res.ok) throw new Error('Character not found')
        const data = await res.json()
        setCharacter(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchCharacter()
  }, [id])

  if (loading) return <div className="container mx-auto px-4 py-8 text-center"><Spinner /></div>
  if (error) return <div className="container mx-auto px-4 py-8 text-center alert alert-warning">{error}</div>
  if (!character) return <div className="container mx-auto px-4 py-8 text-center alert alert-warning">Character not found</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="btn btn-outline-primary mb-6">← Back to Characters</Link>
      <div className="character-detail">
        <div className="character-image">
          <img src={character.image} alt={character.name} className="card-img-top" />
        </div>
        <div className="character-info">
          <h1 className="text-3xl font-bold mb-6 text-green-700">{character.name}</h1>
          <div className="info-group">
            <h3>Basic Information</h3>
            <p><strong>Status:</strong> <span className={`status-${character.status.toLowerCase()}`}>{character.status}</span></p>
            <p><strong>Species:</strong> {character.species}</p>
            <p><strong>Gender:</strong> {character.gender}</p>
          </div>
          <div className="info-group">
            <h3>Location Details</h3>
            <p><strong>Origin:</strong> {character.origin.name}</p>
            <p><strong>Last known location:</strong> {character.location.name}</p>
          </div>
          <div className="info-group">
            <h3>Episodes</h3>
            <p><strong>Number of episodes appeared in:</strong> {character.episode.length}</p>
          </div>
        </div>
      </div>
    </div>
  )
}