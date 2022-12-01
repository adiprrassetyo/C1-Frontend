import * as auth from "../services/authService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk("user/register", async (user, navigate) => {
  navigate('')
  try {
    const res = await auth.register(user);
    if(res.data.status == "success"){
      navigate('/auth')
    }
    return res.data;
  } catch (error) {
    console.error(error);
  }
});
export const loginUser = createAsyncThunk("user/login", async (user, navigate) => {
  try {
    const res = await auth.login(user);
    if(res.data.status == "success"){
      navigate('/')
    }
    return res.data;
  } catch (error) {
    console.error(error);
  }
});
export const logoutUser = createAsyncThunk("user/logout", async (navigate) => {
  try {
    const res = await auth.logout();
    if(res.data.status == "success"){
      navigate('/')
    }
    return res.data;
  } catch (error) {
    console.error(error);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    message: "",
    user: {},
  },
  reducers: {},
  extraReducers: {
    //register
    [registerUser.pending]: (state, action) => {
      return { ...state, loading: true };
    },
    [registerUser.fulfilled]: (state, action) => {
      return {
        loading: false,
        message: action.payload.message,
        user: action.payload.data,
      };
    },
    [registerUser.rejected]: (state, action) => {
      return { ...state, loading: false };
    },
    //login
    [loginUser.pending]: (state, action) => {
      return { ...state, loading: true };
    },
    [loginUser.fulfilled]: (state, action) => {
      localStorage.setItem(
        "user",
        JSON.stringify({ token: action.payload.data.accessToken })
      );
      return {
        loading: false,
        message: action.payload.message,
        user: action.payload.data,
      };
    },
    [loginUser.rejected]: (state, action) => {
      return { ...state, loading: false };
    },
    //logout
    [logoutUser.pending]: (state, action) => {
      return { ...state, loading: true };
    },
    [logoutUser.fulfilled]: (state, action) => {
      localStorage.removeItem("user");
      return {
        loading: false,
        message: action.payload.message,
        user: {},
      };
    },
    [logoutUser.rejected]: (state, action) => {
      return { ...state, loading: false };
    },
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
