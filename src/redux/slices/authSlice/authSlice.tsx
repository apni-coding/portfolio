import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { POST } from "@/services/axiosRequestHandler";
import { AuthState, RequestOtpPayload, VerifyOtpPayload } from "./types";
import { ERROR_MESSAGE } from "@/utils/propertyResolver";
import { AUTH_API } from "@/utils/apiEndPoint";

// Define initial state
const initialState: AuthState = {
  isLoading: false,
  error: null,
  token: {
    accessToken: "",
    refreshToken: "",
  },
  isUserAuthenticate: false,
};

// Async thunk to request OTP
export const requestOtp = createAsyncThunk(
  "auth/requestOtp",
  async (payload: RequestOtpPayload, { rejectWithValue }) => {
    try {
      const response: any = await POST(AUTH_API.REQUEST_OTP, payload);
      if (response?.status === 200) {
        return response?.response?.data;
      } else {
        return rejectWithValue(ERROR_MESSAGE.SOMETHING_WENT_WRONG);
      }
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || ERROR_MESSAGE.SOMETHING_WENT_WRONG
      );
    }
  }
);

// Async thunk to verify OTP
export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async (payload: VerifyOtpPayload, { rejectWithValue }) => {
    try {
      const response: any = await POST(AUTH_API.VERIFY_OTP, payload);
      if (response?.status === 200) {
        // set token in local storage
        localStorage.setItem(
          "accessToken",
          response?.response?.data?.data?.accessToken
        );
        localStorage.setItem(
          "refreshToken",
          response?.response?.data?.data?.refreshToken
        );

        return response?.response?.data;
      } else {
        return rejectWithValue(ERROR_MESSAGE.SOMETHING_WENT_WRONG);
      }
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || ERROR_MESSAGE.SOMETHING_WENT_WRONG
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      // requestOtp cases
      .addCase(requestOtp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(requestOtp.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(requestOtp.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // verifyOtp cases
      .addCase(verifyOtp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        verifyOtp.fulfilled,
        (
          state,
          action: PayloadAction<{ accessToken: string; refreshToken: string }>
        ) => {
          state.isLoading = false;
          state.token = action.payload;
          state.isUserAuthenticate = true;
          state.error = null;
        }
      )
      .addCase(verifyOtp.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isUserAuthenticate = false;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
