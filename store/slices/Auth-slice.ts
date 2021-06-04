import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "Auth",
  initialState: { userData: {}, isAuth: false, userID: "" , changed:false},
  reducers: {
    updateAuthInfo(state, action) {
      state.userData = action.payload.userData;
      state.userID = action.payload.userID
      state.isAuth = action.payload.isAuth;
      state.changed = action.payload.changed;
    },
    userInfoChanged(state){
      state.changed = true;
    }
  },
});

export const authActions = authSlice.actions;

export default authSlice;
