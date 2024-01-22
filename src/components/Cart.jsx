// Cart.jsx

import React from "react";
import ProductCard from "./ProductCard";

const Cart = ({ cartItems, removeFromCart, loggedInUser }) => {
  return (
    <div className="container1">
      <h2 className="products">Shopping Cart</h2>
      <div className="products-container">
        {cartItems.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            inCart
            onToggleCart={() => removeFromCart(product.id)}
            loggedInUser={loggedInUser}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
