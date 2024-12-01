import { AUTH_API_URL } from '../constants';
import { Profile } from '../types';

export const getProfile = async (accessToken: string): Promise<Profile> => {
  const response = await fetch(`${AUTH_API_URL}/me`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const profile = await response.json();

  return profile;
};
