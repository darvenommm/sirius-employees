import { AUTH_API_URL } from '../constants';
import { LoginDTO, LoginResult } from '../types';

export const login = async (loginDTO: LoginDTO): Promise<LoginResult> => {
  const response = await fetch(`${AUTH_API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...loginDTO, expiresInMins: 4320 }),
  });

  if (!response.ok) {
    throw Error('Login response error!');
  }

  const loginResult = await response.json();

  return loginResult;
};
