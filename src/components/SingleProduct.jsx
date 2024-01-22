import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

const SingleProduct = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const productData = await api.getSingleProduct(id);
        setProductDetails(productData);
      } catch (error) {
        console.error("Error fetching single product:", error);
      }
    };

    fetchProductDetails();
  }, [id]);

  return (
    <div className="center-container">
      <div className="product-card1">
        {productDetails ? (
          <>
            <img src={productDetails.image} alt={productDetails.title} />
            <div className="product-details">
              <h3>{productDetails.title}</h3>
              <p>${productDetails.price}</p>
              <p>{productDetails.description}</p>
              <p>Category: {productDetails.category}</p>
              <p>
                Rating: {productDetails.rating.rate} (
                {productDetails.rating.count} reviews)
              </p>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
