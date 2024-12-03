import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@shared/types/stateManager';
import { AuthStorage } from './slice';

const selectAuth = (state: RootState): AuthStorage => state.auth;

export const selectAccessToken = createSelector([selectAuth], (auth): string => auth.accessToken);

export const selectRefreshToken = createSelector([selectAuth], (auth): string => auth.refreshToken);

export const selectFullName = createSelector([selectAuth], (auth): string => auth.fullName);

export const selectIsAuthenticated = createSelector([selectAccessToken], (accessToken): boolean =>
  Boolean(accessToken),
);
