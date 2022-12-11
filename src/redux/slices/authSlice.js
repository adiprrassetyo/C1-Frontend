import * as auth from "../services/authService";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk(
  "user/register",
  async ({ formData, redirect }, { rejectWithValue }) => {
    try {
      const res = await auth.register(formData);

      if (res.data.status == "success") {
        setTimeout(() => {
          redirect("/auth");
        }, 3000);
      }
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
export const logoutUser = createAsyncThunk("user/logout", async (navigate) => {
  try {
    const res = await auth.logout();
    if (res.data.status == "success") {
      navigate("/");
    }
    return res.data;
  } catch (error) {
    return rejectWithValue(error.response);
  }
});

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
        loading: false,
        message: "",
        user: {},
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
        loading: false,
        message: action.payload?.data.message,
        user: {},
        status: "error",
      };
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

export const { clearState } = authSlice.actions;

export default authSlice.reducer;
