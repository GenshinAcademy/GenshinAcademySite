import axios from "axios";

/**
 * Заготовка под api
 *
 * @type {axios.AxiosInstance}
 */
const locale = localStorage.getItem('locale');
const config = axios.create({
  baseURL: import.meta.env.VITE_HOST_API,
  headers: {
    'Content-Type': 'application/json',
    'Accept-Languages': locale,
  },
});

export const httpRoute = {
  news: '/news/',
  characters: '/characters/stats',
  tables: '/tables/'
};

export default config;