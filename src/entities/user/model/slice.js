import { createSlice } from '@reduxjs/toolkit';
import {
  AUTH_STORAGE_KEY,
  getInitialAuthState,
} from '@entities/user/model/config';

const userSlice = createSlice({
  name: 'user',
  initialState: { isAuth: getInitialAuthState() },
  reducers: {
    login: (state) => {
      state.isAuth = true;
      sessionStorage.setItem(AUTH_STORAGE_KEY, 'true');
    },
    logout: (state) => {
      state.isAuth = false;
      sessionStorage.setItem(AUTH_STORAGE_KEY, 'false');
    },
  },
});

export const { login, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;
