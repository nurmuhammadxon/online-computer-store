import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        addToFilter: (state, action) => {
            state.value.push(action.payload);
        },
        removeFromFilter: (state, action) => {
            state.value = state.value.filter(t => t.id !== action.payload);
        },
        clearAllFilters: (state) => {
            state.value = [];
        },
    }
})

export const { addToFilter, removeFromFilter, clearAllFilters } = filterSlice.actions;
export default filterSlice.reducer;
