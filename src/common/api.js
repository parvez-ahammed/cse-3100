export const API_URL = "https://rickandmortyapi.com/api";

export const ENDPOINTS = {
  CHARACTERS: `${API_URL}/character`,
  CHARACTER_BY_ID: (id) => `${API_URL}/character/${id}`,
};