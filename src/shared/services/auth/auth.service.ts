import axios from 'axios';
import Cookies from 'js-cookie';

import { IAuthResponse } from '@/store/user/user.interface';

import { getContentType } from '@/shared/helpers/api.helper';
import {
  removeTokensStorage,
  saveToStorage,
} from '@/shared/services/auth/auth.helpers';
import { API_URL } from '@/shared/config/api.config';

export const AuthService = {
  async register(email: string, password: string) {
    const response = await axios.post<IAuthResponse>(
      `${API_URL}/auth/register`,
      {
        email,
        password,
      }
    );

    if (response.data.accessToken) {
      saveToStorage(response.data);
    }
    return response;
  },
  async login(email: string, password: string) {
    const response = await axios.post<IAuthResponse>(`${API_URL}/auth/login`, {
      email,
      password,
    });

    if (response.data.accessToken) {
      saveToStorage(response.data);
    }

    return response;
  },
  logout() {
    removeTokensStorage();
    localStorage.removeItem('user');
  },
  async getNewTokens() {
    const refreshToken = Cookies.get('refreshToken');
    const response = await axios.post<IAuthResponse>(
      `${API_URL}/auth/login/access-token`,
      {
        refreshToken,
      },
      {
        headers: getContentType(),
      }
    );

    if (response.data.accessToken) {
      saveToStorage(response.data);
    }

    return response;
  },
};
