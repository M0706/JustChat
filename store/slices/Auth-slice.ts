import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "Auth",
  initialState: { userData: {} },
  reducers: {
    updateUserData(state, action) {
      state.userData = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
