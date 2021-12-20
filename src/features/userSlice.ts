import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  AuthSliceStateType,
  LoginPayloadType
} from "features/types/userSliceType";

const initialState: AuthSliceStateType = {
  id: "",
  password: "",
  errorMessage: null,
  isLogin: false
};

export const userSlice = createSlice({
  name: "auto",
  initialState,
  reducers: {
    initLoginCheck: state => {
      const token = localStorage.getItem("token");
      if (token) {
        state.isLogin = true;
      } else {
        state.isLogin = false;
      }
    },
    logOut: state => {
      localStorage.removeItem("token");
      state.isLogin = false;
    },
    login: (state, action: PayloadAction<LoginPayloadType>) => {
      const { id, password } = action.payload;
      if (id === "alyce" && password === "alyce123") {
        state.isLogin = true;
        state.id = "";
        state.password = "";
        state.errorMessage = null;
        localStorage.setItem("token", "already-logged-account");
      } else {
        state.errorMessage = "아이디 또는 패스워드가 다릅니다!";
        state.isLogin = false;
      }
    }
  }
});

export const { initLoginCheck, logOut, login } = userSlice.actions;

export default userSlice.reducer;
