import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "Auth",
  initialState: { userData: {}, isAuth: false },
  reducers: {
    updateAuthinfo(state, action) {
      state.userData = action.payload.userData;
      state.isAuth = action.payload.isAuth
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
