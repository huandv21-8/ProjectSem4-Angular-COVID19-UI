export interface CheckEmailResetpassword {
  email: string;
}


export interface OtpEmail {
  otp: string;
}


export interface ChangePasswordRequest {
  email: string;
  password: string;
  checkPassword: string;
}
