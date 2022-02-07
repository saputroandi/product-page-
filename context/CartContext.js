import React, { createContext, useContext, useState } from "react";

export const CartVisibleContext = createContext({
  cartVisible: false,
  setCartVisible: () => {},
});

export function useOpenCart() {
  return useContext(CartVisibleContext);
}

export const CartContext = createContext({
  cart: [],
  setCart: () => {},
});

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider(props) {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {props.children}
    </CartContext.Provider>
  );
}
