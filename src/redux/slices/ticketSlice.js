import * as ticket from "../services/ticketServices";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const retriveTickets = createAsyncThunk(
  "ticket/retrive",
  async ({ params, redirect }, { rejectWithValue }) => {
    console.info({ params });
    try {
      const res = await ticket.retrive(params);
      console.info({ res });
      redirect("/flight/search");
      return res.data;
    } catch (error) {
      console.info({ error });
      if (error.response) {
        console.log(error.response);
      }
      redirect("/flight/search");
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
  reducers: {
    clearState: (state, action) => {
      return {
        loading: false,
        message: "",
        ticket: [],
        status: "",
        search: {},
        totalPages: 0,
        currentPage: 0,
        totalItems: 0,
      };
    },
    setSearch: (state, action) => {
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
        ticket: action.payload.data.tickets,
        status: action.payload.status,
        totalPages: action.payload.data.totalPages,
        currentPage: action.payload.data.currentPage,
        totalItems: action.payload.data.totalItems,
      };
    },
    [retriveTickets.rejected]: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        ticket: action.payload.data.data.tickets,
        status: action.payload.data.status,
      };
    },
  },
});

export const { setSearch } = ticketSlice.actions;
export default ticketSlice.reducer;
