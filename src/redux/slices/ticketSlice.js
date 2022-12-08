import * as ticket from "../services/ticketServices";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const retriveTickets = createAsyncThunk(
  "ticket/retive",
  async ({ params, redirect }, { rejectWithValue }) => {
    try {
      const res = await ticket.retrive(params);
      console.info(res);
      if (res.data.status == "success") {
        setTimeout(() => {
          redirect("/flight/search");
        }, 3000);
      }
      return res.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response);
    }
  }
);

const ticketSlice = createSlice({
  name: "ticket",
  initialState: {
    loading: false,
    status: "",
    message: "",
    search: {},
    ticket: [],
  },
  reduceers: {
    clearState: (state, action) => {
      return {
        loading: false,
        message: "",
        ticket: [],
        status: "",
        search: {},
      };
    },
    setSearh: (state, action) => {
      return {
        ...state,
        search: action.payload,
      };
    },
  },
  extraReducers: {
    [retriveTickets.pending]: (state, action) => {
      return { ...state, loading: true };
    },
    [retriveTickets.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        ticket: action.payload.data,
        status: action.payload.status,
      };
    },
    [retriveTickets.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        ticket: action.payload.data.data,
        status: action.payload.data.status,
      };
    },
  },
});

export default ticketSlice.reducer;
