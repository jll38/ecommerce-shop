import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numItems: 0,
    items: []
}

export const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.numItems += 1;
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.numItems -= 1;
            state.items = state.items.filter(item => item !== action.payload);
        },

    },
    
})

export const { addItem, removeItem } = cart.actions;
export default cart.reducer;

