import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    showCart: false,
  },
  reducers: {
    openCart(state) {
      state.showCart = true;
    },

    closeCart(state) {
      state.showCart = false;
    },

    clearCart(state) {
      state.cart = [];

      localStorage.setItem("e-cart", JSON.stringify(state.cart));
    },

    addToCart(state, action) {
      const newItem = action.payload;

      const existingItem = state.cart.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.cart.unshift(newItem);
      } else {
        existingItem.qty++;
      }

      toast.success(`${newItem.qty} ${newItem.name} added to the cart.`);
    },

    removeFromCart(state, action) {
      const id = action.payload;

      const existingItem = state.cart.find((item) => item.id === id);

      if (existingItem) {
        if (existingItem.qty === 1) {
          state.cart = state.cart.filter((item) => item.id !== id);
        } else {
          existingItem.qty--;
        }
      }

      toast.success(`${existingItem.name} removed to the cart.`);
    },

    deleteCartitem(state, action) {
      const id = action.payload;

      const existingItem = state.cart.find((item) => item.id === id);

      if (existingItem) {
        state.cart = state.cart.filter((item) => item.id !== id);
      }

      toast.success(`${existingItem.name} removed to the cart.`);
    },
  },
});

export const totalAmount = (state) =>
  state.cart.cart.reduce((total, item) => total + item.price * item.qty, 0);

export default CartSlice;
