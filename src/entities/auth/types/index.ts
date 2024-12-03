export interface LoginDTO {
  readonly username: string;
  readonly password: string;
}

export interface LoginResult {
  readonly accessToken: string;
  readonly refreshToken: string;
}

export interface Profile {
  readonly firstName: string;
  readonly lastName: string;
  readonly username: string;
  readonly email: string;
  readonly image: string;
}
