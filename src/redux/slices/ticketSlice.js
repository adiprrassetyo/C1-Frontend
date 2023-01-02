import * as ticket from "../services/ticketServices";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const retriveTickets = createAsyncThunk(
  "ticket/retrive",
  async ({ params, redirect }, { rejectWithValue }) => {
    try {
      const res = await ticket.retrive(params);
      redirect && redirect("/flight/search");
      return res.data;
    } catch (error) {
      redirect("/flight/search");
      return rejectWithValue(error.response);
    }
  }
);

export const retriveTicket = createAsyncThunk(
  "ticket/retriveById",
  async (id, { rejectWithValue }) => {
    try {
      const res = await ticket.retriveById(id);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const createTickets = createAsyncThunk(
  "ticket/create",
  async ({ formData, redirect }, { rejectWithValue }) => {
    try {
      const res = await ticket.create(formData);
      redirect("/dashboard/tickets");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const updateTickets = createAsyncThunk(
  "ticket/update",
  async ({ formData, id, redirect }, { rejectWithValue }) => {
    try {
      const res = await ticket.update(formData, id);
      redirect("/dashboard/tickets");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const removeTickets = createAsyncThunk(
  "ticket/remove",
  async (id, { rejectWithValue }) => {
    try {
      const res = await ticket.remove(id);
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
    message: "",
    search: {},
    ticket: [],
    ticketById: {},
    totalPages: 0,
    currentPage: 1,
    totalItems: 0,
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
        ticketById: {},
      };
    },
    setSearch: (state, action) => {
      return {
        ...state,
        search: action.payload,
      };
    },
    deleteTikcet: (state, action) => {
      return {
        ...state,
        ticket: state.ticket.filter((t) => t.id != action.payload),
        message: "ticket deleted",
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
      return {
        ...state,
        loading: false,
        ticket: action.payload.data.data.tickets,
        status: action.payload.data.status,
      };
    },
    [retriveTicket.pending]: (state, action) => {
      return { ...state, loading: true };
    },
    [retriveTicket.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        ticketById: action.payload.data,
        status: action.payload.status,
      };
    },
    [retriveTicket.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        ticketById: action.payload.data.data,
        status: action.payload.data.status,
      };
    },
    [updateTickets.pending]: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    [updateTickets.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        status: action.payload.status,
      };
    },
    [updateTickets.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        status: action.payload.data.status,
        message: action.payload.data.message,
      };
    },
    [createTickets.pending]: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    [createTickets.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        status: action.payload.status,
        ticket: [...state.ticket, action.payload.data],
      };
    },
    [createTickets.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        status: action.payload.data.status,
        message: action.payload.data.message,
      };
    },
    [removeTickets.pending]: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    [removeTickets.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        status: action.payload.status,
      };
    },
    [removeTickets.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        status: action.payload.data.status,
        message: action.payload.data.message,
      };
    },
  },
});

export const { setSearch, deleteTikcet } = ticketSlice.actions;
export default ticketSlice.reducer;
