import * as auth from "../services/authService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk(
  "user/register",
  async ({ formData, redirect }, { rejectWithValue }) => {
    try {
      const res = await auth.register(formData);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async ({ formData, redirect }, { rejectWithValue }) => {
    try {
      const res = await auth.login(formData);
      if (res.data.status == "success") {
        localStorage.setItem(
          "user",
          JSON.stringify({ token: res.data.data.accessToken })
        );

        setTimeout(() => {
          if (res.data.data.role === "admin") {
            redirect("/dashboard");
          } else {
            redirect("/");
          }
        }, 2000);
      }

      return res.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const googleLoginUser = createAsyncThunk(
  "user/googleLogin",
  async ({ formData, redirect }, { rejectWithValue }) => {
    try {
      const res = await auth.googleLogin(formData);

      if (res.data.status == "success") {
        localStorage.setItem(
          "user",
          JSON.stringify({ token: res.data.data.accessToken })
        );

        setTimeout(() => {
          if (res.data.data.role === "admin") {
            redirect("/dashboard");
          }
          redirect("/");
        }, 3000);
      }

      return res.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const resetPass = createAsyncThunk(
  "user/reset",
  async (email, { rejectWithValue }) => {
    try {
      const res = await auth.reset(email);
      return res;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    message: "",
    user: {},
    status: "",
  },
  reducers: {
    clearState: (state, action) => {
      return {
        ...state,
        loading: false,
        message: "",
        status: "",
      };
    },
    logout: (state, action) => {
      localStorage.removeItem("user");
      return {
        ...state,
        user: null,
        loading: false,
        message: "Logout Success",
        status: "",
      };
    },
  },
  extraReducers: {
    //register
    [registerUser.pending]: (state, action) => {
      return { ...state, loading: true, message: "Processing your action..." };
    },
    [registerUser.fulfilled]: (state, action) => {
      return {
        loading: false,
        message: action.payload.message,
        user: action.payload.data,
        status: action.payload.status,
      };
    },
    [registerUser.rejected]: (state, action) => {
      return {
        loading: false,
        message: action.payload?.data.message,
        user: {},
        status: "error",
      };
    },
    //login
    [loginUser.pending]: (state, action) => {
      return { ...state, loading: true, message: "Processing your action..." };
    },
    [loginUser.fulfilled]: (state, action) => {
      return {
        loading: false,
        message: action.payload?.message,
        user: action.payload?.data,
        status: action.payload?.status,
      };
    },
    [loginUser.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        message: action.payload?.data.message,
        status: "error",
      };
    },
    //google login
    [googleLoginUser.pending]: (state, action) => {
      return { ...state, loading: true, message: "Processing your action..." };
    },
    [googleLoginUser.fulfilled]: (state, action) => {
      return {
        loading: false,
        message: action.payload?.message,
        user: action.payload?.data,
        status: action.payload?.status,
      };
    },
    [googleLoginUser.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        message: action.payload?.data.message,
        status: "error",
      };
    },
    //reset pass
    [resetPass.pending]: (state, action) => {
      return { ...state, loading: true, message: "Processing your action..." };
    },
    [resetPass.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        message: action.payload?.data.message,
        status: action.payload.data.status,
      };
    },
    [resetPass.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        message: action.payload?.data.message,
        status: "error",
      };
    },
  },
});

export const { clearState, logout } = authSlice.actions;

export default authSlice.reducer;
