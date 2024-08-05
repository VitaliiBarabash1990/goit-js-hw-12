import axios from 'axios';

const API_KEY = '43049359-de94a67b88373614faa3cefb0';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1, per_page = 15) {
  try {
    const response = await axios.get('', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page,
      },
    });
    return response.data.hits;
  } catch (error) {
    throw new Error('Failed to fetch images');
  }
}
