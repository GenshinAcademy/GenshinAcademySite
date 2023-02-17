import axios from "axios"

/**
 * Заготовка под api
 *
 * @type {axios.AxiosInstance}
 */
const config = axios.create({
  baseURL: 'https://api.vrising-academy.info/',
  headers: {
    'Content-Type': 'application/json',
  },
});


export default config