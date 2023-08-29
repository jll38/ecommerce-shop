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
      const product = action.payload;
      state.numItems += 1;

      const index = state.items.findIndex((item) => item.id === product.id);

      if (index !== -1) {
        state.quantity[index] += 1;
      } else {
        state.items.push(product);
        state.quantity.push(1);
      }
    },

    removeItem: (state, action) => {
      const id = action.payload.id;
      const index = state.items.findIndex((item) => item.id === id);

      if (index !== -1) {
        if (state.quantity[index] > 1) {
          state.quantity[index] -= 1;
          state.numItems -= 1;
        } else {
          state.items.splice(index, 1);
          state.quantity.splice(index, 1);
          state.numItems -= 1;
        }
      }
    },
    setCart: (state, action) => {
      state.numItems = action.payload.parsedCart.length;
      state.items = action.payload.parsedCart;
      state.quantity = action.payload.parsedQuantity;
    },
    clearCart: (state) => {
      state.items = [];
      state.numItems = 0;
      state.quantity = [];
    },
  },
});

export const { addItem, removeItem, setCart, clearCart } = cart.actions;
export default cart.reducer;
