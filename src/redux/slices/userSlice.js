import * as user from "../services/userServices";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const retriveUsers = createAsyncThunk(
  "users/retrive",
  async (page, { rejectWithValue }) => {
    try {
      const res = await user.retrive(page);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const userSlice = createSlice({
  name: user,
  initialState: {
    loading: false,
    status: "",
    userById: {},
    message: "",
    users: [],
    totalPages: 0,
    currentPage: 0,
  },
  reducers: {},
  extraReducers: {
    [retriveUsers.pending]: (state, action) => {
      return { ...state, loading: true };
    },
    [retriveUsers.fulfilled]: (state, action) => {
      console.info({users : action.payload.data});
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        users: action.payload.data.users,
        status: action.payload.status,
        totalPages: action.payload.data.totalPages,
        currentPage: action.payload.data.currentPage,
      };
    },
    [retriveUsers.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        users: action.payload.data.data.users,
        status: action.payload.data.status,
      };
    },
  },
});

export default userSlice.reducer;
