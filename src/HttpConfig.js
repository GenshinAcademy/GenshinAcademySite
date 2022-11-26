import axios from "axios"

/**
 * Заготовка под api
 *
 * @type {axios.AxiosInstance}
 */
const config = axios.create({
  baseURL: 'https://api.vrising-academy.info/'
});


export default config