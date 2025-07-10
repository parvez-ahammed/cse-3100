const BASE_URL = 'https://rickandmortyapi.com/api'

export const getCharacters = async ({ page = 1, name = '', status = '' }) => {
  const params = new URLSearchParams()
  if (name) params.append('name', name)
  if (status) params.append('status', status)
  params.append('page', page)

  const response = await fetch(`${BASE_URL}/character?${params.toString()}`)
  if (!response.ok) {
    throw new Error('Failed to fetch characters')
  }
  return response.json()
}

export const getCharacter = async (id) => {
  const response = await fetch(`${BASE_URL}/character/${id}`)
  if (!response.ok) {
    throw new Error('Failed to fetch character')
  }
  return response.json()
}