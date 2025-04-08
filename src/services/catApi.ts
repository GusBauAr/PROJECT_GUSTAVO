// src/services/catApi.ts
import { CatImage } from '../types/Cat';
const API_URL = 'https://api.thecatapi.com/v1/images/search';
const API_KEY = 'live_LL32v5fsVv1g2FgSt4FjJgjRjTdYDFYiHyYakArGDwB2jiPB9Le5ZUpqVU4jG0M2';

export const fetchCatImages = async (limit = 60): Promise<CatImage[]> => {
  const response = await fetch(`${API_URL}?limit=${limit}`, {
    headers: {
      'x-api-key': API_KEY,
    },
  });
  if (!response.ok) {
    throw new Error('Error de imagen de gato');
  }

  const data: CatImage[] = await response.json();
  return data;
};
