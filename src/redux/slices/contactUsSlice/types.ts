
// interface for authInitial state
export interface ContactUsState {
  isLoading: boolean;
  error: string | null;
  success: boolean
}
// interface for otp send payload
export interface ContactUsPayload {
  name: string,
  email: string,
  phone: string,
  comment: string,
  address: string
}

