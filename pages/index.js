// import Head from 'next/head'

import { useState } from "react";
import Cart from "../components/Cart";
import MainProduct from "../components/MainProduct";
import Navigation from "../components/Navigation";

import { CartProvider, CartVisibleContext } from "../context/CartContext";

export default function Home() {
  const [cartVisible, setCartVisible] = useState(false);

  return (
    <CartProvider>
      <CartVisibleContext.Provider value={{ cartVisible, setCartVisible }}>
        <div>
          <Navigation />
          <MainProduct />
          {cartVisible && <Cart />}
        </div>
      </CartVisibleContext.Provider>
    </CartProvider>
  );
}
