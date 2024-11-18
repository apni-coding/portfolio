import { combineReducers } from "@reduxjs/toolkit";
import authReducer, { logout } from "./slices/authSlice/authSlice";
import contactUsReducer from "./slices/contactUsSlice/contactUsSlice";


const appReducer = combineReducers({
  auth: authReducer,
  contact: contactUsReducer,

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
