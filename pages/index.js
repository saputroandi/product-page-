// import Head from 'next/head'

import Cart from "../components/Cart";
import MainProduct from "../components/MainProduct";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div>
      <Navigation />
      <MainProduct />
      {/* <Cart /> */}
    </div>
  );
}
