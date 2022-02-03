import React, { createContext } from "react";

export const CartContext = createContext({
  cart: [],
  setCart: () => {},
});
