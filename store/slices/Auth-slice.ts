import {createSlice} from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'Auth',
  initialState: {
    userData: {},
    isAuth: false,
    userID: '',
    changed: false,
    chatRooms: [],
  },
  reducers: {
    updateAuthInfo(state, action) {
      state.userData = action.payload.userData;
      state.userID = action.payload.userID;
      state.isAuth = action.payload.isAuth;
      state.changed = action.payload.changed;
    },
    userInfoChanged(state) {
      state.changed = true;
    },
    logout(state) {
      state.userData = {};
      state.isAuth = false;
      state.userID = '';
      state.changed = false;
    },
    updateChatRooms(state, action) {
      if (state.chatRooms !== action.payload) state.chatRooms = action.payload;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
