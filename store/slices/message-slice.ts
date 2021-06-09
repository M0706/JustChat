import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "message",
  initialState: { chatRoomID:"", isAuth: false, userID: "" ,messages: [] as any},
  reducers: {
    updateMessageInfo(state, action) {
      state.chatRoomID = action.payload.chatRoomID;
      state.userID = action.payload.userID
      state.isAuth = action.payload.isAuth;
      state.messages = [...state.messages, [action.payload.chatRoomID, action.payload.messages]]
    }
  }
});

export const messageActions = messageSlice.actions;

export default messageSlice;
