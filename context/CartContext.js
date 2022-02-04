import React, { createContext, useContext, useState } from "react";

export const CartVisibleContext = createContext({
  cartVisible: false,
  setCartVisible: () => {},
});

export function useOpenCart() {
  return useContext(CartVisibleContext);
}

// const initialCart = {
//   name: "",
//   qty: 0,
//   price: 0,
// };

// export const CartContext = createContext({
//   cart: initialCart,
//   setCart: () => {},
// });

// export function useCart() {
//   return useContext(CartContext);
// }

// export function CartProvider(props) {
//   const [cart, setCart] = useState(initialCart);

//   return (
//     <CartContext.Provider value={(cart, setCart)}>
//       {props.children}
//     </CartContext.Provider>
//   );
// }
