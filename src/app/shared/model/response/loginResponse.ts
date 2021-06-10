export interface LoginResponse {
  authenticationToken: string;
  refreshToken: string;
  email: string;
  username: string;
  expiresAt: Date;
}
