import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const Cart = ({ cartItems, removeFromCart, loggedInUser, setCartItems }) => {
  const [updatedCart, setUpdatedCart] = useState([]);

  useEffect(() => {
    setUpdatedCart(cartItems);
  }, [cartItems]);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    const updated = updatedCart.map((item) =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setUpdatedCart(updated);
  };

  const handleCheckout = () => {
    setUpdatedCart([]);
    setCartItems([]);
  };

  return (
    <div className="container1">
      <h2 className="products">Shopping Cart</h2>
      <div className="products-container">
        {updatedCart.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            inCart
            onToggleCart={() => handleRemoveFromCart(product.id)}
            loggedInUser={loggedInUser}
            removeFromCart={removeFromCart}
            updateQuantity={(newQuantity) =>
              handleUpdateQuantity(product.id, newQuantity)
            }
          />
        ))}
      </div>
      <div>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
