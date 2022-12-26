import * as promo from "../services/promoServices";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const retrivePromos = createAsyncThunk(
  "promos/retrive",
  async (page, { rejectWithValue }) => {
    try {
      const res = await promo.retrive(page);
      console.log(res);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const retrivePromo = createAsyncThunk(
  "promo/retrive",
  async (id, { rejectWithValue }) => {
    try {
      const res = await promo.retriveById(id);
      console.log({ res });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

const promoSlice = createSlice({
  name: "promo",
  initialState: {
    loading: false,
    status: "",
    promoById: {},
    message: "",
    promos: [],
    totalPages: 0,
    currentPage: 0,
  },
  reducers: {},
  extraReducers: {
    [retrivePromos.pending]: (state, action) => {
      return { ...state, loading: true };
    },
    [retrivePromos.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        promos: action.payload.data.promos,
        status: action.payload.status,
        totalPages: action.payload.data.totalPages,
        currentPage: action.payload.data.currentPage,
      };
    },
    [retrivePromos.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        promos: action.payload.data.data,
        status: action.payload.data.status,
      };
    },
    [retrivePromo.pending]: (state, action) => {
      return { ...state, loading: true };
    },
    [retrivePromo.fulfilled]: (state, action) => {
      console.log({ payload: action.payload });
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        promoById: action.payload.data,
        status: action.payload.status,
      };
    },
    [retrivePromo.rejected]: (state, action) => {
      console.log({ payload: action.payload });

      return {
        ...state,
        loading: false,
        promoById: action.payload.data.data,
        status: action.payload.data.status,
      };
    },
  },
});

export default promoSlice.reducer;
