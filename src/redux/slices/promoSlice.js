import * as promo from '../services/promoServices'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const retrivePromos = createAsyncThunk(
    'promos/retrive',
    async (page, { rejectWithValue }) => {
        try {
            const res = await promo.retrive(page)
            return res.data
        } catch (error) {
            return rejectWithValue(error.response)
        }
    }
)
export const retrivePromosAdmin = createAsyncThunk(
    'promosAdmin/retriveAdmin',
    async (page, { rejectWithValue }) => {
        try {
            const res = await promo.retriveAdmin(page)
            return res.data
        } catch (error) {
            return rejectWithValue(error.response)
        }
    }
)

export const retrivePromo = createAsyncThunk(
    'promo/retrive',
    async (id, { rejectWithValue }) => {
        try {
            const res = await promo.retriveById(id)
            return res.data
        } catch (error) {
            return rejectWithValue(error.response)
        }
    }
)

export const removePromo = createAsyncThunk(
    'promo/remove',
    async (id, { rejectWithValue }) => {
        try {
            const res = await promo.remove(id)
            return res.data
        } catch (error) {
            return rejectWithValue(error.response)
        }
    }
)

export const updatePromo = createAsyncThunk(
    'promo/update',
    async ({ id, formData, redirect }, { rejectWithValue }) => {
        try {
            const res = await promo.update(id, formData)
            redirect('/dashboard/promos')
            return res.data
        } catch (error) {
            return rejectWithValue(error.response)
        }
    }
)

export const createPromo = createAsyncThunk(
    'promo/create',
    async ({ formData, redirect }, { rejectWithValue }) => {
        try {
            const res = await promo.create(formData)
            redirect('/dashboard/promos')
            return res.data
        } catch (error) {
            return rejectWithValue(error.response)
        }
    }
)

const promoSlice = createSlice({
    name: 'promo',
    initialState: {
        loading: false,
        status: '',
        promoById: {},
        message: '',
        promos: [],
        totalPages: 0,
        currentPage: 0,
        totalItems: 0,
    },
    reducers: {
        deletePromo: (state, action) => {
            return {
                ...state,
                promos: state.promos.filter(
                    (promo) => promo.id !== action.payload
                ),
                message: 'promo deleted',
            }
        },
    },
    extraReducers: {
        [retrivePromos.pending]: (state, action) => {
            return { ...state, loading: true }
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
                totalItems: action.payload.data.totalItems,
            }
        },
        [retrivePromos.rejected]: (state, action) => {
            return {
                ...state,
                loading: false,
                promos: action.payload.data.data,
                status: action.payload.data.status,
            }
        },
        [retrivePromosAdmin.pending]: (state, action) => {
            return { ...state, loading: true }
        },
        [retrivePromosAdmin.fulfilled]: (state, action) => {
            return {
                ...state,
                loading: false,
                message: action.payload.message,
                promos: action.payload.data.promos,
                status: action.payload.status,
                totalPages: action.payload.data.totalPages,
                currentPage: action.payload.data.currentPage,
            }
        },
        [retrivePromosAdmin.rejected]: (state, action) => {
            return {
                ...state,
                loading: false,
                promos: action.payload.data.data.promos,
                status: action.payload.data.status,
            }
        },
        [removePromo.pending]: (state, action) => {
            return { ...state, loading: true }
        },
        [removePromo.fulfilled]: (state, action) => {
            return {
                ...state,
                loading: false,
                status: action.payload.status,
            }
        },
        [removePromo.rejected]: (state, action) => {
            return {
                ...state,
                loading: false,
                status: action.payload.data.status,
            }
        },
        [updatePromo.pending]: (state, action) => {
            return { ...state, loading: true }
        },
        [updatePromo.fulfilled]: (state, action) => {
            return {
                ...state,
                loading: false,
                status: action.payload.status,
            }
        },
        [updatePromo.rejected]: (state, action) => {
            return {
                ...state,
                loading: false,
                status: action.payload.data.status,
            }
        },
        [retrivePromo.pending]: (state, action) => {
            return { ...state, loading: true }
        },
        [retrivePromo.fulfilled]: (state, action) => {
            return {
                ...state,
                loading: false,
                message: action.payload.message,
                promoById: action.payload.data,
                status: action.payload.status,
            }
        },
        [retrivePromo.rejected]: (state, action) => {
            return {
                ...state,
                loading: false,
                promoById: action.payload.data.data,
                status: action.payload.data.status,
            }
        },
        [createPromo.pending]: (state, action) => {
            return {
                ...state,
                loading: true,
            }
        },
        [createPromo.fulfilled]: (state, action) => {
            return {
                ...state,
                loading: false,
                message: action.payload.message,
                status: action.payload.status,
                promos: [...state.promos, action.payload.data],
            }
        },
        [createPromo.rejected]: (state, action) => {
            return {
                ...state,
                loading: false,
                status: action.payload.data.status,
                message: action.payload.data.message,
            }
        },
    },
})

export const { deletePromo } = promoSlice.actions

export default promoSlice.reducer
