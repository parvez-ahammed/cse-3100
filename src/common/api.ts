import { Character, ApiResponse, Episode } from '../types/character';

const BASE_URL = 'https://rickandmortyapi.com/api';

export const api = {
  // Get characters with optional filters
  getCharacters: async (params: {
    page?: number;
    name?: string;
    status?: string;
  } = {}): Promise<ApiResponse> => {
    const searchParams = new URLSearchParams();
    
    if (params.page) searchParams.append('page', params.page.toString());
    if (params.name) searchParams.append('name', params.name);
    if (params.status) searchParams.append('status', params.status);
    
    const url = `${BASE_URL}/character${searchParams.toString() ? '?' + searchParams.toString() : ''}`;
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch characters');
    }
    
    return response.json();
  },

  // Get single character by ID
  getCharacter: async (id: number): Promise<Character> => {
    const response = await fetch(`${BASE_URL}/character/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch character');
    }
    
    return response.json();
  },

  // Get episode details
  getEpisode: async (id: number): Promise<Episode> => {
    const response = await fetch(`${BASE_URL}/episode/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch episode');
    }
    
    return response.json();
  },

  // Get multiple episodes
  getEpisodes: async (ids: number[]): Promise<Episode[]> => {
    if (ids.length === 0) return [];
    
    const response = await fetch(`${BASE_URL}/episode/${ids.join(',')}`);
    if (!response.ok) {
      throw new Error('Failed to fetch episodes');
    }
    
    const data = await response.json();
    return Array.isArray(data) ? data : [data];
  }
};