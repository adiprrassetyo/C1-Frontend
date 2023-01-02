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

export const retriveCurrentUser = createAsyncThunk(
  "users/retriveCurrent",
  async (_, { rejectWithValue }) => {
    try {
      const res = await user.retriveCurrent();
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
      const res = await user.update(formData, id);
      redirect("/dashboard/users");
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const updatePasswordUsers = createAsyncThunk(
  "users/updateCurrentPassword",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await user.updatePasswordCurrent(formData);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

export const updateCurrentUsers = createAsyncThunk(
  "users/updateCurrrent",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await user.updateCurrent(formData);
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
    userCurrent: {},
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
    [updatePasswordUsers.pending]: (state, action) => {
      return { ...state, loading: true };
    },
    [updatePasswordUsers.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        status: action.payload.status,
      };
    },
    [updatePasswordUsers.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        status: action.payload.data.status,
        message: action.payload.data.message,
      };
    },
    [retriveCurrentUser.pending]: (state, action) => {
      return { ...state, loading: true };
    },
    [retriveCurrentUser.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        userCurrent: action.payload.data,
        status: action.payload.status,
      };
    },
    [retriveCurrentUser.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        userCurrent: action.payload.data.data,
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
    [updateCurrentUsers.pending]: (state, action) => {
      return { ...state, loading: true };
    },
    [updateCurrentUsers.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        message: action.payload.message,
        status: action.payload.status,
      };
    },
    [updateCurrentUsers.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        status: action.payload.data.status,
      };
    },
  },
});

export default userSlice.reducer;
