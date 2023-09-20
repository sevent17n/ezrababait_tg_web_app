import axios from 'axios';
import Cookies from 'js-cookie';

const accessToken = Cookies.get('accessToken');
export const AxiosAuth = axios.create({
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});
