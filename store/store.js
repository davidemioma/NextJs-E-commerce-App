import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./cart-slice";

const store = configureStore({
  reducer: { cart: CartSlice.reducer },
});

export const {
  openCart,
  closeCart,
  clearCart,
  addToCart,
  removeFromCart,
  deleteCartitem,
} = CartSlice.actions;

export default store;
