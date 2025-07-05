// Rick and Morty API service
// TODO: Maybe add caching later if we hit rate limits
const BASE_URL = 'https://rickandmortyapi.com/api';

export const api = {
  // Fetch characters with optional filters - this was tricky to get right!
  getCharacters: async (page = 1, name = '', status = '') => {
    try {
      const params = new URLSearchParams();

      // Only add params if they have values
      if (page) params.append('page', page);
      if (name) params.append('name', name);
      if (status) params.append('status', status);

      const response = await fetch(`${BASE_URL}/character?${params}`);

      // API returns 404 when no results found, which is... interesting
      if (!response.ok) {
        throw new Error(`Failed to fetch characters: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching characters:', error);
      throw error;
    }
  },

  // Get individual character details
  getCharacter: async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/character/${id}`);
      if (!response.ok) {
        throw new Error(`Character not found: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching character:', error);
      throw error;
    }
  },

  // Fetch episode details - batch request for better performance
  getEpisodes: async (episodeIds) => {
    try {
      if (!episodeIds || episodeIds.length === 0) return [];

      const ids = episodeIds.join(',');
      const response = await fetch(`${BASE_URL}/episode/${ids}`);

      if (!response.ok) {
        throw new Error(`Episodes not found: ${response.status}`);
      }

      const data = await response.json();
      // API returns single object for one episode, array for multiple
      return Array.isArray(data) ? data : [data];
    } catch (error) {
      console.error('Error fetching episodes:', error);
      throw error;
    }
  }
};

// Helper to extract episode IDs from URLs
// The API gives us full URLs but we just need the IDs
export const extractEpisodeIds = (episodeUrls) => {
  return episodeUrls.map(url => url.split('/').pop());
};
