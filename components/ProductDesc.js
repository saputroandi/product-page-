import React from "react";

function ProductDesc() {
  return (
    <main className="product container">
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
            Featuring a durable rubber outer sole, they&apos;ll withstand everything
            the weather can offer.
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
          <button className="button-dec">-</button>
          <p className="qty">0</p>
          <button className="button-inc">+</button>
        </div>
        <div className="product-add-cart">button</div>
      </div>
    </main>
  );
}

export default ProductDesc;
