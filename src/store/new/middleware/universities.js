import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from "../../old/actions";

export const fetchUniversities = createAsyncThunk(actionTypes.fetchUniversities, async () => {
    const response = await fetch('http://universities.hipolabs.com/search?country=Ukraine');
    const result = await response.json();

    return result.slice(0, 10);
})
