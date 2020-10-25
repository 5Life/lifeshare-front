import axios from 'axios';
import { BASE_URL } from '@env';

const createHttp = () => {
  const axiosInstance = axios.create({ baseURL: BASE_URL });

  return axiosInstance;
};

export default createHttp();
