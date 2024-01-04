import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api";
import ProductCard from "./ProductCard";

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
    <div className="single-product-modal">
      {productDetails ? (
        <ProductCard
          product={{
            id: productDetails.id,
            title: productDetails.title,
            price: productDetails.price,
            description: productDetails.description,
            category: productDetails.category,
            image: productDetails.image,
            rating: productDetails.rating,
          }}
          showDetailsButton={false}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleProduct;
