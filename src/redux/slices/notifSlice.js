import * as notif from "../services/notifServices";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const retriveNotif = createAsyncThunk(
  "notif/retrive",
  async (_, { rejectWithValue }) => {
    try {
      const res = await notif.retrive();
      return res.data;
    } catch (error) {
      console.info(error);
      return rejectWithValue(error.response);
    }
  }
);

export const readOneNotif = createAsyncThunk(
  "notif/readOne",
  async (id, { rejectWithValue }) => {
    try {
      const res = await notif.readOne(id);
      return res.data;
    } catch (error) {
      console.info(error);
      return rejectWithValue(error.response);
    }
  }
);

export const readAllNotif = createAsyncThunk(
  "notif/readAll",
  async (_, { rejectWithValue }) => {
    try {
      const res = await notif.readAll();
      console.info(res)
      return res.data;
    } catch (error) {
      console.info(error);
      return rejectWithValue(error.response);
    }
  }
);

const notifSlice = createSlice({
  name: "notif",
  initialState: {
    loading: false,
    status: "",
    message: "",
    notif: [],
  },
  reducers: {},
  extraReducers: {
    [retriveNotif.pending]: (state, action) => {
      return { ...state, loading: true };
    },
    [retriveNotif.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        message: action.payload.msg,
        notif: action.payload.data,
        status: action.payload.status,
      };
    },
    [retriveNotif.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        notif: action.payload.data.data,
        status: action.payload.data.status,
      };
    },
    [readOneNotif.pending]: (state, action) => {
      return { ...state, loading: true };
    },
    [readOneNotif.fulfilled]: (state, action) => {
      console.info(action.payload);
      return {
        ...state,
        loading: false,
        message: action.payload.msg,
        notif: state.notif.map((n) =>
          n.id === action.payload.data[0].id ? { ...n, isRead: true } : n
        ),
        status: action.payload.status,
      };
    },
    [readOneNotif.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        status: action.payload.data.status,
      };
    },
    [readAllNotif.pending]: (state, action) => {
      return { ...state, loading: true };
    },
    [readAllNotif.fulfilled]: (state, action) => {
      console.info(action.payload);
      return {
        ...state,
        loading: false,
        message: action.payload.msg,
        notif: state.notif.map((n) => {
          return { ...n, [n.isRead]: true };
        }),
        status: action.payload.status,
      };
    },
    [readAllNotif.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        status: action.payload.data.status,
      };
    },
  },
});

export default notifSlice.reducer;
