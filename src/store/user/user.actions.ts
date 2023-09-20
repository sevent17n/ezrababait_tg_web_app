import { createAsyncThunk } from '@reduxjs/toolkit';

import { IAuthResponse } from '@/store/user/user.interface';
import { errorCatch } from '@/shared/api/api.helper';
import { AuthService } from '@/shared/api/services/auth/auth.service';
import { TelegramUser } from '@v9v/ts-react-telegram-login';

export const login = createAsyncThunk<IAuthResponse, TelegramUser>(
  'auth/login',
  async (data, thunkAPI) => {
    try {
      console.log(data);
      const response = await AuthService.login(data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  AuthService.logout();
});

export const checkAuth = createAsyncThunk<IAuthResponse>(
  'auth/check-auth',
  async (_, thunkAPI) => {
    try {
      const response = await AuthService.getNewTokens();
      return response.data;
    } catch (e) {
      if (errorCatch(e) == 'jwt expired') {
        thunkAPI.dispatch(logout());
      }
      return thunkAPI.rejectWithValue(e);
    }
  }
);
