export const getCharacters = async ({ page = 1, name = '', status = '' }) => {
  let url = `https://rickandmortyapi.com/api/character?page=${page}`
  if (name) url += `&name=${encodeURIComponent(name)}`
  if (status) url += `&status=${encodeURIComponent(status)}`

  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Failed to fetch characters')
  }
  return response.json()
}