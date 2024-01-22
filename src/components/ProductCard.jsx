// ProductCard.jsx

import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({
  product,
  showDetailsButton,
  inCart,
  onToggleCart,
  loggedInUser,
}) => {
  const { id, title, price, image, description, category, rating } = product;

  return (
    <div className="product-card" key={id}>
      <img src={image} alt={title} />
      <div className="product-details">
        <h3>{title}</h3>
        <p>${price}</p>
        {showDetailsButton && (
          <Link to={`/product/${id}`}>
            <button>See Details</button>
          </Link>
        )}
        {loggedInUser && (
          <button onClick={() => onToggleCart(product)}>
            {inCart ? "Remove from Cart" : "Add to Cart"}
          </button>
        )}
        {!showDetailsButton && !onToggleCart && (
          <>
            <p>Description: {description}</p>
            <p>Category: {category}</p>
            <p>
              Rating: {rating.rate} ({rating.count} reviews)
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
