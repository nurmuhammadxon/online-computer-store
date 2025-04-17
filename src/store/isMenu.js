import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isMenuType: true
}
const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        toggleMenuType: (state) => {
            state.isMenuType = !state.isMenuType;
        }
    }
})

export const { toggleMenuType } = menuSlice.actions;
export default menuSlice.reducer;
