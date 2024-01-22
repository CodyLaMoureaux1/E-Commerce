// Products.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";

const Products = ({ addToCart, loggedInUser, cartItems, removeFromCart }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const productsData = response.data || [];
        setProducts(productsData);
        setFilteredProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = () => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    applyFilters(filtered);
  };

  const handleFilterByPrice = (e) => {
    const selectedPriceRange = e.target.value;
    setSelectedPriceRange(selectedPriceRange);

    const filteredByPrice = filterProductsByPrice(selectedPriceRange);
    const filteredByCategoryAndPrice = filterProductsByCategory(
      selectedCategory,
      filteredByPrice
    );

    setFilteredProducts(filteredByCategoryAndPrice);
  };

  const handleFilterByCategory = (e) => {
    const selectedCategory = e.target.value;
    setSelectedCategory(selectedCategory);

    const filteredByCategory = filterProductsByCategory(selectedCategory);
    const filteredByPriceAndCategory = filterProductsByPrice(
      selectedPriceRange,
      filteredByCategory
    );

    setFilteredProducts(filteredByPriceAndCategory);
  };

  const filterProductsByPrice = (priceRange, productsToFilter = products) => {
    if (!priceRange || priceRange === "All") {
      return productsToFilter;
    }
    switch (priceRange) {
      case "0-10":
        return productsToFilter.filter(
          (product) => product.price >= 0 && product.price <= 10
        );
      case "10.01-50":
        return productsToFilter.filter(
          (product) => product.price > 10 && product.price <= 50
        );
      case "50 and up":
        return productsToFilter.filter((product) => product.price > 50);
      default:
        return productsToFilter;
    }
  };

  const filterProductsByCategory = (category, productsToFilter = products) => {
    if (!category || category === "All") {
      return productsToFilter;
    }
    return productsToFilter.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );
  };

  const applyFilters = (filtered) => {
    setFilteredProducts(filtered);
  };

  const handleToggleCart = (product, addToCartFlag) => {
    if (loggedInUser) {
      if (addToCartFlag) {
        // Check if the item is already in the cart
        const isAlreadyInCart = cartItems.some(
          (item) => item.id === product.id
        );

        if (!isAlreadyInCart) {
          addToCart(product);
        } else {
          console.log("Item is already in the cart.");
        }
      } else {
        removeFromCart(product.id);
      }
    } else {
      console.log(
        "User is not logged in. Please log in to add items to the cart."
      );
    }
  };

  return (
    <div className="container1">
      <h2 className="products">Products</h2>
      <SearchBar
        onSearch={handleSearch}
        onFilterByPrice={handleFilterByPrice}
        onFilterByCategory={handleFilterByCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedPriceRange={selectedPriceRange}
        selectedCategory={selectedCategory}
      />
      <div className="products-container">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            inCart={cartItems.some((item) => item.id === product.id)}
            onToggleCart={(addToCartFlag) =>
              handleToggleCart(product, addToCartFlag)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
