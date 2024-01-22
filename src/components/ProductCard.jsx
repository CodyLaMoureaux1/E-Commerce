// ProductCard.js
import React from "react";
import { Link, useLocation } from "react-router-dom";

const ProductCard = ({ product, inCart, onToggleCart }) => {
  const { id, title, price, image } = product;
  const location = useLocation();

  const handleAddToCart = () => {
    onToggleCart(product, true);
  };

  return (
    <div className="product-card" key={id}>
      <img src={image} alt={title} />
      <div className="product-details">
        <h3>{title}</h3>
        <p>${price}</p>
        <Link to={`/product/${id}`}>
          <button>See Details</button>
        </Link>
        {location.pathname === "/" && ( // Only show on the home page
          <button onClick={handleAddToCart}>Add to Cart</button>
        )}
        {inCart &&
          location.pathname === "/cart" && ( // Show on the cart page
            <button onClick={() => onToggleCart(product, false)}>
              Remove from Cart
            </button>
          )}
      </div>
    </div>
  );
};

export default ProductCard;
