import axios from "axios";

/**
 * Заготовка под api
 *
 * @type {axios.AxiosInstance}
 */
const locale = localStorage.getItem('locale');
const config = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept-Language': locale,
  },
});

export const httpRoute = {
  news: '/news/',
  characters: '/characters/stats/',
  tables: '/tables/'
};

export default config;