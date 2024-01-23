import React from "react";
import { Link, useLocation } from "react-router-dom";

const ProductCard = ({ product, inCart, onToggleCart, updateQuantity }) => {
  const { id, title, price, image, quantity } = product;
  const location = useLocation();

  const handleAddToCart = () => {
    onToggleCart(product, true);
  };

  const handleRemoveFromCart = () => {
    onToggleCart(product, false);
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    updateQuantity(newQuantity);
  };

  const truncateTitle = (title, maxLength) => {
    return title.length > maxLength ? title.slice(0, maxLength) + "..." : title;
  };

  return (
    <div className="product-card" key={id}>
      <img src={image} alt={title} />
      <div className="product-details">
        <h3>{truncateTitle(title, 20)}</h3>
        <p>${price}</p>
        <Link to={`/product/${id}`}>
          <button>See Details</button>
        </Link>
        {location.pathname === "/cart" && (
          <>
            <button onClick={handleRemoveFromCart}>Remove from Cart</button>
            <span>Quantity:</span>
            <select
              className="quantity-adjuster"
              value={quantity}
              onChange={handleQuantityChange}
              disabled={!inCart}
            >
              {[1, 2, 3, 4, 5].map((quantity) => (
                <option key={quantity} value={quantity}>
                  {quantity}
                </option>
              ))}
            </select>
          </>
        )}
        {!inCart && location.pathname === "/" && (
          <button onClick={handleAddToCart}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
