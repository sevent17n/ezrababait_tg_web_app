import Cookies from 'js-cookie';
import { io } from 'socket.io-client';
import { SOCKET_URL } from '@/shared/config/api.config';

const accessToken = Cookies.get('accessToken');
export const socket = io(SOCKET_URL, {
  auth: { bearer: `Bearer ${accessToken}` },
});
