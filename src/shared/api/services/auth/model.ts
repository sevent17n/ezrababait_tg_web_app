import axios from "axios";
import Cookies from "js-cookie";

import { TelegramUser } from "@v9v/ts-react-telegram-login";
import { errorCatch } from "@/src/shared/helpers/api.helper";
import { IAuthResponse } from "@/src/app/store/user/user.interface";
import { ITokens } from "@/src/app/store/user/user.interface";

export const saveTokensStorage = (data: ITokens) => {
  Cookies.set("accessToken", data.accessToken);
  Cookies.set("refreshToken", data.refreshToken);
};

export const removeTokensStorage = () => {
  Cookies.remove("accessToken");
  Cookies.remove("refreshToken");
};
class AuthService {
  private API_URL: string = process.env.NEXT_PUBLIC_API_URL as string;
  async verify(dataCheckString: string, hash: string) {
    try {
      const { data } = await axios.post<IAuthResponse>(
        `${this.API_URL}/auth/verify?checkString=${dataCheckString}&hash=${hash}`
      );
      if (data) {
        saveTokensStorage(data);
        return data;
      }
    } catch (e) {
      errorCatch(e);
    }
  }
  async login(data: TelegramUser) {
    const response = await axios.post<IAuthResponse>(
      `${this.API_URL}/auth/telegram`,

      data
    );

    if (response.data.accessToken) {
      saveTokensStorage(response.data);
    }

    return response;
  }
  logout() {
    removeTokensStorage();
  }
  async getNewTokens() {
    const refreshToken = Cookies.get("refreshToken");
    const { data } = await axios.post<IAuthResponse>(
      `${this.API_URL}/auth/login/access-token`,
      {
        refreshToken
      }
    );

    if (data.accessToken) {
      saveTokensStorage(data);
    }

    return data;
  }
}
export const authService = new AuthService();
