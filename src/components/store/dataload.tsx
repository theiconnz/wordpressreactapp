import {createSlice,  createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios";

export const initDataLoader = createAsyncThunk<any>(
    'data/fetchData',
    async () => {
        try {
            const config = {
                headers: {
                    Accept: "application/json",
                }
            };

            const response = await axios.get(
                "http://localhost:3030/api/fetchinit",
            );
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
)

export const {actions,reducer} = createSlice({
    name: 'data',
    initialState: {
        initdataload: {},
        hasError: false,
        isLoading: false,
        isLoaded: false,
    },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(initDataLoader.fulfilled, (state, {payload}) => {
            state.initdataload = payload
            state.isLoaded = true
        }),
        builder.addCase(initDataLoader.pending, (state) => {
            state.isLoading = true;
        }),
        builder.addCase(initDataLoader.rejected, (state) => {
            state.isLoading = false;
            state.hasError = true;
        })
    }
})
export default reducer;
