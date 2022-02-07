import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

const initialProduct = {
  _id: null,
  name: null,
  qty: 1,
  price: 0,
};

function ProductDesc() {
  const [product, setProduct] = useState(initialProduct);
  const { cart, setCart } = useCart();

  useEffect(() => {
    const sameId = cart.find(
      (productInsideCart) => productInsideCart._id === product._id
    );

    const sameQty = cart.find(
      (productInsideCart) => productInsideCart.qty === product.qty
    );

    if (!sameId && !sameQty && product._id != null) {
      setCart([...cart, product]);
      setProduct(initialProduct);
    }
  }, [product]);

  const handleProductMinus = () => {
    if (product.qty <= 1) {
      return setProduct({ ...product, qty: 1 });
    }
    setProduct({ ...product, qty: product.qty - 1 });
  };

  const handleProductPlus = () => {
    setProduct({ ...product, qty: product.qty + 1 });
  };

  const makeId = (length) => {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const handleCart = () => {
    setProduct({
      ...product,
      _id: makeId(10),
      name: "Fall Limited Edition Sneakers",
      price: 250,
    });
  };

  return (
    <section className="product">
      <div className="product-header">
        <div className="product-seller">
          <p>SNEAKER COMPANY</p>
        </div>
        <div className="product-title">
          <p>Fall Limited Edition Sneakers</p>
        </div>
      </div>
      <div className="product-desc">
        <div className="product-details">
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they&apos;ll withstand
            everything the weather can offer.
          </p>
        </div>
        <div className="product-price">
          <div className="product-actual-price-disc">
            <p className="product-actual-price">$125.00</p>
            <p className="product-disc">50%</p>
          </div>
          <div className="product-real-price">
            <p>$250.00</p>
          </div>
        </div>
      </div>
      <div className="product-action">
        <div className="product-quantity">
          <div className="button-dec" onClick={() => handleProductMinus()}>
            -
          </div>
          <p className="qty">{product.qty}</p>
          <div className="button-inc" onClick={() => handleProductPlus()}>
            +
          </div>
        </div>
        <div className="product-add-cart" onClick={() => handleCart()}>
          <div className="fill-cart">
            <svg
              width="22"
              className="cart-icon"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#69707D"
                fillRule="nonzero"
              />
            </svg>
          </div>
          <div>
            <p>Add To Cart</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDesc;
