import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { POST } from "@/services/axiosRequestHandler";
import { ContactUsState, ContactUsPayload } from "./types";
import { ERROR_MESSAGE } from "@/utils/propertyResolver";
import { AUTH_API } from "@/utils/apiEndPoint";
import toast from "react-hot-toast";

// Define initial state
const initialState: ContactUsState = {
  isLoading: false,
  error: null,
  success: false,
};

// Async thunk to request OTP
export const contactUs = createAsyncThunk(
  "auth/contactUs",
  async (payload: ContactUsPayload, { rejectWithValue }) => {
    try {
      const response: any = await POST(AUTH_API.CONTACT_US, payload);
      if (response?.status === 200) {
        toast.success('Thank you! Your message has been sent.')
        return response?.response?.data;
      } else {
        return rejectWithValue(ERROR_MESSAGE.SOMETHING_WENT_WRONG);
      }
    } catch (error: any) {
      toast.error(error.response?.data || ERROR_MESSAGE.SOMETHING_WENT_WRONG)
      return rejectWithValue(
        error.response?.data || ERROR_MESSAGE.SOMETHING_WENT_WRONG
      );
    }
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    resetContactUs() {
      return initialState;
    },

  },
  extraReducers: (builder) => {
    builder
      // contactUs cases
      .addCase(contactUs.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(contactUs.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = null;
        state.success = true;
      })
      .addCase(contactUs.rejected, (state, action: PayloadAction<any>) => {
        console.log(action.payload)
        state.isLoading = false;
        state.error = action.payload;
        state.success = false;
      });
  },
});
export const { resetContactUs } = contactSlice.actions;

export default contactSlice.reducer;
