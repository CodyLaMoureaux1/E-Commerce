import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "../src/components/products";
import SingleProduct from "./components/SingleProduct";
import Login from "./components/Login";
import "./App.css";
import Nav from "./components/Nav";
import Cart from "./components/Cart";
import ThankYouPage from "./components/ThankYouPage"; // Import ThankYouPage

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const localUser = localStorage.getItem("loggedInUser");
    if (localUser) {
      setLoggedInUser(JSON.parse(localUser));
    }
  }, []);

  const addToCart = (product) => {
    const newCart = [...cartItems, product];
    setCartItems(newCart);
    localStorage.setItem("cartItems", JSON.stringify(newCart));
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  return (
    <Router>
      <>
        <Nav loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
        <Routes>
          <Route
            path="/"
            element={
              <Products
                addToCart={addToCart}
                loggedInUser={loggedInUser}
                cartItems={cartItems}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route
            path="/product/:id"
            element={
              <SingleProduct cartItems={cartItems} addToCart={addToCart} />
            }
          />
          <Route
            path="/login"
            element={<Login setLoggedInUser={setLoggedInUser} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                loggedInUser={loggedInUser}
                setCartItems={setCartItems} // Pass setCartItems here
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route path="/thankyou-page" element={<ThankYouPage />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
