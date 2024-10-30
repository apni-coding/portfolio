import { combineReducers } from "@reduxjs/toolkit";
import authReducer, { logout } from "./slices/authSlice/authSlice";

const appReducer = combineReducers({
  auth: authReducer,
});

// Root reducer that resets the state on logout
const rootReducer = (state: any, action: any) => {
  if (action.type === logout().type) {
    // Clear the entire state
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
