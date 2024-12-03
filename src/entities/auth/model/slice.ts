import { createSlice } from '@reduxjs/toolkit';

import { PayloadAction } from '@reduxjs/toolkit';

export type AuthStorage = {
  accessToken: string;
  refreshToken: string;
  fullName: string;
};

const initialState: AuthStorage = {
  accessToken: '',
  refreshToken: '',
  fullName: ''
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addTokens: (store, action: PayloadAction<Pick<AuthStorage, 'accessToken' | 'refreshToken'>>): void => {
      const { accessToken, refreshToken } = action.payload;

      store.accessToken = accessToken;
      store.refreshToken = refreshToken;
    },
    clearTokens: (store): void => {
      store.accessToken = '';
      store.refreshToken = '';
    },
    addFullName: (store, action: PayloadAction<string>): void => {
      store.fullName = action.payload;
    },
  },
});

export const { addTokens, clearTokens, addFullName } = authSlice.actions;
export const authReducer = authSlice.reducer;
