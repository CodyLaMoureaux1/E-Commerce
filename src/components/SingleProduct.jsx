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
    <div className="product-card">
      {productDetails ? (
        <>
          <img src={productDetails.image} alt={productDetails.title} />
          <div className="product-details">
            <h3>{productDetails.title}</h3>
            <p>${productDetails.price}</p>
            <p>{productDetails.description}</p>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleProduct;
