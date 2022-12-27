import * as trans from "../services/transactionServices";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const retriveTransAdmin = createAsyncThunk(
  "transAdmin/retriveAdmin",
  async (page, { rejectWithValue }) => {
    try {
      const res = await trans.retriveAdmin(page);
      console.log({ trans: res });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const transSlice = createSlice({
  name: "transaction",
  initialState: {
    loading: false,
    status: "",
    transactionById: {},
    message: "",
    transactions: [],
    totalPages: 0,
    currentPage: 0,
  },
  reducers: {},
  extraReducers: {
    [retriveTransAdmin.pending]: (state, action) => {
      return { ...state, loading: true };
    },
    [retriveTransAdmin.fulfilled]: (state, action) => {
      console.info(action.payload);
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        transactions: action.payload.data.transactions,
        status: action.payload.status,
        totalPages: action.payload.data.totalPages,
        currentPage: action.payload.data.currentPage,
      };
    },
    [retriveTransAdmin.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        transactions: action.payload.data.data.transactions,
        status: action.payload.data.status,
      };
    },
  },
});

export default transSlice.reducer;
