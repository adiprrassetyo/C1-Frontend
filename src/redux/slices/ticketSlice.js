import * as ticket from "../services/ticketServices";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const retriveTickets = createAsyncThunk(
  "ticket/retive",
  async ({ params, redirect }, { rejectWithValue }) => {
    try {
      const res = await ticket.retrive(params);
      if (res.data.message == "success") {
        setTimeout(() => {
          redirect("/flight/search");
        }, 3000);
      }
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const ticketSlice = createSlice({
  name: "ticket",
  initialState: {
    loading: false,
    status: "",
    ticket: [],
  },
  reduceers: {},
  extraReducers: {
    [retriveTickets.pending]: (state, action) => {
      return { ...state, loading: true };
    },
    [retriveTickets.fullfilled]: (state, action) => {
      return {
        loading: false,
        ticket: action.payload.data,
        status: action.payload.message,
      };
    },
    [retriveTickets.rejected]: (state, action) => {
      return {
        loading: false,
        ticket: action.payload.data,
        status: action.payload.message,
      };
    },
  },
});

export default ticketSlice.reducer;
