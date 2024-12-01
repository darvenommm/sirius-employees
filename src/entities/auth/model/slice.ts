import { createSlice } from '@reduxjs/toolkit';

import { PayloadAction } from '@reduxjs/toolkit';

export type AuthStorage = {
  accessToken: string;
  refreshToken: string;
};

const initialState: AuthStorage = {
  accessToken: '',
  refreshToken: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addTokens: (store, action: PayloadAction<AuthStorage>): void => {
      const { accessToken, refreshToken } = action.payload;

      store.accessToken = accessToken;
      store.refreshToken = refreshToken;
    },
  },
});

export const { addTokens } = authSlice.actions;
export const authReducer = authSlice.reducer;
