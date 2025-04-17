import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addTOCart: (state, action) => {
            state.value.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.value = state.value.filter(item => item.id !== action.payload);
        },
    },
});

export const { addTOCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
