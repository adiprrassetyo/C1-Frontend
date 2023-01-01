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

export const retriveTransUser = createAsyncThunk(
  "transUser/retriveUser",
  async (page, { rejectWithValue }) => {
    try {
      const res = await trans.retriveById(page);
      console.log({ trans: res });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const removeTrans = createAsyncThunk(
  "transAdmin/remove",
  async (id, { rejectWithValue }) => {
    try {
      const res = await trans.remove(id);
      console.log({ trans: res });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const newTrans = createAsyncThunk(
  "transUser/newTransaction",
  async ({submitForm, redirect}, { rejectWithValue }) => {
    try {
      const res = await trans.newTransaction(submitForm);
      if(res.data.status === 200){
        redirect("/payment");
        return res.data;
      }
    }
    catch(error){
      return rejectWithValue(error.response);
    }
  }
)

export const updateTrans = createAsyncThunk(
  "transUser/updateTransaction",
  async ({id, data, redirect}, { rejectWithValue }) => {
    try {
      const res = await trans.updateTransaction(data, id);
      console.log(res)
      if(res.data.status === 200){
        console.log("Success" ,res)
        redirect("/");
        return res.data;
      }
    }
    catch(error){
      return rejectWithValue(error.response);
    }
  }
)

const transSlice = createSlice({
  name: "transaction",
  initialState: {
    loading: false,
    status: "",
    transactionDetail: {},
    transactionsUser: [],
    message: "",
    transactions: [],
    totalPages: 0,
    currentPage: 0,
    totalItems: 0,
    transactionsByStatus: [],
  },
  reducers: {
    deleteTrans: (state, action) => {
      return {
        ...state,
        transactions: state.transactions.filter((t) => t.id != action.payload),
        message: "transaction deleted",
      };
    },
    filterTrans: (state, action) => {
      let data;
      if (action.payload !== "") {
        data = [
          ...state.transactionsUser.filter(
            (trans) => trans.status === action.payload
          ),
        ];
      } else {
        data = state.transactionsUser;
      }
      console.info(data)
      return {
        ...state,
        transactionsByStatus: data,
      };
    },
  },
  extraReducers: {
    [retriveTransAdmin.pending]: (state, action) => {
      return { ...state, loading: true };
    },
    [retriveTransAdmin.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        transactions: action.payload.data.transactions,
        status: action.payload.status,
        totalPages: action.payload.data.totalPages,
        totalItems: action.payload.data.totalItems,
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
    [retriveTransUser.pending]: (state, action) => {
      return { ...state, loading: true };
    },
    [retriveTransUser.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        transactionsUser: action.payload.data.transactions,
        status: action.payload.status,
        totalPages: action.payload.data.totalPages,
        totalItems: action.payload.data.totalItems,
        currentPage: action.payload.data.currentPage,
      };
    },
    [retriveTransUser.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        transactions: action.payload.data.data.transactions,
        status: action.payload.data.status,
      };
    },
    [removeTrans.pending]: (state, action) => {
      return { ...state, loading: true };
    },
    [removeTrans.fulfilled]: (state, action) => {
      console.info(action.payload);
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        status: action.payload.status,
      };
    },
    [removeTrans.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        status: action.payload.data.status,
      };
    },
    [newTrans.pending]: (state, action) => {
      return { ...state, loading: true };
    },
    [newTrans.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        message: action.payload.msg,
        status: action.payload.status,
        transactionById: action.payload.data,
      };
    },
    [newTrans.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        status: action.payload.data.status,
      };
    },
    [updateTrans.pending]: (state, action) => {
      return { ...state, loading: true };
    },
    [updateTrans.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        message: action.payload.msg,
        status: action.payload.status,
        transactionById: action.payload.data,
      };
    },
    [updateTrans.rejected]: (state, action) => {
      console.log(action)
      return {
        ...state,
        loading: false,
        message: action.payload.msg,
        status: action.payload.status,
      };
    }
  },
});

export const { deleteTrans, filterTrans } = transSlice.actions;
export default transSlice.reducer;
