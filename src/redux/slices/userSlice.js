import * as user from "../services/userServices";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const retriveUsers = createAsyncThunk(
  "users/retrive",
  async (page, { rejectWithValue }) => {
    try {
      const res = await user.retrive(page);
      console.info(res);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const retriveUser = createAsyncThunk(
  "users/retriveById",
  async (id, { rejectWithValue }) => {
    try {
      const res = await user.retriveById(id);
      console.info(res);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const removeUsers = createAsyncThunk(
  "users/remove",
  async (id, { rejectWithValue }) => {
    try {
      const res = await user.remove(id);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const createUsers = createAsyncThunk(
  "users/create",
  async ({ formData, redirect }, { rejectWithValue }) => {
    try {
      const res = await user.create(formData);
      redirect("/dashboard/users");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const updateUsers = createAsyncThunk(
  "users/update",
  async ({ formData, id, redirect }, { rejectWithValue }) => {
    try {
      console.info({formData})
      const res = await user.update(formData, id);
      redirect("/dashboard/users");
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
    message: "",
    users: [],
    user: {},
    totalPages: 0,
    currentPage: 0,
    totalItems: 0,
  },

  extraReducers: {
    [retriveUsers.pending]: (state, action) => {
      return { ...state, loading: true };
    },
    [retriveUsers.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        users: action.payload.data.users,
        status: action.payload.status,
        totalItems: action.payload.data.totalItems,
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
    [retriveUser.pending]: (state, action) => {
      return { ...state, loading: true };
    },
    [retriveUser.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        user: action.payload.data,
        status: action.payload.status,
      };
    },
    [retriveUser.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        user: action.payload.data.data,
        status: action.payload.data.status,
      };
    },
    [removeUsers.pending]: (state, action) => {
      return { ...state, loading: true };
    },
    [removeUsers.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        users: state.users.filter((user) => user.id !== action.payload.data),
        status: action.payload.status,
      };
    },
    [removeUsers.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        status: action.payload.data.status,
      };
    },
    [createUsers.pending]: (state, action) => {
      return { ...state, loading: true };
    },
    [createUsers.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        users: [...state.users, action.payload.data],
        status: action.payload.status,
      };
    },
    [createUsers.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        status: action.payload.data.status,
      };
    },
    [updateUsers.pending]: (state, action) => {
      return { ...state, loading: true };
    },
    [updateUsers.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        users: state.users.map((user) =>
          user.id === action.payload.data.id ? action.payload.data : user
        ),
        status: action.payload.status,
      };
    },
    [updateUsers.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        status: action.payload.data.status,
      };
    },
  },
});

export default userSlice.reducer;
