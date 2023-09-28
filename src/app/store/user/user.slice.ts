import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "@/src/app/store/user/user.interface";
import { checkAuth, login, logout } from "@/src/app/store/user/user.actions";

const initialState: IInitialState = {
  user: null,
  isLoading: true
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
      })
      .addCase(checkAuth.pending, (state, { payload }) => {
        state.isLoading = true;
      })
      .addCase(checkAuth.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
      });
  }
});

export const { reducer } = userSlice;
