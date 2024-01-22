import React from "react";
import ProductCard from "./ProductCard";

const Cart = ({ cartItems, removeFromCart, loggedInUser }) => {
  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div className="container1">
      <h2 className="products">Shopping Cart</h2>
      <div className="products-container">
        {cartItems.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            inCart
            onToggleCart={() => handleRemoveFromCart(product.id)}
            loggedInUser={loggedInUser}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
      <div>
        {/* Add Checkout button with appropriate logic */}
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
