import axios from 'axios';
import { API_HOST, API_PUBLIC_KEY, API_PRIVATE_KEY } from '../config';
import md5 from 'md5';

export const authorizationQuery = () => {
  const timestamp = Date.now();

  return `apikey=${API_PUBLIC_KEY}&ts=${timestamp}&hash=${md5(timestamp + API_PRIVATE_KEY + API_PUBLIC_KEY)}`;
}

const api = axios.create({
  baseURL: API_HOST,
});

export default api;
