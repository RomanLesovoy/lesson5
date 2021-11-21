import { createSlice } from '@reduxjs/toolkit';
import { fetchUniversities } from "../middleware/universities";

export const universitiesSlice = createSlice({
    name: 'universities',
    initialState: {
        value: [],
        status: '',
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUniversities.fulfilled, (state, action) => {
            return { ...state, value: action.payload, status: 'success' };
        })
        .addCase(fetchUniversities.pending, (state, action) => {
            return { ...state, status: 'pending' };
        })
        .addCase(fetchUniversities.rejected, (state, action) => {
            return { ...state, status: 'rejected' };
        })
    },
})

// Action creators are generated for each case reducer function
export const { fetchAll } = universitiesSlice.actions

export default universitiesSlice.reducer

export const selectUniversities = (state) => state.universitiesReducer.value;
export const selectUniversitiesStatus = (state) => state.universitiesReducer.status;
