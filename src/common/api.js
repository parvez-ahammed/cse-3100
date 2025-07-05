const BASE_URL = 'https://rickandmortyapi.com/api';

export const api = {
  getCharacters: async (page = 1, name = '', status = '') => {
    try {
      const params = new URLSearchParams();
      if (page) params.append('page', page);
      if (name) params.append('name', name);
      if (status) params.append('status', status);

      const response = await fetch(`${BASE_URL}/character?${params}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching characters:', error);
      throw error;
    }
  },

  getCharacter: async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/character/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching character:', error);
      throw error;
    }
  },

  getEpisodes: async (episodeIds) => {
    try {
      if (!episodeIds || episodeIds.length === 0) return [];
      const ids = episodeIds.join(',');
      const response = await fetch(`${BASE_URL}/episode/${ids}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return Array.isArray(data) ? data : [data];
    } catch (error) {
      console.error('Error fetching episodes:', error);
      throw error;
    }
  }
};

export const extractEpisodeIds = (episodeUrls) => {
  return episodeUrls.map(url => url.split('/').pop());
};
