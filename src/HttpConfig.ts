import axios from "axios";

/**
 * Заготовка под api
 *
 * @type {axios.AxiosInstance}
 */
const locale = localStorage.getItem('locale')
const config = axios.create({
  baseURL: '/',
  headers: {
    'Content-Type': 'application/json',
    'Accept-Languages': locale,
  },
});

export const httpRoute = {
  news: '/api/news',
  characters: '/api/characters/stats',
  tables: '/tables'
}

export default config;