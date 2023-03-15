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


export default config;