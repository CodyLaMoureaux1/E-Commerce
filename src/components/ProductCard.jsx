import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, showDetailsButton }) => {
  const { id, title, price, image } = product;

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
        {!showDetailsButton && (
          /* Additional details hidden on homepage */
          <>
            <p>Description: {product.description}</p>
            <p>Category: {product.category}</p>
            <p>
              Rating: {product.rating.rate} ({product.rating.count} reviews)
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
