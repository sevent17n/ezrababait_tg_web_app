import axios from 'axios';
import Cookies from 'js-cookie';

import { IAuthResponse } from '@/store/user/user.interface';

import { errorCatch, getContentType } from '@/shared/helpers/api.helper';
import {
  removeTokensStorage,
  saveTokensStorage,
} from '@/shared/services/auth/auth.helpers';
import { API_URL } from '@/shared/config/api.config';
import { TelegramUser } from '@v9v/ts-react-telegram-login';

export const AuthService = {
  async verify(dataCheckString: string, hash: string) {
    try {
      const { data } = await axios.post(
        `${API_URL}/auth/verify?checkString=${dataCheckString}&hash=${hash}`
      );
      if (data) {
        saveTokensStorage(data);
        return data;
      }
    } catch (e) {
      errorCatch(e);
      console.log(e);
    }
  },
  async login(data: TelegramUser) {
    console.log(data);
    const response = await axios.post<IAuthResponse>(
      `${API_URL}/auth/telegram`,

      data
    );

    if (response.data.accessToken) {
      saveTokensStorage(response.data);
    }

    return response;
  },
  logout() {
    removeTokensStorage();
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
      saveTokensStorage(response.data);
    }

    return response;
  },
};
