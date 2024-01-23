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
    // Assuming removeFromCart removes all items from the cart
    setCartItems([]); // Reset the cart
  };

  const calculateTotalCost = () => {
    return updatedCart.reduce((total, product) => {
      const productQuantity = product.quantity || 1;
      return total + product.price * productQuantity;
    }, 0);
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
      <div className="checkout-section">
        <button className="checkout-button" onClick={handleCheckout}>
          Checkout
        </button>
        <p className="total-cost">
          Total Cost: ${calculateTotalCost().toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Cart;
