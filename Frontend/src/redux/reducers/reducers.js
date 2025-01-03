import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice.js";
import profileReducer from "../slices/profileSlice.js";
import postReducer from "../slices/postSlice.js";

export const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  post: postReducer,
});
