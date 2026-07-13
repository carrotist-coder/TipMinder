import { createSlice } from '@reduxjs/toolkit';
import { USER_DEFAULT_IS_AUTH } from '@entities/user/model/config';

const userSlice = createSlice({
  name: 'user',
  initialState: { isAuth: USER_DEFAULT_IS_AUTH },
  reducers: {
    login: (state) => {
      state.isAuth = true;
    },
    logout: (state) => {
      state.isAuth = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export const userReducer = userSlice.reducer;
