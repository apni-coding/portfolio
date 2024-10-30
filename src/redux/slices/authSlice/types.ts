// interface for token
export interface Token {
  accessToken: string;
  refreshToken: string;
}
// interface for authInitial state
export interface AuthState {
  isLoading: boolean;
  error: string | null;
  token: Token;
  isUserAuthenticate: boolean;
}
// interface for otp send payload
export interface RequestOtpPayload {
  mobile_number: string;
  country_code: string;
}
// interface for otp verify payload
export interface VerifyOtpPayload {
  mobile_number: string;
  otp: string;
}
