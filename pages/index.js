import Head from "next/head";
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
        <Head>
          <meta property="og:title" content="FrontEnd Mentor | Product Page" />
          <meta name="twitter:title" content="FrontEnd Mentor | Product Page" />

          <meta
            name="description"
            content="Challenge from FrontEnd Mentor to make product page"
          />
          <meta
            property="og:description"
            content="Challenge from FrontEnd Mentor to make product page"
          />
          <meta
            name="twitter:description"
            content="Challenge from FrontEnd Mentor to make product page"
          />

          <meta
            property="og:image"
            content="https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          />
          <meta
            name="twitter:image"
            content="https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          />

          <title>FrontEnd Mentor | Product Page</title>
        </Head>
        <Navigation />
        <MainProduct />
        {cartVisible && <Cart />}
      </CartVisibleContext.Provider>
    </CartProvider>
  );
}
