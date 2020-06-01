import axios from 'axios';
import { API_HOST } from '../config';
import md5 from 'md5';

export const authorizationQuery = () => {
  const timestamp = Date.now();
  const publicKey = process.env.REACT_APP_API_PUBLIC_KEY;
  const privateKey = process.env.REACT_APP_API_PRIVATE_KEY;
  return `apikey=${publicKey}&ts=${timestamp}&hash=${md5(timestamp + privateKey + publicKey)}`;
}

const api = axios.create({
  baseURL: API_HOST,
});

export default api;
