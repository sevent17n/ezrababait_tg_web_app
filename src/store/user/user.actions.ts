import { createAsyncThunk } from '@reduxjs/toolkit';

import { IAuthResponse, IEmailPassword } from '@/store/user/user.interface';
import { errorCatch } from '@/shared/helpers/api.helper';
import { AuthService } from '@/shared/services/auth/auth.service';

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
  'auth/login',
  async ({ emailOrLogin, password }, thunkAPI) => {
    try {
      const response = await AuthService.login(emailOrLogin, password);
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
