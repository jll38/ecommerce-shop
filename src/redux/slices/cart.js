import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numItems: 0,
  items: [],
  quantity: [],
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.numItems += 1;
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.numItems -= 1;
        state.items.splice(index, 1);
      }
    },
    setCart: (state, action) => {
      state.numItems = action.payload.length;
      state.items = action.payload;
    },
    clearCart: (state) => {
      state.items = [];
      state.numItems = 0;
    },
  },
});

export const { addItem, removeItem, setCart, clearCart } = cart.actions;
export default cart.reducer;
