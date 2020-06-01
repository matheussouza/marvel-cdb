import axios from 'axios';
import { API_HOST } from '../config';
import md5 from 'md5';

export const authorizationQuery = () => {
  const timestamp = Date.now();
  const publicKey = process.env.REACT_APP_API_PUBLIC_KEY || '917edf86283eda89772bac2a2540e2b9';
  const privateKey = process.env.REACT_APP_API_PRIVATE_KEY || '0d94e73cc1508813c1b2c1eedef382646d84d5ce';
  return `apikey=${publicKey}&ts=${timestamp}&hash=${md5(timestamp + privateKey + publicKey)}`;
}

const api = axios.create({
  baseURL: API_HOST,
});

export default api;
