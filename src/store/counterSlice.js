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
        AllRemoveFromCart: (state) => {
            state.value = []
        }
    },
});

export const { addTOCart, removeFromCart, AllRemoveFromCart } = cartSlice.actions;
export default cartSlice.reducer;
