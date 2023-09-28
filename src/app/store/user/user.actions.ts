import { createAsyncThunk } from "@reduxjs/toolkit";
import { errorCatch } from "@/src/shared/helpers/api.helper";
import { IAuthResponse } from "@/src/app/store/user/user.interface";
import { TelegramUser } from "@v9v/ts-react-telegram-login";
import { authService } from "@/src/shared/api/services/auth";

export const login = createAsyncThunk<IAuthResponse, TelegramUser>(
  "auth/login",
  async (data, thunkAPI) => {
    try {
      const response = await authService.login(data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  authService.logout();
});

export const checkAuth = createAsyncThunk<IAuthResponse>(
  "auth/check-auth",
  async (_, thunkAPI) => {
    try {
      return await authService.getNewTokens();
    } catch (e) {
      if (errorCatch(e) == "jwt expired") {
        thunkAPI.dispatch(logout());
      }
      return thunkAPI.rejectWithValue(e);
    }
  }
);
